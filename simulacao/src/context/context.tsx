import { createContext, useState, useEffect, ReactNode, useContext, FormEvent } from "react";
import { IApp, IResponse } from "../interface/interface";
import api from "../services/api";
import { toast } from "react-toastify";

interface listProviderProps {
    children: ReactNode
}



const ContexctPages = createContext({} as IApp)

export const useSimulation = () => {
    const context = useContext(ContexctPages)
    return context
}
export const ProviderPages = ({ children }: listProviderProps) => {


    const [amount, setAmount] = useState<number>(0);
    const [installments, setInstallment] = useState<number>(0);
    const [mdr, setMdr] = useState<number>(0);
    const [simulation, setSimulation] = useState<IResponse>({} as IResponse)
    const [day, setDay] = useState<number | null | undefined>();
    const [valueSpecificDay, setValueSpecificDay] = useState<number>(0);


    
  useEffect(() => {
    const data = {
      amount: amount * 100,
      mdr,
      installments,
      days: [day],
    };
    data.days[0] &&
      api
        .post("", data)
        .then((res) => {
          const result: number = Object.values(res.data)[0] as number;
          setValueSpecificDay(result);
        })
        .catch((err) => {
          err.code === "ERR_NETWORK" && toast.info("Você está offline");
          err?.response?.status === 408 &&
            toast.info("Conexão com servidor encerrada");
          err?.response?.status === 500 && toast.error("Erro do servidor");
        });
  }, [mdr, installments, amount, setValueSpecificDay, day]);


    function registerSimulation(e: FormEvent) {

        e.preventDefault()

        const newsimulation = {
            amount: amount * 100,
            installments,
            mdr,
        };

        api
            .post('', newsimulation)
            .then((res) => {
                setSimulation(res.data);
                console.log(simulation)
            })
            .catch((err) => {

            })

    }

    return <ContexctPages.Provider value={{
        registerSimulation ,
        amount,
        installments,
        mdr,
        simulation,
        setAmount,
        setInstallment,
        setMdr,
        setSimulation,
        day,
        setDay,
        setValueSpecificDay,
        valueSpecificDay,
    }}>{children}</ContexctPages.Provider>
}

export function useSimulationContext(): IApp {
    const contexct = useContext(ContexctPages)
    return contexct
}



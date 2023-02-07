import { Form1, MainDiv } from "./styled"
import { InputNumber } from "primereact/inputnumber";
import { useSimulationContext } from "../../context/context";
import ContainerDays from "../containerDays";

export interface ISimulation {
  "amount": Number,
  "installments": Number,
  "mdr": Number
}


const MainContainer = () => {
  const { registerSimulation, setAmount, amount, installments, setInstallment,mdr,setMdr } = useSimulationContext();

  return (
    <MainDiv>
      <Form1 onSubmit={registerSimulation}>

        <h2>Simule sua Antecipação </h2>
        <div>
          <label htmlFor="amount">informe o valor da sua venda*</label>
          <InputNumber
            placeholder="R$ 10,00"
            min={10}
            max={1000000}
            currency="BRL"
            locale="pt-BR"
            inputId="amount"
            value={amount}
            onValueChange={(e) => setAmount(e.value as number)}
          ></InputNumber>
          <span>Mín R$10,00  Máx R$1.000.000,00</span>
        </div>
        <div>
          <label htmlFor="installments">Em quantas parcelas?</label>
          <InputNumber
            min={1}
            max={12}
            placeholder="1 a 12 parcelas"
            locale="pt-BR"
            inputId="installments"
            value={installments}
            onValueChange={(e) => setInstallment(e.value as number)}>
          </InputNumber>
          <span>Máx de 12 parcelas</span>


        </div>
        <div>
          <label htmlFor="mdr">informe o percentual de MDR</label>
          <InputNumber

            min={0}
            max={100}
            mode="decimal"
            currency="BRL"
            locale="pt-BR"
            inputId="mdr"
            placeholder="Taxa de 0% a 100%"
            value={mdr}
            onValueChange={(e) => setMdr(e.value as number)}>

            </InputNumber>
        <span>Min 0%  Max 100%</span>
        </div>
        <button type="submit">Simular</button>


      </Form1>

      <ContainerDays></ContainerDays>
    </MainDiv>

  )
}

export default MainContainer
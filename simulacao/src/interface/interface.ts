import { FormEvent } from "react";

export interface IInstalment {
  day: number;
  value: number;
}

export interface IResponse {
  1: number;
  15: number;
  30: number;
  90: number;
}

export interface IApp {
  amount: number;
  installments: number;
  mdr: number;
  simulation: IResponse;
  day: number | null | undefined;
  setDay: (value: number | null | undefined) => void;
  valueSpecificDay: number;
  setValueSpecificDay: (n: number) => void;
  setAmount: (n: number) => void;
  setInstallment: (n: number) => void;
  setMdr: (n: number) => void;
  setSimulation: (obj: IResponse) => void;
  registerSimulation: (e: FormEvent) => void;

}

export interface ISimulationState {
  amount: Number;
  installments: Number;
  mdr: Number;
}

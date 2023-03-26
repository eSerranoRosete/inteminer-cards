import type { IFUserData } from "~/context/AppTypes";

export interface IFState extends IFUserData {
  currentAction?: string;
}

export type ACTION_TYPE =
  | { type: "SET_NAME"; name: string }
  | { type: "SET_DESCRIPTION"; description: string }
  | { type: "SET_BANNER"; banner: string }
  | { type: "SET_CURRENT_ACTION"; currentAction: string };

export const createInitialState = (userData: IFUserData): IFState => {
  return {
    name: userData.name,
    description: userData.description,
  };
};

export const reducer = (state: IFState, action: ACTION_TYPE): IFState => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.name };

    case "SET_DESCRIPTION":
      return { ...state, description: action.description };

    case "SET_BANNER":
      return { ...state, banner: action.banner };

    case "SET_CURRENT_ACTION":
      return { ...state, currentAction: action.currentAction };

    default:
      return state;
  }
};

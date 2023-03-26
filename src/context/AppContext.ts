import { createContext, useMemo, useReducer } from "react";

import type { IFUserData } from "~/context/AppTypes";
import { createInitialState, reducer } from "./reducer";

export const useAppContext = (userData: IFUserData) => {
  const [state, dispatch] = useReducer(reducer, createInitialState(userData));

  const actions = useMemo(
    () => ({
      setName: (name: string) => {
        dispatch({ type: "SET_NAME", name });
      },

      setDescription: (description: string) => {
        dispatch({ type: "SET_DESCRIPTION", description });
      },

      setBanner: (banner: string) => {
        dispatch({ type: "SET_BANNER", banner });
      },
    }),
    []
  );

  return { actions, state };
};

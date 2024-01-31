import { DECREMENTAR, DECREMENTAR_5, INCREMENT, INCREMENT_5, RESET } from "../types";

export const sumar = () => ({type: INCREMENT});
export const sumar5 = () => ({type: INCREMENT_5, payload: 5});
export const restar = () => ({type: DECREMENTAR});
export const restar5 = () => ({type: DECREMENTAR_5, payload: 5});
export const reset = () => ({type: RESET})
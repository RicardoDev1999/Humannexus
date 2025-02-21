import { atom } from "nanostores";

export const isShowing = atom(false);
export const currentTitle = atom("Ocorreu um erro");
export const currentText = atom("Ocorreu um erro inesperado, pedimos que atualize a página.");

//success / error
export const currentVariant = atom("error");

export const hideDialog = () => isShowing.set(false);

export const showDialog = (title, text, variant) => {
  isShowing.set(true);
  currentTitle.set(title);
  currentText.set(text);
  currentVariant.set(variant);
};

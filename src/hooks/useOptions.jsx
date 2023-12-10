import { useContext } from "react";
import { OptionsContext } from "../providers/OptionsProvider";

export const useOptions = () => {
  const [{ editor }, setOptions] = useContext(OptionsContext);

  const setEditor = (input) => {
    setOptions((prev) => ({ ...prev, editor: input }));
  };

  return [editor, setEditor];
};

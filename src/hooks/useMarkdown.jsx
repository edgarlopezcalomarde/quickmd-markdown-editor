import { useContext } from "react";
import { MarkdownContext } from "../providers/MarkdownProvider";
import { MARKDOWN } from "../lib/definitions";

export const useMarkdown = () => {
  const [markdown, setMarkdown] = useContext(MarkdownContext);

  function updateMarkdown(input) {
    setMarkdown(input);
    localStorage.setItem(MARKDOWN, input)
  }
  return [markdown, updateMarkdown];
};

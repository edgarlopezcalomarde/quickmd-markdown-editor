import { useMarkdown } from "../hooks/useMarkdown";

function Editor() {
  const [markdown, updateMarkdown] = useMarkdown();
  

  return (
    <article className="h-full bg-bg2 text-gray-300 overflow-hidden pt-12 sm:pt-0">
      <textarea
        className="appearance-none border-none outline-none bg-transparent w-full h-full p-6"
        value={markdown}
        onChange={(e) => {
          updateMarkdown(e.target.value);
        }}
      />
    </article>
  );
}

export default Editor;

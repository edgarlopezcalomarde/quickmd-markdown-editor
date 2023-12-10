import { useMarkdown } from "../hooks/useMarkdown";
import { Marked } from "marked";
import dompurify from "dompurify";
import hljs from "highlight.js";
import "highlight.js/styles/tokyo-night-dark.css";
import { markedHighlight } from "marked-highlight";

function Preview() {
  const [markdown] = useMarkdown();

  const marked = new Marked(
    markedHighlight({
      langPrefix: "hljs language-",
      highlight(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : "plaintext";
        return hljs.highlight(code, { language }).value;
      },
    })
  );

  const parsed = dompurify.sanitize(marked.parse(markdown));

  return (
    <article className="bg-preview h-full overflow-auto pt-12 sm:pt-0">
      <div
        className="prose prose-invert p-6"
        dangerouslySetInnerHTML={{ __html: parsed }}
      />
    </article>
  );
}

export default Preview;

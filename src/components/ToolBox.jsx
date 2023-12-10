import { saveAs } from "file-saver";
import { useOptions } from "../hooks/useOptions";
import { MARKDOWN } from "../lib/definitions";
import Button from "./Button";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";
import { useMarkdown } from "../hooks/useMarkdown";

function ToolBox() {
  const [editor, setEditor] = useOptions();
  const fileInputRef = useRef(null);
  const [, updateMarkdown] = useMarkdown();

  const handleLink = () => {
    const mdStorage = localStorage.getItem(MARKDOWN);
    const base64String = btoa(mdStorage).toString();
    const { host, protocol } = window.location;
    navigator.clipboard
      .writeText(protocol + "//" + host + "/quickmd-markdown-editor"+"/#/" + base64String)
      .then(() => {
        toast.success("Enlace agregado al portapapeles", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch(() => {
        toast.error("Error al copiar el enlace al portapapeles", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const handleSwap = () => {
    setEditor(!editor);
  };

  const handleDownload = () => {
    const md = localStorage.getItem(MARKDOWN) ?? "";
    const blob = new Blob([md], { type: "text/plain" });
    saveAs(blob, crypto.randomUUID() + ".md");
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target && typeof e.target.result === "string") {
        updateMarkdown(e.target.result);
      }
    };

    if (selectedFile) {
      reader.readAsText(selectedFile);
    }
  };

  return (
    <div className="absolute top-0 right-0 border p-2 bg-bg2 flex gap-2">
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />

      <Button.swap action={() => handleSwap()} />
      <Button.import action={() => fileInputRef.current.click()} />
      <Button.download action={() => handleDownload()} />
      <Button.link action={() => handleLink()} />
    </div>
  );
}

export default ToolBox;

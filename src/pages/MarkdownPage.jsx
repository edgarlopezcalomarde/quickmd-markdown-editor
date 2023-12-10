import Editor from "../components/Editor";
import Preview from "../components/Preview";
import ToolBox from "../components/ToolBox";
import MainLayout from "../layout/MainLayout";
import { ToastContainer } from "react-toastify";
import { useOptions } from "../hooks/useOptions";
import useSize from "../hooks/useSize";

function MarkdownPage() {
  const [editor] = useOptions();
  const [w] = useSize();


  return (
    <>
      <ToolBox />
      <MainLayout>
        <MainLayout.column className={{"hidden lg:block": w < 1024 && editor === false }}>
          <Editor />
        </MainLayout.column>
        <MainLayout.column
          className={{ "hidden lg:block": w < 1024 && editor === true }}
        >
          <Preview />
        </MainLayout.column>
      </MainLayout>
      <ToastContainer />
    </>
  );
}

export default MarkdownPage;

import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useMarkdown } from "../hooks/useMarkdown";

function LoadLinkPage() {
  const { link } = useParams();
  const [, updateMarkdown] = useMarkdown();

  useEffect(() => {
    updateMarkdown(atob(link));
  }, [link, updateMarkdown]);

  return <Navigate to="/" />;
}

export default LoadLinkPage;

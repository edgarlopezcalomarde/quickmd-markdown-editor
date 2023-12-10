import {  HashRouter, Route, Routes } from "react-router-dom";
import MarkdownPage from "./pages/MarkdownPage";
import LoadLinkPage from "./pages/LoadLinkPage";
import MarkdownProvider from "./providers/MarkdownProvider";
import { OptionsProvider } from "./providers/OptionsProvider";

function App() {
  return (
    <MarkdownProvider>
      <HashRouter >
        <Routes>
          <Route
            path="/"
            element={
              <OptionsProvider>
                <MarkdownPage />
              </OptionsProvider>
            }
          />
          <Route path="/:link" element={<LoadLinkPage />} />
        </Routes>
      </HashRouter>
    </MarkdownProvider>
  );
}

export default App;

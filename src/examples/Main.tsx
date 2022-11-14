import { Route, Routes } from "react-router-dom";
import { CodeSyntaxExample } from "../examples/CodeSyntaxExample";
import { SidebarExample } from "../examples/SidebarExample";
import { BlogExample } from "./BlogExample";

export const Main = () => {
  return (
    <>
    <Routes>
      <Route path='code-syntax' element={<CodeSyntaxExample />} />
      <Route path='sidebar' element={<SidebarExample />} />
      <Route path='blog' element={<BlogExample />} />
    </Routes>
    </>
  );
}
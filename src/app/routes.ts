import { createBrowserRouter } from "react-router";
import { WritingTestResultPage } from "./pages/WritingTestResultPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: WritingTestResultPage,
  },
]);

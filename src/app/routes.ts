import { createBrowserRouter } from "react-router";
import { WritingResultPage } from "./pages/WritingResultPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: WritingResultPage,
  },
]);
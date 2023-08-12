import { Route, Routes } from "react-router-dom";
import A1 from "./articlescontent/a1/A1";
import A2 from "./articlescontent/a2/A2";

const urlPrefix = "/myprofile/blog/a";

export const RenderArticles = [
  <Route path={`${urlPrefix}1/`} Component={A1} />,
  <Route path={`${urlPrefix}2/`} Component={A2} />,
];

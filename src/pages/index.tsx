import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/homepage";
import { RecoilRoot } from "recoil";
export default function Home() {
  return (
    <RecoilRoot>
      <HomePage />
    </RecoilRoot>
  );
}

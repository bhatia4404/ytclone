import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/homepage";
import { VideoPage } from "../pages/videopage";
import { RecoilRoot } from "recoil";
export default function Home() {
  return (
    <div>
      <RecoilRoot>
        <HomePage />
      </RecoilRoot>
    </div>
  );
}

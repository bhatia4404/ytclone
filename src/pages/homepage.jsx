import { AppBar } from "@/components/AppBar";
import { SideBar } from "@/components/SideBar1";
import { CategoryBtns } from "@/components/CategoryBtns";
import { VideoCard } from "@/components/VideoCard";
import { videosAtom } from "../atoms/videos";
import { useRecoilState, useRecoilValue } from "recoil";
export function HomePage() {
  const videos = useRecoilValue(videosAtom);
  return (
    <div className="">
      <div
        className="overlay block"
        onClick={function () {
          const overlay = document.querySelector(".overlay");
          const sideBar = document.querySelector(".sideBar");

          if (overlay?.classList.contains("overlay_visible")) {
            overlay.classList.toggle("overlay_visible");
            sideBar?.classList.toggle("visibleSideBar");
            sideBar?.classList.toggle("hiddenSideBar");
          }
        }}
      ></div>
      <AppBar />
      <div className="flex">
        <div className="videosncatNSide">
          <SideBar />
          <div className="videosncat flex flex-col right_videosncat ml-[20px] mr-[20px] ">
            <div className="videos w-full grid max-vs:grid-cols-1 max-vm:grid-cols-2 max-vl:grid-cols-3 grid-cols-4 gap-3">
              <CategoryBtns />
              {videos.map((video) => (
                <VideoCard
                  key={video.key}
                  imgLink={video.imgLink}
                  ownerImgLink={video.ownerImgLink}
                  title={video.title}
                  owner={video.owner}
                  views={video.views}
                  timeStamp={video.timeStamp}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

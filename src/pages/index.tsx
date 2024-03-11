import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "@/components/VideoCard";
import { AppBar } from "@/components/AppBar";
import { SideBar } from "@/components/SideBar1";
import { CategoryBtns } from "@/components/CategoryBtns";
const inter = Inter({ subsets: ["latin"] });
const videos = [
  {
    key: 1,
    imgLink:
      "https://i.ytimg.com/vi/rWpiYvLHmzU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUojXNhQdsyJtRa_mjhkjppW5Aag",
    ownerImgLink:
      "https://yt3.ggpht.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s68-c-k-c0x00ffffff-no-rj",
    title:
      "Internet will NEVER be the Same Again! | Rise of AI Videos | Dhruv Rathee",

    owner: "Dhruv Rathee",
    views: "5.6M",
    timeStamp: "2 days ago",
  },
  {
    key: 2,
    imgLink:
      "https://i.ytimg.com/vi/rWpiYvLHmzU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUojXNhQdsyJtRa_mjhkjppW5Aag",
    ownerImgLink:
      "https://yt3.ggpht.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s68-c-k-c0x00ffffff-no-rj",
    title:
      "Internet will NEVER be the Same Again! | Rise of AI Videos | Dhruv Rathee",

    owner: "Dhruv Rathee",
    views: "5.6M",
    timeStamp: "2 days ago",
  },
  {
    key: 3,
    imgLink:
      "https://i.ytimg.com/vi/rWpiYvLHmzU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUojXNhQdsyJtRa_mjhkjppW5Aag",
    ownerImgLink:
      "https://yt3.ggpht.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s68-c-k-c0x00ffffff-no-rj",
    title:
      "Internet will NEVER be the Same Again! | Rise of AI Videos | Dhruv Rathee",

    owner: "Dhruv Rathee",
    views: "5.6M",
    timeStamp: "2 days ago",
  },
  {
    key: 4,
    imgLink:
      "https://i.ytimg.com/vi/rWpiYvLHmzU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUojXNhQdsyJtRa_mjhkjppW5Aag",
    ownerImgLink:
      "https://yt3.ggpht.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s68-c-k-c0x00ffffff-no-rj",
    title:
      "Internet will NEVER be the Same Again! | Rise of AI Videos | Dhruv Rathee",

    owner: "Dhruv Rathee",
    views: "5.6M",
    timeStamp: "2 days ago",
  },
  {
    key: 5,
    imgLink:
      "https://i.ytimg.com/vi/rWpiYvLHmzU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUojXNhQdsyJtRa_mjhkjppW5Aag",
    ownerImgLink:
      "https://yt3.ggpht.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s68-c-k-c0x00ffffff-no-rj",
    title:
      "Internet will NEVER be the Same Again! | Rise of AI Videos | Dhruv Rathee",

    owner: "Dhruv Rathee",
    views: "5.6M",
    timeStamp: "2 days ago",
  },
  {
    key: 6,
    imgLink:
      "https://i.ytimg.com/vi/rWpiYvLHmzU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUojXNhQdsyJtRa_mjhkjppW5Aag",
    ownerImgLink:
      "https://yt3.ggpht.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s68-c-k-c0x00ffffff-no-rj",
    title:
      "Internet will NEVER be the Same Again! | Rise of AI Videos | Dhruv Rathee",

    owner: "Dhruv Rathee",
    views: "5.6M",
    timeStamp: "2 days ago",
  },
  {
    key: 7,
    imgLink:
      "https://i.ytimg.com/vi/rWpiYvLHmzU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUojXNhQdsyJtRa_mjhkjppW5Aag",
    ownerImgLink:
      "https://yt3.ggpht.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s68-c-k-c0x00ffffff-no-rj",
    title:
      "Internet will NEVER be the Same Again! | Rise of AI Videos | Dhruv Rathee",

    owner: "Dhruv Rathee",
    views: "5.6M",
    timeStamp: "2 days ago",
  },
  {
    key: 8,
    imgLink:
      "https://i.ytimg.com/vi/rWpiYvLHmzU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUojXNhQdsyJtRa_mjhkjppW5Aag",
    ownerImgLink:
      "https://yt3.ggpht.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s68-c-k-c0x00ffffff-no-rj",
    title:
      "Internet will NEVER be the Same Again! | Rise of AI Videos | Dhruv Rathee",

    owner: "Dhruv Rathee",
    views: "5.6M",
    timeStamp: "2 days ago",
  },
  {
    key: 9,
    imgLink:
      "https://i.ytimg.com/vi/rWpiYvLHmzU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUojXNhQdsyJtRa_mjhkjppW5Aag",
    ownerImgLink:
      "https://yt3.ggpht.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s68-c-k-c0x00ffffff-no-rj",
    title:
      "Internet will NEVER be the Same Again! | Rise of AI Videos | Dhruv Rathee",

    owner: "Dhruv Rathee",
    views: "5.6M",
    timeStamp: "2 days ago",
  },
  {
    key: 10,
    imgLink:
      "https://i.ytimg.com/vi/rWpiYvLHmzU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUojXNhQdsyJtRa_mjhkjppW5Aag",
    ownerImgLink:
      "https://yt3.ggpht.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s68-c-k-c0x00ffffff-no-rj",
    title:
      "Internet will NEVER be the Same Again! | Rise of AI Videos | Dhruv Rathee",

    owner: "Dhruv Rathee",
    views: "5.6M",
    timeStamp: "2 days ago",
  },
  {
    key: 11,
    imgLink:
      "https://i.ytimg.com/vi/rWpiYvLHmzU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUojXNhQdsyJtRa_mjhkjppW5Aag",
    ownerImgLink:
      "https://yt3.ggpht.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s68-c-k-c0x00ffffff-no-rj",
    title:
      "Internet will NEVER be the Same Again! | Rise of AI Videos | Dhruv Rathee",

    owner: "Dhruv Rathee",
    views: "5.6M",
    timeStamp: "2 days ago",
  },
  {
    key: 12,
    imgLink:
      "https://i.ytimg.com/vi/rWpiYvLHmzU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUojXNhQdsyJtRa_mjhkjppW5Aag",
    ownerImgLink:
      "https://yt3.ggpht.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s68-c-k-c0x00ffffff-no-rj",
    title:
      "Internet will NEVER be the Same Again! | Rise of AI Videos | Dhruv Rathee",

    owner: "Dhruv Rathee",
    views: "5.6M",
    timeStamp: "2 days ago",
  },
];
export default function Home() {
  return (
    <div>
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

import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "@/components/VideoCard";
import { AppBar } from "@/components/AppBar";
import { SideBar } from "@/components/SideBar";
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
];
export default function Home() {
  return (
    <div>
      <AppBar />
      <div className="videosncatNSide flex">
        <SideBar />
        <div className="videosncat flex flex-col w-[100%]">
          <CategoryBtns />
          <div className="videos xs:grid grid-cols-1 xs: grid-cols-2 sm:grid-cols-3 l:grid-cols-4 ml-auto  max-xs:mr-auto xs:auto l:mr-0 mr-20">
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
            C
          </div>
        </div>
      </div>
    </div>
  );
}

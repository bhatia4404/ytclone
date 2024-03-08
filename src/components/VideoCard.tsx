import { timeStamp } from "console";
import { AppBar } from "@/components/AppBar";
export function VideoCard({
  imgLink,
  ownerImgLink,
  title,
  owner,
  views,
  timeStamp,
}: any) {
  return (
    <div className="m-2.5">
      <img src={imgLink} alt="" className="h-auto w-auto mb-3 rounded-xl" />
      <div className="flex">
        <img
          src={ownerImgLink}
          alt=""
          className="h-11
         w-11 rounded-3xl mr-3"
        />
        <div className="text-sm">
          <div className="title">{title}</div>
          <div className="owner text-gray-700">{owner}</div>
          <div className="viewsnt text-gray-700">
            {views} views • {timeStamp}
          </div>
        </div>
      </div>
    </div>
  );
}

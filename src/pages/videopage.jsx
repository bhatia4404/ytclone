import { Comment, AddComment } from "../components/comment";
export function VideoPage() {
  return (
    <div>
      <AddComment />
      <Comment
        channelOwner={"Dhruv Rathee"}
        profilePic={
          "https://yt3.ggpht.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s68-c-k-c0x00ffffff-no-rj"
        }
        username={"dhruvrathee"}
        commentMessage={"Thank you for the love."}
        replyCount={2234}
        likes={30000}
        pinned={true}
        timestamp={"3 years ago"}
        liked={false}
        disliked={false}
      />
      <Comment
        channelOwner={"Dhruv Rathee"}
        profilePic={
          "https://yt3.ggpht.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s68-c-k-c0x00ffffff-no-rj"
        }
        username={"dhruvrathee"}
        commentMessage={"Thank you for the love."}
        replyCount={2234}
        likes={30000}
        pinned={true}
        timestamp={"3 years ago"}
        liked={false}
        disliked={false}
      />
    </div>
  );
}

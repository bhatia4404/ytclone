import { useState } from "react";

export function Comment({
  channelOwner,
  profilePic,
  username,
  commentMessage,
  replyCount,

  likes,
  pinned,
  timestamp,
  liked,
  disliked,
}) {
  const [repliesOpened, setRepliesOpened] = useState(false);
  return (
    <div className="m-2 flex gap-2">
      <div className="profilePic">
        {profilePic ? (
          <img src={profilePic} className="h-11 w-11 rounded-full" />
        ) : (
          <div className="text-[24px] pt-[3px] pb-[3px] pl-[10px] pr-[10px] bg-green-200 inline rounded-full">
            {username[0].toUpperCase()}
          </div>
        )}
      </div>
      <div className="details flex flex-col gap-1">
        {pinned ? (
          <div className="pinned flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              className="h-[12px] w-[12px]"
            >
              <path d="M16 11V3h1V2H7v1h1v8l-2 2v2h5v6l1 1 1-1v-6h5v-2l-2-2zm1 3H7v-.59l1.71-1.71.29-.29V3h6v8.41l.29.29L17 13.41V14z"></path>
            </svg>
            <p className="text-xxs">Pinned by {channelOwner}</p>
          </div>
        ) : null}
        <div className="commentorNtimestamp flex gap-1 items-center">
          <p className="text-xs text-white font-semibold pt[1px] pb-[1px] pl-[4px] pr-[4px] bg-gray-500 rounded-full ">{`@${username}`}</p>
          <p className="text-xxs">{timestamp}</p>
        </div>
        <p className="text-sm">{commentMessage}</p>
        <div className="likesndislikesNReply flex  gap-5 ">
          <div className="likesNdislikes flex gap-3">
            <div className="likes flex items-center gap-1">
              {liked ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                  />
                </svg>
              )}
              <p className="text-xs">{likes}</p>
            </div>
            <div className="dislikes">
              {disliked ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M15.73 5.5h1.035A7.465 7.465 0 0 1 18 9.625a7.465 7.465 0 0 1-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 0 1-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.499 4.499 0 0 0-.322 1.672v.633A.75.75 0 0 1 9 22a2.25 2.25 0 0 1-2.25-2.25c0-1.152.26-2.243.723-3.218.266-.558-.107-1.282-.725-1.282H3.622c-1.026 0-1.945-.694-2.054-1.715A12.137 12.137 0 0 1 1.5 12.25c0-2.848.992-5.464 2.649-7.521C4.537 4.247 5.136 4 5.754 4H9.77a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23ZM21.669 14.023c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.958 8.958 0 0 1-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227Z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
                  />
                </svg>
              )}
            </div>
          </div>
          <button className="btn_reply text-xs font-semibold ">Reply</button>
        </div>
        {replyCount ? (
          <button
            className="replies flex items-center gap-1 hover:bg-[#065fda1c] block pt-2 pb-2 w-[75%] pl-2 rounded-full"
            onClick={function () {
              setRepliesOpened(!repliesOpened);
            }}
          >
            {repliesOpened ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-4 h-4"
                stroke="#065fd4"
              >
                <path
                  fillRule="evenodd"
                  d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-4 h-4"
                stroke="#065fd4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            <p className="text-xs font-bold text-[#065fd4]">
              {replyCount} replies
            </p>
          </button>
        ) : null}
      </div>
    </div>
  );
}

export function AddComment({ totalComments, profilePic, username }) {
  const [input, setInput] = useState("");
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="totalNsort flex gap-7 items-center">
        <p className="text-xl font-semibold">
          {new Intl.NumberFormat("en-in").format(totalComments)} Comments
        </p>
        <button className="flex gap-3 pl-4 pr-4 pt-2 pb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
          >
            <path d="M21 6H3V5h18v1zm-6 5H3v1h12v-1zm-6 6H3v1h6v-1z"></path>
          </svg>
          <p className="font-semibold">Sort By</p>
        </button>
      </div>
      <div className="profileNinput flex gap-4 w-full">
        {profilePic ? (
          <img src={profilePic} className="h-11 w-11 rounded-full" />
        ) : (
          <div className="text-[24px] pt-[3px] pb-[3px] pl-[10px] pr-[10px] bg-green-200 inline rounded-full">
            {username[0].toUpperCase()}
          </div>
        )}
        <div className="input flex flex-col gap-2 w-[80%]">
          <input
            type="text"
            placeholder="Add a comment..."
            className="outline-0 border-b-[1px] border-gray-200 focus:border-b-[2px] focus:border-b-black w-full"
            onInput={function (e) {
              setInput(e.target.value);
            }}
            onFocus={function (e) {
              e.target.nextSibling.classList.remove("hidden");
              e.target.classList.add("border-b-gray-400");
            }}
          />
          <div className="emojiNcomment flex justify-between hidden">
            <button className="p-1 hover:bg-gray-200 rounded-full -ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                />
              </svg>
            </button>
            <div className="cancelNcomment flex gap-3">
              <button
                className="pl-3 pr-3 hover:bg-gray-200 rounded-full font-semibold"
                onClick={function (e) {
                  e.target.closest(".emojiNcomment").classList.add("hidden");
                }}
              >
                Cancel
              </button>
              <button
                className={`pl-3 pr-3 hover:bg-gray-200 rounded-full font-semibold ${
                  input !== ""
                    ? "bg-[#065fd4] text-white"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

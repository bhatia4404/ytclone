import { SideBtn } from "./SideBtn";
import { SignIn } from "./signin";
import { sideBarBtnHandler } from "./sideBarHandler";
export function SideBar() {
  return (
    <div className="sideBar w-[220px] fixed bg-white max-l:top-0 h-[100%] max-l:z-10  pb-[75px] max-l:sbcLess hiddenSideBar ">
      <div className="barNlogo items-center gap-3 w-30 shrink-0 ml-3 hidden max-l:flex z-2 ">
        <button
          className="hover:bg-gray-200 p-2 rounded-3xl"
          onClick={sideBarBtnHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        <img
          src="data:image/png;base64,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"
          alt=""
          className="h-[64px] w-[108px] "
        />
      </div>
      <div className="all_btns overflow-x-hidden overflow-y-scroll h-[100%] ">
        <div className="btns first_btns ">
          <div
            className="btn_side flex items-center gap-5 pt-2 pb-2 pl-5 pr-5 bg-gray-200
          hover:bg-gray-200 rounded-xl cursor-pointer"
          >
            <button className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
              >
                <path d="m12 4.44 7 6.09V20h-4v-6H9v6H5v-9.47l7-6.09m0-1.32-8 6.96V21h6v-6h4v6h6V10.08l-8-6.96z"></path>
              </svg>
            </button>
            <p>Home</p>
          </div>
          {/*  */}
          <div className="btn_side pt-2 pb-2 pl-5 pr-5 flex items-center hover:bg-gray-200 rounded-xl cursor-pointer">
            <button className="">
              <svg
                stroke="black"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 48 48"
                className="w-6 h-6 shorts_svg stroke-2"
              >
                <path
                  fill="none"
                  d="M29.103,2.631c4.217-2.198,9.438-0.597,11.658,3.577c2.22,4.173,0.6,9.337-3.617,11.534l-3.468,1.823	c2.987,0.109,5.836,1.75,7.328,4.555c2.22,4.173,0.604,9.337-3.617,11.534L18.897,45.37c-4.217,2.198-9.438,0.597-11.658-3.577	s-0.6-9.337,3.617-11.534l3.468-1.823c-2.987-0.109-5.836-1.75-7.328-4.555c-2.22-4.173-0.6-9.337,3.617-11.534	C10.612,12.346,29.103,2.631,29.103,2.631z M19.122,17.12l11.192,6.91l-11.192,6.877C19.122,30.907,19.122,17.12,19.122,17.12z"
                  className="shorts_svg_path1 "
                ></path>
                <path
                  className="shorts_svg_path2 "
                  fill="#000"
                  d="M19.122,17.12v13.787l11.192-6.877L19.122,17.12z"
                ></path>
              </svg>
            </button>
            <p>Shorts</p>
          </div>
          <div className="btn_side pt-2 pb-2 pl-5 pr-5 flex items-center hover:bg-gray-200 rounded-xl cursor-pointer">
            <button className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                className="w-6 h-6"
              >
                <path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path>
              </svg>
            </button>
            <p className="">Subscriptions</p>
          </div>
          <hr className=" block mt-2 mb-2" />
        </div>

        <div className="btns second_btns">
          <div className="btn_side pt-2 pb-2 pl-5 pr-5 hover:bg-gray-200 rounded-xl cursor-pointer flex items-center">
            <button className="">
              <svg
                height="24"
                viewBox="0 0 24 24"
                width="24"
                className="h-6 w-6"
              >
                <path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"></path>
              </svg>
            </button>
            <p>History</p>
          </div>
          <div className="btn_side pt-2 pb-2 pl-5 pr-5 hover:bg-gray-200 rounded-xl cursor-pointer flex items-center">
            <button className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                className="w-6 h-6"
              >
                <path d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"></path>
              </svg>
            </button>
            <p>You</p>
          </div>
          <hr className="" />
          <div className=" btns  third_btns flex flex-col gap-3 justify-around pt-2 pb-2 pl-5 pr-5 w-[220px]  text-start">
            <p>Sign in to like videos, comment, and subscribe.</p>
            <SignIn />
          </div>
          <hr className="block mt-2 mb-2 " />
          <div className="btns fourth_btns ">
            <p className="font-semibold pt-2 pb-2 pl-5 pr-5">Explore</p>
            <div
              className="btn_side flex items-center gap-5 pt-2 pb-2 pl-5 pr-5
          hover:bg-gray-200 rounded-xl cursor-pointer"
            >
              <button className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
                >
                  <path d="M19 3.87v9.77C19 17.7 15.86 21 12 21s-7-3.3-7-7.37v-.13c0-1.06.22-2.13.62-3.09.5-1.19 1.29-2.21 2.27-2.97.85-.66 1.83-1.14 2.87-1.65.39-.19.77-.38 1.15-.58.36-.19.72-.38 1.08-.56v3.22l1.55-1.04L19 3.87M20 2l-6 4V3c-.85.44-1.7.88-2.55 1.33-1.41.74-2.9 1.34-4.17 2.32-1.13.87-2.02 2.05-2.58 3.37-.46 1.09-.7 2.29-.7 3.48v.14C4 18.26 7.58 22 12 22s8-3.74 8-8.36V2zM9.45 12.89 14 10v5.7c0 1.82-1.34 3.3-3 3.3s-3-1.47-3-3.3c0-1.19.58-2.23 1.45-2.81z"></path>
                </svg>
              </button>
              <p>Trending</p>
            </div>
            <div className="btn_side pt-2 pb-2 pl-5 pr-5 hover:bg-gray-200 rounded-xl cursor-pointer cursor-pointer flex items-center ">
              <button className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
                >
                  <path d="M7 8c0 2.76 2.24 5 5 5s5-2.24 5-5h-1c0 2.21-1.79 4-4 4s-4-1.79-4-4H7zm9.9-2c-.46-2.28-2.48-4-4.9-4S7.56 3.72 7.1 6H4v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6h-3.1zM12 3c1.86 0 3.43 1.27 3.87 3H8.13c.44-1.73 2.01-3 3.87-3zm7 17c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V7h14v13z"></path>
                </svg>
              </button>
              <p>Shopping</p>
            </div>
            <div className="btn_side pt-2 pb-2 pl-5 pr-5 hover:bg-gray-200 rounded-xl cursor-pointer cursor-pointer flex items-center">
              <button className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
                >
                  <path d="M12 4v9.38c-.73-.84-1.8-1.38-3-1.38-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V8h6V4h-7zM9 19c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm9-12h-5V5h5v2z"></path>
                </svg>
              </button>
              <p>Music</p>
            </div>
            <div className="btn_side pt-2 pb-2 pl-5 pr-5 hover:bg-gray-200 rounded-xl cursor-pointer cursor-pointer flex items-center">
              <button className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
                >
                  <path d="m22.01 4.91-.5-2.96L1.64 5.19 2 8v13h20V8H3.06l18.95-3.09zM5 9l1 3h3L8 9h2l1 3h3l-1-3h2l1 3h3l-1-3h3v11H3V9h2z"></path>
                </svg>
              </button>
              <p>Movies</p>
            </div>
            <div className="btn_side pt-2 pb-2 pl-5 pr-5 hover:bg-gray-200 rounded-xl cursor-pointer flex items-center">
              <button className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
                >
                  <g>
                    <path d="M14 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM8.48 8.45l-.71-.7C6.68 8.83 6 10.34 6 12s.68 3.17 1.77 4.25l.71-.71C7.57 14.64 7 13.39 7 12s.57-2.64 1.48-3.55zm7.75-.7-.71.71c.91.9 1.48 2.15 1.48 3.54s-.57 2.64-1.48 3.55l.71.71C17.32 15.17 18 13.66 18 12s-.68-3.17-1.77-4.25zM5.65 5.63l-.7-.71C3.13 6.73 2 9.24 2 12s1.13 5.27 2.95 7.08l.71-.71C4.02 16.74 3 14.49 3 12s1.02-4.74 2.65-6.37zm13.4-.71-.71.71C19.98 7.26 21 9.51 21 12s-1.02 4.74-2.65 6.37l.71.71C20.87 17.27 22 14.76 22 12s-1.13-5.27-2.95-7.08z"></path>
                  </g>
                </svg>
              </button>
              <p>Live</p>
            </div>
            <div className="btn_side pt-2 pb-2 pl-5 pr-5 hover:bg-gray-200 rounded-xl cursor-pointer flex items-center">
              <button className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
                >
                  <path d="M10 12H8v2H6v-2H4v-2h2V8h2v2h2v2zm7 .5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm3-3c0-.83-.67-1.5-1.5-1.5S17 8.67 17 9.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm-3.03-4.35-4.5 2.53-.49.27-.49-.27-4.5-2.53L3 7.39v6.43l8.98 5.04 8.98-5.04V7.39l-3.99-2.24m0-1.15 4.99 2.8v7.6L11.98 20 2 14.4V6.8L6.99 4l4.99 2.8L16.97 4z"></path>
                </svg>
              </button>
              <p>Gaming</p>
            </div>
            <div className="btn_side pt-2 pb-2 pl-5 pr-5 hover:bg-gray-200 rounded-xl cursor-pointer flex items-center">
              <button className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
                >
                  <path d="M11 11v6H7v-6h4m1-1H6v8h6v-8zM3 3.03V21h14l4-4V3.03M20 4v11.99l-.01.01H16v3.99l-.01.01H4V4h16zm-2 4H6V6h12v2zm0 7h-5v-2h5v2zm0-3h-5v-2h5v2z"></path>
                </svg>
              </button>
              <p>News</p>
            </div>
            <div className="btn_side pt-2 pb-2 pl-5 pr-5 hover:bg-gray-200 rounded-xl cursor-pointer flex items-center">
              <button className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
                >
                  <path d="M18 5V2H6v3H3v6l3.23 1.61c.7 2.5 2.97 4.34 5.69 4.38L8 19v3h8v-3l-3.92-2.01c2.72-.04 4.99-1.88 5.69-4.38L21 11V5h-3zM6 11.38l-2-1V6h2v5.38zM15 21H9v-1.39l3-1.54 3 1.54V21zm2-10c0 2.76-2.24 5-5 5s-5-2.24-5-5V3h10v8zm3-.62-2 1V6h2v4.38z"></path>
                </svg>
              </button>
              <p>Sports</p>
            </div>
            <div className="btn_side pt-2 pb-2 pl-5 pr-5 hover:bg-gray-200 rounded-xl cursor-pointer flex items-center">
              <button className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
                >
                  <path d="M16 21h-2.28c-.35.6-.98 1-1.72 1s-1.38-.4-1.72-1H8v-1h8v1zm4-11c0 2.96-1.61 5.54-4 6.92V19H8v-2.08C5.61 15.54 4 12.96 4 10c0-4.42 3.58-8 8-8s8 3.58 8 8zm-5 8v-1.66l.5-.29C17.66 14.8 19 12.48 19 10c0-3.86-3.14-7-7-7s-7 3.14-7 7c0 2.48 1.34 4.8 3.5 6.06l.5.28V18h6z"></path>
                </svg>
              </button>
              <p>Learning</p>
            </div>
            <div className="btn_side pt-2 pb-2 pl-5 pr-5 hover:bg-gray-200 rounded-xl cursor-pointer flex items-center">
              <button className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  width="24"
                  focusable="false"
                >
                  <path d="M12.5 6.44v-.5C13.36 5.71 14 4.93 14 4c0-1.1-.9-2-2-2s-2 .9-2 2h1c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1h-.5v1.44L4 13h2v6h1v2h1v-2h2v3h1v-3h2v2h1v-2h1v-3h3v-3h2l-7.5-6.56zM6.66 12 12 7.33 17.34 12H6.66zM14 18H7v-5h7v5zm1-3v-2h2v2h-2z"></path>
                </svg>
              </button>
              <p className="whitespace-nowrap">Fashion & Beauty</p>
            </div>
            <div className="btn_side pt-2 pb-2 pl-5 pr-5 hover:bg-gray-200 rounded-xl cursor-pointer flex items-center">
              <button className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
                >
                  <path d="M6 12c0-3.31 2.69-6 6-6s6 2.69 6 6c0 1.66-.67 3.16-1.77 4.25l-.71-.71C16.44 14.63 17 13.38 17 12c0-2.76-2.24-5-5-5s-5 2.24-5 5c0 1.38.56 2.63 1.47 3.54l-.71.71C6.67 15.16 6 13.66 6 12zm8 0c0-1.1-.9-2-2-2s-2 .9-2 2c0 .74.4 1.38 1 1.72V22h2v-8.28c.6-.34 1-.98 1-1.72zm-9.06 7.08.71-.71C4.01 16.74 3 14.49 3 12c0-4.96 4.04-9 9-9s9 4.04 9 9c0 2.49-1.01 4.74-2.65 6.37l.71.71C20.88 17.27 22 14.77 22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 2.77 1.12 5.27 2.94 7.08z"></path>
                </svg>
              </button>
              <p>Podcasts</p>
            </div>
          </div>
          <hr className="block mt-2 mb-2 " />
          <div className="btns fifth_btns ">
            <div className="btn_side pt-2 pb-2 pl-5 pr-5 hover:bg-gray-200 rounded-xl cursor-pointer flex items-center">
              <button className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
                >
                  <path d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4v2zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path>
                </svg>
              </button>
              <p className="whitespace-nowrap">Browse Channels</p>
            </div>
          </div>
          <hr className="block mt-2 mb-2 " />
          <div className="btns sixth_btns ">
            <h3 className="pl-5 pr-5 font-semibold">More from Youtube</h3>
            <div className="btn_side pt-2 pb-2 pl-5 pr-5 hover:bg-gray-200 rounded-xl cursor-pointer flex items-center">
              <button className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  focusable="false"
                  className="h-6 w-6"
                >
                  <defs>
                    <radialGradient
                      cx="5.4%"
                      cy="7.11%"
                      r="107.93%"
                      fx="5.4%"
                      fy="7.11%"
                      gradientTransform="matrix(.70653 0 0 1 .016 0)"
                    >
                      <stop offset="0%" stop-color="#FFF"></stop>
                      <stop
                        offset="100%"
                        stop-color="#FFF"
                        stop-opacity="0"
                      ></stop>
                    </radialGradient>
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <path d="M1 1h21.77v22H1z"></path>
                    <g fill-rule="nonzero">
                      <path
                        fill="#F00"
                        d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v1.66c.04 1.78.26 3.55.26 3.55s.2 1.5.86 2.18c.83.87 1.9.84 2.4.94 1.7.15 7.2.2 7.38.2 0 0 4.57 0 7.6-.22.43-.05 1.35-.06 2.18-.93.65-.67.86-2.18.86-2.18s.22-1.77.24-3.55v-1.66c-.02-1.78-.24-3.55-.24-3.55z"
                      ></path>
                      <path fill="#FAFAFA" d="M9.68 8.9v6.18l5.84-3.1"></path>
                      <path
                        fill="#000"
                        fill-opacity=".12"
                        d="M9.68 8.88l5.13 3.48.73-.38"
                      ></path>
                      <path
                        fill="#FFF"
                        fill-opacity=".2"
                        d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v.1c.04-1.76.26-3.54.26-3.54s.2-1.5.86-2.17c.83-.88 1.75-.88 2.18-.93 3.04-.22 7.6-.2 7.6-.2s4.56-.02 7.6.2c.43.05 1.35.05 2.18.93.65.66.86 2.17.86 2.17s.22 1.78.23 3.55v-.1c0-1.8-.23-3.56-.23-3.56z"
                      ></path>
                      <path
                        fill="#3E2723"
                        fill-opacity=".2"
                        d="M22.54 16.4s-.2 1.5-.86 2.17c-.83.87-1.75.88-2.18.93-3.04.22-7.6.2-7.6.2s-4.56.02-7.6-.2c-.43-.05-1.35-.06-2.18-.93-.65-.67-.86-2.18-.86-2.18s-.22-1.8-.26-3.57v-.1c.04 1.76.26 3.54.26 3.54s.2 1.5.86 2.17c.83.88 1.75.88 2.18.93 3.04.22 7.6.2 7.6.2s4.56.02 7.6-.2c.43-.05 1.35-.05 2.18-.93.65-.66.86-2.17.86-2.17s.22-1.78.23-3.55v.1c0 1.8-.23 3.56-.23 3.56z"
                      ></path>
                      <path
                        fill="#FFF"
                        fill-opacity=".2"
                        d="M9.68 15.08v.1l5.84-3.08v-.12"
                      ></path>
                      <path
                        fill="#3E2723"
                        fill-opacity=".2"
                        d="M9.68 8.9v-.13l5.84 3.1v.1"
                      ></path>
                      <path
                        fill="url(#youtube_round__a)"
                        fill-opacity=".1"
                        d="M21.54 3.4s-.2-1.5-.86-2.18C19.85.35 18.93.35 18.5.3 15.46.07 10.9.1 10.9.1S6.34.07 3.3.3c-.43.05-1.35.05-2.18.92C.47 1.9.26 3.4.26 3.4S.04 5.17 0 6.95V8.6c.04 1.8.26 3.56.26 3.56s.2 1.52.86 2.18c.83.87 1.9.85 2.4.94 1.7.16 7.2.2 7.38.2 0 0 4.57 0 7.6-.2.43-.06 1.35-.07 2.18-.94.65-.66.86-2.18.86-2.18s.22-1.77.24-3.55V6.97c-.02-1.78-.24-3.55-.24-3.55z"
                        transform="translate(1 4.208)"
                      ></path>
                    </g>
                  </g>
                </svg>
              </button>
              <p className="whitespace-nowrap">Youtube Premium</p>
            </div>
            <div className="btn_side pt-2 pb-2 pl-5 pr-5 hover:bg-gray-200 rounded-xl cursor-pointer flex items-center">
              <button className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  focusable="false"
                  className="h-6 w-6"
                >
                  <circle fill="#FF0000" cx="12" cy="12" r="10"></circle>
                  <polygon
                    fill="#FFFFFF"
                    points="10,14.65 10,9.35 15,12 "
                  ></polygon>
                  <path
                    fill="#FFFFFF"
                    d="M12,7c2.76,0,5,2.24,5,5s-2.24,5-5,5s-5-2.24-5-5S9.24,7,12,7 M12,6c-3.31,0-6,2.69-6,6s2.69,6,6,6s6-2.69,6-6 S15.31,6,12,6L12,6z"
                  ></path>
                </svg>
              </button>
              <p>Youtube Music</p>
            </div>
            <div className="btn_side pt-2 pb-2 pl-5 pr-5 hover:bg-gray-200 rounded-xl cursor-pointer flex items-center">
              <button className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  focusable="false"
                  className="h-6 w-6"
                >
                  <path
                    fill="#FF0000"
                    d="M21.39,13.19c0-0.08,0-0.15,0-0.22c-0.01-0.86-0.5-5-0.78-5.74c-0.32-0.85-0.76-1.5-1.31-1.91 c-0.9-0.67-1.66-0.82-2.6-0.84l-0.02,0c-0.4,0-3.01,0.32-5.2,0.62C9.28,5.4,6.53,5.8,5.88,6.04c-0.9,0.33-1.62,0.77-2.19,1.33 c-1.05,1.04-1.18,2.11-1.04,3.51c0.1,1.09,0.69,5.37,1.02,6.35c0.45,1.32,1.33,2.12,2.47,2.24c0.28,0.03,0.55,0.05,0.82,0.05 c1,0,1.8-0.21,2.72-0.46c1.45-0.39,3.25-0.87,6.97-0.87l0.09,0h0.02c0.91,0,3.14-0.2,4.16-2.07C21.44,15.12,21.41,13.91,21.39,13.19 z"
                  ></path>
                  <path
                    fill="#000"
                    d="M21.99,13.26c0-0.08,0-0.16-0.01-0.24c-0.01-0.92-0.54-5.32-0.83-6.11c-0.34-0.91-0.81-1.59-1.4-2.03 C18.81,4.17,17.99,4.02,17,4l-0.02,0c-0.43,0-3.21,0.34-5.54,0.66c-2.33,0.32-5.25,0.75-5.95,1C4.53,6.01,3.76,6.48,3.16,7.08 c-1.12,1.1-1.25,2.25-1.11,3.74c0.11,1.16,0.73,5.71,1.08,6.75c0.48,1.41,1.41,2.25,2.63,2.38C6.06,19.98,6.34,20,6.63,20 c1.07,0,1.91-0.23,2.89-0.49c1.54-0.41,3.46-0.93,7.41-0.93l0.1,0h0.02c0.97,0,3.34-0.21,4.42-2.2 C22.04,15.32,22.01,14.03,21.99,13.26z M20.59,15.91c-0.82,1.51-2.75,1.68-3.56,1.68l-0.1,0c-4.09,0-6.07,0.53-7.67,0.96 C8.31,18.8,7.56,19,6.63,19c-0.25,0-0.5-0.01-0.76-0.04c-1.04-0.11-1.54-0.99-1.79-1.71c-0.3-0.88-0.91-5.21-1.04-6.53 C2.9,9.25,3.1,8.54,3.86,7.79c0.5-0.5,1.15-0.89,1.97-1.19c0.17-0.06,1.1-0.32,5.74-0.95C14.2,5.29,16.64,5.01,16.99,5 c0.83,0.02,1.43,0.13,2.17,0.69c0.43,0.32,0.79,0.86,1.06,1.58c0.22,0.58,0.76,4.78,0.77,5.77l0.01,0.25 C21.01,13.96,21.04,15.08,20.59,15.91z"
                  ></path>
                  <path
                    fill="#000"
                    d="M11.59,14.76c-0.48,0.36-0.8,0.45-1.01,0.45c-0.16,0-0.25-0.05-0.3-0.08c-0.34-0.18-0.42-0.61-0.5-1.2l-0.01-0.1 c-0.04-0.31-0.26-2.1-0.38-3.16L9.3,9.94C9.26,9.66,9.2,9.19,9.54,8.94c0.32-0.23,0.75-0.09,0.96-0.03c0.53,0.17,3.6,1.23,4.59,1.73 c0.21,0.09,0.67,0.28,0.68,0.83c0.01,0.5-0.38,0.74-0.53,0.82L11.59,14.76z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M10.3,9.89c0,0,0.5,4.08,0.51,4.19c0.06-0.04,3.79-2.58,3.79-2.58C13.71,11.07,11.07,10.14,10.3,9.89z"
                  ></path>
                </svg>
              </button>
              <p>Youtube Kids</p>
            </div>
          </div>
          <hr className="block mt-2 mb-2 " />
          <div className="btns seventh_btns ">
            <div className="btn_side pt-2 pb-2 pl-5 pr-5 hover:bg-gray-200 rounded-xl cursor-pointer flex items-center">
              <button className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
                >
                  <path d="M12 9.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5m0-1c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zM13.22 3l.55 2.2.13.51.5.18c.61.23 1.19.56 1.72.98l.4.32.5-.14 2.17-.62 1.22 2.11-1.63 1.59-.37.36.08.51c.05.32.08.64.08.98s-.03.66-.08.98l-.08.51.37.36 1.63 1.59-1.22 2.11-2.17-.62-.5-.14-.4.32c-.53.43-1.11.76-1.72.98l-.5.18-.13.51-.55 2.24h-2.44l-.55-2.2-.13-.51-.5-.18c-.6-.23-1.18-.56-1.72-.99l-.4-.32-.5.14-2.17.62-1.21-2.12 1.63-1.59.37-.36-.08-.51c-.05-.32-.08-.65-.08-.98s.03-.66.08-.98l.08-.51-.37-.36L3.6 8.56l1.22-2.11 2.17.62.5.14.4-.32c.53-.44 1.11-.77 1.72-.99l.5-.18.13-.51.54-2.21h2.44M14 2h-4l-.74 2.96c-.73.27-1.4.66-2 1.14l-2.92-.83-2 3.46 2.19 2.13c-.06.37-.09.75-.09 1.14s.03.77.09 1.14l-2.19 2.13 2 3.46 2.92-.83c.6.48 1.27.87 2 1.14L10 22h4l.74-2.96c.73-.27 1.4-.66 2-1.14l2.92.83 2-3.46-2.19-2.13c.06-.37.09-.75.09-1.14s-.03-.77-.09-1.14l2.19-2.13-2-3.46-2.92.83c-.6-.48-1.27-.87-2-1.14L14 2z"></path>
                </svg>
              </button>
              <p>Settings</p>
            </div>
            <div className="btn_side pt-2 pb-2 pl-5 pr-5 hover:bg-gray-200 rounded-xl cursor-pointer flex items-center">
              <button className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
                >
                  <path d="m13.18 4 .24 1.2.16.8H19v7h-5.18l-.24-1.2-.16-.8H6V4h7.18M14 3H5v18h1v-9h6.6l.4 2h7V5h-5.6L14 3z"></path>
                </svg>
              </button>
              <p>Report History</p>
            </div>
            <div className="btn_side pt-2 pb-2 pl-5 pr-5 hover:bg-gray-200 rounded-xl cursor-pointer flex items-center">
              <button className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
                >
                  <path d="M15.36 9.96c0 1.09-.67 1.67-1.31 2.24-.53.47-1.03.9-1.16 1.6l-.04.2H11.1l.03-.28c.14-1.17.8-1.76 1.47-2.27.52-.4 1.01-.77 1.01-1.49 0-.51-.23-.97-.63-1.29-.4-.31-.92-.42-1.42-.29-.59.15-1.05.67-1.19 1.34l-.05.28H8.57l.06-.42c.2-1.4 1.15-2.53 2.42-2.87 1.05-.29 2.14-.08 2.98.57.85.64 1.33 1.62 1.33 2.68zM12 18c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-15c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path>
                </svg>
              </button>
              <p>Help</p>
            </div>
            <div className="btn_side pt-2 pb-2 pl-5 pr-5 hover:bg-gray-200 rounded-xl cursor-pointer flex items-center">
              <button className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
                >
                  <path d="M13 14h-2v-2h2v2zm0-9h-2v6h2V5zm6-2H5v16.59l3.29-3.29.3-.3H19V3m1-1v15H9l-5 5V2h16z"></path>
                </svg>
              </button>
              <p>Send feedback</p>
            </div>
          </div>
          <hr className="block mt-2 mb-2 " />
          <div className="btns eighth text-xs ml-4 text-gray-600 font-semibold">
            <div className="line1 flex justify-start gap-3">
              <a href="#">About</a>
              <a href="#">Press</a>
              <a href="#">Copyright</a>
            </div>
            <div className="line2 flex justify-start gap-3">
              <a href="#">Contact us</a>
              <a href="#">Creators</a>
            </div>
            <div className="line3 flex justify-start gap-3">
              <a href="#">Advertise</a>
              <a href="#">Developers</a>
            </div>
            <br />
            <div className="btns ninth ">
              <div className="line line1 flex justify-start gap-3">
                <a href="#">Terms</a>
                <a href="#">Privacy</a>
                <a href="#">Policy & Safety</a>
              </div>
              <div className="line2 flex justify-start gap-3">
                <a href="#">How Youtube works</a>
              </div>
              <div className="line3 flex justify-start gap-3r">
                <a href="#">Test new features</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

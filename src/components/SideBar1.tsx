import { SignIn } from "./signin";

export function SideBar() {
  return (
    <div className="sideBar max-sbh:hidden block text-center mr-10">
      <div className="first_btns max-l:w-[70px]  w-[220px]">
        <div
          className="btn_side flex items-center gap-5 pt-2 pb-2 pl-5 pr-5 bg-gray-200
          hover:bg-gray-200 rounded-xl cursor-pointer max-l:block max-l:text-xxs"
        >
          <button className="">
            <svg
              fill="#fff"
              stroke="#000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="w-7 h-7 "
            >
              <path d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" />
            </svg>
          </button>
          <p>Home</p>
        </div>
        {/*  */}
        <div className="btn_side pt-2 pb-2 pl-5 pr-5 max-l:block max-l:text-xxs flex items-center hover:bg-gray-200 rounded-xl cursor-pointer">
          <button className="">
            <svg
              stroke="black"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 48 48"
              className="w-7 h-7 shorts_svg stroke-2"
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
        <div className="btn_side pt-2 pb-2 pl-5 pr-5 flex items-center hover:bg-gray-200 rounded-xl cursor-pointer max-l:block max-l:text-xxs ">
          <button className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              className="w-7 h-7"
            >
              <path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path>
            </svg>
          </button>
          <p className="">Subscriptions</p>
        </div>
        <hr className="" />
      </div>

      <div className="second_btns max-l:w-[70px] w-[220px]">
        <div className="btn_side pt-2 pb-2 pl-5 pr-5 hover:bg-gray-200 rounded-xl cursor-pointer flex items-center max-l:block max-l:text-xxs">
          <button className="">
            <svg height="24" viewBox="0 0 24 24" width="24" className="h-7 w-7">
              <path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"></path>
            </svg>
          </button>
          <p>History</p>
        </div>
        <div className="btn_side pt-2 pb-2 pl-5 pr-5 hover:bg-gray-200 rounded-xl cursor-pointer flex items-center max-l:block max-l:text-xxs max-l:p-[10px]">
          <button className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
            >
              <path d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"></path>
            </svg>
          </button>
          <p>You</p>
        </div>
        <hr />
        <div className="third_btns max-l:hidden flex flex-col gap-3 justify-around pt-2 pb-2 pl-5 pr-5 w-[220px]  text-start">
          <p>Sign in to like videos, comment, and subscribe.</p>
          <SignIn />
        </div>
        <hr className="max-l:hidden" />
        <div className="fourth_btns max-l:hidden w-[220px]">
          <p className="font-semibold pt-2 pb-2 pl-5 pr-5">Explore</p>
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
            <p>Fashion & Beauty</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { SignIn } from "./signin";

export function AppBar() {
  return (
    <div>
      <div className="flex items-center gap-2 s:justify-between ml-5 ">
        <div className="barNlogo flex  items-center gap-3 w-30 shrink-0">
          <button
            className="hover:bg-gray-200 p-2 rounded-3xl"
            onClick={function () {
              document.querySelector(".sideBar")?.classList.toggle("hidden");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1"
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
        <div className="searchnmic flex items-center ml-20 gap-2 w-1/2 ">
          <div className="searchBar flex justify-end border-0 s:border-2  w-full rounded-3xl m-0 pl-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
              className="w-6 h-6 hidden hidden_search stroke-[1.2] ml-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              type="text"
              className=" border-r-0
              hidden s:block s:border-r-2 outline-0 
              border-r-2 ml-4 p-2  w-full hide_search"
              placeholder="Search"
              onFocus={function (e) {
                e.target
                  ?.closest(".searchnmic")
                  ?.querySelector(".hidden_search")
                  ?.classList.remove("hidden");
              }}
              onBlur={function (e) {
                e.target
                  ?.closest(".searchnmic")
                  ?.querySelector(".hidden_search")
                  ?.classList.add("hidden");
              }}
            />
            <button
              className="sm:hover:bg-gray-100  s:rounded-l-none
            p-2
             rounded-3xl s:pr-4 s:pl-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
          <div className="micdiv bg-[#fff] s:bg-gray-100 rounded-3xl hover:bg-gray-200">
            <button className="max-xxs:pl-0 m-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-mic-fill"
                viewBox="0 0 16 16"
              >
                <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z" />
                <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
              </svg>
            </button>
          </div>
        </div>
        <div className="signinNsettings flex items-center gap-4 ml-2 relative">
          <button
            className="btn_settings active:bg-gray-200 rounded-3xl p-2 transition-color duration-200 ease-in"
            onClick={function () {
              document
                .querySelector(".set_options")
                ?.classList.toggle("hidden");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
            </svg>
          </button>
          <div className="set_options absolute top-[45px] right-[130px] text-md  bg-white flex flex-col rounded-xl shadow-2xl text-[15px] pt-2 pb-2 hidden">
            <div className="opt flex whitespace-nowrap gap-3 p-2 pl-4 pr-4 hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
              >
                <path d="m12 3.06 7 3.21v4.84c0 1.3-.25 2.6-.75 3.86-.15.37-.33.76-.55 1.17-.15.27-.31.54-.48.81-1.32 2.01-3.17 3.42-5.23 3.98-2.06-.56-3.91-1.97-5.23-3.98-.17-.27-.33-.54-.48-.81-.22-.41-.4-.79-.55-1.17-.48-1.26-.73-2.56-.73-3.86V6.27l7-3.21m0-1.1L4 5.63v5.49c0 1.47.3 2.9.81 4.22.17.44.37.86.6 1.28.16.3.34.6.52.88 1.42 2.17 3.52 3.82 5.95 4.44l.12.02.12-.03c2.43-.61 4.53-2.26 5.95-4.43.19-.29.36-.58.52-.88.22-.41.43-.84.6-1.28.51-1.33.81-2.76.81-4.23V5.63l-8-3.67zm1.08 10.15c-.32-.06-.64-.11-.96-.12A2.997 2.997 0 0012 6a2.996 2.996 0 00-.12 5.99c-.32.01-.64.06-.96.12C8.64 12.58 7 14.62 7 17h10c0-2.38-1.64-4.42-3.92-4.89zM10 9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm1.12 4.09c.37-.08.64-.11.88-.11s.51.03.88.11c1.48.3 2.63 1.46 3 2.91H8.12c.37-1.45 1.52-2.61 3-2.91z"></path>
              </svg>
              <p>Your data in Youtube</p>
            </div>
            <div className="opt flex justify-between  p-2 pl-4 pr-4 hover:bg-gray-200 gap-10">
              <div className="flex whitespace-nowrap gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  focusable="false"
                  className="w-6 h-6"
                >
                  <path d="M12 22C10.93 22 9.86998 21.83 8.83998 21.48L7.41998 21.01L8.83998 20.54C12.53 19.31 15 15.88 15 12C15 8.12 12.53 4.69 8.83998 3.47L7.41998 2.99L8.83998 2.52C9.86998 2.17 10.93 2 12 2C17.51 2 22 6.49 22 12C22 17.51 17.51 22 12 22ZM10.58 20.89C11.05 20.96 11.53 21 12 21C16.96 21 21 16.96 21 12C21 7.04 16.96 3 12 3C11.53 3 11.05 3.04 10.58 3.11C13.88 4.81 16 8.21 16 12C16 15.79 13.88 19.19 10.58 20.89Z"></path>
                </svg>
                <p>Appearance: Device theme</p>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
              >
                <path d="m9.4 18.4-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"></path>
              </svg>
            </div>
            <div className="opt flex justify-between  p-2 pl-4 pr-4 hover:bg-gray-200">
              <div className="flex whitespace-nowrap gap-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  focusable="false"
                  className="h-6 w-6"
                >
                  <path d="M13.33 6c-1 2.42-2.22 4.65-3.57 6.52l2.98 2.94-.7.71-2.88-2.84c-.53.67-1.06 1.28-1.61 1.83l-3.19 3.19-.71-.71 3.19-3.19c.55-.55 1.08-1.16 1.6-1.83l-.16-.15c-1.11-1.09-1.97-2.44-2.49-3.9l.94-.34c.47 1.32 1.25 2.54 2.25 3.53l.05.05c1.2-1.68 2.29-3.66 3.2-5.81H2V5h6V3h1v2h7v1h-2.67zM22 21h-1l-1.49-4h-5.02L13 21h-1l4-11h2l4 11zm-2.86-5-1.86-5h-.56l-1.86 5h4.28z"></path>
                </svg>
                <p>Language: English</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
              >
                <path d="m9.4 18.4-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"></path>
              </svg>
            </div>
            <div className="opt flex justify-between  p-2 pl-4 pr-4 hover:bg-gray-200">
              <div className="flex whitespace-nowrap gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  focusable="false"
                  className="w-6 h-6"
                >
                  <path d="M12 20.95Q8.975 20.075 6.987 17.312Q5 14.55 5 11.1V5.7L12 3.075L19 5.7V11.35Q18.775 11.275 18.5 11.2Q18.225 11.125 18 11.075V6.375L12 4.15L6 6.375V11.1Q6 12.575 6.438 13.938Q6.875 15.3 7.625 16.438Q8.375 17.575 9.413 18.425Q10.45 19.275 11.625 19.725L11.675 19.7Q11.8 20 11.975 20.288Q12.15 20.575 12.375 20.825Q12.275 20.85 12.188 20.888Q12.1 20.925 12 20.95ZM17 17Q17.625 17 18.062 16.562Q18.5 16.125 18.5 15.5Q18.5 14.875 18.062 14.438Q17.625 14 17 14Q16.375 14 15.938 14.438Q15.5 14.875 15.5 15.5Q15.5 16.125 15.938 16.562Q16.375 17 17 17ZM17 20Q17.8 20 18.438 19.65Q19.075 19.3 19.5 18.7Q18.925 18.35 18.3 18.175Q17.675 18 17 18Q16.325 18 15.7 18.175Q15.075 18.35 14.5 18.7Q14.925 19.3 15.562 19.65Q16.2 20 17 20ZM17 21Q15.325 21 14.163 19.837Q13 18.675 13 17Q13 15.325 14.163 14.162Q15.325 13 17 13Q18.675 13 19.837 14.162Q21 15.325 21 17Q21 18.675 19.837 19.837Q18.675 21 17 21ZM12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Z"></path>
                </svg>
                <p>Resricted Mode: Off</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
              >
                <path d="m9.4 18.4-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"></path>
              </svg>
            </div>
            <div className="opt flex justify-between  p-2 pl-4 pr-4 hover:bg-gray-200">
              <div className="flex whitespace-nowrap gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  focusable="false"
                  className="h-6 w-6"
                >
                  <path d="M11.99,1.98C6.46,1.98,1.98,6.47,1.98,12s4.48,10.02,10.01,10.02c5.54,0,10.03-4.49,10.03-10.02S17.53,1.98,11.99,1.98z M8.86,14.5c-0.16-0.82-0.25-1.65-0.25-2.5c0-0.87,0.09-1.72,0.26-2.55h6.27c0.17,0.83,0.26,1.68,0.26,2.55 c0,0.85-0.09,1.68-0.25,2.5H8.86z M14.89,15.5c-0.54,1.89-1.52,3.64-2.89,5.15c-1.37-1.5-2.35-3.25-2.89-5.15H14.89z M9.12,8.45 c0.54-1.87,1.52-3.61,2.88-5.1c1.36,1.49,2.34,3.22,2.88,5.1H9.12z M16.15,9.45h4.5c0.24,0.81,0.37,1.66,0.37,2.55 c0,0.87-0.13,1.71-0.36,2.5h-4.51c0.15-0.82,0.24-1.65,0.24-2.5C16.39,11.13,16.3,10.28,16.15,9.45z M20.29,8.45h-4.38 c-0.53-1.97-1.47-3.81-2.83-5.4C16.33,3.45,19.04,5.56,20.29,8.45z M10.92,3.05c-1.35,1.59-2.3,3.43-2.83,5.4H3.71 C4.95,5.55,7.67,3.44,10.92,3.05z M3.35,9.45h4.5C7.7,10.28,7.61,11.13,7.61,12c0,0.85,0.09,1.68,0.24,2.5H3.34 c-0.23-0.79-0.36-1.63-0.36-2.5C2.98,11.11,3.11,10.26,3.35,9.45z M3.69,15.5h4.39c0.52,1.99,1.48,3.85,2.84,5.45 C7.65,20.56,4.92,18.42,3.69,15.5z M13.09,20.95c1.36-1.6,2.32-3.46,2.84-5.45h4.39C19.08,18.42,16.35,20.55,13.09,20.95z"></path>
                </svg>
                <p>Location: India</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
              >
                <path d="m9.4 18.4-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"></path>
              </svg>
            </div>
            <div className="opt flex whitespace-nowrap gap-3  p-2 pl-4 pr-4  hover:bg-gray-200 mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                className="h-6 w-6"
              >
                <path d="M16 16H8v-2h8v2zm0-5h-2v2h2v-2zm3 0h-2v2h2v-2zm-6 0h-2v2h2v-2zm-3 0H8v2h2v-2zm-3 0H5v2h2v-2zm9-3h-2v2h2V8zm3 0h-2v2h2V8zm-6 0h-2v2h2V8zm-3 0H8v2h2V8zM7 8H5v2h2V8zm15-3v14H2V5h20zm-1 1H3v12h18V6z"></path>
              </svg>
              <p>Keyboard shortcuts</p>
            </div>
            <div>
              <hr />
            </div>
            <div className="opt flex whitespace-nowrap gap-3  pt-3 pl-4 pr-4 p-2 mt-1 mb-1 hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                className="h-6 w-6"
              >
                <path d="M12 9.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5m0-1c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zM13.22 3l.55 2.2.13.51.5.18c.61.23 1.19.56 1.72.98l.4.32.5-.14 2.17-.62 1.22 2.11-1.63 1.59-.37.36.08.51c.05.32.08.64.08.98s-.03.66-.08.98l-.08.51.37.36 1.63 1.59-1.22 2.11-2.17-.62-.5-.14-.4.32c-.53.43-1.11.76-1.72.98l-.5.18-.13.51-.55 2.24h-2.44l-.55-2.2-.13-.51-.5-.18c-.6-.23-1.18-.56-1.72-.99l-.4-.32-.5.14-2.17.62-1.21-2.12 1.63-1.59.37-.36-.08-.51c-.05-.32-.08-.65-.08-.98s.03-.66.08-.98l.08-.51-.37-.36L3.6 8.56l1.22-2.11 2.17.62.5.14.4-.32c.53-.44 1.11-.77 1.72-.99l.5-.18.13-.51.54-2.21h2.44M14 2h-4l-.74 2.96c-.73.27-1.4.66-2 1.14l-2.92-.83-2 3.46 2.19 2.13c-.06.37-.09.75-.09 1.14s.03.77.09 1.14l-2.19 2.13 2 3.46 2.92-.83c.6.48 1.27.87 2 1.14L10 22h4l.74-2.96c.73-.27 1.4-.66 2-1.14l2.92.83 2-3.46-2.19-2.13c.06-.37.09-.75.09-1.14s-.03-.77-.09-1.14l2.19-2.13-2-3.46-2.92.83c-.6-.48-1.27-.87-2-1.14L14 2z"></path>
              </svg>
              <p>Settings</p>
            </div>
            <div>
              <hr />
            </div>
            <div className="opt flex whitespace-nowrap gap-3  p-2 pl-4 pr-4 hover:bg-gray-200  mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                className="w-6 h-6"
              >
                <path d="M15.36 9.96c0 1.09-.67 1.67-1.31 2.24-.53.47-1.03.9-1.16 1.6l-.04.2H11.1l.03-.28c.14-1.17.8-1.76 1.47-2.27.52-.4 1.01-.77 1.01-1.49 0-.51-.23-.97-.63-1.29-.4-.31-.92-.42-1.42-.29-.59.15-1.05.67-1.19 1.34l-.05.28H8.57l.06-.42c.2-1.4 1.15-2.53 2.42-2.87 1.05-.29 2.14-.08 2.98.57.85.64 1.33 1.62 1.33 2.68zM12 18c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-15c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path>
              </svg>
              <p>Help</p>
            </div>
            <div className="opt flex whitespace-nowrap gap-3  p-2 hover:bg-gray-200 pl-4 pr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                className="h-6 w-6"
              >
                <path d="M13 14h-2v-2h2v2zm0-9h-2v6h2V5zm6-2H5v16.59l3.29-3.29.3-.3H19V3m1-1v15H9l-5 5V2h16z"></path>
              </svg>
              <p>Send feedback</p>
            </div>
          </div>

          <SignIn />
        </div>
      </div>
    </div>
  );
}

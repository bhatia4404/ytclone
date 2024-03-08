export function SideBar() {
  return (
    <div className="flex flex-col text-xs gap-8 ml-6 mr-5 max-xs:hidden">
      <div className="btn">
        <button className="text-xxs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-7 h-7"
          >
            <path
              fill-rule="evenodd"
              d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
              clip-rule="evenodd"
            />
          </svg>
          <p>Home</p>
        </button>
      </div>
      <div className="btn ">
        <button className="text-xxs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 48 48"
            className="stroke-black stroke-2 w-7 h-7"
          >
            <path
              fill="none"
              d="M29.103,2.631c4.217-2.198,9.438-0.597,11.658,3.577c2.22,4.173,0.6,9.337-3.617,11.534l-3.468,1.823	c2.987,0.109,5.836,1.75,7.328,4.555c2.22,4.173,0.604,9.337-3.617,11.534L18.897,45.37c-4.217,2.198-9.438,0.597-11.658-3.577	s-0.6-9.337,3.617-11.534l3.468-1.823c-2.987-0.109-5.836-1.75-7.328-4.555c-2.22-4.173-0.6-9.337,3.617-11.534	C10.612,12.346,29.103,2.631,29.103,2.631z M19.122,17.12l11.192,6.91l-11.192,6.877C19.122,30.907,19.122,17.12,19.122,17.12z"
            ></path>
            <path
              fill="#000"
              d="M19.122,17.12v13.787l11.192-6.877L19.122,17.12z"
            ></path>
          </svg>
          <p>Shorts</p>
        </button>
      </div>
      <div className="btn mb-4">
        <button className="text-xxs relative">
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
        <p className="block absolute left-2">Subscriptions</p>
      </div>
      <div className="btn">
        <button className="text-xxs">
          <svg height="24" viewBox="0 0 24 24" width="24" className="h-7 w-7">
            <path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"></path>
          </svg>
          <p>History</p>
        </button>
      </div>
    </div>
  );
}

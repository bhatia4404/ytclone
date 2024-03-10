export function SideBtn({ svgSrc, title }: any) {
  return (
    <div className="first_btns">
      <div
        className="btn_side flex items-center gap-5 pt-2 pb-2 pl-5 pr-5
        
          hover:bg-gray-200 rounded-xl cursor-pointer"
      >
        <button className="">
          <svg
            fill="#fff"
            stroke="#000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="w-6 h-6  "
          >
            <path d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" />
          </svg>
        </button>
        <p>Home</p>
      </div>
    </div>
  );
}

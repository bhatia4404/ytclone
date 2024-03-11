import { AnyObject } from "mongoose";

export function CategoryBtns({ categories }: any) {
  const categories1 = [
    {
      key: 1,
      text: "All",
    },
    {
      key: 2,
      text: "Drama",
    },

    { key: 3, text: "Music" },
    { key: 4, text: "Movie Musicals" },
    { key: 5, text: "Live" },
    { key: 6, text: "Gaming" },
    { key: 7, text: "Game Shows" },
    { key: 8, text: "Lo-fi" },
    { key: 9, text: "Bollywood Music" },
    { key: 10, text: "NEET" },
    { key: 11, text: "Cooking Shows" },
    { key: 12, text: "Cars" },
    { key: 13, text: "Hindu" },
    { key: 14, text: "Wickets" },
    { key: 15, text: "Thriller" },
  ];
  return (
    <div className="cat_buttons flex gap-4 mt-2.5 mb-2.5 w-[100%] overflow-hidden col-span-full">
      {categories1.map((cat: any) => (
        <button
          key={cat.key}
          className={`cat_btn bg-gray-100 rounded-md font-semibold whitespace-nowrap pt-1 pb-1 pl-3 pr-3 hover:bg-gray-200 ${
            cat.text === "All" ? "active" : ""
          } mb-5`}
          onClick={function (e) {
            document.body.querySelectorAll(".cat_btn").forEach((btn) => {
              btn.classList.remove("active");
              btn.classList.add("hover:bg-gray-200");
            });
            e.target.classList.add("active");
            e.target.classList.remove("hover:bg-gray-200");
          }}
        >
          {cat.text}
        </button>
      ))}
    </div>
  );
}

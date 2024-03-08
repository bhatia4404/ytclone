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
    { key: 6, text: "Game Shows" },
    { key: 7, text: "Lo-fi" },
    { key: 8, text: "Bollywood Music" },
    { key: 9, text: "NEET" },
    { key: 10, text: "Cooking Shows" },
    { key: 11, text: "Cars" },
    { key: 11, text: "Hindu" },
  ];
  return (
    <div className="cat_buttons flex gap-5 m-2.5 w-auto overflow-hidden">
      {categories1.map((cat: any) => (
        <button
          key={cat.key}
          className="bg-gray-100 rounded-md font-semibold whitespace-nowrap pt-1 pb-1 pl-3 pr-3 hover:bg-gray-200"
        >
          {cat.text}
        </button>
      ))}
    </div>
  );
}

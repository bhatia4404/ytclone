export function SignIn() {
  return (
    <div className="flex flex-nowrap h-9 cursor-pointer  items-center gap-2  border-solid border-2 border-gray-200 p-1 rounded-3xl pr-3 pl-2 mr-3 text-sm w-100 hover:bg-[#065fda1c] max-w-[100px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1"
        stroke="#065fda"
        className="w-7 h-7"
      >
        <path
          // stroke-linecap="round"
          // stroke-linejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
      <div className="text-[#065fda] font-semibold whitespace-nowrap">
        Sign in
      </div>
    </div>
  );
}

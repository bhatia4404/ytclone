export function AppBar() {
  return (
    <div>
      <div className="flex items-center justify-between ml-5">
        <div className="barNlogo flex items-center gap-3">
          <button className="hover:bg-gray-200 p-2 rounded-3xl">
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
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAACUCAMAAABiDq8bAAAAwFBMVEX///8AAAD9ODL8//+xsbH29vb8/PzHx8cVFRX+GhQdHR1AQEDb29vy8vL+zcs4ODiioqKWlparq6srKytcXFwlJSW5ubnr6+v9r636GgZqamrV1dXl5eX+NTaCgoL3NzNTU1N3d3f+1NWKiooNDQ3+KyT/kJD/39/+AABJSUn+nZv/8PD7g37+n5b/wL7+NCz7XVj9PT779+z5xrn+aW3+TEv1dnjx5uX3Rjn7eXP9VlL5amX+6OP6lY79p6L9t7neepJLAAAHTElEQVR4nO2aa3uaSBSARxDQKNFEIwkSkajNxWxJ0nY3bbPp//9XO3POMAxkULCmts+e90MCCMO8zP3CGEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEH8D7CZbfO/ALPd9fr6+urq6rjE1dU1Z+3a2Y3iIUngARGeuWyin27B8Z0yvvFGV/wUuD+tWwxUiDx9er3//CXtXki6b8l+Sb883P/18Qk+GIYQdVqChQwwgLNWu87Lg6T1hiPHEEl2Cr9N9iSdYdvr+4ubbneVWpzLSwuIY6vAZRzH4qfYSlfd7s3N30+2SoQexCsM8GwCZ+N+nXcHs7fuPaN7Gz6wtx9lhf2PdWHFoKWMsy/wBvl7nHatKyXfhjjfyoiNMRfUyp4Hdrd9a1UhupH0+Tor8g5GeohnmHFPa728rjt7J/evO6lz+XuVtHpS9+F4Pq31cpP7wGGGPPMu7i9pvN3TQJw+H2cJj0U8hKodK6XEmHhv8IehYLyEvDKHk8RYWt7F/TXdLdn5F7tjLsYTM/0AYgZ5oDOs+XYn8IPAnx5BZp/wY35mvPFd3L/u6G5Zq6/YynH/BORFGXdGoNEskv2jrQ/t3513Ub7t6h6vvq8x07vMA/cZb+U80BibE6+Kg7jzdHqscI+tqnYuI31QNb0PkZ/zNv0Eiu5Mhe9HEZaLQikuFekG7vxJVz2dHTmOflablwr3uNy5Mbh/O86aeHcBpdyTxX00QUGnHY7n43DmudLXCZMkCScuj6YnDhPP4D5dnHBEQ+GeisOh7s68hFeHXvZel7neTNSQM+/NF92CzY4vK9y76dZ0f/yhOvXYsg1dH/p4tz64TsMRNlujWYQR8+H0RCQTtAdHbYN7u9XpLEdQeYzFYU/v28wG+HEzzwgv8Jo28ZvJ2/YPs+Hq/ONjd1vCP54r9wBikPge2IaYfvO80cb27437yOzOORPuPuSigeYeyvCOZJc5us3fMW8mb9vnZq3uuf30742lOrHmhH9V3VrnBGIZLZYqNYOwpQG+O7tneX6gwjvFfDTX3zFumO3vqtz5cHX9cJOmG6q89C4PZwpvn4LvAEY1J60C3j7ctYwUqFsVZ/U60hl2tbvLc8XHh3RDE7jS3DHzhQP1/SNM9nA6kT1eZx/u88kEk3ogCpGDOT7MLoaNEn6Du/iVua+P1farO1XeXSdP5uVQxMCDWm8kPgsczYM9uIu2M4Lv2xHuOFWQ8JAduDivNXBW7h82uYsbXu6regAFd9mnV9GSkW2rz7KM9uAu2ncfv7IIDgsahLHQQ6jJFnfb5c3g1wp7zZ3Hv5e538L5EI4hISbq8OfdRaOvgoOAR/CYpwVXk23p7tqizjv/bpRf/auFlA9HTzR3aNfRfbp/d3gHDqEgC9QeQkl3c5KqPA/+9svro9FdS/e8zu0X3Nne3du/0F0U+hruOIrhBZsdwt17D3f+f/3j8/Y8z/rYlrWSX+x+FC444f7dbYZ1ndldr+uYv2gpx1/prtHU3aheaOOeq1r4onsWE/ePcd/Yt+EvuqvXt1FxbrUKX+IPdbehT7va0KfV+/O/hbtsXuuyeSzTvbTiemOZw7kPcIozwHnO+v35jWPYDxer2mPYQ7oXOrJNxjJVcxevzeYufhv3BtiVc1arWnNWv026+31B0Mj9unKetslc5eHdsZPfrJ73nysr8m3y2hz14d3hsFEbx9uxbzsuReLahGEwU3CvHsO2t7q7Yp52ozuGAZP22L1tlO6M7boMe2mt7gtZvuSOmRAim2cBzT2pke7TW4O7nCES7rgcJOZHcO6i4YTdzmuRlliLLFB092AWScxWB5h6+ZyVmLqbdDa7i+wbhcuSu+i7BDA3B9NAEQQ387k8XBw03JPystpasM2kX44Lxb3kLod1p0Ef5q1bia/c5140xFULo7tc0fbaqK67jxaeh3Mk2lxlfrHZfB3bPdNrew9M7rhM1Tobz3FcDysp6L68ldfM7piTOz25qFOco+718IOMRTaSUzidnpwvSxqq/8yek6J80V1O1GbMocZ38mvzSvcov2dQcs8n6XGtI9CWZfiNTZPdtV9S2Gt0GefNWmmvET8tbr+Kra5VVi+7s6G2nICVMXOS7MKwup5nSn1aXpOaZHkBlzpcNtXesWy+A812HG2PGfc0b7JS1nKP2dour/mW3bVh1pknV4i9TF217+LyFOs0dHezFZ1xhG3cKA/ck6sRMtn5s/085b2GC7HieT5icz693n/P9xYathaqnyzcWyjWLYpVHY/ecrlsdbSQ5dpMZxZIdRfbO7H57pTf3TrDdI9go81syuRatZAXdbZzAtdhd0Mi9uXw/lF7JNoyObsgVuMnWOENd1iAt3HjiNwsKveUlreUyk2lawc3lbLCntKNTD1PL4VivdyrsSnDyVbs1XPMeCK/Qb2dTVuo7UQQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQh+Q/ZSmyeTVUTxwAAAAASUVORK5CYII="
            alt=""
            className="h-16"
          />
        </div>
        <div className="searchnmic flex items-center max-xs:gap-2 gap-4 w-1/2">
          <div className="searchBar flex max-xxs:justify-end max-xxs:border-0 border-2 w-full rounded-3xl m-0">
            <input
              type="text"
              className=" max-xxs:border-r-0
              max-xxs:hidden
              border-r-2 ml-4 p-1  w-full"
              placeholder="Search"
            />
            <button
              className="p-2 pl-4 pr-4 max-xxs:hover:bg-gray-200
            max-xxs:p-2 max-xxs:rounded-3xl"
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
          <div className="micdiv max-xxs:bg-[#fff] bg-gray-100 rounded-3xl hover:bg-gray-200">
            <button className="max-xxs:pl-0 p-3">
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
        <div className="signinNsettings flex items-center gap-4 ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
            />
          </svg>

          <div className="flex flex-nowrap h-9 cursor-pointer  items-center gap-2  border-solid border-2 border-gray-200 p-1 rounded-3xl pr-3 pl-2 mr-3 text-sm w-100 hover:bg-[#065fda1c] w-100">
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
        </div>
      </div>
    </div>
  );
}

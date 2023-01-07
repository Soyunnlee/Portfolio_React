import mimoji from "../assets/images/laptop_.png";
import reactIcon from "../assets/images/react.png";
import scssIcon from "../assets/images/sass.png";
import jsIcon from "../assets/images/js.png";
import htmlIcon from "../assets/images/html.png";
import cssIcon from "../assets/images/css.png";

//css

export function Footer() {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 ">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
          <img src={mimoji} class="mr-3 h-8" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
            SoyunLee
          </span>
        </a>
        {/* complete */}
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"></ul>
      </div>

      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

      {/* capyright */}
      <div className="CopyRight">
        {/* <div className="flex">
          <img src={reactIcon} className="w-10 " />
          <img src={scssIcon} className="w-10 ml-2" />
          <img src={jsIcon} className="w-10 ml-2" />
          <img src={htmlIcon} className="w-10 ml-2" />
          <img src={cssIcon} className="w-10 ml-2" />
        </div> */}
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400 py-10">
          © 2022 <a href="https://flowbite.com/" class="hover:underline"></a>.
          Lee so yun. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

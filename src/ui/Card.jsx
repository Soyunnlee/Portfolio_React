import { StepperContent } from "../assets/temp";
import { Fade } from "react-reveal";
export function Card({ selectedNum }) {
  return (
    <div>
      <a
        href="#"
        style={{ minHeight: "250px"}}
        class="block max-w-sm p-10  bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-black dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {StepperContent[selectedNum].title}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          {StepperContent[selectedNum].description}
        </p>
      </a>
    </div>
  );
}

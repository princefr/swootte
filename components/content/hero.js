
// //Watch now • Sessions, our virtual conference, is on demand

import { ArrowRightIcon } from "@heroicons/react/solid";
import useLocalization from "../../hooks/useLocalization";

export const Header = () => {
  const localization = useLocalization()
  
  return (
    <div className="py-16 mx-auto sm:max-w-xl  lg:max-w-screen-xl  lg:py-20 space-y-3">
      <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">

            <h2 className="font-sans text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
              {localization.landingPageTitle}   {' '}
              <span className="inline-block relative">
                <span className="relative block text-roud">{localization.landingPageTitle_2}</span>
                </span>
            </h2>
            <p className="text-gray-700 text-base font-montserrat md:text-lg">{localization.HeroDescriptionText}</p>
          </div>
          <div className="">
            <a href="https://play.google.com/store/apps/details?id=com.tinda.android">
              <button className="bg-gray-300 inline-flex p-4 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                <span className="flex flex-row space-x-12 items-center justify-center">
                  {localization.HeroDescriptionButton}
                  <ArrowRightIcon className="h-4 w-4 mx-3"></ArrowRightIcon>
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="flex items-center relative justify-center lg:w-1/2">
            <div className="w-11/12 -ml-16 lg:-ml-32 absolute">
            <img className="object-cover rounded-full" src="images/seth-doyle-zf9_yiAekJs-unsplash.jpg" alt="" />
            </div>
        </div>
      </div>
      <a
        href="/"
        aria-label="Scroll down"
        className="flex items-center justify-center  w-10 h-10 mx-auto text-gray-600 hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 duration-300 transform border border-gray-400 rounded-full hover:shadow hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
          <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
        </svg>
      </a>
    </div>
  );
};
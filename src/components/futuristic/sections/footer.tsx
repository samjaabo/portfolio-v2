import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { WebsiteLogo } from "../svgs";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function Footer() {
  return (
    <footer className=" p-1 sm:p-5 mt-32 h-full w-full">
      <div className="grid grid-cols-1 grid-rows-[repeat(17, minmax(0, auto))] lg:grid-cols-4  lg:grid-rows-[auto_1fr_auto_auto] gap-y-8 gap-x-16 p-3 sm:p-8 bg-soft w-full h-fit rounded-xl  text-xs">
        {/* row 1 */}
        <div className="flex font-bold text-sm">
          <WebsiteLogo></WebsiteLogo>
        </div>
        <div className="items-center uppercase hidden lg:flex">website</div>
        <div className="items-center uppercase  hidden lg:flex">support</div>
        <div className="items-center uppercase  hidden lg:flex">NEWSLETTER</div>
        {/* row 1 */}
        <div className="flex">
          <p className="sm:max-w-1/2 lg:max-w-full max-w-full">
            Whether you're a beginner or an experienced developer, the course
            will guide you through, principles of motion, timeline animation,
            tools, and techniques used by award-winning developers.
          </p>
        </div>
        <div className="flex">
          <ul className="flex flex-col">
            <li className="lg:hidden block font-bold pb-4">website</li>
            <li className="">
              <a href="#" className="hover-underline-link">
                Web Animationsx
              </a>
            </li>
            <li className="">
              <a href="#" className="hover-underline-link">
                Learn Web3D
              </a>
            </li>
            <li className="">
              <a href="#" className="hover-underline-link">
                Creative Code
              </a>
            </li>
          </ul>
        </div>
        <div className="flex ">
          <ul className="flex flex-col ">
            <li className="lg:hidden block font-bold pb-4">support</li>
            <li className="">
              <a href="#" className="hover-underline-link">
                Email
              </a>
            </li>
            <li className="">
              <a href="#" className="hover-underline-link">
                X / Twitter
              </a>
            </li>
            <li className="">
              <a href="#" className="hover-underline-link">
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start lg:items-end gap-4 w-full">
          <div className=" uppercase  lg:hidden block font-bold">
            NEWSLETTER
          </div>
          <p className="sm:max-w-1/2 lg:max-w-full max-w-full">
            Sign up for our newsletter and get the latest updates, news and
            product offers via email.
          </p>
          <div className="flex sm:max-w-1/2 lg:max-w-full max-w-full w-full  ring-0 border-1 border-line-color-soft in-focus-within:border-line-color rounded-xl">
            <input
              required
              autoComplete="email"
              type="email"
              placeholder="Email"
              className="w-full h-full py-3 px-4 outline-none"
            />
            <IoIosArrowDroprightCircle className="h-full w-auto hover:text-line-color text-color transition-colors duration-200" />
          </div>
        </div>
        <div className="w-full h-px border-b bg-transparent border-line-color-soft lg:hidden block"></div>
        {/* row 1 */}
        <div className="flex w-full h-fit lg:col-span-4 justify-center lg:justify-start">
          <ul className="flex flex-row gap-2 ">
            <li className="border border-line-color-soft rounded-full w-8 h-8 aspect-square">
              <FaLinkedin className="w-full h-full p-1.5" />
            </li>
            <li className="border border-line-color-soft rounded-full w-8 h-8 aspect-square">
              <FaInstagram className="w-full h-full p-1.5" />
            </li>
            <li className="border border-line-color-soft rounded-full w-8 h-8 aspect-square">
              <FaYoutube className="w-full h-full p-1.5" />
            </li>
          </ul>
        </div>
        {/* <div className="flex justify-end lg:col-span-2">payements</div> */}
        {/* row 1 */}
        <div className="flex lg:col-span-2 items-baseline lg:justify-start justify-center">
          © StarterBase | {new Date().getFullYear()} | All rights reserved
        </div>
        <div className="flex lg:justify-end lg:col-span-2 uppercase justify-center">
          POWERED BY:{" "}
          <a href="#" className="underline-link">
            StarterBBase
          </a>{" "}
          work
        </div>
      </div>
    </footer>
  );
}

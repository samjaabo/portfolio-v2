import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { WebsiteLogo } from "../svgs";

export default function Footer() {
  return (
    <footer className="flex  p-5 mt-32 h-full w-full">
      <div className="grid grid-cols-4 grid-rows-[auto_1fr_auto_auto] gap-y-8 gap-x-16 p-8 bg-soft w-full h-full min-h-96 rounded-xl  text-xs">
        {/* row 1 */}
        <div className="flex font-bold text-sm">
          <WebsiteLogo></WebsiteLogo>
        </div>
        <div className="flex items-center uppercase">website</div>
        <div className="flex   items-center uppercase">support</div>
        <div className="flex items-center uppercase">NEWSLETTER</div>
        {/* row 1 */}
        <div className="flex">
          <p className="">
            Whether you're a beginner or an experienced developer, the course
            will guide you through, principles of motion, timeline animation,
            tools, and techniques used by award-winning developers.
          </p>
        </div>
        <div className="flex">
          <ul className="flex flex-col">
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
        <div className="flex flex-col items-end gap-4">
          <p className="">
            Sign up for our newsletter and get the latest updates, news and
            product offers via email.
          </p>
          <input
            type="email"
            placeholder="Email"
            className="w-full py-3 px-4 outline-none ring-0 border-1 border-line-color-soft focus:border-line-color rounded-xl"
          />
        </div>
        {/* row 1 */}
        <div className="flex col-span-4">
          <ul className="flex flex-row gap-2">
            <li className="border border-line-color-soft rounded-full w-8 aspect-square">
              <FaLinkedin className="w-full h-full p-1.5"></FaLinkedin>
            </li>
            <li className="border border-line-color-soft rounded-full w-8 aspect-square">
              <FaInstagram className="w-full h-full p-1.5"></FaInstagram>
            </li>
            <li className="border border-line-color-soft rounded-full w-8 aspect-square">
              <FaYoutube className="w-full h-full p-1.5"></FaYoutube>
            </li>
          </ul>
        </div>
        {/* <div className="flex justify-end col-span-2">payements</div> */}
        {/* row 1 */}
        <div className="flex col-span-2 items-baseline">
          © StarterBase | {new Date().getFullYear()} | All rights reserved
        </div>
        <div className="flex justify-end col-span-2 uppercase">
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

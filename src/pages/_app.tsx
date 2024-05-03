import { type AppType } from "next/app";
import Link from "next/link";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <div className=" w-full -z-10">
        <p className="p-2 bg-[#02007F] flex justify-between fixed w-full z-50">
            <span className=" text-white"><Link className="text-white no-underline" href="/">🍓 strobi</Link></span> <img className=" h-6" src="/x.png"></img>
        </p>
      </div>
      <Component {...pageProps} />
      <div>
        <p className="subtext pt-12 pl-12 mb-8 gap-1 opacity-35">
           
           
            
          Inspired by Windows 9x. Font: <Link className="subtext" href="https://arnesava.github.io/w95font/">W95FA</Link>. 2024 Max Jónsbur. <Link className="subtext" href="https://github.com/str0bi/strobi.org">Source Code</Link>
        </p>
      </div>
    </>
  );
};

export default MyApp;

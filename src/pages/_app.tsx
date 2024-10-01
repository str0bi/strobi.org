import { type AppType } from "next/app";
import Link from "next/link";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <div className=" w-full -z-10">
        <div className="p-2 bg-[#02007F] flex justify-between fixed w-full z-50">
            <span className=" text-white"><Link className="text-white no-underline" href="/">🍓 strobi</Link></span>
            <div className="flex gap-1"> 
              <Link href="/wikitemplate"><img className=" h-6" src="/w.png" /></Link> 
            <img className=" h-6" src="/x.png" />
            </div>
        </div>
      </div>
      <Component {...pageProps} />
      <div>
        <p className="subtext pt-12 pl-12 mb-8 gap-1 opacity-35">
           
           
            
          Inspired by Windows 9x. 2024 Iris Jónsbur. Using Tailwind CSS & HTML: <Link className="subtext" href="https://github.com/str0bi/strobi.org">Source Code</Link>
        </p>
      </div>
    </>
  );
};

export default MyApp;

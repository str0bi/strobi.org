import { type AppType } from "next/app";
import Link from "next/link";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <div className=" w-full">
        <p className="p-2 bg-[#02007F] flex justify-between fixed w-full">
            <span className=" text-white">Strobi</span> <img className=" h-6" src="/x.png"></img>
        </p>
      </div>
      <Component {...pageProps} />
      <div>
        <p className="subtext pl-8 mb-8">
          <br /> 
          <br /> 
          <br />  
          Inspired by Windows 9x. <Link className="subtext" href="https://arnesava.github.io/w95font/">Font: W95FA</Link><br />
          2024 Max Jónsbur. <Link className="subtext" href="https://github.com/str0bi/strobi.org">Source Code</Link>
        </p>
      </div>
    </>
  );
};

export default MyApp;

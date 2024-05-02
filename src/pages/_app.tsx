import { type AppType } from "next/app";
import Link from "next/link";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
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

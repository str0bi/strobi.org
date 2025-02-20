import Head from "next/head";
import Link from "next/link";
import React from "react"

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Home</title>
        <link rel="icon" href="images/favicon2.png" />
      </Head>
      <main className="grid h-screen place-items-center">
        <div className="MAIN DIV">

        <div className="flex justify-center pt-5">
          <div className="flex items-center justify-center">

          <div><Link href="https://www.albumoftheyear.org/user/dotlua/">
            <img className=" h-[250px] w-[250px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="./aoty.png"></img></Link>
          </div>

          <div><Link href="https://backloggd.com/u/strobi/">
            <img className=" h-[250px] w-[250px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="./backlog.png"></img></Link>
          </div>

          <div><Link href="/musicimake">
            <img className=" h-[250px] w-[250px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="./music.png"></img></Link>
          </div>

          </div>
        </div>
        </div>
      </main>
    </>
  );
}

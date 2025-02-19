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

        <div><Link href="https://music.apple.com/us/artist/dotlua/1721319453">
            <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="./FF4E6B.png"></img></Link>
        </div>

        <div><Link href="https://open.spotify.com/artist/32vWQqlvkGf2pGepUQwCJb?si=a97fc4c41f934e2f">
            <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="./1DB954.png"></img></Link>
        </div>

        <div><Link href="https://soundcloud.com/dot_lua">
            <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="./F37422.png"></img></Link>
        </div>

        <div><Link href="https://dotlua.bandcamp.com/">
            <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="./629AA9.png"></img></Link>
        </div>

        <div><Link href="https://tidal.com/browse/artist/36667895">
            <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="./000000.png"></img></Link>
        </div>

        <div><Link href="https://music.youtube.com/channel/UC7Y6SQLSYmCSMvFH8bbiKyw">
            <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="./FF0000.png"></img></Link>
        </div>

        <div><Link href="/">
            <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="./FFFFFF.png"></img></Link>
        </div>

        </div>
      </main>
    </>
  );
}

import Head from "next/head"
import Link from "next/link"
import React from "react"

export default function music() {

  return (
    <>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>My Music</title>
        <link rel="icon" href="/images/favicon2.png" />
      </Head>
      <main className="px-12 pt-[80px] cursor-default">

        <p className="pb-5 text-[15px]"><Link className="no-underline" href="/">{"⬅ Back to Home"}</Link></p>
        <h1 className="text-5xl"><strong>🎸 My Music</strong></h1>
      
        <p className="text-2xl pt-8"><strong>🥁 <Link href="https://dotlua.bandcamp.com/">Bandcamp</Link></strong></p>

        <p className="text-2xl"><strong>☁️ <Link href="https://soundcloud.com/dot_lua">SoundCloud</Link></strong></p>

        <p className="text-2xl"><strong>📡 <Link href="https://tidal.com/browse/artist/36667895">Tidal</Link></strong></p>

        <p className="text-2xl"><strong>📶 <Link href="https://open.spotify.com/artist/32vWQqlvkGf2pGepUQwCJb?si=a97fc4c41f934e2f">Spotify</Link></strong></p>

        <p className="text-2xl"><strong>🍎 <Link href="https://music.apple.com/us/artist/dotlua/1721319453">Apple Music</Link></strong></p>

        <p className="text-2xl"><strong>▶️ <Link href="https://music.youtube.com/channel/UC7Y6SQLSYmCSMvFH8bbiKyw">Youtube Music</Link></strong></p>

        
      </main>
    </>
  )
}





 

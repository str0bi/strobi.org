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
      <main className=" px-12 pt-[80px] font-W95font cursor-default">
        <h1 className="text-5xl flex justify-center animate-bounce"><strong>🍓</strong></h1>
        <h1 className="text-5xl flex justify-center animate-ping"><strong>strobi</strong></h1>
          <p className="subtext flex justify-center animate-bounce-slow gap-1">{"Current favorite song:"}</p>
          <p className="subtext flex justify-center animate-bounce-slow gap-1">Oyeme - Mirror Friend</p>          


        <div className="">
        <div className="p-5 flex justify-center flex-col">
        <h2 className="text-3xl mt-12"><strong>✨ Latest Releases from my Record Label</strong></h2>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/71/ae/c3/71aec3ca-41e6-d56a-e363-a03b962fe1c1/7300341852560.jpg/600x600bb.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{<Link href="https://open.spotify.com/album/08Pyd6EIw5YpMmgYAgpwpl?si=LvKYeI7LSMSzWHtSfP5byQ">{"dotLua - What it Takes to Get There"}</Link>}</strong></p>
            <p className="subtext">{"Album • August 14 2024"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/10/a0/30/10a0308b-0d3c-60db-917d-327bf63afdb9/7300341711416.jpg/600x600bb.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{<Link href="https://open.spotify.com/album/6pcpdu9PDu6LbCIMCFazFL?si=ed5d8576ff144d35">{"Veglaus - Mánuðum"}</Link>}</strong></p>
            <p className="subtext">{"Album • July 25 2024"}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/1c/6a/60/1c6a6065-6c72-ada9-c1ee-8c79278ea9d6/7300340861006.jpg/600x600bb.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{<Link href="https://open.spotify.com/album/2xf5yEEtq2GzPS4HFGaZBj?si=44a6bddbc5d54e87">{"Distance - Glasswater"}</Link>}</strong></p>
            <p className="subtext">{"Album • April 25 2024"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/df/43/fb/df43fbb2-908b-9754-1aaa-c93893b1808d/7300340369731.jpg/600x600bb.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{<Link href="https://open.spotify.com/album/4j8VyN6EN8Rgo7UL2233HJ?si=P7cltpeKQq6Xove8hm1R4Q">{"Lily Valor - rearview"}</Link>}</strong></p>
            <p className="subtext">{"Album • March 11 2024"}</p>
          </div>
          </div>

        </div>

        <div className="p-5">
        <h2 className="text-3xl mt-12"><strong>👋 Who am I?</strong></h2>
        <ul className="list-none pb-12 m-0 leading-5">
          <li>{"I'm Iris! You'll hear people around me also call me Sofie."}</li>
          <li className="flex gap-1 items-center">{"I'm asexual and use They/Them or She/Her pronouns."} <img className="align-middle h-4" src="./enbyflag.png"></img> <img className="align-middle h-4" src="./aceflag.png"></img></li>
          <li>{"I have alexithymia, visual snow and aphantasia, all due to my autism I'd guess. I don't have any trauma however, so it's okay to ask about any of these!"}</li>
          <li>{"I like playing games, making music and learning languages. I'm also a (bad) graphic design graduate."}</li>
          <li>{"I'm a native English and Portuguese speaker, and I learn languages for fun. I'm a begginer in Icelandic, Dutch, Finnish and Norwegian, rusty intermediate in toki pona and Spanish, and just started learning Slovenian and Greek."}</li>
          <li>{"I've been to 11 countries: Brazil, Portugal, Catalunya, Italy, Slovenia, Austria, Finland, Estonia, Sweden, The Netherlands and Iceland!"}</li>
        </ul>
           </div>
        </div>
        <div className="flex justify-center">
          <div>
            <h2 className="text-3xl"><strong>🌐 <Link href="/links">My Links</Link></strong></h2>
            <h2 className="text-3xl"><strong>🎸 <Link href="/music">My Music</Link></strong></h2>
            <h2 className="text-3xl"><strong>🎤 <Link href="/artists">Artists I Love</Link></strong></h2>
            <h2 className="text-3xl"><strong>🎮 <Link href="/games">Games I Love</Link></strong></h2>
            <h2 className="text-3xl"><strong>💻 <Link href="/programs">Neat Things I Use</Link></strong></h2>
        </div>
        </div>
      </main>
    </>
  );
}

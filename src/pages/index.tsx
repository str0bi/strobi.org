import Head from "next/head";
import Link from "next/link";

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
        <h1 className="text-5xl flex justify-center animate-bounce"><strong>🍓 strobi</strong></h1>
        
          <p className="subtext flex justify-center animate-bounce gap-1">{"Likely won't update this site for a while, going to Europe for a while!"}</p>

          <p className="subtext flex justify-center gap-1">{"Current favorite song:"}</p>
          <p className="subtext flex justify-center gap-1"><Link href="https://open.spotify.com/track/5wktQ3fg1lRjzUYyy7nu36?si=95d180beb77c4cd3">James Blake, Lil Yachty - Woo</Link></p>          

        <h2 className="text-3xl mt-12"><strong>✨ Latest Label Releases</strong></h2>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/10/a0/30/10a0308b-0d3c-60db-917d-327bf63afdb9/7300341711416.jpg/600x600bb.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{<Link href="https://open.spotify.com/album/6pcpdu9PDu6LbCIMCFazFL?si=ed5d8576ff144d35">{"Mánuðum"}</Link>}</strong></p>
            <p className="subtext">{"Veglaus • Album"}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/1c/6a/60/1c6a6065-6c72-ada9-c1ee-8c79278ea9d6/7300340861006.jpg/600x600bb.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{<Link href="https://open.spotify.com/album/2xf5yEEtq2GzPS4HFGaZBj?si=44a6bddbc5d54e87">{"Glasswater"}</Link>}</strong></p>
            <p className="subtext">{"Distance • Single"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ba/e5/b2/bae5b250-1b4e-0bde-b226-85fb4cb686c7/7300340630039.jpg/600x600bb.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{<Link href="https://open.spotify.com/album/6and6SQJTiZdiQlxMAi0Ro?si=Z1FabwUpS-WDJASn9M7p0Q">{"Doors"}</Link>}</strong></p>
            <p className="subtext">{"dotLua • Single"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/df/43/fb/df43fbb2-908b-9754-1aaa-c93893b1808d/7300340369731.jpg/600x600bb.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{<Link href="https://open.spotify.com/album/4j8VyN6EN8Rgo7UL2233HJ?si=P7cltpeKQq6Xove8hm1R4Q">{"rearview"}</Link>}</strong></p>
            <p className="subtext">{"Lily Valor • Album"}</p>
          </div>
        </div>

        <h2 className="text-3xl mt-12"><strong>👋 Bio</strong></h2>
        <ul className="list-none pb-12 m-0 leading-5">
          <li>{"I'm Iris! You'll hear people around me also call me Sofie."}</li>
          <li className="flex gap-1 items-center">{"I use"} <strong>They/Them</strong> {"or"} <strong>She/Her</strong> {"pronouns!"} <img className="align-middle h-4" src="./enbyflag.png"></img></li>
          <li className="flex gap-1 items-center">{"I am asexual (sex-positive), and poly."} <img className="align-middle h-4" src="https://cdn.discordapp.com/emojis/1175641289874755645.webp?size=96&quality=lossless"></img></li>
          <li>{"I have alexithymia, visual snow and aphantasia, all due to my autism I'd guess. I don't have any trauma however, so it's okay to ask about any of these!"}</li>
          <li>{"I like playing games, making music and learning languages. I'm also a (bad) graphic design graduate."}</li>
          <li>{"I'm a native English and Portuguese speaker, and I'm learning a ton of languages as a hobby, mostly Icelandic, Dutch, Finnish and Greek, as well as just dabbling on toki pona, Norwegian, Japanese, Mandarin, Polish and Macedonian for fun."}</li>
        </ul>
        <h2 className="text-3xl"><strong>🌐 <Link href="/links">My Links</Link></strong></h2>
        <h2 className="text-3xl"><strong>🎸 <Link href="/music">My Music</Link></strong></h2>
        <h2 className="text-3xl"><strong>🎤 <Link href="/artists">Artists I Love</Link></strong></h2>
        <h2 className="text-3xl"><strong>🎮 <Link href="/games">Games I Love</Link></strong></h2>
        <h2 className="text-3xl"><strong>💻 <Link href="/programs">Neat Programs I Use</Link></strong></h2>

      </main>
    </>
  );
}

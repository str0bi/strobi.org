import Head from "next/head"
import Link from "next/link"

export default function programs() {

  return (
    <>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>💻</title>
        <link rel="icon" href="/images/favicon2.png" />
      </Head>
      <main className="px-12 pt-[80px] cursor-default">

      <p className="pb-5 text-[15px]"><Link className="no-underline" href="/">{"⬅ Back to Home"}</Link></p>
        <h1 className="text-5xl"><strong>🎤 Artists I love</strong></h1>

        <p className="text-2xl pt-8"><strong>✨ <Link href="/artists/ambient">Ambient</Link></strong></p>
        <p className="text-2xl"><strong>🚅 <Link href="/artists/garage">Future Garage</Link></strong></p>
        <p className="text-2xl"><strong>🎚️ <Link href="/artists/edm">EDM</Link></strong></p>
        <p className="text-2xl"><strong>🎙️ <Link href="/artists/pop">Pop</Link></strong></p>
        <p className="text-2xl"><strong>🎤 <Link href="/artists/rap">Rap</Link></strong></p>
        <p className="text-2xl"><strong>🎸 <Link href="/artists/acoustic">Acoustic</Link></strong></p>
        <p className="text-2xl"><strong>🎛️ <Link href="/artists/experimental">Experimental</Link></strong></p>  
      </main>
    </>
  )
}
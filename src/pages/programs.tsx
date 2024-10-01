import Head from "next/head"
import Link from "next/link"

export default function programs() {

  return (
    <>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Neat Programs I Use</title>
        <link rel="icon" href="/images/favicon2.png" />
      </Head>
      <main className="px-12 pt-[80px] cursor-default">

      <p className="pb-5 text-[15px]"><Link className="no-underline" href="/">{"⬅ Back to Home"}</Link></p>
        <h1 className="text-5xl"><strong>💻 Neat Things I Use</strong></h1>

        <p className="text-2xl pt-8"><strong>🎛️ <Link href="/programs/music">Music & Sound Design</Link></strong></p>
        <p className="text-2xl"><strong>🎨 <Link href="/programs/design">Art & Graphic Design</Link></strong></p>
        <p className="text-2xl"><strong>🛜 <Link href="/programs/systools">System Tools & Essential Software</Link></strong></p>
        <p className="text-2xl"><strong>🎲 <Link href="/programs/gamedesign">Game Design & Modding</Link></strong></p>
        <p className="text-2xl"><strong>🌎 <Link href="/programs/misc">Miscellaneous</Link></strong></p>  
      </main>
    </>
  )
}
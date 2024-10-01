import Head from "next/head"
import Link from "next/link"

export default function games() {

  return (
    <>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Games I Love</title>
        <link rel="icon" href="/images/favicon2.png" />
      </Head>
      <main className="px-12 pt-[80px] cursor-default">
      <p className="pb-5 text-[15px]"><Link className="no-underline" href="/">{"⬅ Back to Home"}</Link></p>
        <h1 className="text-5xl pb-5"><strong>🎮 My Game Tier List</strong></h1>

        <p className="text-2xl py-4"><strong>Currently going through a major remake.</strong></p>
        
      </main>     
    </>
  )
}
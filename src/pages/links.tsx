import Head from "next/head"
import Link from "next/link"

export default function links() {

  return (
    <>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>🌐</title>
        <link rel="icon" href="/images/favicon2.png" />
      </Head>
      <main className="px-12 pt-[80px] cursor-default">

        <p className="pb-5 text-[15px]"><Link className="no-underline" href="/">{"⬅ Back to Home"}</Link></p>
        <h1 className="text-5xl"><strong>🌐 Social Media and Other Links</strong></h1>

        <p className="text-2xl pt-8"><strong>🦋 <Link href="https://bsky.app/profile/sofiejons.bsky.social">Bluesky</Link></strong></p>

        <p className="text-2xl"><strong>🙋 <Link href="https://spacehey.com/dotlua">SpaceHey</Link></strong></p>

        <p className="text-2xl"><strong>🪡 <Link href="https://www.threads.net/@oldcarbattery">Threads</Link></strong></p>

        <p className="text-2xl"><strong>🐦 <Link href="https://twitter.com/SecondSofie">Twitter</Link></strong></p>

        <p className="text-2xl"><strong>📀 <Link href="https://www.albumoftheyear.org/user/dotlua/">Album of the Year</Link></strong></p>

        <p className="text-2xl"><strong>🕹️ <Link href="https://steamcommunity.com/id/str0bi/">Steam</Link></strong></p>

        <p className="text-2xl"><strong>📌 <Link href="https://www.pinterest.com/oldcarbattery/">Pinterest</Link></strong></p>

        <p className="text-2xl"><strong>🦊 <Link href="https://vrchat.com/home/user/usr_9fd31708-08f6-4fbd-913c-0dc86ded509b">VRChat</Link></strong></p>

        <p className="text-2xl"><strong>☕ <Link href="https://ko-fi.com/dotlua">Ko-Fi</Link></strong></p>

      </main>
    </>
  )
}

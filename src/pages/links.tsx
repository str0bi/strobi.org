import Head from "next/head"
import Link from "next/link"

export default function links() {

  return (
    <>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>My Links</title>
        <link rel="icon" href="/images/favicon2.png" />
      </Head>
      <main className="px-12 pt-[80px] cursor-default">

        <p className="pb-5 text-[15px]"><Link className="no-underline" href="/">{"⬅ Back to Home"}</Link></p>
        <h1 className="text-5xl pb-5"><strong>🌐 My Links</strong></h1>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="./images/link icons/bluesky.png"></img>
          <div>
            <p className="text-2xl"><strong><Link href="https://bsky.app/profile/irisgarage.bsky.social">Bluesky</Link></strong></p>
            <p className="subtext">{"@irisgrarage.bsky.social"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="./images/link icons/spacehey.png"></img>
          <div>
            <p className="text-2xl"><strong><Link href="https://spacehey.com/dotlua">SpaceHey</Link></strong></p>
            <p className="subtext">{"@dotlua"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="./images/link icons/threads.png"></img>
          <div>
            <p className="text-2xl"><strong><Link href="https://www.threads.net/@oldcarbattery">Threads</Link></strong></p>
            <p className="subtext">{"@oldcarbattery"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="./images/link icons/twitter.png"></img>
          <div>
            <p className="text-2xl"><strong><Link href="https://twitter.com/garagemommy">Twitter</Link></strong></p>
            <p className="subtext">{"@garagemommy"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="./images/link icons/aoty.png"></img>
          <div>
            <p className="text-2xl"><strong><Link href="https://www.albumoftheyear.org/user/dotlua/">Album of the Year</Link></strong></p>
            <p className="subtext">{"@dotlua"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="./images/link icons/steam.png"></img>
          <div>
            <p className="text-2xl"><strong><Link href="https://steamcommunity.com/id/garagemommy/">Steam</Link></strong></p>
            <p className="subtext">{"@garagemommy"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="./images/link icons/pinterest.png"></img>
          <div>
            <p className="text-2xl"><strong><Link href="https://www.pinterest.com/oldcarbattery/">Pinterest</Link></strong></p>
            <p className="subtext">{"@oldcarbattery"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="./images/link icons/vrchat.png"></img>
          <div>
            <p className="text-2xl"><strong><Link href="https://vrchat.com/home/user/usr_9fd31708-08f6-4fbd-913c-0dc86ded509b">VRChat</Link></strong></p>
            <p className="subtext">{"@dotLua"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="./images/link icons/kofi.png"></img>
          <div>
            <p className="text-2xl"><strong><Link href="https://ko-fi.com/dotlua">Ko-Fi</Link></strong></p>
            <p className="subtext">{"@dotlua"}</p>
          </div>
        </div>

      </main>
    </>
  )
}

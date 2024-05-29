import Head from "next/head"
import Link from "next/link"

export default function transition() {

  return (
    <>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>🎤</title>
        <link rel="icon" href="/images/favicon2.png" />
      </Head>
      <main className="px-12 pt-[80px] cursor-default">
        <p className="pb-5 text-[15px]"><Link className="no-underline" href="/">{"⬅ Back to Home"}</Link></p>
        <h1 className="text-5xl pb-5"><strong>🎤 Artists I love</strong></h1>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://i.scdn.co/image/ab6761610000517469eea22d7189af21794f3043"></img>
          <div>
            <p className="text-2xl"><strong>{"Fred again.."}</strong></p>
            <p className="subtext">{"🏴󠁧󠁢󠁥󠁮󠁧󠁿 EDM, Future Garage"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://i.scdn.co/image/ab676161000051746e9247ebb1bd90c23fb776fc"></img>
          <div>
            <p className="text-2xl"><strong>{"Sigur Rós"}</strong></p>
            <p className="subtext">{"🇮🇸 Skel, Glóð"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://i.scdn.co/image/ab676161000051748f6940db1be81bf5bbf79ca1"></img>
          <div>
            <p className="text-2xl"><strong>{"Stumbleine"}</strong></p>
            <p className="subtext">{"🏴󠁧󠁢󠁥󠁮󠁧󠁿 Abacus, Will They"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://i.scdn.co/image/ab676161000051744be7334b7aed9ca32a732aeb"></img>
          <div>
            <p className="text-2xl"><strong>{"Burial"}</strong></p>
            <p className="subtext">{"🏴󠁧󠁢󠁥󠁮󠁧󠁿 Antidawn, Near Dark"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://i.scdn.co/image/ab67616100005174dcbf7ddf047dd267e4de8978"></img>
          <div>
            <p className="text-2xl"><strong>Flume</strong></p>
            <p className="subtext">{"🇦🇺 Sirens, Quits"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://i.scdn.co/image/ab67616100005174cccbbec678f12a90ee769d96"></img>
          <div>
            <p className="text-2xl"><strong>{"acloudyskye"}</strong></p>
            <p className="subtext">{"🇺🇸 Safety!, Thief!"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://i.scdn.co/image/ab676161000051746f9e82d21de675bbb6f7dfce"></img>
          <div>
            <p className="text-2xl"><strong>{"QUIET BISON"}</strong></p>
            <p className="subtext">{"🇺🇸 Crash, The Tower"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://i.scdn.co/image/ab676161000051742fa847a71b26afde5da321db"></img>
          <div>
            <p className="text-2xl"><strong>{"Loathe"}</strong></p>
            <p className="subtext">{"🏴󠁧󠁢󠁥󠁮󠁧󠁿 Broken Vision Rhythm, Don't Get Hurt"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://i.scdn.co/image/ab676161000051744688c358a3f82f52b3fb57a5"></img>
          <div>
            <p className="text-2xl"><strong>{"Quadeca"}</strong></p>
            <p className="subtext">{"🇺🇸 EASIER, house settling"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://i.scdn.co/image/ab6761610000e5ebe353428e24c558148bc0060c"></img>
          <div>
            <p className="text-2xl"><strong>{"Swarms"}</strong></p>
            <p className="subtext">{"🏴󠁧󠁢󠁥󠁮󠁧󠁿 The Grid, Self Aware"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://i.scdn.co/image/ab67616100005174b68ee636e35a44f6fc12e723"></img>
          <div>
            <p className="text-2xl"><strong>Ramzoid</strong></p>
            <p className="subtext">{"🇨🇦 spells, international euro cash out"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://i.scdn.co/image/ab676161000051747fde4cd5efd575a28f366a09"></img>
          <div>
            <p className="text-2xl"><strong>{"Emily Hopkins"}</strong></p>
            <p className="subtext">{"🇺🇸 Landline, Willingly"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://i.scdn.co/image/ab67616100005174c99f01f6818e1906750f4090"></img>
          <div>
            <p className="text-2xl"><strong>Vacant</strong></p>
            <p className="subtext">{"🏴󠁧󠁢󠁥󠁮󠁧󠁿 Vesper, Flatline"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://i.scdn.co/image/ab67616100005174eb3e154881ba6cc3e4d4980d"></img>
          <div>
            <p className="text-2xl"><strong>Madeon</strong></p>
            <p className="subtext">{"🇫🇷 Miracle, Hold Me Just Because"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://i.scdn.co/image/ab676161000051740d4ecff3b430374c5d57d686"></img>
          <div>
            <p className="text-2xl"><strong>{"Swans"}</strong></p>
            <p className="subtext">{"🇺🇸 Helpless Child, I Was a Prisoner in Your Skull"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://i.scdn.co/image/ab6761610000517461f92702ca14484aa263a931"></img>
          <div>
            <p className="text-2xl"><strong>{"Skrillex"}</strong></p>
            <p className="subtext">{"🇺🇸 Tears, Bad For Me"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://i.scdn.co/image/ab676161000051741ac12dcb2cc4fc7c740c5e0c"></img>
          <div>
            <p className="text-2xl"><strong>{"Porter Robinson"}</strong></p>
            <p className="subtext">{"🇺🇸 Mirror, Blossom"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://i.scdn.co/image/ab67616100005174f12dce1f08455e9c33503418"></img>
          <div>
            <p className="text-2xl"><strong>{"Sam Gellaitry"}</strong></p>
            <p className="subtext">{"🏴󠁧󠁢󠁳󠁣󠁴󠁿 Viewfinder, Desert Mirage"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://i.scdn.co/image/ab67616100005174dc5f850471101258c1cec04b"></img>
          <div>
            <p className="text-2xl"><strong>{"Kazukii"}</strong></p>
            <p className="subtext">{"🇺🇸 Back to Life, Afraid of the Dark"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://i.scdn.co/image/ab6761610000e5ebb918a33f006ee9d457b74ab7"></img>
          <div>
            <p className="text-2xl"><strong>{"Jónsi"}</strong></p>
            <p className="subtext">{"🇮🇸 Vikur, Eyja"}</p>
          </div>
        </div>

      </main>     
    </>
  )
}
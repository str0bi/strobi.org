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
        <h1 className="text-5xl pb-5"><strong>🎮 Games I Love</strong></h1>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="./images/game icons/the quarry.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"The Quarry"}</strong></p>
            <p className="subtext">{"Singleplayer, Horror, Interactive Movie"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="./images/game icons/detroit become human.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"Detroit: Become Human"}</strong></p>
            <p className="subtext">{"Singleplayer, Action, Adventure"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="./images/game icons/mirror's edge catalyst.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"Mirror's Edge: Catalyst"}</strong></p>
            <p className="subtext">{"Singleplayer, Action, First-Person Parkour"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="./images/game icons/far cry 5.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"Far Cry 5"}</strong></p>
            <p className="subtext">{"Single/Multiplayer, Action, FPS"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="./images/game icons/cyberpunk 2077.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"Cyberpunk 2077"}</strong></p>
            <p className="subtext">{"Singleplayer, Action, RPG"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="./images/game icons/bonelab.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"BONELAB & BONEWORKS"}</strong></p>
            <p className="subtext">{"Singleplayer (Multiplayer Mods), Action, VR FPS/Sandbox"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="./images/game icons/control.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"Control"}</strong></p>
            <p className="subtext">{"Singleplayer, Action, Adventure"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="./images/game icons/life is strange.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"Life is Strange Franchise & Tell Me Why"}</strong></p>
            <p className="subtext">{"Singleplayer, Adventure, Linear Story"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="./images/game icons/spiderman.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"Spider-Man 1 & Miles Morales"}</strong></p>
            <p className="subtext">{"Singleplayer, Action, Adventure"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="./images/game icons/horizon zero dawn.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"Horizon Zero Dawn"}</strong></p>
            <p className="subtext">{"Singleplayer, Action, RPG"}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="./images/game icons/portal.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"Portal Franchise"}</strong></p>
            <p className="subtext">{"Single/Multiplayer (2), Puzzle, Platformer"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="./images/game icons/solar ash.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"Solar Ash"}</strong></p>
            <p className="subtext">{"Singleplayer, Action, Platformer"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="./images/game icons/immortality.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"IMMORTALITY"}</strong></p>
            <p className="subtext">{"Singleplayer, Mystery, 3 Interactive Movies"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="./images/game icons/watch dogs 2.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"Watch_Dogs 2"}</strong></p>
            <p className="subtext">{"Singleplayer, Action, Adventure"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="./images/game icons/steep.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"Steep"}</strong></p>
            <p className="subtext">{"Single/Multiplayer, Action, Sports"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="./images/game icons/naissancee.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"NaissanceE"}</strong></p>
            <p className="subtext">{"Singleplayer, Atmosphere, Exploration"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="./images/game icons/death stranding.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"Death Stranding"}</strong></p>
            <p className="subtext">{"Singleplayer, Action, Adventure"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="./images/game icons/heavy rain.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"Heavy Rain"}</strong></p>
            <p className="subtext">{"Singleplayer, Action, Linear Story"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="./images/game icons/gta v.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"GTA V"}</strong></p>
            <p className="subtext">{"Singleplayer, Action, Adventure"}</p>
          </div>
        </div>
        

      </main>     
    </>
  )
}
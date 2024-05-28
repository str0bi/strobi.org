import Head from "next/head"
import Link from "next/link"

export default function ambient() {

  return (
    <>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>🎤</title>
        <link rel="icon" href="/images/favicon2.png" />
      </Head>
      <main className="px-12 pt-[80px] cursor-default">
        <p className="pb-5 text-[15px]"><Link className="no-underline" href="/artists">{"⬅ Back to Artists"}</Link></p>
        <h1 className="text-5xl pb-5"><strong>✨ Ambient</strong></h1>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover -z-50" src="https://thissongissick.com/wp-content/uploads/2023/02/fred_again_orftv_website_image_dnde_standard-750x421.jpeg"></img>
          <div>
            <p className="text-2xl"><strong>{"Fred again.."}</strong></p>
            <p className="subtext">{"Secret Life = Ambient"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://f4.bcbits.com/img/0033381238_20.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"Burial"}</strong></p>
            <p className="subtext">{"Sprinkled on Discography • Ambient, Experimental, Adjacent to Future Garage"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="http://images.sk-static.com/images/media/img/col4/20170315-032806-345218.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"Hammock"}</strong></p>
            <p className="subtext">{"Entire Discography • Ambient Adjacent to Orchestral"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://www.baltimoresoundstage.com/wp-content/uploads/2021/12/247105774_2316195528523158_2865416146761258270_n.jpeg"></img>
          <div>
            <p className="text-2xl"><strong>{"Loathe"}</strong></p>
            <p className="subtext">{"The Things They Believe = Ambient Adjacent to Orchestral & sprinkles of Jazz"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://img.discogs.com/t9UNGVAL6I9E-ysDvD-p3_eSJUs=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-13352709-1552609667-1100.jpeg.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"How to Disappear Completely"}</strong></p>
            <p className="subtext">{"Entire Discography • Ambient"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://martinyammoller.com/wp-content/uploads/2021/02/emily-hopkins-Question_1-sq-768x767.png"></img>
          <div>
            <p className="text-2xl"><strong>{"Emily Hopkins"}</strong></p>
            <p className="subtext">{"Entire Discography • Ambient primarily focused on Harp"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="http://images.genius.com/99411644adba3b033da97990d608f3ca.814x814x1.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"Laurel Halo"}</strong></p>
            <p className="subtext">{"Entire Discography • Ambient"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://i.scdn.co/image/ab6761610000e5ebb918a33f006ee9d457b74ab7"></img>
          <div>
            <p className="text-2xl"><strong>{"Jónsi"}</strong></p>
            <p className="subtext">{"Obsidian = Ambient Adjacent to Orchestral and Synth Symphony"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="http://www.amuletsmusic.com/img/amulets.png"></img>
          <div>
            <p className="text-2xl"><strong>{"Amulets"}</strong></p>
            <p className="subtext">{"Entire Discography • Ambient, Tape Loops, Adjacent to Noise"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://www.nodefestival.com/assets/Uploads/basinski-1.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"William Basinski"}</strong></p>
            <p className="subtext">{"Entire Discography • Ambient, Experimental, Tape Loops"}</p>
          </div>
        </div>

      </main>     
    </>
  )
}
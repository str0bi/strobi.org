import Head from "next/head"
import Link from "next/link"

export default function rap() {

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
        <h1 className="text-5xl pb-5"><strong>🎤 Rap & Hip Hop</strong></h1>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover -z-50" src="https://iv1.lisimg.com/image/26905549/740full-070-shake.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"070 Shake"}</strong></p>
            <p className="subtext">{"Entire Discography"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://images.discovery-prod.axs.com/2023/04/quadeca_04-07-23_7_642f5ff96e741.png"></img>
          <div>
            <p className="text-2xl"><strong>{"Quadeca"}</strong></p>
            <p className="subtext">{"Entire Discography • Rap, Art Pop, Experimental"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://e.snmc.io/i/1200/s/d2e00fe913e472f4b9444455752621c2/7992637"></img>
          <div>
            <p className="text-2xl"><strong>{"languid.oceans"}</strong></p>
            <p className="subtext">{"Entire Discography • Minimal, Experimental"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover -z-50" src="https://www.okayplayer.com/wp-content/uploads/2022/08/GettyImages-1410771982.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"Kendrick Lamar"}</strong></p>
            <p className="subtext">{"Entire Discography"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://static.wixstatic.com/media/16dfbf_0a1b797158804b0e933485ada9a298be~mv2.jpeg/v1/fill/w_980,h_770,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/16dfbf_0a1b797158804b0e933485ada9a298be~mv2.jpeg"></img>
          <div>
            <p className="text-2xl"><strong>{"Brevin Kim"}</strong></p>
            <p className="subtext">{"Entire Discography • Rap adjacent to Experimental, Emo Rock & Hyperpop"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://lastfm.freetls.fastly.net/i/u/ar0/42ced81dbdbd6973d5c2c69ef0d1cbfc.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"Metro Boomin"}</strong></p>
            <p className="subtext">{"Entire Discography (Producer)"}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://images.genius.com/bed413056914f7e158a46cf013c02853.1000x1000x1.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"Siickbrain"}</strong></p>
            <p className="subtext">{"Entire Discography • Rap & Pop Adjacent to Electronic"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://i1.sndcdn.com/avatars-JFro24yKzLt1HUJ9-aw84HA-t500x500.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"Ramzoid"}</strong></p>
            <p className="subtext">{"Entire Discography • Experimental Hip Hop, Digicore"}</p>
          </div>
        </div>

      </main>     
    </>
  )
}
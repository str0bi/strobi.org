import Head from "next/head"
import Link from "next/link"

export default function pop() {

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
        <h1 className="text-5xl pb-5"><strong>🎙️ Rap & Hip Hop</strong></h1>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover -z-50" src="https://dailychiefers.com/wp-content/media/2021/03/glaive-cypress-grove-gen-f-interview.jpeg"></img>
          <div>
            <p className="text-2xl"><strong>{"glaive"}</strong></p>
            <p className="subtext">{"Entire Discography • Hyperpop"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://mixmag.net/assets/uploads/images/_fullX2/Mount-Kimbie-Web-Layout2.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"Mount Kimbie"}</strong></p>
            <p className="subtext">{"MK3.5: Die Cuts = Pop adjacent to R&B & Experimental"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://img.buzzfeed.com/buzzfeed-static/complex/images/Y19jcm9wLGhfMjMwMix3XzI3ODcseF8yNSx5XzQx/wjpbsf3a2tgqgxwlxax6/aries.jpg?output-format=jpg&output-quality=auto"></img>
          <div>
            <p className="text-2xl"><strong>{"Aries"}</strong></p>
            <p className="subtext">{"Entire Discography • Alt Pop adjacent to Hip Hop"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover -z-50" src="https://yt3.googleusercontent.com/4Ai_zpOMVYZgX5FcQTxx5O6u1PM29I_DaP6WKc_BA9yqNgc8kEAXfcPzeHwdDdStuy39b87vtw=s900-c-k-c0x00ffffff-no-rj"></img>
          <div>
            <p className="text-2xl"><strong>{"brakence"}</strong></p>
            <p className="subtext">{"Entire Discography • Hyperpop heavily adjacent to Math Rock & Glitchpop"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://i.scdn.co/image/b4fbeb08b959ea138e0fa40d34ae4fa2c31213fe"></img>
          <div>
            <p className="text-2xl"><strong>{"Joji"}</strong></p>
            <p className="subtext">{"Entire Discography • Pop Adjacent to Hip Hop"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://shorefire.com/images/uploads/client/LILLIEEIGER-MURAMASA-1.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"Mura Masa"}</strong></p>
            <p className="subtext">{"Entire Discography • Pop Adjacent to Hip Hop, Indie Rock & EDM"}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://i.pinimg.com/originals/8c/59/d7/8c59d70ec47dd0acb950f13f60e856c4.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"twikipedia"}</strong></p>
            <p className="subtext">{"Entire Discography • Hyperpop"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://ksassets.timeincuk.net/wp/uploads/sites/55/2018/04/CHVRCHES-2018-EXCLUSIVE-please-credit-Danny-Clinch.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"CHVRCHES"}</strong></p>
            <p className="subtext">{"Entire Discography • Pop Adjacent to Indie"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://images.genius.com/8343c6165eed187ee35277f5720a379c.801x801x1.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"FROMTHEHEART"}</strong></p>
            <p className="subtext">{"Entire Discography • Hyperpop"}</p>
          </div>
        </div>

      </main>     
    </>
  )
}
import Head from "next/head"
import Link from "next/link"

export default function garage() {

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
        <h1 className="text-5xl pb-5"><strong>🚅 Future Garage</strong></h1>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover -z-50" src="https://thissongissick.com/wp-content/uploads/2023/01/fred-again-e1670593119997-750x417.jpeg"></img>
          <div>
            <p className="text-2xl"><strong>{"Fred again.."}</strong></p>
            <p className="subtext">{"Actual Life 1-3 (some songs)"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover -z-50" src="https://images.genius.com/a9405814f4742369b97206bcf3663ad6.512x512x1.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"Kazukii"}</strong></p>
            <p className="subtext">{"Entire Discography"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://f4.bcbits.com/img/0033381238_20.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"Burial"}</strong></p>
            <p className="subtext">{"Entire Discography (- Ambient songs)"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://lastfm.freetls.fastly.net/i/u/ar0/c52e82dc6e9f9e58bb66da3242c31941.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"Vacant"}</strong></p>
            <p className="subtext">{"Lost Projects Vol. 1, Belong"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://i.discogs.com/7RhRRMiH8Mr3qCcOUcmqgv1v37K7yKwssJsOwnEdOgE/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTI1MTk5/NDMtMTY1MDIyMzA3/NC00Njk3LmpwZWc.jpeg"></img>
          <div>
            <p className="text-2xl"><strong>{"Volor Flex"}</strong></p>
            <p className="subtext">{"Exhale, Blowing Smoke"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://lastfm.freetls.fastly.net/i/u/ar0/c70f2f0788d091fdef98d61c3d27143c.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"Pensees"}</strong></p>
            <p className="subtext">{"Entire Discography"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://artifex.ru/wp-content/uploads/2019/07/QKHvxWhbvN0.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"Menual"}</strong></p>
            <p className="subtext">{"Gravitation, Movement"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://alchetron.com/cdn/clubroot-musician-886c116c-158f-4fd3-a25e-c444ef31b27-resize-750.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"Clubroot"}</strong></p>
            <p className="subtext">{"Entire Discography Adjacent"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 py-2 hover:p-6 ease-out duration-1000">
          <img className=" h-[55px] w-[55px] object-cover scale-90 hover:scale-100 ease-out duration-1000" src="https://lastfm.freetls.fastly.net/i/u/ar0/9950380910e0a6f5c88ff8b9d1283ddb.jpg"></img>
          <div>
            <p className="text-2xl"><strong>{"Aether"}</strong></p>
            <p className="subtext">{"Between Dreams, Nexus"}</p>
          </div>
        </div>

      </main>     
    </>
  )
}
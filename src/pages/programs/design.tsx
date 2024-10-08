import Head from "next/head"
import Link from "next/link"
import React from "react"

export default function design() {

  return (
    <>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Art & Graphic Design</title>
        <link rel="icon" href="/images/favicon2.png" />
      </Head>
      <main className="px-12 pt-[80px] cursor-default">

        <p className="pb-5 text-[15px]"><Link className="no-underline" href="/programs">{"⬅ Back to Programs"}</Link></p>
        <h1 className="text-5xl"><strong>🎨 Art & Graphic Design</strong></h1>
        
        <p className="text-2xl pt-8"><strong><Link href="https://www.figma.com/">Figma</Link></strong></p>
        <p className="subtext">Industry leading design program. Prototype apps and websites smoothly and now turn them into code if you pay (fuck you Adobe you monopolistic purchase monkeys).</p>

        <p className="text-2xl"><strong><Link href="https://krita.org/en/">Krita</Link></strong></p>
        <p className="subtext">Free program for drawing stuff. All my scribbler friends use it and love it, and we use it in uni!</p>

        <p className="text-2xl"><strong><Link href="https://orama-interactive.itch.io/pixelorama">Pixelorama</Link></strong></p>
        <p className="subtext">FOSS pixel art program with all the bells and whistles.</p>

        <p className="text-2xl"><strong><Link href="https://www.gimp.org/">GIMP</Link></strong></p>
        <p className="subtext">Free alternative to Photoshop, lacks some capability but works wonders for its great price of 0 buckaroonies.</p>   

        <p className="text-2xl"><strong><Link href="https://affinity.serif.com/">Affinity Suite</Link></strong></p>
        <p className="subtext">Single payment alternative to Photoshop, InDesign and Illustrator, perfectly as capable but without bloat or AI slop.</p> 

        <p className="text-2xl"><strong><Link href="https://kdenlive.org/">Kdenlive</Link></strong></p>
        <p className="subtext">My video editor of choice. Totally free and open source, and has all you need for a normal video with no AI garbage they do nowadays.</p>   
      </main>
    </>
  )
}



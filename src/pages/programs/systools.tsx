import Head from "next/head"
import Link from "next/link"
import React from "react"

export default function systools() {

  return (
    <>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>System Tools & Essential Software</title>
        <link rel="icon" href="/images/favicon2.png" />
      </Head>
      <main className="px-12 pt-[80px] cursor-default">

        <p className="pb-5 text-[15px]"><Link className="no-underline" href="/programs">{"⬅ Back to Programs"}</Link></p>
        <h1 className="text-5xl"><strong>🛜 System Tools & Essential Software</strong></h1>

        <p className="text-2xl pt-8"><strong><Link href="https://zen-browser.app/">Zen Browser</Link></strong></p>
        <p className="subtext">{"A fork of Firefox with a bunch of privacy enhancements and much prettier Arc-style without losing features from the foxy."}</p>

        <p className="text-2xl"><strong><Link href="https://obsidian.md/">Obsidian</Link></strong></p>
        <p className="subtext">{"A Markdown editor that's incredible for everything from writing books to personal notes or Zettelkastens. For free file syncing use iCloud or Proton Drive."}</p>

        <p className="text-2xl"><strong><Link href="https://learn.microsoft.com/en-us/sysinternals/downloads/tcpview">TCPView</Link></strong></p>
        <p className="subtext">{"Check what any process is doing with your internet connection on your Windows PC."}</p>

        <p className="text-2xl"><strong><Link href="https://www.wireshark.org/">Wireshark</Link></strong></p>
        <p className="subtext">{"Check network traffic more meticulously, this one also for MacOS."}</p>

        <p className="text-2xl"><strong><Link href="https://www.diskanalyzer.com/">WizTree</Link></strong></p>
        <p className="subtext">{"Blazing fast storage analyzer to see what's taking up space in a tree format."}</p>

        <p className="text-2xl"><strong><Link href="https://motrix.app/">Motrix</Link></strong></p>
        <p className="subtext">{"All in one torrent/web downloader. Looks cute and bypasses some speed limits."}</p>

        <p className="text-2xl"><strong><Link href="https://parsec.app/">Parsec</Link></strong></p>
        <p className="subtext">{"Control your PC or laptop from another computer, no matter where you are. There are less gamey alternatives but this one was the most reliable."}</p>

        <p className="text-2xl"><strong><Link href="https://www.malwarebytes.com/">Malwarebytes</Link></strong></p>
        <p className="subtext">{"The only good antivirus left. Free for manual scan."}</p>

        <p className="text-2xl"><strong><Link href="https://www.libreoffice.org/download/download-libreoffice/">LibreOffice</Link></strong></p>
        <p className="subtext">{"All-In-One Suite for all the Microsoft stuff like Word and Excel and all that, but free and fast."}</p>

        <p className="text-2xl"><strong><Link href="https://obsproject.com/">Open Broadcaster Software (OBS)</Link></strong></p>
        <p className="subtext">{"Every streamer uses OBS for a reason. Livestream, and record anything, now with virtual camera."}</p>
      </main>
    </>
  )
}




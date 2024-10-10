import Head from "next/head"
import Link from "next/link"
import React from "react"

export default function WikiTemplate() {
    return (

        <>
        <Head>
          <meta charSet="UTF-8"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <title>Wiki</title>
          <link rel="icon" href="/images/favicon2.png" />
        </Head>


      <div className=" text-gray-800">
        {/* Header */}
        <header className="bg-white bg-opacity-10 shadow pt-[50px]">
          <div className="container mx-auto py-4 px-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">🍓 The Strobi Wiki (EXTREMELY EARLY ALPHA)</h1>
            </div>
          </div>
        </header>
  
        {/* Main content area */}
        <div className="container mx-auto flex py-6 px-6">
          {/* Sidebar */}
          <aside className="w-1/4 pr-6">
            <div className="bg-white bg-opacity-10 rounded-lg shadow-md p-4">
              <h2 className="text-xl font-semibold mb-3">Navigation</h2>
              <ul className="space-y-2">
                <li>
                  <Link className="text-blue-600 hover:underline" href="/">{'Home (strobi.org)'}</Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    {'Lunar Light Point (Not so fast buddy way too early)'}
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
  
          {/* Main content */}
          <main className="w-3/4">
            <article className="bg-white bg-opacity-10 rounded-lg shadow-md p-6">
              <h1 className="text-4xl font-bold mb-4">Oh God, what now?</h1>
              <p className="text-lg leading-7 mb-6">
                This part of the website will house currently awkward lists like my games tier list, and my favorite artists.
              </p>
  
              <h2 className="text-2xl font-semibold mb-3">Why the fuck</h2>
              <p className="text-lg leading-7 mb-6">
                I wanna learn this thang :3
              </p>
  
              <h2 className="text-2xl font-semibold mb-3">History</h2>
              <p className="text-lg leading-7 mb-6">
                2024-10-01: Launched to public
              </p>
  
              <h2 className="text-2xl font-semibold mb-3">See Also</h2>
              <ul className="list-disc list-inside">
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Placeholder
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Placeholder
                  </a>
                </li>
              </ul>
            </article>
          </main>
        </div>
  
        {/* Footer 
        <footer className="bg-white bg-opacity-10 shadow mt-6">
          <div className="container mx-auto py-4 px-6 text-center">
            <p className="text-sm text-gray-600">
              &copy; 2024 My Wikipedia. All rights reserved.
            </p>
          </div>
        </footer>
        */}
      </div>
      </>
    );
  }
  
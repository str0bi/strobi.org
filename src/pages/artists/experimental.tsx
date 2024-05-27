import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>strobi</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <main className=" px-12 pt-[80px] font-W95font cursor-default">

        <h2 className="text-3xl mt-12"><strong>Hold Up!</strong></h2>
        <ul className="list-none pb-5 m-0 leading-5">
          <li>{"This section is a work in progress."}</li>
          <li>{"Come back later!"}</li>
        </ul>

      </main>
    </>
  );
}

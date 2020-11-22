import Head from 'next/head'

export default function Home() {
  return (
    <div className="text-sm min-h-screen bg-light-grayish-blue font-ch px-6 py-10 md:flex md:items-center md:justify-center md:flex-col md:py-24">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />
        <title>Frontend Mentor | Rock, Paper, Scissors</title>
      </Head>

      <footer className="text-center mt-4">
        Challenge by <a className="text-violet underline" href="https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH" target="_blank">Frontend Mentor</a>.
        Coded by <a className="text-violet underline" href="https://twitter.com/alqa7tani">Ahmed AlQahtani</a>.
      </footer>
    </div>
  )
}

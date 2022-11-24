import Head from 'next/head'
import Image from 'next/image'
import React,{ useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import dayjs from 'dayjs';

export default function Home() {
  const [monip, setmonIp] = useState()
  const date = dayjs().format('DD/MM/YYYY');
  const prenom = 'Sassoubella06'

  const link =
	`https://k.schnell-treffen.com/?abc=2ab0b5837e6c2796&xa=n&acme=wid.90642&media=social&tpls=9&v=sexy&userAge=22&userPhotos=53&userPicture=https://i.ibb.co/jWCZ7cp/profil.webp&s1=CASH&s2=` +
	date +
	`&userDistance=7&userName=MISSBELLY`;

  async function getData() {
    const resulta = await fetch('https://ipinfo.io/?token=cb83f69067b70b').then(
      (r) => r.json()
    );
    const ipay = await fetch(`https://api.ipregistry.co/` + resulta.ip + `?key=6nn8zr4k2hcwkw32`).then((r) => r.json());
  
    if (!ipay.carrier.name) {
        setmonIp(`vers ` + ipay.location.city)
      } else {
    }
    }

  useEffect(() => {
    getData()
      
   }, [])
   
  return (
    <>
      <Head>
      <title>{prenom} - Page Privée</title>
	    <meta name="description" content={`Accéder à la page privée de ${prenom} pour consulter sa présentation et ses photos. ${prenom} répond généralement aux messages privés en moins d'une heure.`}/>
      <meta name="og:description" content={`Accéder à la page privée de ${prenom} pour consulter sa présentation et ses photos. ${prenom} répond généralement aux messages privés en moins d'une heure.`}/>
	    <meta name="twitter:description" content={`Accéder à la page privée de ${prenom} pour consulter sa présentation et ses photos. ${prenom} répond généralement aux messages privés en moins d'une heure.`}/>
      <link rel="icon" href="favicon.png" />
	    <meta property="og:image" content="https://i.ibb.co/Yfgbf2J/favicon.png"></meta>
      </Head>

      <main className='lg:w-4/12 lg:m-auto'>
      <h1 className="hidden">{prenom} - Page Privée</h1>
<div className="hidden">	Accéder à la page privée de {prenom} pour consulter sa présentation et ses photos. {prenom} répond généralement aux messages privés en moins d'une heure."
</div>


      <div className="flex justify-center absolute right-0 left-0 top-[10px]">
<div className="tracking-[2px] text-white fade-inn rounded-lg  bg-[#09BC8A]  px-3 py-1 text-center text-xs font-semibold uppercase">
EN LIGNE
</div>
</div>
        <video
          className="m-auto rounded-[20px] w-[80%] mt-5"
          controls
          poster="/poster.webp"
          src="/proof.mp4"
          type="video/mp4"
        ></video>

        <div className="w-[95%] m-auto p-3 py-0 rounded-3xl  text-center  my-4">
          <p className="py-2 font-medium text-lg">
            À la recherche d'un soumis {monip} pour m'amuser un peu ! 😈
            <br></br>
            <br></br>Si tu es prêt à obéir à tous mes désirs inscris toi ici et
            envoie moi un message
            <br></br>
            👇👇👇
          </p>
        </div>

        <a
          href={link}
          className="text-white shake mt-4 bg-gradient-to-r  from-[#800048] to-[#982c69]  border-b-4 border-[#612045]  text-lg font-medium py-5 w-[90%] m-auto flex items-center justify-center rounded-3xl my-2 space-x-4"
        >
          {`>> JE M'ENGAGE À OBÉIR <<`}
        </a>

        <div className="py-4">
          <div className="w-[90%] bg-white m-auto rounded-3xl my-4 shadow-xl">
          <img alt={prenom} src="proof/missbelly.webp" className="rounded-3xl" />
          </div>
          <div className="font-medium text-center text-sm w-[90%] m-auto">
            A savoir, si je montre pas mon visage dans la vidéo c'est que je
            l'ai un peu retouché pour pas trop être reconnue, j'ai un boulot et
            une famille donc je pense que vous comprendrez pourquoi... ^^
          </div>
        </div>

        <div className="w-[95%] m-auto p-3 rounded-3xl my-4 ">
          <h2 className="font-semibold text-[#800048] uppercase">
            Je recherche un mec soumis
          </h2>
          <p className="font-medium py-2 text-sm leading-6">
            Je suis une dominatrice et je cherche mon tout premier soumis
            personnel. <br></br><br></br>Tu peux quitter cette page si ce n'est pas ton truc, mais
            si tu restes, il va falloir m'obéir jusqu'au bout. 😇 Je ne demande
            pas d'argent mais le site sur lequel je suis fonctionne par
            abonnement, du coup je conseille généralement de prendre l'offre
            d'essai à 2 euros ça permet d'avoir accès à tout sans payer plus.<br></br><br></br>
            Mais si tu es un vrai soumis ça ne devrait pas te poser problème de
            toute façon... 😘
          </p>
        </div>

        <div className="w-[95%]  m-auto p-3 rounded-3xl my-4 mt-2 ">
          <h2 className="font-semibold text-o uppercase text-[#800048]">
            Pour ceux qui veulent des plans culs
          </h2>
          <p className="font-medium py-2 text-sm leading-6">
            Perso j'ai pas mal utilisé JM Date pour trouver des plans culs par
            le passé et je sais que y'a plein de filles qui font pareil mais qui
            attendent encore des propositions.<br></br>
            <br></br> Si être soumis n'est pas ton truc n'hésite pas à m'envoyer
            un petit message quand même je pourrai te conseiller 2-3 filles qui
            cherchent des mecs pour s'amuser un peu. 😉
          </p>
        </div>

        <a
          href={link}
          className="text-white shake mt-4 bg-gradient-to-r  from-[#800048] to-[#982c69]  border-b-4 border-[#612045]  text-lg font-medium py-5 w-[90%] m-auto flex items-center justify-center rounded-3xl my-2 space-x-4"
        >
          CLIQUE ICI POUR VOIR MON PROFIL
        </a>

        <div className="w-[95%] m-auto p-3 rounded-3xl mt-6">
          <h2 className="font-semibold text-center text-[#800048]">
            QUELQUES TÉMOIGNAGES
          </h2>
        </div>

        <div className="py-3">
          <div className="w-[85%] bg-white m-auto p-3 rounded-3xl my-2 ">
            <img alt={prenom} src="reviews/rev1.webp" />
          </div>
          <div className="text-center m-auto w-[90%] font-medium ">
            Vous êtes nombreux à avoir pris l'offre d'essai et à en être
            contents apparements ! 😘
          </div>
        </div>

        <div className="py-3">
          <div className="w-[85%] bg-white m-auto p-3 rounded-3xl my-2 ">
            <img alt={prenom} src="reviews/rev2.webp" />
          </div>

          <div className="text-center m-auto w-[90%] font-medium ">
            Pour ceux qui sont sceptiques, testez au moins avec l'offre d'essai,
            vous verrez que ça fonctionne vraiment ! 💯🔥
          </div>
        </div>

        <div className="py-3">
          <div className="w-[85%] bg-white m-auto p-3 rounded-3xl my-2">
            <img alt={prenom} src="reviews/rev3.webp" />
          </div>
          <div className="text-center m-auto w-[90%] font-medium ">
            Ce ne sont pas des escortes, vous pouvez contacter autant de filles
            que vous voulez. 👌
          </div>
        </div>
      </main>

      <footer className='lg:w-4/12 lg:m-auto'>
        <div className="w-[90%] m-auto text-center">
          <div className="text-[#800048] text-center text-xl font-medium my-2">
            Tu veux nous rejoindre ?
          </div>
          <div>
            Super, tu ne le regretteras pas ! 🔥<br></br>
            <br></br>
            Et si tu doutes encore tu peux tester quelques jours avec l'offre
            d'essai ! Il te suffit de cliquer sur le bouton ci-dessous, de
            t'inscrire en une minute puis de choisir une offre !<br></br>👇👇👇
          </div>
        </div>

        <a
          href={link}
          className="text-white shake mt-4 bg-gradient-to-r  from-[#800048] to-[#982c69]  border-b-4 border-[#612045]  text-lg font-medium py-5 w-[90%] m-auto flex items-center justify-center rounded-3xl my-2 space-x-4"
        >
          S'INSCRIRE SUR JM DATE
        </a>
      </footer>
    </>
  );
}



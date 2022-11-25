import Head from 'next/head'
import Image from 'next/image'
import React,{ useState, useEffect, Fragment } from 'react'
import styles from '../styles/Home.module.css'
import dayjs from 'dayjs';

export default function Home() {

  const [monip, setmonIp] = useState()
  const [showme, setShowme] = useState(false)
  const date = dayjs().format('DD/MM/YYYY');
  const prenom = "Sassoubella06";
  const proof = prenom.toLowerCase();
  const titre = `${prenom} - Page Privée`;
  function show() {
    setShowme(true);
  }

  function close() {
    setShowme(false);
  }
  
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
        <title>{titre}</title>
        <script async defer src="https://tools.luckyorange.com/core/lo.js?site-id=5e7fce81"></script>

        <script async src="https://c.opfourpro.com/8/js/script.js?id=wOa6H"></script>
        <meta
          name="description"
          content={`Accéder à la page privée de ${prenom} pour consulter sa présentation et ses photos. ${prenom} répond généralement aux messages privés en moins d'une heure.`}
        />
        <meta
          name="og:description"
          content={`Accéder à la page privée de ${prenom} pour consulter sa présentation et ses photos. ${prenom} répond généralement aux messages privés en moins d'une heure.`}
        />
        <meta
          name="twitter:description"
          content={`Accéder à la page privée de ${prenom} pour consulter sa présentation et ses photos. ${prenom} répond généralement aux messages privés en moins d'une heure.`}
        />
        <link rel="icon" href="favicon.png" />
        <meta
          property="og:image"
          content="https://i.ibb.co/Yfgbf2J/favicon.png"
        ></meta>
      </Head>

      <h1 className="hidden">{prenom}</h1>
      <div className="hidden">
        Accéder à la page privée de {prenom} pour consulter sa présentation et
        ses photos. {prenom} répond généralement aux messages privés en moins
        d'une heure.
      </div>
      <div className="relative lg:w-5/12 lg:m-auto">
        {/* <div className="m-2 rounded-xl pt-2 h-[150px] relative bg-cover bg-banner bg-center backdrop-blur">
          {/* <div className="flex justify-center  absolute w-full">
            <img src="logo.webp" className="w-[140px] " />
          </div> 
          <div className="flex justify-center  absolute -bottom-5 right-5 ">
            <div className=" fade-inn rounded-xl  text-white bg-[#09BC8A] border-[4px] border-[#15161a] px-3 py-1 text-center text-xs font-semibold uppercase">
              EN LIGNE
            </div>
          </div>
        </div> */}

        <div className="flex  mt-2 relative w-full justify-center rounded-full">
        <div className="flex justify-center absolute right-0 left-0 top-[10px]">
<div className="text-white fade-inn rounded-lg  bg-[#09BC8A]  px-3 py-1 text-center text-xs font-semibold uppercase">
EN LIGNE
</div>
</div>
        <video
          className="m-auto rounded-[20px] w-[70%] mt-5"
          controls
          poster="/poster.webp"
          src="/proof2.mp4"
          type="video/mp4"
        ></video>
          {/* <img
            src="/profil.webp"
            alt={prenom}
            className="rounded-full w-[120px] h-[120px] shadow-2xl  border-[5px]  border-[#15161a] "
          /> */}
          {/* <div className="h-6 w-6 rounded-full border-[4px] border-[#15161a] bg-[#09BC8A] absolute bottom-0 right-2"></div> */}
        </div>

        {/* <div className="flex space-x-2 items-center justify-center  w-full mt-2">
          <div className="flex  items-center  justify-center w-full space-x-2">
            <h3 className=" text-white font-semibold text-xl text-center">
              Saraah 🍒
            </h3>
            <img alt={prenom} src="/icons/verified.webp" className=" w-5 h-5" />
          </div>
        </div> */}

        {/* <h3 className=" text-gray-400  text-center">@{prenom}</h3> */}

        <div className="mt-4 flex space-x-2  pt-2 uppercase text-[#d6dce8] justify-center">
          <div className="  font-semibold rounded-[5px] px-2 text-sm">
            🎂 20 ans
          </div>
          <div className=" font-semibold rounded-[5px] px-2 text-sm">
            📍 À 9 km
          </div>
          <div className="font-semibold rounded-[5px] px-2 text-sm">
            🍑 Libertine
          </div>
        </div>

        <div className="text-[#e6e6fa]  w-[90%] m-auto my-4 text-center">
        <p className="py-2 font-medium ">
            À la recherche d'un plan cul vers {monip} pour m'amuser un peu ! 😘
            <br></br>
            <br></br>Si tu es intéressé, inscris toi ici et
            envoie moi un message
            <br></br>
            👇👇👇
          </p>
        </div>

        <div
          onClick={show}
          className="shake  bg-gradient-to-r  from-[#ef476f] to-[#ef476f] border-b-4 border-[#c43b5b] text-white text-lg font-medium py-4 w-[90%] m-auto flex items-center justify-center rounded-3xl my-2 space-x-4"
        >
          {/* <img alt={prenom} src="/icons/chat.webp" className="w-8" /> */}
          <div>{` ME CONTACTER MAINTENANT `}</div>
        </div>

        <div className="w-[90%] bg-white m-auto rounded-2xl my-4 shadow-xl">
          <img
            alt={prenom}
            src={`/proof/direct/` + `${proof}` + `.webp`}
            className="rounded-2xl"
          />
        </div>

        <div className="w-[95%] m-auto p-3 rounded-3xl my-4">
          <h2 className="font-semibold text-[#ef476f]">
            JE NE SUIS PAS UNE ESCORTE !! ❌
          </h2>
          <p className="py-2 text-[#e6e6fa] text-sm">
            Une bonne fois pour toutes, je ne demande <b>pas d'argent,</b> je
            cherche juste des plans culs pour m'amuser un peu, c'est tout.
            <br />
            <br />
            Je préfère généralement les mecs avec <b>
              un peu d'expérience
            </b>{" "}
            mais si tu es puceau, je vais voir ce que je peux faire... 😉
            <br />
            <br /> Par contre les mecs,{" "}
            <b>respect et discrétion obligatoire SVP,</b> sinon je bloque car
            c'est pas ce que je recherche.
          </p>
        </div>

        <div className="w-[95%] m-auto p-3 rounded-3xl my-4 mt-2 ">
          <h2 className="font-semibold text-[#ef476f]">
            COMMENT ME RENCONTRER EN RÉEL ?
          </h2>
          <p className="py-2 text-[#e6e6fa] text-sm">
            Envoie-moi une petite photo sur{" "}
            <span className="text-blue-600 font-medium underline underline-offset-2">
              <a href="#" onClick={show}>
                MyClub en cliquant ici
              </a>
            </span>{" "}
            et <b>dis-moi quand t'es dispo.</b> Je reçois les notifs quand j'ai
            un message, donc habituellement,
            <b> je répond en quelques minutes.</b>
            <br />
            <br />
            Je préviens l'essai coûte quelque chose comme 1 ou 2 euros mais
            ensuite t'es tranquille tu peux contacter
            <b> autant de filles que tu veux.</b>
            <br />
            <br />
            Et au moins, je ne me fais pas harceler comme sur Tinder, Badoo ou
            Snap,
            <b> ça me permet de te parler sans me faire spammer</b> par des
            miliers des gros relous. 😘
          </p>
        </div>

        <div
          onClick={show}
          className="shake bg-gradient-to-r  from-[#ef476f] to-[#ef476f] border-b-4 border-[#c43b5b] text-white text-lg font-medium py-4 w-[90%] m-auto flex items-center justify-center rounded-3xl my-2 space-x-4"
        >
          {/* <img alt={prenom} src="/icons/chat.webp" className="w-8" /> */}
          <div>{` CLIQUE ICI POUR VOIR MON PROFIL `}</div>
        </div>

        {/* <div onClick={show} className="flex justify-center mt-4">
          <div className="bg-[#181818] font-semibold text-white py-3 px-2 w-[50%] text-center border-b-4 border-[#2699f7] flex items-center space-x-2 justify-center">
            <img
              alt={prenom}
              src="/icons/photo.webp"
              className="w-4 -mt-[2px]"
            />
            <p>169 nudes</p>{" "}
          </div>
          <div className="bg-[#181818] font-semibold text-white py-3 px-2 w-[50%] text-center flex items-center space-x-2 justify-center">
            <img
              alt={prenom}
              src="/icons/video.webp"
              className="w-4 -mt-[2px]"
            />
            <p>56 vidéos</p>{" "}
          </div>
        </div>

        <div onClick={show} className="bg-[#1b1b1b] pt-2 px-2">
          <div className="flex space-x-1 px-1">
            <div className="relative m-auto">
              <img
                src="/previews/c1.webp"
                alt={prenom}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className=" relative m-auto">
              <img
                src="/icons/cadenas.svg"
                className="absolute w-8 shadow-2xl right-[25%] left-[25%] m-auto top-[25%] bottom-[25%]"
                alt={prenom}
              />
              <img
                src="/previews/p2.webp"
                alt={prenom}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="flex space-x-1 px-1 py-1">
            <div className="relative m-auto">
              <img
                src="/icons/cadenas.svg"
                className="absolute w-8 shadow-2xl right-[25%] left-[25%] m-auto top-[25%] bottom-[25%]"
                alt={prenom}
              />
              <img
                src="/previews/p3.webp"
                alt={prenom}
                className="rounded-2xl  shadow-2xl"
              />
            </div>
            <div className="relative m-auto">
              <img
                src="/icons/cadenas.svg"
                className="absolute w-8 shadow-2xl right-[25%] left-[25%] m-auto top-[25%] bottom-[25%]"
                alt={prenom}
              />

              <img
                src="/previews/p4.webp"
                alt={prenom}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="flex space-x-1 px-1 ">
            <div className=" relative m-auto">
              <img
                src="/previews/c2.webp"
                alt={prenom}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="relative m-auto">
              <img
                src="/icons/cadenas.svg"
                className="absolute w-8 shadow-2xl right-[25%] left-[25%] m-auto top-[25%] bottom-[25%]"
                alt={prenom}
              />
              <img
                src="/previews/p5.webp"
                alt={prenom}
                className=" rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="flex space-x-1 px-1 pt-1">
            <div className="relative m-aut">
              <img
                src="/icons/cadenas.svg"
                className="absolute w-8 shadow-2xl right-[25%] left-[25%] m-auto top-[25%] bottom-[25%]"
                alt={prenom}
              />
              <img
                src="/previews/p1.webp"
                alt={prenom}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className=" relative m-auto">
              <img
                src="/icons/cadenas.svg"
                className="absolute w-8 shadow-2xl right-[25%] left-[25%] m-auto top-[25%] bottom-[25%]"
                alt={prenom}
              />
              <img
                src="/previews/p5.webp"
                alt={prenom}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div> */}


<div className="w-[95%] m-auto p-3 rounded-3xl mt-6">
          <h2 className="font-semibold text-center text-[#ef476f]">
            QUELQUES TÉMOIGNAGES
          </h2>
        </div>

        <div className="py-3">
          <div className="w-[85%] bg-white m-auto p-3 rounded-3xl my-2 ">
            <img alt={prenom} src="reviews/rev1.webp" />
          </div>
          <div className="text-center m-auto w-[85%] font-medium text-white text-sm">
            Vous êtes nombreux à avoir pris l'offre d'essai et à en être
            contents apparements ! 😘
          </div>
        </div>

        <div className="py-3">
          <div className="w-[85%] bg-white m-auto p-3 rounded-3xl my-2 ">
            <img alt={prenom} src="reviews/rev2.webp" />
          </div>

          <div className="text-center m-auto w-[85%] font-medium text-white text-sm">
            Pour ceux qui sont sceptiques, testez au moins avec l'offre d'essai,
            vous verrez que ça fonctionne vraiment ! 💯🔥
          </div>
        </div>

        <div className="py-3">
          <div className="w-[85%] bg-white m-auto p-3 rounded-3xl my-2">
            <img alt={prenom} src="reviews/rev3.webp" />
          </div>
          <div className="text-center m-auto w-[85%] font-medium text-white text-sm">
            Ce ne sont pas des escortes, vous pouvez contacter autant de filles
            que vous voulez. 👌
          </div>
        </div>
      

      <footer className='lg:w-4/12 lg:m-auto'>
        <div className="w-[90%] m-auto text-center text-white text-sm">
          <div className="text-[#ef476f] text-center text-xl font-medium my-2">
            Tu veux nous rejoindre ?
          </div>
          <div>
            Super, tu ne le regretteras pas ! 🔥<br></br>
            <br></br>
            Et si tu doutes encore tu peux tester quelques jours avec l'offre
            d'essai ! <br></br><br></br>Il te suffit de cliquer sur le bouton ci-dessous, de
            t'inscrire en une minute puis de choisir une offre !<br></br><br></br>👇👇👇
          </div>
        </div>

        <div
          onClick={show}
          className="shake bg-gradient-to-r  from-[#ef476f] to-[#ef476f] border-b-4 border-[#c43b5b] text-white text-lg font-medium py-4 w-[90%] m-auto flex items-center justify-center rounded-3xl my-2 space-x-4"
        >
          {/* <img alt={prenom} src="/icons/chat.webp" className="w-8" /> */}
          <div>{` S'INSCRIRE SUR MYCLUB `}</div>
        </div>

        </footer>



        <div className={`${showme ? "show" : "noshow"}`}>
          <div className="backdrop-brightness-[.15] fixed top-0 h-full w-full text-white lg:w-5/12">
           
            <div className="relative flex justify-center items-center h-screen w-full ">
              <div className="fixed bg-[#1b1c21] w-[95%] m-auto h-[auto] rounded-xl relative">
                {/* <div className='absolute -mt-20 w-full flex justify-center'>
                  <img alt="close" src="icons/close.webp" className="w-12 m-auto" onClick={close} />
                  </div> */}
                <div className="flex  space-x-2 px-1 justify-center mt-2 items-center">
                  <div className="flex justify-center items-center my-2 relative w-[200px] m-auto">
                    <img
                      src="/profil.webp"
                      alt={prenom}
                      className="rounded-[50px]  w-[170px]"
                    />
                    <div className="h-6 w-6 rounded-full border-[4px] border-[#1b1c21] bg-[#09BC8A] absolute bottom-0 right-0"></div>
                  </div>
                  <div className="text-[white] font-medium">
                    Afin de ne parler qu'à des majeurs, {prenom} ne souhaite
                    parler qu'aux hommes inscrits.{" "}
                  </div>
                </div>
                <div id="form"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



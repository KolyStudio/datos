import Head from 'next/head'
import Image from 'next/image'
import React,{ useState, useEffect, Fragment } from 'react'
import styles from '../styles/Home.module.css'
import dayjs from 'dayjs';

export default function Home() {




  const [monip, setmonIp] = useState()
  const [showme, setShowme] = useState(false)
  const date = dayjs().format('DD/MM/YYYY');
  const prenom = "Guapabelly25";

  function show() {
    setShowme(true);
    console.log(showme)
  }
  const titre = `${prenom} - Page Privée`;
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
        <script async src="https://c.opfourpro.com/8/js/script.js?id=pGJdt"></script>
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

        
        <div className="m-2 rounded-xl pt-2 h-[150px] relative bg-cover bg-banner bg-center backdrop-blur">
          <div className='flex justify-center  absolute w-full'>
        <img src="logo.webp" className="w-[140px] " /></div>
          <div className="flex justify-center  absolute -bottom-5 right-5 ">
            <div className=" fade-inn rounded-xl  text-white bg-[#09BC8A] border-[4px] border-[#15161a] px-3 py-1 text-center text-xs font-semibold uppercase">
              EN LIGNE
            </div>
          </div>
        </div>

        <div className="flex  -mt-20 relative w-[125px]  ml-5 border-[5px]  border-[#15161a] rounded-full">
          <img
            src="/profil.webp"
            alt={prenom}
            className="rounded-full w-[120px] h-[120px] shadow-2xl"
          />
          <div className="h-6 w-6 rounded-full border-[4px] border-[#15161a] bg-[#09BC8A] absolute bottom-0 right-2"></div>
        </div>

        <div className="flex space-x-2 items-center justify-between  mx-4 mt-2">
          <div className="flex  items-center space-x-2">
            <h3 className=" text-white font-semibold text-xl text-center">
              Saraah 🍒
            </h3>
            <img alt={prenom} src="/icons/verified.webp" className=" w-5 h-5" />
          </div>
        </div>

        <h3 className=" text-gray-400  ml-4">@{prenom}</h3>

        <div className="flex space-x-2 ml-3 pt-2 uppercase text-[#d6dce8]">
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

        <div className="text-[#e6e6fa]  w-[90%] m-auto text-sm my-4">
          Coucou je m'appelle <b>Sarah, j'ai 22 ans.</b> Je suis passionnée de{" "}
          <b>fitness et de danse.</b> <br></br>
          <br></br> Je suis à la recherche de mecs discrets pour{" "}
          <b>des plans cul réguliers.</b> J'ai un appartement depuis peu, et{" "}
          <b>j'ai très envie de m'amuser.</b> <br></br>
          <br></br> Si tu es <b>intéressé,</b> envoie-moi un message et{" "}
          <b>on s'organise une soirée dans la semaine.</b>
        </div>

        <div
           onClick={show}
          className="  bg-gradient-to-r  from-[#2699f7] to-[#2699f7]  text-white text-lg font-medium py-4 w-[90%] m-auto flex items-center justify-center rounded-2xl my-2 space-x-4"
        >
          <img alt={prenom} src="/icons/chat.webp" className="w-8" />
          <div>{` ENVOIE-MOI UN MESSAGE `}</div>
        </div>

        <div className="w-[90%] bg-white m-auto rounded-2xl my-4 shadow-xl">
          <img
            alt={prenom}
            src={`/proof/direct/` + `${prenom}` + `.webp`}
            className="rounded-2xl"
          />
        </div>

        <div className="w-[95%] m-auto p-3 rounded-3xl my-4">
          <h2 className="font-semibold text-white">
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
          <h2 className="font-semibold text-white">
            COMMENT ME RENCONTRER EN RÉEL ?
          </h2>
          <p className="py-2 text-[#e6e6fa] text-sm">
            Envoie-moi une petite photo sur{" "}
            <span className="text-blue-600 font-medium underline underline-offset-2">
              <a href={link}>My.Club en cliquant ici</a>
            </span>{" "}
            et <b>dis-moi quand t'es dispo.</b> Je reçois les notifs quand j'ai
            un message, donc habituellement,
            <b>je répond en quelques minutes.</b>
            <br />
            <br />
            Je préviens l'essai coûte quelque chose comme 1 ou 2 euros mais
            ensuite t'es tranquille tu peux contacter
            <b>autant de filles que tu veux.</b>
            <br />
            <br />
            Et au moins, je ne me fais pas harceler comme sur Tinder, Badoo ou
            Snap,
            <b>ça me permet de te parler sans me faire spammer</b> par des
            miliers des gros relous. 😘
          </p>
        </div>

        <div
           onClick={show}
          className="bg-gradient-to-r  from-[#2699f7] to-[#2699f7]  text-white text-lg font-medium py-4 w-[90%] m-auto flex items-center justify-center rounded-2xl my-2 space-x-4"
        >
          <img alt={prenom} src="/icons/chat.webp" className="w-8" />
          <div>{` ENVOIE-MOI UN MESSAGE `}</div>
        </div>

        <div  onClick={show} className="flex justify-center mt-4">
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

        <div  onClick={show} className="bg-[#1b1b1b] pt-2 px-2">
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
        </div>

        <div className={`${showme ? "show" : "noshow"}`}>

       
         <div className="backdrop-brightness-[.15] fixed top-0 h-full w-full text-white ">
         <div className="relative flex justify-center items-center h-screen w-screen">
         <div className="fixed bg-[#1b1c21] w-[95%] m-auto h-[auto] rounded-xl">
           <div className="flex  space-x-2 px-1 justify-center mt-2 items-center">
             <div className="flex justify-center items-center my-2 relative w-[200px] m-auto">
               <img src="/profil.webp" alt={prenom} className="rounded-[50px]  w-[170px]" />
               <div className="h-6 w-6 rounded-full border-[4px] border-[#1b1c21] bg-[#09BC8A] absolute bottom-0 right-0"></div>
             </div>
             <div  className="text-[white] font-medium">
               Afin de ne parler qu'à des majeurs, {prenom} ne souhaite parler qu'aux hommes
               inscrits.			</div>
           </div>
           <div className="fade-inn" id="form" />
         </div>
       </div> 
       </div> 

       </div>





      </div>
    </>
  );
}



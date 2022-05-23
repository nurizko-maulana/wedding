import React from 'react';
import ReactHowler from 'react-howler';
import Head from 'next/head';
import { useState, useCallback } from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout/Layout';
// import Resepsi from '../public/assets/icons/resepsi.svg';
import Ring from '../public/assets/icons/ring.svg';

import Location from '../public/assets/icons/location.svg';

import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

import DisqusComments from '@/components/DisqusComments';


// import growOld from '../assets/sound/i-wanna-grow-old-with-you.mp3';

const photos = [
  {
    src: '/assets/gallery-mobile/photo-1.jpg',
    width: 3,
    height: 2,
  },
  {
    src: '/assets/gallery-mobile/photo-2.jpg',
    width: 3,
    height: 1,
  },
  {
    src: '/assets/gallery-mobile/photo-3.jpg',
    width: 4,
    height: 4,
  },
  {
    src: '/assets/gallery-mobile/photo-5.jpg',
    width: 5,
    height: 4,
  },
  {
    src: '/assets/gallery-mobile/photo-6.jpg',
    width: 4,
    height: 4,
  },
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  //Howler Audio

  let audioRef = React.useRef(null);

  const [paused, setPauseStatus] = React.useState(true);
  const handlePlay = () => {
    console.log(`handlePlay`);
  };
  const handlePause = () => {
    console.log(`handlePause`);
  };
  const handleStop = () => {
    console.log(`handleStop`);
  };

  const handlePauseButtonClick = () => {
    //console.log(`handlePauseButtonClick`, audioRef.current);

    audioRef.current.pause();
    console.log(audioRef.current.howlerState());

    // setPauseStatus(true);
  };
  const handlePayButtonClick = () => {
    //audioRef.current.load();

    //console.log(`handlePayButtonClick`, audioRef.current);

    audioRef.current.play();
    console.log(audioRef.current.howlerState());

    //setPauseStatus(false);
  };
  const handleOnLoad = () => {
    console.log(`handleOnLoad`);
    console.log(audioRef.current.howlerState());
  };
  const onLoadError = (err) => {
    console.log(`onLoadError`, err);
  };

  return (
    <div>
      <Head>
        <title>Adhimas & Endah</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        {/* <!-- Favicon --> */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Layout>
        {/* Header Mobile */}
        <section
          id="beranda"
          className="flex items-center lg:hidden bg-cover bg-center  w-full h-screen "
          style={{ backgroundImage: 'url(/assets/endah-138.jpg)' }}
        >
          <div className="flex flex-col w-full relative">
            <div className=" h-full w-full bg-gradient-to-b from-dark-500 to-dark-100 bg-blur-2px"></div>
            <div className="flex flex-col w-full text-white text-center h-auto  px-8 py-3.5 z-10">
              <h4 className="font-great-vibes text-5xl mb-4 mt-6">
                Adhimas & Endah
              </h4>
              <p className="font-habibi -mt-4">10 Maret 2022</p>
              <a href="#resepsi">
                <button
                  className="mt-6 bg-dark-450 hover:bg-dark-500 text-white font-bold py-2 px-4 rounded-full"
                  onClick={handlePayButtonClick}
                >
                  Buka Undangan
                </button>
              </a>
            </div>
          </div>
        </section>
        {/* End Header Mobile */}
        <section
          id="beranda-dekstop"
          className="hidden lg:grid bg-dark-500 py-14 lg:py-0 mb:pb-6 grid-flow-col grid-cols-2 gap-4 row-span-4 h-screen"
        >
          <div className="flex flex-col text-white px-8 pb-20 pt-28 justify-end">
            <div className="flex flex-col text-justify my-auto">
              <p>
                “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
                pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
                cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di
                antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian
                itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum
                yang berpikir.”
              </p>
              <p>( QS. Ar- Rum 21 )</p>
            </div>
            <div className="flex flex-col ">
              <p className="font-habibi">Pernikahan dari</p>
              <h4 className="font-great-vibes text-5xl mb-4 mt-6">
                Adhimas Wahyudi & Endah Sri Lestari SM
              </h4>
              <p className="font-habibi ml-auto"> Rabu legi, 25 Mei 2022</p>
            </div>
          </div>
          <div className="flex w-full relative">
            <Image
              src="/assets/endah-138.jpg"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              quality={100}
              loading="lazy"
            />
          </div>
        </section>
        <section
          id="resepsi"
          className="bg-dark-500 py-14  mb:pb-6 grid grid-flow-row gap-4 row-span-4 h-screen"
        >
          <div className="flex flex-col  w-full relative lg:h-full">
            <div className="absolute h-full w-full bg-dark-450 bg-blur-2px lg:hidden"></div>
            <div className="flex flex-col w-full text-white text-center h-auto  px-8 py-3.5 z-10 lg:my-auto">
              <p className="font-habibi lg:hidden">Pernikahan dari</p>
              <h4 className="font-great-vibes text-5xl lg:text-7xl mb-4 mt-6 ">
                Adhimas & Endah
              </h4>
              <p className="lg:hidden font-habibi ">10 Maret 2022</p>
            </div>
          </div>
          <div className="flex w-full px-8 text-white font-habibi text-sm md:text-base lg:text-xl">
            <div className="flex flex-col w-1/2 text-center px-2 break-words">
              <p>Putra pertama dari</p>
              <p>Bapak ADMO SUDIBYO</p>
              <p>Ibu VIOLITHA NINGSIH (ALM)</p>
            </div>
            <div className="flex flex-col w-1/2 text-center px-2 break-words ">
              <p>Putri pertama dari</p>
              <p>Bapak JUARI RONODIKORO</p>
              <p>Ibu SUMARNI</p>
            </div>
          </div>
          <div className="flex flex-col mx-auto h-40 lg:h-full items-center justify-center w-full px-8">
            <div className="flex flex-col md:flex-row w-full">
              <div className="flex w-full justify-center my-2 h-16 lg:h-20 md:justify-center">
                <Ring className="h-12 md:h-16 w-12 md:w-16  mr-6 my-auto" />
                <div className="flex flex-col text-white font-habibi justify-between h-full">
                  <p className="text-base md:text-lg lg:text-3xl">
                    Akad pernikahan{' '}
                  </p>
                  <p className="text-xs md:text-lg lg:text-3xl">
                    Rabu legi, 25 Mei 2022
                  </p>
                  <p className="text-xs md:text-base lg:text-lg">
                    10:00 wib s/d selesai
                  </p>
                </div>
              </div>

              <div className="flex justify-center w-full my-2 h-16 lg:h-20 md:justify-center">
                <img
                  src="/assets/icons/resepsi.svg"
                  className="h-12 md:h-16 w-12 md:w-16  mr-6 my-auto"
                />
                <div className="flex flex-col text-white font-habibi justify-center h-full">
                  <p className="text-base md:text-lg lg:text-3xl">Resepsi </p>
                  <p className="text-xs md:text-base lg:text-lg">
                    12:30 wib s/d selesai
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="-mt-24 w-full">
          <div className="flex flex-col mx-auto h-32 lg:h-full items-start lg:items-end justify-start w-full px-8">
            <button className="mt-6 px-6 md:px-12 py-2 md:py-3 flex justify-center items-center border-white border rounded-l-full rounded-r-full mx-auto text-white font-habibi text-sm md:text-base">
              <Location className="h-8 md:h-10 w-8 md:w-10 mr-4" />
              Lokasi
            </button>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d368.1709704585785!2d103.39618241611362!3d1.023559793158446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d75b741c9bf92d%3A0xc6050987ce67b1b5!2sGedung%20Paguyuban%20Jawa%20Among%20Mitro!5e0!3m2!1sen!2sid!4v1649968315313!5m2!1sen!2sid"
            width="100%"
            height="400"
          ></iframe>
        </div>
        <section
          id="gallery"
          // className="bg-dark-500 pt-8 md:pt-0 lg:pt-32 pb-24 lg:pb-8 grid grid-flow-row gap-4 grid-rows-7 lg:grid-rows-5 grid-cols-2 lg:grid-cols-3 h-screen px-4 lg:px-8"
          className="bg-dark-500 text-center mb-10 mt-16 pt-8 md:pt-0"
        >
          <h1 className="col-span-2  text-5xl font-great-vibes my-auto mx-auto text-white lg:hidden">
            Gallery
          </h1>
        </section>
        <div>
          <Gallery photos={photos} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
        <section className="">
          <button onClick={handlePauseButtonClick}>pause</button>
          <button onClick={handlePayButtonClick}>play</button>

          <div className="App">
            <ReactHowler
              html5={true}
              preload
              ref={audioRef}
              playing={false}
              onPlay={handlePlay}
              onPause={handlePause}
              onStop={handleStop}
              onLoad={handleOnLoad}
              onLoadError={onLoadError}
              src={'assets/sound/Grow Old.mp3'}
            />
          </div>
        </section>
        <section className="mt-10" id="ucapan">
          <DisqusComments
            post={{ id: 'Adhimas&Endah', title: 'Adhimas&Endah' }}
          />
        </section>
      </Layout>
    </div>
  );
}

"use client";
import { useState } from "react";
import image1 from "./gifs/image1.gif";
import image2 from "./gifs/image2.gif";
import image3 from "./gifs/image3.gif";
import image4 from "./gifs/image4.gif";
import image5 from "./gifs/image5.gif";
import image6 from "./gifs/image6.gif";
import image7 from "./gifs/image7.gif";
import image8 from "./gifs/image8.gif";
import image9 from "./gifs/image9.gif";
import image10 from "./gifs/image10.gif";
import image11 from "./gifs/image11.gif";
import image12 from "./gifs/image12.gif";
import image13 from "./gifs/image13.gif";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const gifList = [
    "https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif", // Default
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
  ];

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No 🙅‍♀️",
      "Are you sure? 🤔",
      "What if I asked really nicely? 🥺👉👈",
      "Na Bujji Kada please 🥹💗",
      "PLEASE Ra Nanna 🙏🥹",
      ":*( 🥺💔",
      "Nuv kadante Nenu Chachipotaaa 💀😵",
      "Nenu Chachipoyaa epatikina opukuno Nanna 💀 👻",
      "please Nannaa 🥹❤️",
      ":(((( 😭",
      "PLEASE..... 🥺💞",
      "Last chance… promise I won’t annoy (maybe) 🥺😅",
      "No :( 🥲",
      "Na Bujji Kada please 🥹💗"
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  // Logic to cycle/clamp GIFs
  // We have 1 default + 7 local GIFs = 8 total states effectively if we include default as 0
  // But usually the first "No" click changes the image.
  // Let's create a list that includes the local imports. 
  // Wait, direct paths like "/src/gifs/..." might work in Vite dev but importing is safer.

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">I love you Chitti Panduuuuuu!! ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src={gifList[Math.min(noCount, gifList.length - 1)]}
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

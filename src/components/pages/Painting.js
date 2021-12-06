import React from 'react';
import painting from '../../assets/images/paintingafter.png';
import paintingbefore from '../../assets/images/paintingbefore.png';
import paint from '../../assets/images/dapainting.png';
export default function Painting() {
  return (
    <div className="bg-white">
      <div className="pr-2 pt-2">
        <h1 className="bg-red-800 text-white text-lg animate-bounce font-black hover:underline font-mono">
          PAINTING SERVICES
          <p className="text-base animate-pulse">Paint, Stain, Spray & More</p>
        </h1>
        <p className="text-black leading-loose text-center font-black font-mono">
          A fresh coat of paint can breathe life into any room, exterior or piece of furniture.
          Whether you have an indoor or outdoor paint job, I can help. I know what makes a great
          paint job. And it's my mission to deliver the level of detail and professionalism that you
          expect and deserve.
        </p>
      </div>
      <div className="grid grid-cols-2 bg-white">
        <div className="pt-2 pr-2">
          <h1 className="bg-red-800 text-white text-lg font-mono font-black">
            Crown Molding & Trim Painting
          </h1>
        </div>
        <div className="pr-2 pt-2">
          <h1 className="bg-red-800 text-white text-lg font-mono font-black">
            Deck Staining, Painting & Finishing
          </h1>
        </div>
        <div className="pt-2 pr-2">
          <h1 className="bg-red-800 text-white text-lg font-mono font-black">Door Painting</h1>
        </div>
        <div className="pt-2 pr-2">
          <h1 className="bg-red-800 text-white text-lg font-mono font-black">Door Painting</h1>
        </div>
        <div className="pr-2 pt-2">
          <h1 className="bg-red-800 text-white text-lg font-mono font-black">
            Furniture Painting & Staining
          </h1>
        </div>
        <div className="pt-2">
          <h1 className="bg-red-800 text-white text-lg font-mono font-black">
            Furniture Painting & Staining
          </h1>
        </div>
      </div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
        <div class="rounded overflow-hidden shadow-lg bg-white">
          <img className="w-full" alt="logo" src={painting} />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-red-700">Painting</div>
            <p class="text-black text-base">Before</p>
          </div>
        </div>
        <div class="rounded overflow-hidden shadow-lg bg-white">
          <img className="w-full" alt="logo" src={paintingbefore} />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-red-700">Painting</div>
            <p class="black text-base">After</p>
          </div>
        </div>
        <div class="rounded overflow-hidden shadow-lg bg-white">
          <img className="w-full" alt="logo" src={paint} />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-red-700">Painting</div>
            <p class="text-black text-base">Painting</p>
          </div>
        </div>
      </div>
    </div>
  );
}

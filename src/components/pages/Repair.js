import React from 'react';
import s from '../../assets/images/tile.png';
import t from '../../assets/images/tilethree.png';
import k from '../../assets/images/toiletstart.png';
import o from '../../assets/images/toilet.png';
export default function Repair() {
  return (
    <div className="bg-white">
      <div className="pr-2 pt-2">
        <h1 className="bg-red-800 text-white text-lg hover:underline font-black animate-bounce">
          HOME REPAIR SERVICES
          <p className="animate-pulse text-base">Toilets, Screen Doors, Drywall, Tile & More</p>
        </h1>
        <p className="text-black leading-normal text-center font-mono font-black ">
          When stuff breaks, I fix it. I can save you the time and money it would otherwise cost to
          find and install a replacement for your broken fixtures and household items. I believe in
          a convenient, one-call solution where one call can get me on the way to fixing whatever
          you need fixed.
        </p>
      </div>
      <div className="grid grid-cols-3 bg-white ">
        <div className="pt-2 pr-2">
          <h1 className="bg-red-800 text-white text-lg font-black">Baby Proofing</h1>
          <p className="text-black leading-normal  text-center font-mono"></p>
        </div>
        <div className="pr-2 pt-2">
          <h1 className="bg-red-800 text-white text-lg font-black">
            Countertop Installation & Repair
          </h1>
          <p className="text-black leading-normal text-center font-mono"></p>
        </div>
        <div className="pr-2 pt-2">
          <h1 className="bg-red-800 text-white text-lg font-black">Crown Molding Installation</h1>
          <p className="text-black leading-normal text-center font-mono"></p>
        </div>
        <div className="pt-2 pr-2">
          <h1 className="bg-red-800 text-white text-lg font-black">Door Installation</h1>
          <p className="text-black leading-normal text-center font-mono"></p>
        </div>
        <div className="pr-2 pt-2">
          <h1 className="bg-red-800 text-white text-lg font-black">Gutter Guard Installation</h1>
          <p className="text-black leading-normal text-center font-mono"></p>
        </div>
        <div className="pt-2 pr-2">
          <h1 className="bg-red-800 text-white text-lg font-black">
            Handrail & Stairs Installation
          </h1>
          <p className="text-black leading-normal text-center font-mono"></p>
        </div>
        <div className="pt-2 pr-2">
          <h1 className="bg-red-800 text-white text-lg font-black">TV Wall Mount</h1>
          <p className="text-black leading-normal text-center font-mono"></p>
        </div>
        <div className="pt-2 pr-2">
          <h1 className="bg-red-800 text-white text-lg font-black">
            Cabinet Installation & Repair
          </h1>
          <p className="text-black leading-normal text-center font-mono"></p>
        </div>
        <div className="pt-2 pr-2">
          <h1 className="bg-red-800 text-white text-lg font-black">Blackboard Installation</h1>
          <p className="text-black leading-normal text-center font-mono"></p>
        </div>
        <div className="pt-2 pr-2">
          <h1 className="bg-red-800 text-white text-lg font-black">Basketball Hoop Installation</h1>
          <p className="text-black leading-normal text-center font-mono"></p>
        </div>
        <div className="pt-2 pr-2">
          <h1 className="bg-red-800 text-white text-lg font-black">Window Installation & Repair</h1>
          <p className="text-black leading-normal text-center font-mono"></p>
        </div>
        <div className="pt-2 pr-2">
          <h1 className="bg-red-800 text-white text-lg font-black">Shelving Installation</h1>
          <p className="text-black leading-normal text-center font-mono"></p>
        </div>
      </div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 ">
        <div className="rounded overflow-hidden shadow-lg bg-white">
          <img className="w-full" alt="logo" src={s} />
          <div className="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-red-700">Installation</div>
            <p className="text-black text-base">Before</p>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg bg-white">
          <img className="w-full " alt="logo" src={t} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-red-700">Installation</div>
            <p className="black text-base">After</p>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg bg-white">
          <img className="w-full" alt="logo" src={k} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-red-700">Installation</div>
            <p className="text-black text-base">Before</p>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg bg-white">
          <img className="w-full" alt="logo" src={o} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-red-700">Installation</div>
            <p className="text-black text-base"> After</p>
          </div>
        </div>
      </div>
    </div>
  );
}

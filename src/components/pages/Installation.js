import React from 'react';
import sink from '../../assets/images/sink.png';
import done from '../../assets/images/sinkdone.png';
import handle from '../../assets/images/doorh.png';

export default function Installation() {
  return (
    <div className="bg-white ">
      <div className="pr-2 pt-2 ">
        <h1 className="bg-red-800 text-white font-black text-lg hover:underline font-mono animate-bounce">
          INSTALLATION SERVICES
          <p className="text-base animate-pulse">Flooring, Vanities, Cabinets, Doors & More</p>
        </h1>
        <p className="text-black leading-normal text-center font-black font-mono ">
          Out with the old and in with Jeff.I am an experienced home improvement professional
          install household fixtures, floors, windows, doors, countertops, crown molding and more.
          Whatever you need installed in your home, I will get the job done right and on time.
        </p>
      </div>
      <div className="grid grid-cols-3 bg-white font-mono">
        <div className="pt-2 pr-2">
          <h1 className="bg-red-800 text-white text-lg font-mono font-black">Baby Proofing</h1>
        </div>
        <div className="pr-2 pt-2">
          <h1 className="bg-red-800 text-white text-lg font-mono font-black">
            Countertop Installation & Repair
          </h1>
        </div>
        <div className="pr-2 pt-2">
          <h1 className="bg-red-800 text-white text-lg font-mono font-black">
            Crown Molding Installation
          </h1>
        </div>
        <div className="pt-2 pr-2">
          <h1 className="bg-red-800 text-white text-lg font-mono font-black">Door Installation</h1>
        </div>
        <div className="pr-2 pt-2">
          <h1 className="bg-red-800 text-white text-lg font-mono font-black">
            Gutter Guard Installation
          </h1>
        </div>
        <div className="pt-2 pr-2">
          <h1 className="bg-red-800 text-white text-lg font-mono font-black">
            Handrail & Stairs Installation
          </h1>
        </div>
        <div className="pt-2 pr-2">
          <h1 className="bg-red-800 text-white text-lg font-mono font-black">TV Wall Mount</h1>
        </div>
        <div className="pt-2 pr-2">
          <h1 className="bg-red-800 text-white text-lg font-mono font-black">
            Cabinet Installation & Repair
          </h1>
        </div>
        <div className="pt-2 pr-2">
          <h1 className="bg-red-800 text-white text-lg font-mono font-black">
            Blackboard Installation
          </h1>
        </div>
        <div className="pt-2 pr-2">
          <h1 className="bg-red-800 text-white text-lg font-mono font-black">
            Basketball Hoop Installation
          </h1>
        </div>
        <div className="pt-2 pr-2">
          <h1 className="bg-red-800 text-white text-lg font-mono font-black">
            Window Installation & Repair
          </h1>
        </div>
        <div className="pt-2 pr-2">
          <h1 className="bg-red-800 text-white text-lg font-mono font-black">
            Shelving Installation
          </h1>
        </div>
      </div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 ">
        <div class="rounded overflow-hidden shadow-lg bg-white">
          <img className="w-full" alt="logo" src={sink} />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-red-700">Installation</div>
            <p class="text-black text-base">Before</p>
          </div>
        </div>
        <div class="rounded overflow-hidden shadow-lg bg-white">
          <img className="w-full h-1/2" alt="logo" src={done} />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-red-700">Installation</div>
            <p class="black text-base">After</p>
          </div>
        </div>
        <div class="rounded overflow-hidden shadow-lg bg-white">
          <img className="w-full" alt="logo" src={handle} />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-red-700">Installation</div>
            <p class="text-black text-base">Replaced Door handle!</p>
          </div>
        </div>
        <div class="rounded overflow-hidden shadow-lg bg-white">
          <img
            className="w-full"
            alt="logo"
            src="https://www.capecoddoors.com/images/logos/handymanPage.jpg"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-red-700">Installation</div>
            <p class="text-black text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
              Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

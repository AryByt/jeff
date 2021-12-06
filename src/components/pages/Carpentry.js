import React from 'react';
import d from '../..//assets/images/garagedone.png';
import s from '../../assets/images/garage.png';

export default function Carpentry() {
  return (
    <div className="bg-white">
      <div className="pr-2 pt-2">
        <h1 className="bg-red-800 text-white text-lg animate-bounce font-black hover:underline font-mono">
          CARPENTRY SERVICES
          <p className="text-base animate-pulse">Build, Construct, Install & More</p>
        </h1>
        <p className="text-black leading-loose text-center font-black font-mono">
          With an average of 10 years' experience, I am a skilled carpenter and furniture builder.I
          install and build fireplace mantels, cabinets, bookcases, wooden countertops and more.
        </p>
      </div>
      <div className="grid grid-cols-2 bg-white">
        <div className="pt-2 pr-2">
          <h1 className="bg-red-800 text-white text-lg font-mono font-black">
            Crown Molding Installation & Repair
          </h1>
        </div>
        <div className="pt-2 pr-2">
          <h1 className="bg-red-800 text-white text-lg font-mono font-black">
            Crown Molding Installation & Repair
          </h1>
        </div>
        <div className="pr-2 pt-2">
          <h1 className="bg-red-800 text-white text-lg font-mono font-black">
            Custom Shelving & Bookcases
          </h1>
        </div>
        <div className="pt-2 pr-2">
          <h1 className="bg-red-800 text-white text-lg font-mono font-black">
            Custom Cabinets & Mantels
          </h1>
        </div>
      </div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 ">
        <div class="rounded overflow-hidden shadow-lg bg-white">
          <img className="w-full" alt="logo" src={s} />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-red-700">Painting</div>
            <p class="text-black text-base">Before</p>
          </div>
        </div>
        <div class="rounded overflow-hidden shadow-lg bg-white">
          <img className="w-full" alt="logo" src={d} />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-red-700">Painting</div>
            <p class="text-black text-base">After</p>
          </div>
        </div>
      </div>
    </div>
  );
}

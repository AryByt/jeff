import React from 'react';

export default function Maintenance() {
  return (
    <div className="bg-white ">
      <div className="pr-2 pt-2 ">
        <h1 className="bg-red-800 text-white font-black text-lg hover:underline font-mono animate-bounce">
          MAINTENANCE SERVICES
          <p className="text-base animate-pulse">Repair, Install, Grout, Patch & More</p>
        </h1>
        <p className="text-black leading-normal text-center font-black font-mono ">
          The little things add up. That's why regular maintenance in and around the home is
          especially important. With an average of 10 years' experience, I know exactly what to look
          for and how to fix it. From replacing grout in the bathroom to installing a fan in the
          attic, let us tackle the small and large projects on your list together.
        </p>
      </div>
      <div className="grid grid-cols-3 bg-white font-mono">
        <div className="pt-2 pr-2">
          <h1 className="bg-red-800 text-white text-lg font-mono font-black">
            Power Washing Services
          </h1>
        </div>
      </div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
        <div class="rounded overflow-hidden shadow-lg bg-white">
          <img
            className="w-full"
            alt="logo"
            src="data:image/jpeg;base64,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"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-red-700">Maintenance</div>
            <p class="text-black text-base"></p>
          </div>
        </div>
        <div class="rounded overflow-hidden shadow-lg bg-white">
          <img
            className="w-full"
            alt="logo"
            src="https://img.freepik.com/free-photo/handyman-uses-jackhammer-installation_169016-5286.jpg?size=626&ext=jpg"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-red-700">Maintenance</div>
            <p class="black text-base"></p>
          </div>
        </div>
        <div class="rounded overflow-hidden shadow-lg bg-white">
          <img
            className="w-full"
            alt="logo"
            src="https://www.capecoddoors.com/images/logos/handymanPage.jpg"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-red-700">Maintenance</div>
            <p class="text-black text-base"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

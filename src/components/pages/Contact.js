import React from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm('service_thv8hb9', 'template_nximfae', e.target, 'user_E2LacKssqH30sWuqgZw3X')
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="grid grid-cols-2">
      <div className="bg-black flex flex-rows justify-center text-center text-white m-16 items-center">
        <div>
          <h1 className="font-extrabold text-3xl p-10">Jeff Bayati</h1>
          <h2 className="font-bold text-lg p-5">Give me a Call!</h2>
          <div>
            <p className="font-bold text-5xl text-red-600">512-689-2605</p>
          </div>
        </div>
      </div>
      <form className="contact-form" onSubmit={sendEmail}>
        <div className="bg-black text-white text-center mx-10 my-16 p-3 text-4xl ">
          Shoot me an email!
        </div>
        <div className="w-full max-w-lg m-10">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input type="hidden" name="contact_number" />
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Name
              </label>
            </div>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              name="name"
            />

            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="email"
              name="email"
            />
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Message
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              name="message"
            />
            <input
              className="bg-red-700 text-white px-5 py-2 text-xl font-mono"
              type="submit"
              value="Send"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

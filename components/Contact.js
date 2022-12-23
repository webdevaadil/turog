import React from "react";
import contactimg from "../components/image/Contact-img.png";
import Image from "next/image";

export const Contact = () => {
  return (
    <div className="cls-f">
      <div id="contact" className="mx-auto max-w-7xl px-4 py-2 text-center">
        <h3 className="text-4xl font-extrabold font-Mulish mb-2 mt-4">
          Contact Us
        </h3>
        <p className="text-base text-gray-400 font-regular font-Mulish">
          We believe in focusing on the customer and delivering value to them,
          not just <br />
          delivering technology.{" "}
        </p>
      </div>

      <div className="max-w-7xl m-auto cn-fo mt-9 mb-20 mx-auto">
        <div className="md:block lg:flex items-center w-100 ">
          <div className="md:w-full m-0 lg:w-1/2 mr-6">
            <Image
              className="rounded-xl block mr-0 w-full"
              src={contactimg.src}
              alt="contact-img"
              width={571}
              height={433}
            />
          </div>
          <div className="md:w-full md:ml-0 lg:w-1/2 lg:ml-4">
            <div className="block bg-white w-100">
              <form>
                <div className="form-group mb-5">
                  <input
                    type="text"
                    className="form-control block
         w-full
         px-5 py-4
         text-base
         font-normal
         text-gray-700
         bg-white bg-clip-padding
         border border-solid border-gray-300
         rounded-xl
         transition
         ease-in-out
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput7"
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group mb-5">
                  <input
                    type="text"
                    className="form-control block
          w-full
          px-5 py-4
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded-xl
          transition
          ease-in-out
        focus:outline-none"
                    id="exampleInput7"
                    placeholder="Phone
        "
                  />
                </div>
                <div className="form-group mb-5">
                  <input
                    type="email"
                    className="form-control block
    w-full
    px-5 py-4
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded-xl
    transition
    ease-in-out
        focus:outline-none"
                    id="exampleInput8"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group mb-5">
                  <textarea
                    className="
        form-control
        w-full
         px-5 py-4
         h-40
         text-base
         font-normal
         text-gray-700
         bg-white bg-clip-padding
         border border-solid border-gray-300
         rounded-xl
         transition
         ease-in-out
        m-0
        focus:outline-none
      "
                    id="exampleFormControlTextarea13"
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="
      w-full px-5 py-4 text-base text-white font-extrabold bg-gradient-to-r from-red-500 to-orange-500 border border-solid border-gray-300 rounded-xl transition ease-in-out"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

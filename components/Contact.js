import React, { useEffect, useState } from "react";
import contactimg from "../components/image/Contact-img.png";
import Image from "next/image";
import axios from "axios";

export const Contact = () => {
  const [serviceoffering, setserviceoffering] = useState();
  const [email, setEmail] = useState({
    email: "",
    name: "",
    message: "",
    phone: "",
  });

  useEffect(() => {
    fetchserviceoffering();
  }, []);

  let headers = {
    Authorization:
      "bearer 4f9279d262abf04c34eb2e03e603b321d9545e0933473e65c704e12f12c87b6be9c7668de8a178ab2ac3b6d6f578e59c92b1626d4e1f460a08cebd870e3b38acfa61337df1428a0373cbc7d5fc962248ea189b0305871522728d24be8354ca0456feccbb8b9d46e445bd71dee6d109575c9bae1e1a0f26ca36d33921a58e0fe5",
  };
  const [message, setMessage] = useState("");

  const fetchserviceoffering = async () => {
    await axios
      .get("http://34.122.203.107:1339/api/contact-uses?populate=Img", {
        headers: headers,
      })
      .then((res) => setserviceoffering(res.data.data));
  };
  const sendemail = async (e) => {
    e.preventDefault();
    await axios.post(
      "http://34.122.203.107:1339/api/contactusemails",
      { data: email },
      {
        headers: headers,
      }
    );
    setMessage("✓ The form was sent successfully");
    setEmail({
      email: "",
      name: "",
      message: "",
      phone: "",
    });
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };
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
            {serviceoffering &&
              serviceoffering.map((item, index) => {
                return (
                  <img
                    className="rounded-xl block mr-0 w-full"
                    src={`http://34.122.203.107:1339${item.attributes.Img.data[0].attributes.url}`}
                    alt="contact-img"
                    width={571}
                    height={433}
                  />
                );
              })}
          </div>
          <div className="md:w-full md:ml-0 lg:w-1/2 lg:ml-4">
            <div className="block bg-white w-100">
              <form  onSubmit={sendemail}>
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
                    name="name"
                    value={email.name}
                    required
                    onChange={(e) => {
                      setEmail({ ...email, [e.target.name]: e.target.value });
                    }}
                  />
                </div>
                <div className="form-group mb-5">
                  <input
                    type="number"
                    value={email.phone}
                    required
                    onChange={(e) => {
                      setEmail({ ...email, [e.target.name]: e.target.value });
                    }}
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
                    name="phone"
                    placeholder="Phone
        "
                  />
                </div>
                <div className="form-group mb-5">
                  <input
                    type="email"
                    value={email.email}
                    required
                    onChange={(e) => {
                      setEmail({ ...email, [e.target.name]: e.target.value });
                    }}
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
                    name="email"
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
                    name="message"
                    placeholder="Message"
                    value={email.message}
                    required
                    onChange={(e) => {
                      setEmail({ ...email, [e.target.name]: e.target.value });
                    }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="
      w-full px-5 py-4 text-base text-white font-extrabold bg-gradient-to-r from-red-500 to-orange-500 border border-solid border-gray-300 rounded-xl transition ease-in-out"
                >
                  Submit
                </button>
                {message}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

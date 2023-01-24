import React, { useEffect, useState } from "react";
import logofooter from "../components/image/TUROG-white.webp";
import Image from "next/image";
import axios from "axios";
import { faQ } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const [serviceoffering, setserviceoffering] = useState();
  const [newsleeter, setNewsleeter] = useState({ email: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchserviceoffering();
  }, []);
  const submitemail = async (e) => {
    e.preventDefault();
    await axios.post(
      "http://34.136.73.77:1339/api/news-letters",
      { data: newsleeter },
      {
        headers: headers,
      }
    );
    setMessage("✓ The email was sent successfully");
    setNewsleeter({
      email: "",
    });
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };
  let headers = {
    Authorization:
      "bearer 1942e3c9556623404db66b999199421e762776e67e46c3f7e6a230dec8cd51169fbf0ec52338230d3289af36e09065b77e7a6180369d40a070378008ce130c538dda3c1c7a34a64781f10baf05e2fb4351037cd404b0abe192163b9e39ba5a4893e15e08044e7d1b4787bc34cc35d3e353d0c7d883ce9fdcd9c085fb19569a9a",
  };
  const fetchserviceoffering = async () => {
    await axios
      .get("http://34.136.73.77:1339/api/contact-informations?populate=Img", {
        headers: headers,
      })
      .then((res) => setserviceoffering(res.data.data));
    address();
  };

  const [contactinfo, setContactinfo] = useState([]);

  const address = () => {
    serviceoffering &&
      serviceoffering.map((item, index) => {
        setContactinfo([item.attributes.key], item.attributes.value);
      });
  };
  const [Faq, setFaq] = useState();

  useEffect(() => {
    fetchFaq();
  }, []);
  const fetchFaq = async () => {
    let headers = {
      Authorization:
        "bearer 1942e3c9556623404db66b999199421e762776e67e46c3f7e6a230dec8cd51169fbf0ec52338230d3289af36e09065b77e7a6180369d40a070378008ce130c538dda3c1c7a34a64781f10baf05e2fb4351037cd404b0abe192163b9e39ba5a4893e15e08044e7d1b4787bc34cc35d3e353d0c7d883ce9fdcd9c085fb19569a9a",
    };
    await axios
      .get("http://34.136.73.77:1339/api/website-info?populate=logo", {
        headers: headers,
      })
      .then((res) => setFaq(res.data.data.attributes));
  };
  console.log(Faq);
  return (
    <div>
      {serviceoffering ? (
        <footer className="text-center lg:text-left bg-stons-900 text-zinc-400	">
          <div className="max-w-7xl  mx-auto foot-wrapper">
            <div className="flex  justify-center items-center lg:justify-between py-10 border-b border-gray-300">
              <div className="mr-12 hidden lg:block text-white">
                <span className="text-2xl	font-extrabold">
                  Subscribe to our NewsLetter!{" "}
                </span>
                <p className="text-white mt-3">
                  {" "}
                  We send the newsletter once a week every friday{" "}
                </p>
              </div>
              <div
                className="flex form-news justify-end w-3/5
"
              >
                <form className="flex newslt">
                  <div className="form-group mr-2">
                    <input
                      type="email"
                      className="form-control block
        w-full
        px-6 py-3
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded-xl
        transition
        ease-in-out
        
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleInput91"
                      placeholder="Your Email"
                      name="email"
                      required
                      value={newsleeter.email}
                      onChange={(e) => {
                        setNewsleeter({
                          ...newsleeter,
                          [e.target.name]: e.target.value,
                        });
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    onClick={submitemail}
                    className="
     font-extrabold font-Mulish items-center inline-block px-14 bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm leading-tight rounded-xl shadow-md
      ease-in-out"
                  >
                    Subscribe
                  </button>
                </form>
                {message}
              </div>
            </div>
            <div className="mx-0 py-10 text-center md:text-left">
              <div className="lg:flex md:flex sm:block justify-center gap-8">
                <div className="lg:w-4/12 md:w-6/12 sm:w-12/12 max-[600px]:mb-3">
                  <h6
                    className="
            uppercase
            font-extrabold 
            mb-12
            flex
            items-center
            justify-center
            md:justify-start
          "
                  >
                    <Image
                      className=""
                      src={logofooter.src}
                      alt=""
                      width={200}
                      height={59}
                    />
                  </h6>
                  <p class="">
                    TUROG Technologies is a digital transformation company that
                    helps companies navigate the ever-evolving digital landscape
                    and create successful strategies for their businesses.
                  </p>
                </div>
                <div className="lg:w-3/12 md:w-4/12 sm:w-12/12 lg:pl-20 max-[600px]:mb-3">
                  <h6 className="capatalize text-lg text-white font-extrabold sm:mt-7 sm:mb-1 lg:my-7 flex justify-center md:justify-start">
                    Legal
                  </h6>
                  <p className="sm:mt-4 sm:mb-1 lg:mb-4">
                    <a href="#!" className="text-gray-600">
                      Claim
                    </a>
                  </p>
                  <p className="sm:mb-1 lg:mb-4">
                    <a href="#!" className="text-gray-600">
                      Terms & Conditions
                    </a>
                  </p>
                  <p className="sm:mb-1 lg:mb-4">
                    <a href="#!" className="text-gray-600">
                      Privacy
                    </a>
                  </p>
                </div>
                <div className="lg:w-3/12 md:w-4/12 sm:w-12/12 max-[600px]:mb-3">
                  <h6 className="capatalize text-lg text-white font-extrabold sm:mt-7 sm:mb-1 lg:my-7 flex justify-center md:justify-start">
                    Contact Info
                  </h6>
                  <p className="flex items-center justify-center md:justify-start mb-4 footer-para-linkss">
                    <svg
                      className="w-13 mr-4 map-iconss"
                      width="55"
                      height="50"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.99584 15.089L12.249 22.0926C12.648 22.6245 13.2838 22.9688 14 22.9688C14.7162 22.9688 15.352 22.6245 15.751 22.0926L21.0042 15.089C22.1005 13.6274 22.75 11.8114 22.75 9.84375C22.75 5.01129 18.8325 1.09375 14 1.09375C9.16748 1.09375 5.25 5.01129 5.25 9.84375C5.25 11.8114 5.89958 13.6274 6.99584 15.089Z"
                        stroke="#FE6C47"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.1875 9.84375C16.1875 11.0519 15.2081 12.0312 14 12.0312C12.7919 12.0312 11.8125 11.0519 11.8125 9.84375C11.8125 8.63565 12.7919 7.65625 14 7.65625C15.2081 7.65625 16.1875 8.63565 16.1875 9.84375Z"
                        stroke="#FE6C47"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.625 26.9062H18.375"
                        stroke="#FE6C47"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    {serviceoffering[0]["attributes"].value}
                  </p>
                  <p className="flex items-center justify-center md:justify-start mb-4 footer-para-linkss">
                    <svg
                      className="w-7 mr-4"
                      width="30"
                      height="40"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_3_4764)">
                        <path
                          d="M19.7105 14.8273C19.6757 14.7984 15.7408 11.9989 14.6783 12.1702C14.1658 12.2607 13.8731 12.6105 13.2858 13.3101C13.1913 13.4229 12.9636 13.6927 12.7877 13.8849C12.4165 13.764 12.0544 13.6166 11.7042 13.4439C9.89659 12.5639 8.43609 11.1034 7.55606 9.29578C7.38338 8.94562 7.236 8.58354 7.11506 8.21231C7.308 8.03578 7.57837 7.80806 7.69387 7.71094C8.39016 7.12687 8.73928 6.83353 8.82984 6.32034C9.01556 5.25787 6.20156 1.32431 6.17269 1.28887C6.04454 1.10713 5.87763 0.956107 5.68402 0.846705C5.49041 0.737303 5.27493 0.672253 5.05312 0.65625C3.91256 0.65625 0.65625 4.87987 0.65625 5.59191C0.65625 5.63325 0.715969 9.83587 5.89838 15.1075C11.1641 20.284 15.3667 20.3438 15.4081 20.3438C16.1195 20.3438 20.3438 17.0874 20.3438 15.9469C20.3276 15.725 20.2624 15.5096 20.1529 15.316C20.0434 15.1224 19.8923 14.9555 19.7105 14.8273ZM15.3352 19.0273C14.7656 18.9788 11.235 18.5135 6.825 14.1816C2.47209 9.74991 2.01863 6.21338 1.97334 5.66541C2.83354 4.31527 3.87239 3.08767 5.06166 2.016C5.08791 2.04225 5.12269 2.08162 5.16731 2.13281C6.07939 3.37787 6.86508 4.71074 7.51275 6.11166C7.30213 6.32354 7.07952 6.52315 6.846 6.7095C6.48388 6.98542 6.15135 7.29816 5.85375 7.64269C5.80339 7.71334 5.76755 7.79328 5.74829 7.87787C5.72903 7.96247 5.72673 8.05004 5.74153 8.13553C5.88041 8.73713 6.09312 9.31927 6.37481 9.86869C7.38405 11.9411 9.05872 13.6156 11.1313 14.6245C11.6806 14.9066 12.2628 15.1196 12.8645 15.2585C12.95 15.2736 13.0376 15.2715 13.1222 15.2522C13.2069 15.2329 13.2868 15.1969 13.3573 15.1462C13.7031 14.8474 14.0169 14.5136 14.2938 14.1501C14.4998 13.9046 14.7748 13.5772 14.8792 13.4846C16.2836 14.1317 17.6195 14.9183 18.8665 15.8327C18.921 15.8786 18.9597 15.9141 18.9853 15.937C17.9136 17.1267 16.6857 18.1658 15.3352 19.026V19.0273Z"
                          fill="#FE6C47"
                        />
                        <path
                          d="M15.0938 9.84375H16.4062C16.4047 8.45184 15.8511 7.11739 14.8668 6.13317C13.8826 5.14894 12.5482 4.59531 11.1562 4.59375V5.90625C12.2002 5.90729 13.2011 6.32247 13.9393 7.06067C14.6775 7.79887 15.0927 8.79978 15.0938 9.84375Z"
                          fill="#FE6C47"
                        />
                        <path
                          d="M18.375 9.84375H19.6875C19.6849 7.58192 18.7852 5.41348 17.1859 3.81412C15.5865 2.21477 13.4181 1.31511 11.1562 1.3125V2.625C13.0701 2.62726 14.9049 3.38853 16.2582 4.74182C17.6115 6.09511 18.3727 7.92991 18.375 9.84375Z"
                          fill="#FE6C47"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3_4764">
                          <rect width="21" height="21" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <a href="tel;+234 (802) 227-9770">
                      {" "}
                      {serviceoffering[1]["attributes"].value}
                    </a>
                  </p>
                </div>
                <div className="lg:w-2/12 md:w-4/12 sm:w-12/12 socials lg:pl-10 max-[600px]:mb-3">
                  <h6 className="capatalize text-lg text-white font-extrabold sm:mt-7 sm:mb-3 lg:my-7 flex justify-center md:justify-start">
                    Follow Us
                  </h6>

                  <div className="social-icons-centers flex justify-left">
                    {Faq ? (
                      <>
                        <a
                          href={Faq.twitter} target="_blank"
                          className="mr-2  sm:float-right  text-gray-600"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="twitter"
                            className="w-6"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                            ></path>
                          </svg>
                        </a>

                        <a
                          href={Faq.insta} target="_blank"
                          className="mr-2 sm:float-right text-gray-600"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="instagram"
                            className="w-6"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="currentColor"
                              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                            ></path>
                          </svg>
                        </a>
                        <a
                          href={Faq.linkedin} target="_blank"
                          className="mr-2 sm:float-right text-gray-600"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="linkedin-in"
                            className="w-6"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="currentColor"
                              d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                            ></path>
                          </svg>
                        </a>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center p-6  border-t border-gray-300">
              <span> © 2023 Turog Technologies. All rights reserved.</span>
            </div>
          </div>
        </footer>
      ) : (
        ""
      )}
    </div>
  );
};

export default Footer;

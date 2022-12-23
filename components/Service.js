import React, { useEffect, useState } from "react";
import digital from "../components/image/Digitaltransfo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowRightLong,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import axios from "axios";

const Tabs = () => {
  const [serviceoffering, setserviceoffering] = useState();

  useEffect(() => {
    fetchserviceoffering();
  }, []);
  const fetchserviceoffering = async () => {
    let headers = {
      Authorization:
        "bearer 4f9279d262abf04c34eb2e03e603b321d9545e0933473e65c704e12f12c87b6be9c7668de8a178ab2ac3b6d6f578e59c92b1626d4e1f460a08cebd870e3b38acfa61337df1428a0373cbc7d5fc962248ea189b0305871522728d24be8354ca0456feccbb8b9d46e445bd71dee6d109575c9bae1e1a0f26ca36d33921a58e0fe5",
    };
    await axios
      .get("http://34.122.203.107:1339/api/service-offerings?populate=Img", {
        headers: headers,
      })
      .then((res) => setserviceoffering(res.data.data));
  };
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="s-line">
        <div className="-m-12 w-full">
          <svg
            className="mx-auto"
            width="1199"
            height="76"
            viewBox="0 0 1199 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 75L75.9697 1H1123.03L1198 75"
              stroke="#DBDBDB"
              stroke-linecap="round"
              stroke-dasharray="10 5"
            />
          </svg>
        </div>
      </div>

      <div
        id="service-of"
        className="ser-wrapper mx-auto max-w-7xl px-4 py-2 text-center pb-20"
      >
        <h3 className="text-4xl font-extrabold font-Mulish mb-2 mt-4">
          Service Offerings
        </h3>
        <p className="text-base text-gray-400 font-regular font-Mulish">
          We strive to provide the best possible services to our clients and are
          committed to <br />
          helping them succeed in their digital transformation journey.
        </p>

        <div className=" flex flex-wrap items-start mt-9 text-left">
          <div className="w-full flex items-start tabss">
            <ul
              className="w-5/12 flex flex-col flex-wrap list-none border-b-0 pl-0 mr-4 mb-0 pt-3 pb-4 md:flex-row"
              role="tablist"
            >
              {serviceoffering &&
            serviceoffering.map((item, index) => {
              return (
                <li className="-mb-px mr-2 w-full flex-auto text-cente md:mb-3 md:mr-0">
                <a
                  className={
                    "text-lg flex flex-row justify-between capitalize px-4 py-6 rounded-xl leading-normal " +
                    (openTab === index+1
                      ? "text-white bg-gradient-to-r from-red-500 to-orange-500"
                      : "text-blueGray-600 bg-neutral-100")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(index+1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                 {item.attributes.Title}
                  <FontAwesomeIcon
                    className="text-right w-3.5 text-sm"
                    icon={faArrowRightLong}
                  />
                </a>
              </li>
              )
              })}
          
            </ul>
            <div className="dgs-wrapper w-7/12 relative flex flex-col min-w-0 break-words">
              <div className="px-4 py-0 flex-auto ml-11	">
                <div className="tab-content tab-space">
                {serviceoffering &&
            serviceoffering.map((item, index) => {
              return (
                  <div
                    className={openTab === index+1 ? "block" : "hidden"}
                    id="link1"
                  >
                    <h4 className="text-3xl font-semibold font-Mulish mb-3 mt-4">
                 {item.attributes.Title}
                    </h4>
                    <p className="text-base font-regular font-Mulish">
                 {item.attributes.Description}
                     
                    </p>

                    <Image
                      className="rounded block mt-7 w-full"
                      src={digital.src}
                      width={624}
                      height={330}
                      alt="servies-img"
                    />
                  </div>
                   )
                  })}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;

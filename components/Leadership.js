import lead1 from "../components/image/leader-1.png";
import lead2 from "../components/image/leader-2.png";
import lead3 from "../components/image/leader-3.png";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";

export const Leadership = () => {
  const [throghleadership, setthroghleadership] = useState();

  useEffect(() => {
    fetchserviceoffering();
  }, []);
  const fetchserviceoffering = async () => {
    let headers = {
      Authorization:
        "bearer 4f9279d262abf04c34eb2e03e603b321d9545e0933473e65c704e12f12c87b6be9c7668de8a178ab2ac3b6d6f578e59c92b1626d4e1f460a08cebd870e3b38acfa61337df1428a0373cbc7d5fc962248ea189b0305871522728d24be8354ca0456feccbb8b9d46e445bd71dee6d109575c9bae1e1a0f26ca36d33921a58e0fe5",
    };
    await axios
      .get("http://34.122.203.107:1339/api/through-leaderships?populate=Img", {
        headers: headers,
      })
      .then((res) => setthroghleadership(res.data.data));
  };
  return (
    <div className="lead-main">
      <div className="mx-auto max-w-7xl px-4 py-2 text-center mb-6">
        <h3 className="text-4xl font-extrabold font-Mulish mb-4">
          Thought Leadership
        </h3>
        <p className="text-base text-400 font-regular font-Mulish">
          We strive to provide the best possible services to our clients and are
          committed to
          <br /> helping them succeed in their digital transformation journey.
        </p>
      </div>

      <div className="flex justify-center leadr">
        {throghleadership &&
          throghleadership.map((item, index) => {
            return (
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a
                  href="#!"
                  className=""
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <Image
                    className="rounded-t-lg"
                    src={lead1.src}
                    alt=""
                    width={384}
                    height={283}
                  />
                </a>
                <div className="p-6">
                  <h5 className="text-gray-900 font-extrabold font-Mulish text-xl">
                    {item.attributes.Title}
                  </h5>
                  <p className="text-gray-700 text-base mb-4 font-Mulish md:mb-2">
                    {item.attributes.Description} <a href="#">read more</a>
                  </p>
                  <button
                    type="button"
                    class="hovs flex font-extrabold font-Mulish items-center px-6 py-2.5 bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm leading-tight rounded shadow-md"
                  >
                    <svg
                      className=""
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_21_1039)">
                        <path
                          d="M18.3498 5.14176L13.5093 0.111996C13.4404 0.0404492 13.3453 0 13.246 0H6.0316C5.22421 0 4.56734 0.656613 4.56734 1.46367V6.57693H1.6436C1.03954 6.57693 0.548096 7.06822 0.548096 7.67214V13.1548C0.548096 13.7587 1.03954 14.25 1.6436 14.25H4.56734V17.5389C4.56734 18.3445 5.22421 19 6.0316 19H16.9877C17.7951 19 18.452 18.3449 18.452 17.5397V5.39515C18.452 5.30067 18.4153 5.20986 18.3498 5.14176ZM13.3366 0.986404L17.3102 5.11538H13.3366V0.986404ZM1.6436 13.5192C1.44247 13.5192 1.27889 13.3558 1.27889 13.1548V7.67214C1.27889 7.47119 1.44251 7.30769 1.6436 7.30769H11.5103C11.7114 7.30769 11.875 7.47119 11.875 7.67214V13.1548C11.875 13.3558 11.7114 13.5192 11.5103 13.5192H1.6436ZM17.7212 17.5397C17.7212 17.942 17.3921 18.2692 16.9877 18.2692H6.0316C5.62714 18.2692 5.2981 17.9416 5.2981 17.5389V14.25H11.5103C12.1144 14.25 12.6058 13.7587 12.6058 13.1548V7.67214C12.6058 7.06822 12.1144 6.57693 11.5103 6.57693H5.2981V1.46367C5.2981 1.05951 5.62714 0.730758 6.0316 0.730758H12.6058V5.48076C12.6058 5.68256 12.7694 5.84614 12.9712 5.84614H17.7212V17.5397Z"
                          fill="white"
                        />
                        <path
                          d="M4.91639 9.27339C4.79508 9.11567 4.64449 9.01325 4.46465 8.96616C4.34761 8.93477 4.09642 8.91907 3.71104 8.91907H2.69409V12.0577H3.32781V10.8737H3.74102C4.02791 10.8737 4.24701 10.8587 4.3983 10.8288C4.50963 10.8045 4.61918 10.7549 4.72694 10.6799C4.83471 10.605 4.92355 10.5019 4.9935 10.3706C5.06345 10.2393 5.09841 10.0773 5.09841 9.88462C5.09837 9.63483 5.0377 9.4311 4.91639 9.27339ZM4.37366 10.1373C4.32587 10.2072 4.25985 10.2586 4.17561 10.2914C4.09137 10.3243 3.92442 10.3407 3.67463 10.3407H3.32781V9.45003H3.63396C3.86233 9.45003 4.01433 9.45715 4.08996 9.47144C4.19272 9.49 4.27766 9.53638 4.34472 9.6106C4.41181 9.68482 4.44536 9.77904 4.44536 9.89319C4.44539 9.98596 4.42146 10.0673 4.37366 10.1373Z"
                          fill="white"
                        />
                        <path
                          d="M8.1449 9.77652C8.0764 9.57598 7.97646 9.4065 7.84517 9.26804C7.71388 9.12959 7.55613 9.03325 7.37203 8.979C7.23502 8.93903 7.03589 8.91907 6.77471 8.91907H5.61646V12.0577H6.80897C7.04305 12.0577 7.23001 12.0356 7.36987 11.9913C7.55687 11.9313 7.7053 11.8479 7.81519 11.7408C7.96077 11.5995 8.0728 11.4147 8.15132 11.1863C8.21556 10.9993 8.24766 10.7767 8.24766 10.5183C8.24766 10.2243 8.21341 9.97706 8.1449 9.77652ZM7.52829 11.0654C7.48547 11.206 7.43018 11.3069 7.36238 11.3683C7.29458 11.4297 7.2093 11.4732 7.10655 11.4989C7.02806 11.5189 6.90029 11.5289 6.72332 11.5289H6.25017V9.45003H6.53491C6.79323 9.45003 6.96668 9.46001 7.05515 9.48001C7.1736 9.50569 7.27138 9.55494 7.34846 9.62775C7.42554 9.70055 7.48547 9.80186 7.52829 9.93175C7.57112 10.0616 7.59253 10.2479 7.59253 10.4905C7.59253 10.7332 7.57112 10.9248 7.52829 11.0654Z"
                          fill="white"
                        />
                        <path
                          d="M10.9409 9.45003V8.91907H8.78931V12.0577H9.42302V10.7239H10.7333V10.1929H9.42302V9.45003H10.9409Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_21_1039">
                          <rect width="19" height="19" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>{" "}
                    Download PDF
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

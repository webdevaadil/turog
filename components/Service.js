import React from "react";
import digital from "../components/image/Digitaltransfo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowRightLong, faCoffee } from '@fortawesome/free-solid-svg-icons'
import Image from "next/image";

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
    <div className="-m-12"> 


    <svg className="mx-auto" width="1199" height="76" viewBox="0 0 1199 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 75L75.9697 1H1123.03L1198 75" stroke="#DBDBDB" stroke-linecap="round" stroke-dasharray="10 5"/>
</svg>





    </div>
      
    <div id="service-of" className="mx-auto max-w-7xl px-4 py-2 text-center pb-20">

<h3 className="text-4xl font-extrabold font-Mulish mb-2 mt-4">Service Offerings</h3>
<p className="text-base text-gray-400 font-regular font-Mulish">We strive to provide the best possible services to our clients and are committed to <br/>helping them succeed in their digital transformation journey.</p>





      <div className=" flex flex-wrap items-start mt-9 text-left">
        <div className="w-full flex items-start tabss">
          <ul
            className="w-5/12 flex flex-col flex-wrap list-none border-b-0 pl-0 mr-4 mb-0 pt-3 pb-4 md:flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 w-full flex-auto text-cente md:mb-3 md:mr-0">
              <a
                className={
                  "text-lg flex flex-row justify-between capitalize px-4 py-6 rounded-xl leading-normal " +
                  (openTab === 1
                    ? "text-white bg-gradient-to-r from-red-500 to-orange-500"
                    : "text-blueGray-600 bg-neutral-100")
                } 
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Digital Transformation Strategy <FontAwesomeIcon className="text-right w-3.5 text-sm" icon={faArrowRightLong} />
              </a>
             
            </li>
            <li className="-mb-px w-full flex-auto text-left md:mb-3 mr-0">
              <a
                className={
                  "text-lg flex justify-between capitalize px-4 py-6 rounded-xl leading-normal " +
                  (openTab === 2
                    ? "text-white bg-gradient-to-r from-red-500 to-orange-500"
                    : "text-blueGray-600 bg-neutral-100")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Enterprise Systems Implementation<FontAwesomeIcon className="text-right w-3.5 text-sm" icon={faArrowRightLong} />
              </a>
            </li>
            <li className="-mb-px w-full mr-0 flex-auto text-left md:mb-3">
              <a
                className={
                  "text-lg flex justify-between capitalize px-4 py-6 rounded-xl leading-normal " +
                  (openTab === 3
                    ? "text-white bg-gradient-to-r from-red-500 to-orange-500"
                    : "text-blueGray-600 bg-neutral-100")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Enterprise Applications Integration<FontAwesomeIcon className="text-right w-3.5 text-sm" icon={faArrowRightLong} />
              </a>
            </li>
            <li className="-mb-px w-full flex-auto text-left md:mb-3 mr-0">
              <a
                className={
                  "text-lg flex justify-between capitalize px-4 py-6 rounded-xl leading-normal " +
                  (openTab === 4
                    ? "text-white bg-gradient-to-r from-red-500 to-orange-500"
                    : "text-blueGray-600 bg-neutral-100")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                Identity & Access Management Solutions<FontAwesomeIcon className="text-right w-3.5 text-sm" icon={faArrowRightLong} />
              </a>
            </li>
            <li className="-mb-px w-full last:mr-0 flex-auto text-left md:mb-3 mr-0">
              <a
                className={
                  "text-lg flex justify-between capitalize px-4 py-6 rounded-xl leading-normal " +
                  (openTab === 5
                    ? "text-white bg-gradient-to-r from-red-500 to-orange-500"
                    : "text-blueGray-600 bg-neutral-100")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link5"
                role="tablist"
              >
               Process Management & Intelligent Automation<FontAwesomeIcon className="text-right w-3.5 text-sm" icon={faArrowRightLong} />
              </a>
            </li>
           



          </ul>
          <div className="w-7/12 relative flex flex-col min-w-0 break-words">
            <div className="px-4 py-0 flex-auto ml-11	">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">

                   <h4 className="text-3xl font-semibold font-Mulish mb-3 mt-4">Digital Transformation Strategy</h4> 
                  <p className="text-base font-regular font-Mulish">
                  Our team of highly experienced strategists will use their knowledge and experience to create a comprehensive plan tailored to your business needs. We will help you identify areas that could benefit from digital transformation, and provide an actionable roadmap to ensure success. Our strategies are designed to maximize the efficiency and effectiveness of your digital transformation efforts.
                  </p>

                    <Image className="rounded block mt-7 w-full" src={digital.src} width={624} height={330} alt="servies-img"/>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <h4 className="text-3xl font-semibold font-Mulish mb-3 mt-4">Enterprise Systems Implementation</h4> 
                  <p className="text-base font-regular font-Mulish">
                  Our team of experts has extensive knowledge and experience in the implementation of ERP, CBA and related technologies. Enterprise Resource Planning (ERP) systems integrate the day-to-day operations of an organization into a single, unified system. Core Banking Applications (CBA) manages the lending and savings operations (amongst others) for financial institutions.</p>

                    <Image className="rounded block mt-7 w-full" src={digital.src} width={624} height={330} alt="servies-img"/>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <h4 className="text-3xl font-semibold font-Mulish mb-3 mt-4">Enterprise Applications Integration</h4> 
                  <p className="text-base font-regular font-Mulish">Our team of experienced professionals is dedicated to delivering the highest quality EAI services and solutions, ensuring the success of your organization. Enterprise Application Integration (EAI) services enable clients to streamline their IT operations and maximize efficiency.
                </p>

                    <Image className="rounded block mt-7 w-full" src={digital.src} width={624} height={330} alt="servies-img"/>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link1">
                <h4 className="text-3xl font-semibold font-Mulish mb-3 mt-4">Identity & Access Management Solutions</h4> 
                  <p className="text-base font-regular font-Mulish">
                  Out team offers a comprehensive Identity and Access Management (IAM) implementation service that helps organizations securely manage the access rights of their employees, customers and other stakeholders. Our IAM solutions provide a single platform for managing all user identities, roles, and groups, allowing organizations to manage access rights to their systems and data with greater flexibility and accuracy.
                  </p>

                    <Image className="rounded block mt-7 w-full" src={digital.src} width={624} height={330} alt="servies-img"/>
                </div>
                <div className={openTab === 5 ? "block" : "hidden"} id="link1">
                <h4 className="text-3xl font-semibold font-Mulish mb-3 mt-4">Process Management & Intelligent Automation</h4> 
                  <p className="text-base font-regular font-Mulish">
                  We offer Process Management & Intelligent Automation services that can help you streamline and automate core processes to increase efficiency and reduce manual effort. Our services are tailored to your individual business needs and our experts will work with you to identify areas of improvement, develop processes and implement the right automation solutions to suit your business objectives.
                 </p>

                    <Image className="rounded block mt-7 w-full" src={digital.src} width={624} height={330} alt="servies-img"/>
                </div>



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
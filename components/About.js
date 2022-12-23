import abtus from "../components/image/abt-us.webp";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

export const About = () => {
  const [aboutus, setaboutus] = useState();

  useEffect(() => {
    fetchaboutus();
  }, []);
  const fetchaboutus = async () => {
    let headers = {
      Authorization:
        "bearer 4f9279d262abf04c34eb2e03e603b321d9545e0933473e65c704e12f12c87b6be9c7668de8a178ab2ac3b6d6f578e59c92b1626d4e1f460a08cebd870e3b38acfa61337df1428a0373cbc7d5fc962248ea189b0305871522728d24be8354ca0456feccbb8b9d46e445bd71dee6d109575c9bae1e1a0f26ca36d33921a58e0fe5",
    };
    await axios
      .get("http://34.122.203.107:1339/api/about-uses?populate=Img", {
        headers: headers,
      })
      .then((res) => setaboutus(res.data.data));
  };
  return (
    <div className="abt-main max-w-7xl mx-auto ">
      {}
      <div id="abts-us" className="flex items-center">
        <div className="w-1/2">
          <Image
            className=""
            src={abtus.src}
            alt="Avatar"
            width={700}
            height={447}
          />
        </div>
        {aboutus &&
          aboutus.map((item, index) => {
            return (
              <div className="w-1/2">
                <h2 className="text-4xl font-extrabold font-Mulish mb-6">
                  About Us{" "}
                </h2>
                <p className="font-Mulish mb-2">
                 {item.attributes.Description}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

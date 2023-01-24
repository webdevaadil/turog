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
        "bearer 1942e3c9556623404db66b999199421e762776e67e46c3f7e6a230dec8cd51169fbf0ec52338230d3289af36e09065b77e7a6180369d40a070378008ce130c538dda3c1c7a34a64781f10baf05e2fb4351037cd404b0abe192163b9e39ba5a4893e15e08044e7d1b4787bc34cc35d3e353d0c7d883ce9fdcd9c085fb19569a9a",
    };
    await axios
      .get("http://34.136.73.77:1339/api/about-uses?populate=Img", {
        headers: headers,
      })
      .then((res) => setaboutus(res.data.data));
  };
  return (
    <div className="abt-main max-w-7xl mx-auto ">
      {}
      <div id="abts-us" className="flex items-center">
        {aboutus &&
          aboutus.map((item, index) => {
            return (
              <>
                <div className="w-1/2">
                  {item.attributes.Img.data ? (
                    <img
                      className=""
                      src={`http://34.136.73.77:1339${item.attributes.Img.data[0].attributes.url}`}
                      alt="Avatar"
                      width={700}
                      height={447}
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="w-1/2">
                  <h2 className="text-4xl font-extrabold font-Mulish mb-6">
                    About Us{" "}
                  </h2>
                  <p className="font-Mulish mb-2">
                    {item.attributes.Description}
                  </p>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

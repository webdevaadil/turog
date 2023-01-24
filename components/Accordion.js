import { Fragment, useEffect, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import axios from "axios";

export default function Faq() {
  const [open, setOpen] = useState(1);
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
      .get("http://34.136.73.77:1339/api/service-offerings?populate=Img", {
        headers: headers,
      })
      .then((res) => setFaq(res.data.data));
  };
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div id="faqs" className="fqs-main my-24 mb-10 pt-16 pb-16">
      <div className="max-w-7xl mx-auto">
        <div class="mx-auto max-w-7xl px-4 py-2 text-center mb-8">
          <h3 class="text-4xl font-extrabold font-Mulish mb-4">
            Frequently asked questions
          </h3>
          <p class="text-base text-400 font-regular font-Mulish">
            We believe in focusing on the customer and delivering value to them,
            not just <br />
            delivering technology.
          </p>
        </div>

        <div className="flex faq-clms">
          <div className="">       <Fragment>
            {Faq &&
            Faq.map((item, index) => {
              return (
              <Accordion open={open === index +1}>
                <AccordionHeader onClick={() => handleOpen(index +1)}>
                 {item.attributes.Title}
                </AccordionHeader>
                <AccordionBody>
                  <p className="acordian-para">
                  {item.attributes.Description}
                  </p>
                </AccordionBody>
              </Accordion>
              
              )
              })}
            </Fragment>
          </div>

       
        </div>
      </div>
    </div>
  );
}

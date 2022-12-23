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
        "bearer 4f9279d262abf04c34eb2e03e603b321d9545e0933473e65c704e12f12c87b6be9c7668de8a178ab2ac3b6d6f578e59c92b1626d4e1f460a08cebd870e3b38acfa61337df1428a0373cbc7d5fc962248ea189b0305871522728d24be8354ca0456feccbb8b9d46e445bd71dee6d109575c9bae1e1a0f26ca36d33921a58e0fe5",
    };
    await axios
      .get("http://34.122.203.107:1339/api/service-offerings?populate=Img", {
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
          <div className="w-1/2">
            <Fragment>
            {Faq &&
            Faq.map((item, index) => {
              return (
              <Accordion open={open === index +1}>
                <AccordionHeader onClick={() => handleOpen(index +1)}>
                 {item.attributes.Title}
                </AccordionHeader>
                <AccordionBody>
                  <p>
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

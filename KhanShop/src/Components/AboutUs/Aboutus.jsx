import React from "react";
import bg from "../../assets/bg_shop.png";
import aboutus from "../../assets/aboutus.webp";
import techimg from "../../assets/technology-image.png";

const Aboutus = () => {
  return (
    <>
      <div>
        <div className="relative">
          <img
            src={bg}
            alt=""
            className="object-cover w-full object-center h-[200px] mt-5"
          />
          <div className="w-full h-[200px] bg-black absolute top-0 left-0 opacity-[0.4]"></div>
          <h2 className="absolute top-[40%] left-[10%] text-white font-semibold text-3xl md:text-5xl">
            About Us
          </h2>
        </div>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={aboutus}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Who We Are ?
              </h1>
              <p className="mb-8 leading-relaxed">
                The InstaMart Group is one of India’s leading digital commerce
                entities and includes group companies InstaMart, Myntra, InstaMart
                Wholesale, InstaMart Health+, and Cleartrip. With a registered customer base of more than 500
                , InstaMart's marketplace offers over 150 million products
                across 80+ categories. Today, there are over 14 lakh sellers on
                the platform, including Shopsy sellers. 
                In 2024, InstaMart also introduced the InstaMart UPI handle to
                further enhance its digital payment offerings for all customers
                and further India’s digital economy vision.
              </p>
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col-reverse items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Technology At InstaMart
              </h1>
              <h3 className="text-gray-900 text-2xl font-semibold mb-2">
                Innovation
              </h3>
              <p className="mb-8 leading-relaxed">
                InstaMart technology drives path-breaking, customer-focused
                innovation that makes high quality products accessible to Indian
                shoppers, besides making the online shopping experience
                convenient, intuitive and seamless.
              </p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={techimg}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Aboutus;

import React from "react";

const AllProductShimmer = () => {
  let arr = Array.from(Array(9));
  return (
    <>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {arr.map((index) => (
                <div
                  className="w-[90%] px-4 py-4 shadow-lg rounded-md"
                  key={index}
                >
                  <div className="block relative h-48 rounded overflow-hidden">
                    <div className="object-cover object-center w-full h-full block rounded-t-lg bg-[#93938fe6]"></div>
                  </div>
                  <div className="mt-4 ">
                    <div className="flex justify-between mt-3 mb-2 flex-col sm:flex-row">
                      <div className=" w-[110px] h-[25px] rounded px-2.5 py-0.5 bg-[#93938fe6]"></div>
                      <div className="bg-[#93938fe6] h-[25px] px-2.5 py-0.5 rounded  w-[50px]"></div>
                    </div>

                    <div className="flex justify-between mt-3 flex-col sm:flex-row">
                      <div className="px-5 py-2.5 rounded-sm h-[25px] w-[80px] bg-[#93938fe6]"></div>
                      <button className="px-5 py-2.5 rounded-sm h-[25px] w-[80px] bg-[#93938fe6]"></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AllProductShimmer;

import React from "react";
import foot from "../../assets/galerry/image-500x300.jpg"
import electronic from "../../assets/galerry/image-501x301.jpg"
import men from "../../assets/galerry/image-601x361.jpg"
import lady from "../../assets/galerry/image-600x360.jpg"
import face from "../../assets/galerry/image-502x302.jpg"
import cream from "../../assets/galerry/image-503x303.jpg"
const Gallery = () => {
  return (
    <>
      <div>
        <section class="text-gray-600 body-font mt-5">
          <h1 className="text-center font-bold text-5xl">Gallery</h1>

          <div class="container px-5 py-10 mx-auto flex flex-wrap">
            <div class="flex flex-wrap md:-m-2 -m-1">
              <div class="flex flex-wrap w-1/2 hover:scale-75 hover:translate-x-4 hover:skew-y-3 transition duration-500">
                <div class="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block"
                    src={foot}
                  />
                </div>
                <div class="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block"
                    src={electronic}
                  />
                </div>
                <div class="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    class="w-full h-full object-cover object-center block"
                    src={lady}
                  />
                </div>
              </div>
              <div class="flex flex-wrap w-1/2 hover:scale-75 hover:translate-x-4 hover:skew-x-3 transition duration-500">
                <div class="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    class="w-full h-full object-cover object-center block"
                    src={men}
                  />
                </div>
                <div class="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block"
                    src={face}
                  />
                </div>
                <div class="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block"
                    src={cream}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Gallery;

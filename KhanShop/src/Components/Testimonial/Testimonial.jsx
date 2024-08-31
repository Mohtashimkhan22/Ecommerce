import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import image from "../../assets/testimon.jpg"
import men from "../../assets/galerry/image-601x361.jpg"
import lady from "../../assets/galerry/image-250x250.jpg"
import system from "../../assets/galerry/systemDesign.avif"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonial = () => {
  return (
    <>
      <div>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            300:{
              slidesPerView:1,
              spaceBetween: 20,
            },
            608:{
              slidesPerView:2,
              spaceBetween: 20,
            },
            1024:{
              slidesPerView:3,
              spaceBetween: 20,
            },
            
          }}
        >
          <SwiperSlide>
            <section class="text-gray-600 body-font">
              <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                  <div class="p-4 w-full">
                    <div class="h-full bg-gray-100 p-8 rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        class="block w-5 h-5 text-gray-400 mb-4"
                        viewBox="0 0 975.036 975.036"
                      >
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                      </svg>
                      <p class="leading-relaxed mb-6">
                      I recently purchased the AcmeTech Pro Laptop, and it has exceeded all my expectations. The battery life is impressive, lasting through my entire workday without needing a recharge. The high-resolution display and excellent graphics make it perfect for both professional tasks and entertainment. I highly recommend the AcmeTech Pro Laptop for anyone in need of a reliable and powerful device.
                      </p>
                      <a class="inline-flex items-center">
                        <img
                          alt="testimonial"
                          src={image}
                          class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                        />
                        <span class="flex-grow flex flex-col pl-4">
                          <span class="title-font font-medium text-gray-900">
                            Aice Anna
                          </span>
                          <span class="text-gray-500 text-sm">
                            IT Consultant
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section class="text-gray-600 body-font">
              <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                  <div class="p-4 w-full">
                    <div class="h-full bg-gray-100 p-8 rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        class="block w-5 h-5 text-gray-400 mb-4"
                        viewBox="0 0 975.036 975.036"
                      >
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                      </svg>
                      <p class="leading-relaxed mb-6">
                      CyberGuard Security Suite has been a game-changer for our company's cybersecurity.. The user-friendly interface and regular updates give us peace of mind, knowing that our data is secure. The customer support team is responsive and knowledgeable, always ready to assist with any questions. I strongly recommend CyberGuard Security Suite for robust and reliable online security.
                      </p>
                      <a class="inline-flex items-center">
                        <img
                          alt="testimonial"
                          src={men}
                          class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                        />
                        <span class="flex-grow flex flex-col pl-4">
                          <span class="title-font font-medium text-gray-900">
                            Sarah Johnson
                          </span>
                          <span class="text-gray-500 text-sm">
                            Software Developer
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section class="text-gray-600 body-font">
              <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                  <div class="p-4 w-full">
                    <div class="h-full bg-gray-100 p-8 rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        class="block w-5 h-5 text-gray-400 mb-4"
                        viewBox="0 0 975.036 975.036"
                      >
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                      </svg>
                      <p class="leading-relaxed mb-6">
                      I've been using the ProTech Wireless Mouse for a few months now, and it is by far the best mouse I've ever owned. The ergonomic design is comfortable for long hours of use, and the precision is excellent for both work and gaming. The battery life is exceptional, and the Bluetooth connection is always stable. I highly recommend the ProTech Wireless Mouse to anyone in need of a high-quality, reliable mouse.
                      </p>
                      <a class="inline-flex items-center">
                        <img
                          alt="testimonial"
                          src={lady}
                          class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                        />
                        <span class="flex-grow flex flex-col pl-4">
                          <span class="title-font font-medium text-gray-900">
                            Angela Anna
                          </span>
                          <span class="text-gray-500 text-sm">
                            UI DEVELOPER
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section class="text-gray-600 body-font">
              <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                  <div class="p-4 w-full">
                    <div class="h-full bg-gray-100 p-8 rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        class="block w-5 h-5 text-gray-400 mb-4"
                        viewBox="0 0 975.036 975.036"
                      >
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                      </svg>
                      <p class="leading-relaxed mb-6">
                      The NeoFlex 5G is a powerhouse of a smartphone. The display is gorgeous, with vibrant colors and excellent brightness. The phone's performance is top-notch, handling multiple apps and heavy usage without any lag. The battery life is solid, easily lasting throughout the day, and the quick charge feature is very convenient. The NeoFlex 5G offers incredible value with its impressive features and sleek design.
                      </p>
                      <a class="inline-flex items-center">
                        <img
                          alt="testimonial"
                          src={system}
                          class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                        />
                        <span class="flex-grow flex flex-col pl-4">
                          <span class="title-font font-medium text-gray-900">
                            Holden Caulfield
                          </span>
                          <span class="text-gray-500 text-sm">
                            System Designer
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Testimonial;

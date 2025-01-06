import React from "react";

const HeroBanner = () => {
  return (
    <div className="relative bg-[#F6F5E8] -mt-32 pt-10 sm:-mt-32 sm:pt-12 lg:-mt-40 lg:pt-20 lg:flex lg:flex-row-reverse">
        
      {/* Media Section */}
      <div className="relative flex lg:w-1/2">
        <figure className="w-full h-full overflow-hidden box-border">
          <div className="relative w-full h-0 overflow-hidden pt-8 pb-[56.25%] lg:h-full lg:pt-0 lg:pb-0">
            {/* Fallback Image */}
            <figure className="absolute inset-0 m-0 pointer-events-none">
              <picture className="w-full h-full">
                <source
                  media="(min-width: 1025px)"
                  srcSet="/api/placeholder/1280/720"
                />
                <source
                  media="(min-width: 640px)"
                  srcSet="/api/placeholder/1280/720"
                />
                <source
                  media="(min-width: 0px)"
                  srcSet="/api/placeholder/900/900"
                />
                <img
                  alt="Hands pulling out an Aesop gift kit from a cotton bag"
                  loading="lazy"
                  className="object-cover w-full h-full"
                  src="/api/placeholder/1280/720"
                />
              </picture>
            </figure>
            {/* Video */}
            <video
              autoPlay
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source
                src="https://videos.ctfassets.net/u1nb1km7t5q7/33VrnC4wUNO6tupurqqxAR/3149e68e8b2cac17112c1a7fd1beb86b/Aesop_Gift_Kits_2024-25_Web_Homepage_3_Primary_50-50_Desktop_1280x720px.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </figure>
      </div>

      {/* Content Section */}
      <div className="relative z-20 lg:w-1/2 lg:-top-20 lg:-mt-20 lg:pl-20 lg:pr-12">
        <div className="max-w-xl mx-auto px-5 sm:px-0">
          <div className="py-10 sm:pt-12 sm:pb-64 lg:py-24">
            <header className="flex flex-col">
              <h2 className="text-4xl font-bold text-gray-800 mb-8">
                Timely gifts
              </h2>
            </header>
            <div className="mt-0 sm:mt-0">
              <p className="text-base leading-7 text-gray-800 mb-8">
                With the festivities fast-approaching, explore a range of gifts fit
                for all manner of recipients, ready to deliver or collect in-store.
              </p>
              <div className="flex flex-wrap -mx-0.5">
                <a
                  href="/hk/en/c/gift-guide/"
                  className="flex items-center min-w-[210px] h-[60px] px-6 py-5 border border-gray-300 font-bold text-sm text-gray-800 transition-all duration-200 hover:bg-gray-100"
                >
                  Discover more
                  <svg
                    aria-labelledby="rightArrow"
                    className="ml-2 w-3 h-3"
                    viewBox="0 0 50 50"
                  >
                    <title id="rightArrow">rightArrow</title>
                    <path
                      className="fill-current"
                      d="M30.1,5.3L50,25.1L30.1,45h-6.6l18-17.6H0v-4.8h41.5l-18-17.6h6.6V5.3z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
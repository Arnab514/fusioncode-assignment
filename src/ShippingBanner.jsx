import React from "react";

export default function ShippingBanner() {
  return (
    <div
      className="relative z-[500] bg-[#252525] text-[#fffef2] w-full overflow-visible pt-3 pb-2 px-5"
      role="region"
      aria-label="shipping-banner"
    >
      <div className="flex flex-row items-center md:justify-center">
        <button
          className="flex items-center justify-between border-b border-transparent cursor-pointer transition-all duration-500 ease-in-out w-full md:w-auto"
          type="button"
        >
          <p className="text-sm leading-relaxed text-left font-normal m-0 p-0 flex-grow">
            Enjoy complimentary shipping on orders over $400. Click and Collect
            is now available in Hong Kong.
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 fill-[#fffef2] stroke-[#fffef2] ml-5"
            style={{ strokeWidth: "0.4px" }}
            viewBox="0 0 50 50"
            aria-hidden="true"
          >
            <polygon points="26.2,15.2 23.8,15.2 23.8,23.9 15,23.9 15,26.4 23.8,26.4 23.8,35.1 26.2,35.1 26.2,26.4 35,26.4 35,23.9 26.2,23.9" />
          </svg>
        </button>
      </div>
    </div>
  );
}

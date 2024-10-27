import React from "react";

const Testimonial = (props) => {
  return (
    <div className="">
      <figure className="space-y-6 rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5 transition">
        <blockquote
          //   className={`text-gray-900 ${
          //     props.id === 1
          //       ? "text-xl font-semibold tracking-tight md:font-normal"
          //       : ""
          //   }`}
          className="text-gray-900"
        >
          <p>{props.body}</p>
        </blockquote>
        <figcaption className="flex items-center gap-x-4">
          <img
            src={props.imgUrl}
            alt=""
            loading="lazy"
            className="h-10 w-10 flex-none rounded-full bg-gray-50"
          />
          <div className="flex-auto">
            <div className="font-semibold">{props.name}</div>
            <div className="text-gray-600">{props.handle}</div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default Testimonial;

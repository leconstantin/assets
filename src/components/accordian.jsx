import React, { useState } from "react";
import faqs from "../data/faqs";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMulti, setEnableMulti] = useState(false);

  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(id) {
    setSelected(id === selected ? null : id);
  }
  function handleMultiSelection(id) {
    let cpyMultiple = [...multiple];
    const findIndexOfId = cpyMultiple.indexOf(id);

    console.log(findIndexOfId);

    if (findIndexOfId === -1) {
      cpyMultiple.push(id);
    } else cpyMultiple.splice(findIndexOfId, 1);

    setMultiple(cpyMultiple);
    console.log(multiple);
  }
  return (
    <div className="px-6 py-16 flex items-center justify-center flex-col gap-4">
      <a
        className="bg-slate-300 shadow-xl px-4 py-2 text-center w-60 rounded-lg cursor-pointer"
        onClick={() => setEnableMulti(!enableMulti)}
      >
        Enable Multi Selection
      </a>
      <div className="space-y-5 w-full">
        {faqs && faqs.length > 0 ? (
          faqs.map((faq) => (
            <div
              className={`px-4 py-2 rounded-md shadow-xl ${
                enableMulti ? "bg-lime-200" : "bg-sky-200"
              }`}
            >
              {/* title */}
              <div
                className="flex cursor-pointer"
                onClick={
                  enableMulti
                    ? () => handleMultiSelection(faq.id)
                    : () => handleSingleSelection(faq.id)
                }
              >
                <h3
                  className={`text-lg font-semibold hover:text-blue-300 ${
                    selected === faq.id && "text-blue-500"
                  }`}
                >
                  {faq.question}
                  {selected === faq.id ? (
                    <span className="pl-10 text-2xl">-</span>
                  ) : (
                    <span className="pl-10 text-2xl">+</span>
                  )}
                </h3>
              </div>
              {selected === faq.id || multiple.indexOf(faq.id) !== -1 ? (
                <div>{faq.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;

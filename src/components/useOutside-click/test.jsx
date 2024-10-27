import { useRef, useState } from "react";
import useOutsideClick from ".";

export default function UseOnclickOutsideTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div className="px-7 py-20">
      {showContent ? (
        <div ref={ref} className="ring-1 p-4 rounded-md font-medium">
          <h1>This is a random content</h1>
          <p>
            Please click outside of this to close this. It won't close if you
            click inside of this content
          </p>
        </div>
      ) : (
        <button
          onClick={() => setShowContent(true)}
          className="bg-blue-400 px-3 py-2 text-white font-semibold rounded-lg"
        >
          Show Content
        </button>
      )}
    </div>
  );
}

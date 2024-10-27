import React from "react";
import { useState, useEffect } from "react";
const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setErrorMessage(e.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPercentage() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercentage((howMuchScrolled / height) * 100);
    // console.log(scrollPercentage);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, []);
  //   console.log(data);
  if (errorMessage) {
    return <div>Error ! {errorMessage}</div>;
  }

  if (loading) {
    return <div>Loading data ! Pleaae wait</div>;
  }

  return (
    <div className="px-6 py-7">
      <div className="top-container fixed bg-blue-400 top-0 left-0 right-0 text-center text-white font-bold tet-xl">
        <h1>Custom Scroll Indicator</h1>
        {scrollPercentage}
        <div className="scroll-progress-tracking-container bg-zinc-800">
          <div
            className="current-progress-bar bg-red-400 h-2"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* to show data */}
      <div className="data-container text-center pt-7">
        {data && data.length > 0
          ? data.map((dataItem, index) => (
              <p key={index} className="p-2">
                {dataItem.title}
              </p>
            ))
          : null}
      </div>
    </div>
  );
};

export default ScrollIndicator;

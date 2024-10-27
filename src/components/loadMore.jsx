import React from "react";
import { useEffect, useState } from "react";

const LoadMore = () => {
  const [loading, setLoading] = useState();
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableBtn, setDisableBtn] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      console.log(result);
      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, [count]);
  useEffect(() => {
    if (products && products.length === 80) {
      setDisableBtn(true);
    }
  }, [products]);
  if (loading) {
    return <div>Loadind Data please wait !</div>;
  }

  return (
    <div className="container px-7 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products && products.length
          ? products.map((item, index) => (
              <div
                key={index}
                className="ring-1 p-2 shadow-xl rounded-lg text-center"
              >
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
                <p>{index + 1}</p>
              </div>
            ))
          : null}
      </div>
      <div className=" flex flex-col items-center justify-center gap-9 mt-12">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-white hover:bg-slate-300 text-lg font-semibold ring-1 rounded-lg  ring-zinc-500 shadow-md py-2 px-4"
          disabled={disableBtn}
        >
          Load more Products
        </button>
        {disableBtn && <p className="">That all the products we have</p>}
      </div>
    </div>
  );
};

export default LoadMore;

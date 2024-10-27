import useFetch from ".";

export default function UseFetchHookTest() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {}
  );
  console.log(data);

  return (
    <div className="px-7 py-20">
      <h1 className="p-5 text-center font-bold text-xl">Use Fetch Hook</h1>
      {pending ? <h3>Pending ! Please wait</h3> : null}
      {error ? <h3>{error}</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((productItem) => (
            <p key={productItem.id}>{productItem.title}</p>
          ))
        : null}
    </div>
  );
}

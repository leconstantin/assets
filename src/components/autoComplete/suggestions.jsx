export default function Suggestions({ data, handleClick }) {
  return (
    <ul className="w-full mt-4 ring-1  ring-zinc-300 rounded-md  py-5 shadow-md text-zinc-500 flex flex-col gap-2">
      {data && data.length
        ? data.map((item, index) => (
            <li
              onClick={handleClick}
              key={index}
              className="cursor-pointer hover:ring-1  ring-zinc-300 px-5 rounded-md"
            >
              {item}
            </li>
          ))
        : null}
    </ul>
  );
}

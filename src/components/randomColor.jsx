import React, { useEffect, useState } from "react";
// #123456
// rgb(1,2,3)
const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    setColor(hexColor);
    console.log(hexColor);
  }
  function handleCreateRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setColor(`rgb(${r},${g},${b})`);
  }

  //   TO MAKE COLOR CHANGE IMMEDIATELY ON SHIFT
  useEffect(() => {
    if (typeOfColor === "rgb") {
      handleCreateRandomRgbColor();
    } else {
      handleCreateRandomHexColor();
    }
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: color,
      }}
      className=""
    >
      <button
        className="bg-white px-4 py-2 rounded-lg m-5"
        onClick={() => setTypeOfColor("hex")}
      >
        Create hex Color
      </button>
      <button
        className="bg-white px-4 py-2 rounded-lg my-5"
        onClick={() => setTypeOfColor("rgb")}
      >
        Create RGB Color
      </button>
      <button
        className="bg-white px-4 py-2 rounded-lg m-5"
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate a Random Color
      </button>

      <div className="flex items-center flex-col justify-center text-white mt-10 text-3xl gap-9">
        <h3 className="text-2xl font-bold">
          {typeOfColor === "rgb" ? "Rgb color" : "Hex Color"}
        </h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;

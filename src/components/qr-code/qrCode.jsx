import React from "react";
import QRCode from "react-qr-code";
import { useState } from "react";

const QrCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");
  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }
  return (
    <div className="flex flex-col justify-center h-screen items-center gap-4">
      <h1 className="font-bold text-xl mb-6">Qr Code generator</h1>
      <div className="ring-1 ring-zinc-200 shadow-md rounded-xl py-2 px-3">
        <input
          type="text"
          name="qr-code"
          autoFocus
          placeholder="Enter your value here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="px-3  outline-0 placeholder:text-zinc-500 text-zinc-700"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
          className="ring-1 ring-zinc-400 p-2 rounded-lg  font-semibold bg-blue-600 text-white disabled:cursor-not-allowed disabled:bg-blue-400"
        >
          Generate
        </button>
      </div>
      <div className="pt-5">
        <QRCode id="qr-code-value" size={300} bgColor="#fff" value={qrCode} />
      </div>
    </div>
  );
};

export default QrCodeGenerator;

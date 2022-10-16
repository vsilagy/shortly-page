import { useState } from "react";

export default function Shorten({ setInputUrl }) {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputUrl(url);
    setUrl("");
  };
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <form
        id="form"
        className="relative flex flex-col w-full p-12 -mt-24 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3"
      >
        <input
          type="url"
          className="flex-1 p-3 border-2 rounded-lg placeholder-grayish focus:outline-none"
          placeholder="shorten a link here"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          className="px-10 py-3 text-white bg-cyanish rounded-lg hover:bg-cyan-200 focus:outline-none md:py-2"
          onClick={handleSubmit}
        >
          Shorten It
        </button>
      </form>
    </div>
  );
}

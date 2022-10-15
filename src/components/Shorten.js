import { useEffect, useState } from "react";

export default function Shortly() {
  const [url, setUrl] = useState("");
  const [links, setLinks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url) {
      return;
    } else {
      console.log("hello");
      const shorten = async () => {
        let response = await fetch(
          `https://api.shrtco.de/v2/shorten?url=${url}`
        );
        let data = await response.json();
        setLinks(data.result);
        setUrl("");
      };
      shorten();
    }
  };

  // https://api.shrtco.de/v2/shorten?url=
  return (
    <section className="relative bg-gray-100">
      <div className="max-w-6xl mx-auto p-6 space-y-6">
        <form
          onSubmit={handleSubmit}
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
            type="submit"
            onClick={handleSubmit}
          >
            Shorten It
          </button>
        </form>
        <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
          <p className="font-bold text-center text-veryDarkViolet md:text-left">
            {links.original_link}
          </p>
          <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
            <div className="font-bold text-cyanish">{links.short_link}</div>
            <button className="p-2 px-8 text-white bg-cyanish rounded-lg hover:opacity-70 focus:outline-none active:bg-darkViolet">
              Copy
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
          <p className="font-bold text-center text-veryDarkViolet md:text-left">
            https://twitter.com/frontendmentor
          </p>
          <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
            <div className="font-bold text-cyanish">https://rel.ink/gxOXp9</div>
            <button className="p-2 px-8 text-white bg-cyanish rounded-lg hover:opacity-70 focus:outline-none active:bg-darkViolet">
              Copy
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
          <p className="font-bold text-center text-veryDarkViolet md:text-left">
            https://linkedin.com/frontend-mentor
          </p>
          <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
            <div className="font-bold text-cyanish">https://rel.ink/gob3X9</div>
            <button className="p-2 px-8 text-white bg-cyanish rounded-lg hover:opacity-70 focus:outline-none active:bg-darkViolet">
              Copy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

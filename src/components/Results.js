import { useState, useEffect } from "react";
import isURL from "validator/lib/isURL";

export default function Results({ inputUrl }) {
  const [link, setLink] = useState("");
  const [copied, setCopied] = useState("Copy");

  const fetchData = async () => {
    let response = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${inputUrl}`
    );
    let data = await response.json();
    console.log(data.result.short_link);
    setLink(data.result.short_link);
  };

  useEffect(() => {
    if (isURL(inputUrl)) {
      fetchData();
    }
  }, [inputUrl]);

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setCopied("Copied!");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied("Copy");
    }, 3000);

    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <>
      {link && (
        <div className="max-w-6xl p-6 mx-auto">
          <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
            <p className="font-bold text-center text-veryDarkViolet md:text-left">
              {inputUrl}
            </p>
            <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div className="font-bold text-cyanish">{link}</div>
              <button
                className="p-2 px-8 text-white bg-cyanish rounded-lg hover:opacity-70 focus:outline-none active:bg-darkViolet"
                onClick={handleCopy}
              >
                {copied}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

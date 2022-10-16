import { useState } from "react";
import Shorten from "./Shorten";
import Results from "./Results";

export default function Main() {
  const [inputUrl, setInputUrl] = useState("");

  return (
    <section className="relative bg-gray-100">
      <Shorten setInputUrl={setInputUrl} />
      <Results inputUrl={inputUrl} />
    </section>
  );
}

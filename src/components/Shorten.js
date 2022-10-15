export default function Shortly() {
  return (
    <section className="relative bg-gray-100">
      <div className="max-w-6xl mx-auto p-6 space-y-6">
        <form
          id="form"
          className="relative flex flex-col w-full p-12 -mt-24 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3"
        >
          <input
            type="text"
            className="flex-1 p-3 border-2 rounded-lg placeholder-grayish focus:outline-none"
            placeholder="shorten a link here"
            id="form-input"
          />
          <button
            className="px-10 py-3 text-white bg-cyanish rounded-lg hover:bg-cyan-200 focus:outline-none md:py-2"
            type="submit"
          >
            Shorten It
          </button>
        </form>
        <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
          <p className="font-bold text-center text-veryDarkViolet md:text-left">
            https://frontendmentor.io
          </p>
          <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
            <div className="font-bold text-cyanish">https://rel.ink/k4IKyk</div>
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

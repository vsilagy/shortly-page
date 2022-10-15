import img1 from "../images/icon-brand-recognition.svg";
import img2 from "../images/icon-detailed-records.svg";
import img3 from "../images/icon-fully-customizable.svg";
export default function Features() {
  return (
    <section className="pb-32 bg-gray-100">
      <article className="py-24">
        <div className="container mx-auto px-3 max-w-6xl">
          <h2 className="text-5xl mb-6 font-bold text-center">
            Advanced Statistics
          </h2>
          <p className="max-w-xs mx-auto text-center text-grayish md:max-w-md">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
      </article>
      <div className="relative container max-w-6xl flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
        <div className="relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3">
          <div className="absolute -ml-10 left-1/2 -top-10 md-left-16">
            <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
              <img src={img1} alt="logo" />
            </div>
          </div>
          <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
            Brand Recognition
          </h5>
          <p className="text-center text-gray-400 md:text-left">
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>

        <div className="relative flex flex-col mt-20 p-6 space-y-6 bg-white rounded-lg md:mt-8 md:w-1/3">
          <div className="absolute -ml-10 left-1/2 -top-10 md-left-16">
            <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
              <img src={img2} alt="logo" />
            </div>
          </div>
          <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
            Detailed records
          </h5>
          <p className="text-center text-gray-400 md:text-left">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>

        <div className="relative flex flex-col mt-20 p-6 space-y-6 bg-white rounded-lg md:mt-16 md:w-1/3">
          <div className="absolute -ml-10 left-1/2 -top-10 md-left-16">
            <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
              <img src={img3} alt="logo" />
            </div>
          </div>
          <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
            Fully customizable
          </h5>
          <p className="text-center text-gray-400 md:text-left">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </section>
  );
}

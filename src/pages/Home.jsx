// import treeImage from "/public/tree.png"; // Update with your actual image path
import backgroundImage from "../assets/HomeBg.jpg"; // Update with your actual image path

const Home = () => {
  return (
    <section className="relative flex flex-col ">
      <div className="max-w-7xl h-[80vh] justify-between  w-full mx-auto px-6 flex flex-row">
        {/* Left Section */}
        <div className="flex flex-col max-w-2xl justify-center">
          <h1 className="text-2xl md:text-4xl font-bold text-teal-800 leading-snug">
            The science is clear—we can solve the interconnected crises of
            climate change and biodiversity loss.
          </h1>
          <p className="text-gray-600 text-sm mt-4">
            Based on groundbreaking science, One Earth developed a powerful
            Solutions Framework that provides a roadmap to stop climate change
            and protect biodiversity. The solutions are readily available,
            science-based, and fall under three pillars of collective actions.
          </p>
          <button className="mt-6 px-6 py-3 w-56 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">
            Explore Solutions
          </button>
        </div>

        {/* Right Section */}
        <div className="flex h-full items-center">
          <img
            src={backgroundImage}
            alt="Background"
            className="max-w-2xl  object-contain rounded-lg "
          />
        </div>
      </div>
      <div className="flex flex-row justify-center ">
        <div className="flex flex-row justify-center items-center ">
          <span className="h-48 w-48 bg-red-400 rounded-full"></span>
          <div className="flex flex-col ml-3 Space-y-5">
            <span className="text-2xl">Energy Transistion</span>
            <span className=" text-gray-300 text-lg w-52">
              Transition Our energy Systems to 100% renewable energy to all
            </span>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center ">
          <span className="h-48 w-48 bg-red-400 rounded-full"></span>
          <div className="flex flex-col ml-3 Space-y-5">
            <span className="text-2xl">Energy Transistion</span>
            <span className=" text-gray-300 text-lg w-52">
              Transition Our energy Systems to 100% renewable energy to all
            </span>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center ">
          <span className="h-48 w-48 bg-red-400 rounded-full"></span>
          <div className="flex flex-col ml-3 Space-y-5">
            <span className="text-2xl">Energy Transistion</span>
            <span className=" text-gray-300 text-lg w-52">
              Transition Our energy Systems to 100% renewable energy to all
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

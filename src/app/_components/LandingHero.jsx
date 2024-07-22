import Image from 'next/image';

const LandingHero = () => {
  return (
    <div className="container flex flex-col lg:flex-column md:flex-row justify-between items-center p-8 bg-white w-[90%] relative">
      <div className="xl:w-1/2 mb-8 md:mb-0 z-20 bg-white">
        <h1 className="text-4xl md:text-4xl font-bold mb-4">
          <span className="text-yellow-400">User-Centric Excellence:</span> Our
          <br />
          App Development services
          <br />
          Tackles Your Pain Points
        </h1>
        <p className="text-lg mb-6">
          Experience a Seamless Digital Journey with <span className="text-green-500">Desun</span> - Where Every Line
          of Code Resolves Your Challenges and <span className="text-yellow-400">Elevates Your App Experience </span>
          to Unparalleled Heights.
        </p>
        <div className="bg-white rounded-lg  p-6 border-t-2 shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Leave your contacts and we will call you back within 30 minutes
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full name</label>
                <input type="text" id="fullName" name="fullName" placeholder="My Name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone number</label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">🇮🇳 +91</span>
                  <input type="tel" id="phone" name="phone" placeholder="000000000" className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Business name</label>
                <input type="text" id="businessName" name="businessName" placeholder="ABC Technologies PVT LTD" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Business mail</label>
                <input type="email" id="email" name="email" placeholder="demoaccount@gmail.com" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              </div>
            </div>
            <button type="submit" className="w-full md:w-auto px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
              Get consultation
            </button>
          </form>
        </div>
      </div>
      <div className="xl:w-1/2 ">
        <Image
          src="/images/Group 1.png"
          alt="App Screenshots"
          width={500}
          height={100}
          className="rounded-lg shadow-lg md:absolute top-0 right-0 m-2 z-10"
        />
      </div>
    </div>
  );
};

export default LandingHero;

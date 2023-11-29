import './App.css';

function App() {
  return (
    <div className="w-screen h-screen flex items-center grid grid-cols-2 bg-black">
      <div className="xl:p-36 lg:p-24 md:p-12">
        <div className="w-full h-full flex flex-col items-start">
          <div className="font-semibold text-cyan-50 lg:text-5xl md:text-3xl">
            Hi! I'm
          </div>
          <div className="font-black text-white lg:text-6xl md:text-4xl py-3">
            William Ng !
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-[url('/src/williamNg.jpg')] bg-cover bg-center">
        <div class="flex h-full lg:items-center sm:items-stretch lg:justify-end p-10 ">
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex flex-col bg-white rounded-xl items-center">
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              <button href="#" class="fill-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">
                <img src="home.png" alt=''/>
              </button>
              <button href="#" class="bg-white text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">
                <img src="aboutMe.png" alt=''/>
              </button>
              <button href="#" class="bg-white text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">
                <img src="experience.png" alt=''/>
              </button>
              <button href="#" class="bg-white text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">
                <img src="portfolio.png" alt=''/>
              </button>
              <button href="#" class="bg-white hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">
                <img src="contact.png" alt=""/>
              </button>
              {/* <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a> */}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;

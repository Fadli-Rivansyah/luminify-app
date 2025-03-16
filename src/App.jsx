import Navbar from "./components/Navbar";
import './App.css'
import BlurTool from "./components/BlurTool";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container px-4 lg:px-0 mx-auto lg:max-w-screen-xl">
      <header>
        <Navbar />
      </header>
   
      <div className="lg:flex justify-between items-center my-[1em] lg:my-[3em]">
        <header className="lg:w-full sm:max-w-lg lg:mx-0 mx-auto ">
          <h1 className="mb-[0.5em] lg:leading-18 capitalize text-4xl lg:!text-6xl text-gray-900 dark:text-gray-100 font-extrabold"><span class="bg-clip-text text-transparent bg-gradient-to-r from-[#e5d524] to-[#e47c1b]">Change</span> the Look with Elegant <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#bf0d43] to-[#d47dc8]"> Backdrop Effects!</span></h1>
          <p className="leading-8 mb-5 text-gray-400 max-w-xl">Create modern designs with backdrop blur, opacity, brightness, contrast, hue-rotate, saturate, sepia, and more! Luminify lets you customize the look of your background to perfection, creating an elegant Glassmorphism effect in seconds. Swipe, copy the Tailwind code, and make your design more futuristic! 🚀✨
          </p>
        </header>
        <div className="lg:w-1/2">
            <BlurTool />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

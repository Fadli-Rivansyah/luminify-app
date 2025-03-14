import Navbar from "./components/Navbar";
import './App.css'
import BlurTool from "./components/BlurTool";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container mx-auto max-w-screen-xl">
      <header>
        <Navbar />
      </header>
      <div className="flex justify-between my-[5em]">
        <header className="w-1/2">
          <h1 className="capitalize text-2xl lg:text-5xl text-gray-900 dark:text-gray-100 font-bold">Change the Look with Elegant Backdrop Effects!</h1>
          <p className="leading-8 text-gray-400 max-w-xl">Create modern designs with backdrop blur, opacity, brightness, contrast, hue-rotate, saturate, sepia, and more! Luminify lets you customize the look of your background to perfection, creating an elegant Glassmorphism effect in seconds. Swipe, copy the Tailwind code, and make your design more futuristic! 🚀✨
          </p>
        </header>
        <div className="w-1/2">
            <BlurTool />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

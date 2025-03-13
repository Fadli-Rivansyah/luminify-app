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
          <h1 className="capitalize text-2xl lg:text-5xl text-gray-900 dark:text-gray-100 font-bold">buat efek blur dengan cepat!</h1>
          <p className="leading-8 text-gray-400 max-w-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores labore magnam exercitationem, aliquam nisi nostrum tempora assumenda rerum, laborum tempore sapiente? Ipsam ut natus soluta dolores ab vero reiciendis aspernatur.
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

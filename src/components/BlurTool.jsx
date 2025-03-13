import React, { useRef, useState } from "react";

const BlurTool = () => {

    const [value, setValue] = useState(0);
    const [copy, setCopy] = useState(false);
    const codeRef = useRef(null)
    
    const handleBlur = (e) => {
        setValue(e.target.value);
    }

    const handleCopy = () => {
        if(codeRef.current){
            const text = codeRef.current.innerText;
            navigator.clipboard.writeText(text)
            .then(() => {
                setCopy(true)
                setTimeout(() => setCopy(false), 1000);
            }).catch(err => console.error('gagal salin' + err));
        }
    }

    return ( 
        <div className="max-w-lg mx-auto">
            <div className="mb-[3em]">
                <figure>
                    <img src="/img/img_mountain.jpg" style={{filter: `blur(${value}px)`}} alt="Contoh" className="w-full h-auto rounded-md" />
                </figure>
            </div>
            <div className="mb-5">
                <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-white">size</label>
                <div className="flex items-center  gap-5">
                    <input type="range" max="500" value={value} name="input-deg" id="input-size" onChange={handleBlur} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                    <span id="preview-size" className="font-semibold w-1/4 inline-flex text-gray-900 dark:text-white">{value} px</span>
                </div>
            </div>
            <div>
                <section className="coantainer_code overflow-x-auto ">
                    <div className=" bg-gray-800 p-4 mt-4 rounded-lg ">
                    <div className="flex justify-between items-center h-max">
                        <p className="text-sm text-gray-400 ">Tailwind Code:</p>
                        <button aria-label="apply" id="btn-copy" onClick={handleCopy} className="w-max text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            {copy ? "Copied" : "Copy"}
                        </button>
                    </div>
                        <pre className="whitespace-pre text-left overflow-x-auto">
                            <code id="code-preview" ref={codeRef}  className="text-green-400 text-sm flex">{`blur(${value}px)`}</code>
                        </pre>
                    </div>
                </section>
            </div>
        </div>
     );
}

export default BlurTool;
import React, { useRef, useState } from "react";

const BlurTool = () => {
    const [value, setValue] = useState(0);
    const [copy, setCopy] = useState(false);
    const codeRef = useRef(null)
    
    const [filterState, setFilterState] = useState({
        satuan: "px",
        maxValue: 200,
        filter: "blur",
      });

    const filterOptions = {
        blur: { satuan: "px", maxValue: 1000 },
        brightness: { satuan: "%", maxValue: 500 },
        contrast: { satuan: "%", maxValue: 500 },
        grayscale: { satuan: "%", maxValue: 100 },
        "hue-rotate": { satuan: "deg", maxValue: 360 },
        invert: { satuan: "%", maxValue: 100 },
        opacity: { satuan: "%", maxValue: 100 },
        saturate: { satuan: "%", maxValue: 500 },
        sepia: { satuan: "%", maxValue: 100 }
    };

    const handleOption = (e) => {
        const item = e.target.value;
        if (filterOptions[item]) {
            setFilterState({ ...filterOptions[item], filter: item });
        }
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
                <div className="bg-[url('/img/img_mountain.jpg')] bg-cover bg-center h-64 w-full flex justify-center items-center ">
                    <div style={{backdropFilter: `${filterState.filter}(${value + filterState.satuan})`}} className="bg-white/30  h-46 w-64 backdrop-invert" ></div>  
                </div>
            </div>
            <div class="md-5 flex items-center justify-between gap-6">
                <div className="w-1/2">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                    <select id="backdropFilter" onChange={handleOption} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {Object.keys(filterOptions).map((item, index) => (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-5 w-1/2">
                    <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-white">size</label>
                    <div className="flex items-center  gap-5">
                        <input type="range" min="0.5"  max={filterState.maxValue} step="0.5" value={value} name="input-deg" id="input-size" onChange={(e) => setValue(e.target.value)} className=" h-2 bg-gray-200 rounded-lg w-full appearance-none cursor-pointer dark:bg-gray-700" />
                        <span id="preview-size" className="font-semibold  text-gray-900 dark:text-white">{value}</span>
                    </div>
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
                            <code id="code-preview" ref={codeRef}  className="text-green-400 text-sm flex">{`backdrop-${filterState.filter}-[${value + filterState.satuan}]`}</code>
                        </pre>
                    </div>
                </section>
            </div>
        </div>
     );
}

export default BlurTool;
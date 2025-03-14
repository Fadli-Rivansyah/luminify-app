function Navbar() {
    return ( 
        <>
        <nav className="bg-white border-gray-200 dark:bg-gray-900 border-b-1 border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Luminify.</span>
                </a>
            </div>
        </nav>
        </>

     );
}

export default Navbar;
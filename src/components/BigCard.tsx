import Review from "../assets/review.png"



const BigCard = () => {
    return (
        <div className=" bg-white hover:bg-gray-50 dark:bg-zinc-900 dark:hover:bg-zinc-800/30 rounded-lg p-8 md:p-12 mb-8">
            <div>
                <a href="#" className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                    Personal Project
                </a>
                <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">An Invoice Generator</h1>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-3">
                    An Invoice Generator project in which user can
                    add itemized items, configure quantity, prices, tax rates and discounts. Download invoice as PDFs to your device. Uses jspdf-react to capture the data from the modal and covert it from canvas to pdf.
                </p>
                <img className="max-h-[55vh]  transition-all duration-300 rounded-lg mb-3" src={Review} alt="image description" />
            </div>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">React Js</span>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Redux</span>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Redux Toolkit</span>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">React-Bootstrap</span>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">jspdf-react</span>
            <div className="flex gap-4">
                <a aria-hidden="true" target="_blank" href="https://master--mellifluous-unicorn-5e569e.netlify.app/" className="cursor-pointer relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">Visit Site<svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current"><path d="M6.75 5.75 9.25 8l-2.5 2.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
                <a aria-hidden="true" target="_blank" href="https://github.com/rakeshkumar1019/invoice-management-system" className="cursor-pointer relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">View Source<svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current"><path d="M6.75 5.75 9.25 8l-2.5 2.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
            </div>
        </div>


    )
}

export default BigCard;

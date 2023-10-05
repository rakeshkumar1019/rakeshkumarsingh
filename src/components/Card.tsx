// import BuildJs from "../assets/build-js.svg"
// import LintJs from "../assets/lint-js.svg"
import Npm from "../assets/npm.svg"

const Card = () => {
    return (
        <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className=" bg-white hover:bg-gray-50 dark:bg-zinc-900 dark:hover:bg-zinc-800/30 rounded-lg p-8 md:p-12">
                <a href="#" className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                    <img src={Npm} alt="npm logo" className="w-6 h-6 mr-1.5" />
                    Open Source
                </a>
                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">build-minify-js</h2>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                    build-minify-js is a JavaScript build tool designed to compress JavaScript code.
                </p>
                <h2 className="text-gray-900 dark:text-white text-xl">What is Does ?</h2>
                <ul className="px-5 list-disc text-gray-500 dark:text-gray-400 leading-loose">
                    <li>Replaces Variable Names</li>
                    <li>Removes Unnecessary Elements</li>
                    <li>Minifies Code</li>
                    <li>Generates Source Maps</li>
                </ul>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Node Js</span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Acorn</span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Escodegen</span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Source-Map</span>
                <div className="flex gap-4">
                    <a aria-hidden="true" target="_blank" href="https://www.npmjs.com/package/build-minify-js" className="cursor-pointer relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">Visit Npm<svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current"><path d="M6.75 5.75 9.25 8l-2.5 2.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
                    <a aria-hidden="true" target="_blank" href="https://github.com/rakeshkumar1019/build-minify-js" className="cursor-pointer relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">View Source<svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current"><path d="M6.75 5.75 9.25 8l-2.5 2.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
                </div>

            </div>
            <div className=" bg-white hover:bg-gray-50 dark:bg-zinc-900 dark:hover:bg-zinc-800/30 rounded-lg p-8 md:p-12">
                <a href="#" className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                    <img src={Npm} alt="npm logo" className="w-6 h-6 mr-1.5" />
                    Open Source
                </a>
                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">js-code-linter</h2>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Js-code-linter is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.It is inspired from ESlint with a few exceptions.</p>
                <h2 className="text-gray-900 dark:text-white text-xl">What js-code-linter lints ?</h2>
                <ul className="px-5 list-disc text-gray-500 dark:text-gray-400 leading-loose">
                    <li>Literal</li>
                    <li>VariableDeclaration</li>
                    <li>ExpressionStatement</li>
                    <li>Quote Transformation</li>
                </ul>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Node Js</span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Espree</span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Astring</span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Chalk</span>
                <div className="flex gap-4">
                    <a aria-hidden="true" target="_blank" href="https://www.npmjs.com/package/js-code-linter" className="cursor-pointer relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">Visit Npm<svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current"><path d="M6.75 5.75 9.25 8l-2.5 2.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
                    <a aria-hidden="true" target="_blank" href="https://github.com/rakeshkumar1019/JSCodeLinter" className="cursor-pointer relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">View Source<svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current"><path d="M6.75 5.75 9.25 8l-2.5 2.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
                </div>
            </div>
        </div>
    )
}

export default Card

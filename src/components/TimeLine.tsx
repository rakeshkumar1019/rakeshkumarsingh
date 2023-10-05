

const TimeLine = () => {
    return (
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2021 -  Current</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white"> GlobalLogic, a Hitachi Group Company</h3>
                <ul className="list-decimal list-inside">
                    <li className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Developing and enhancing Enterprise Document Management Systems using React Js and Redux.
                    </li>
                    <li className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Built essential features such as retention management and document explorer, improved documents organisation
                        and accessibility.
                    </li>
                    <li className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Implemented features through a comprehensive process involving shaping, code triage and Proof of Concept
                        phases.
                    </li>
                    <li className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Built customisable and scalable components for a low-code tool.
                    </li>
                    <li className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Built GitHub Actions CI/CD pipelines, reducing manual efforts by 92% for streamlined project delivery.
                    </li>
                    <li className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Received 2 Spot Awards for outstanding contributions to the development of the product.
                    </li>
                </ul>
            </li>
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022 -  September 2021</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">01 Synergy</h3>
                <ul className="list-decimal list-inside">
                    <li className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Developed and enhanced an AI/ML-driven customs clearance and drayage management platform.
                    </li>
                    <li className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Developed critical components like Invoice & operation management, infinite scrollable tables and forms using
                        React Js & Redux.
                    </li>
                    <li className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Collaborated with designers to implement visually appealing and technically sound designs, adhering to the
                        Semantic UI design system.
                    </li>
                </ul>
            </li>
        </ol>

    )
}

export default TimeLine

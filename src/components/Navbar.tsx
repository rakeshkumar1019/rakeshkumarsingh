import React from 'react';
import { Link } from 'react-router-dom';
const Navbar: React.FC = () => {

    return (
        <nav className="hidden sm:flex w-96 rounded-3xl bg-white/90 p-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
            <div className="hidden sm:flex justify-center container mx-auto ">
                <ul className="flex space-x-4">
                    <Link to="/about"><li className="hover:text-emerald-300">About</li></Link>
                    <Link to="/articles"><li className="hover:text-emerald-300">Articles</li></Link>
                    <Link to="/projects"><li className="hover:text-emerald-300">Projects</li></Link>
                    <Link to="/resume"> <li className="hover:text-emerald-300">Resume</li></Link>
                    <Link to="/contact"><li className="hover:text-emerald-300">Contact</li></Link>
                </ul>
            </div>
        </nav >
    );
}

export default Navbar;

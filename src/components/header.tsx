import React from 'react';


const Header: React.FC = () => {
    return (
        <header className="bg-yellow  p-4 ">
            <nav className='flex justify-between items-center'>
                    <h1 className="text-2xl font-bold">Rizzume</h1>
                <ul className="flex items-center gap-6">
                    <li><a href="#" className="hover:underline">Templates</a></li>
                    <li><a><img className='w-8 h-8'  src="/icons/github.svg"/></a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

import React from 'react';



const Header: React.FC = () => {

    
    return (
        <header className="bg-yellow h-14  p-4 ">
            <nav className='flex justify-between items-center '>

                <div className='flex items-center'>
                <h1 className="text-2xl font-bold">Rizzume</h1>
                <img src={'/icons/rizzume-logo.png'}  alt="logo" height="36" width="36"/>
                </div>

                <ul className="flex items-center gap-6">  
                    <li><a href="https://github.com/apurvabangali"><img className='w-8 h-8' src="/icons/github.svg" /></a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

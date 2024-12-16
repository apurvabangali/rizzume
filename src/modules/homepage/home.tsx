import React from 'react'

const Home: React.FC = () => {
    return (
        <div>
       <div className='flex lg:flex-row flex-col-reverse p-6 justify-center items-center lg:p-24'>
        <div>
         <p className='lg:text-5xl text-xl'>Crafting Your Professional Story: Your Resume, Your Future.</p>
         <a href="/builder"><button className='border border-[#000] lg:p-4 p-2 lg:mt-24 mt-4'>Build My Resume</button></a>
        </div>
         <img src="/homepageimg.png"/>
       </div>
       <div>
        
       </div>
       </div>
    );
};

export default Home;


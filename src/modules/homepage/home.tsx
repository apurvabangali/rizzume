import React from 'react'
import Header from '../../components/header';

const Home: React.FC = () => {
    return (
        <>
        <Header/>
       <div className='flex lg:flex-row justify-center items-center p-8'>
        <div>
         <p className='lg:text-5xl text-xl'>Give your resume the <b>rizz</b> it needs — one page , no fuss!</p>
         <a href="/builder"><button className='border border-[#000] lg:p-4 p-2 lg:mt-24 mt-4'>Build My Resume</button></a>
        </div>
         <img src="/homepageimg.png"/>
       </div>
       <div>
       </div>

       </>
    );
};

export default Home;


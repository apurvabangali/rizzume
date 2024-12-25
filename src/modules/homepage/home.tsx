import React from 'react'

const Home: React.FC = () => {
    return (
        <>
       <div className='flex lg:flex-row flex-col-reverse p-6 justify-center items-center lg:p-24'>
        <div>
         <p className='lg:text-5xl text-xl'>Get your Resume <b>rizzed </b> up in minutes.</p>
         <a href="/builder"><button className='border border-[#000] lg:p-4 p-2 lg:mt-24 mt-4'>Build My Resume</button></a>
        </div>
         <img src="/homepageimg.png"/>
       </div>
       <div>
       </div>
    <div className=" justify-center hover:tracking-wide flex mx-auto">

    <p className=' text-2xl'>Get the Rizz, Land the Biz!</p>
    </div>
 <div className="flex my-auto">
  <div className="w-1/3">
    <img src="/rizzler-emoji.jpg" alt="Descriptive Alt Text" className="w-full h-auto object-cover"/>
  </div>
  <div className="w-2/3 grid grid-cols-2 items-center h-72 my-auto gap-4 p-4">
    <div className="border p-4 flex items-center shadow-md h-24 rounded-md">
      <img className="h-12" src="/sign-up.png"/>
      <p className='mx-auto pl-2'><strong>No sign-up needed</strong> — Just start building your resume!</p>
    </div>
    <div className="border p-4 flex items-center shadow-md h-24 rounded-md">
      <img className="h-12" src="/fast.png"/>
      <p className='mx-auto pl-2'><strong>Fast & simple</strong> — because your dream job shouldn't have to wait!</p>
    </div>
    <div className="border p-4 flex items-center shadow-md h-24 rounded-md">
      <img className="h-12" src="/import-export.png"/>
      <p className='mx-auto pl-2'><strong>Import & export resumes</strong> like a breeze — without the hassle of signing up!</p>
    </div>
    <div className="border p-4 flex items-center  shadow-md h-24 rounded-md">
      <img className="h-12" src="/developer.png"/>
      <p className='mx-auto pl-2'><strong>Developers, unite!</strong> Contribute and create cool templates for everyone!</p>
    </div>
  </div>
</div>

       </>
    );
};

export default Home;


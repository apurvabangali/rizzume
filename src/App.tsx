import React from 'react';
import Home from './modules/homepage/home'
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import BuilderLayout from './modules/builder/BuilderLayout';

const App: React.FC = () => {
  return (
    <div>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/builder" element={<BuilderLayout/>}/>
    </Routes>
    </div>
  );
  
};

export default App;

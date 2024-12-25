import { useState } from 'react';
import DataHeaders from './components/EditHeaders';
import EditSection from './components/EditSections';
import { headers } from '../../../helpers/constants/editor-data';
import { resetResumeStore } from '../../../stores/useResumeStore';


const EditorLayout = () => {
  const [link, setLink] = useState('');
  const section = headers[link];

  const linkClickHandler = (link: string) => {
    setLink(link);
  };

  const displayElement = link ? (
    <EditSection section={section} onLinkClick={linkClickHandler} />
  ) : (
    <DataHeaders onLinkClick={linkClickHandler} />
  );

  return (
   
      <div className="bg-[#FCFCFC] h-full text-resume-800  overflow-auto relative no-scrollbar p-4 shadow-level-4dp">
        {displayElement}

        <div className="mt-12 ">
          <button className="border border-[#000]  px-4 py-1" onClick={resetResumeStore}>Reset</button>
        </div>
      </div>
    
  );
};

export default EditorLayout;

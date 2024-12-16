import { useState } from 'react';
import DataHeaders from './components/EditHeaders';
import EditSection from './components/EditSections';
import { headers } from '../../../helpers/constants/editor-data';


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
   
      <div className="bg-resume-50 h-full text-resume-800 p-6 overflow-auto relative no-scrollbar shadow-level-4dp">
        {displayElement}

        <div className="mt-8">
          
        </div>
      </div>
    
  );
};

export default EditorLayout;

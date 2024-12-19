import { Context, createContext} from 'react';
import { useResumeStore } from '../../../stores/useResumeStore';
import FormalTemplate from '../../../templates/formal/FormalTemplate';

export let StateContext: Context<any> = createContext(null);

export const ResumeLayout = () => {
  const resumeData = useResumeStore();

  return (
    <div className="mx-5 print:mx-0 mb-2 print:mb-0">
      <div>
        <div className="w-[210mm] h-[296mm] bg-white my-0 mx-auto">
          <StateContext.Provider value={resumeData}>
            <FormalTemplate/>
          </StateContext.Provider>
        </div>
      </div>
    </div>
  );
};
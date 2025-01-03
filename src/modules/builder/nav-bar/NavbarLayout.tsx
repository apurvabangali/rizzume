import { ChangeEvent, useCallback, useRef } from 'react';
import { NavBarActions, NavBarMenu} from './atoms';
import {
  useDatabases,
  useFrameworks,
  useLanguages,
  useLibraries,
  usePractices,
  useTechnologies,
  useTools,
} from '../../../stores/skill';

import { AVAILABLE_TEMPLATES } from '../../../helpers/constants';
import DEFAULT_RESUME_JSON from '../../../helpers/resume-data.json';
import { NavMenuItem } from './components/MenuItem';
import { TemplateSelect } from './components/TemplateSelect';
import exportFromJSON from 'export-from-json';
import { useBasicDetails } from '../../../stores/basic';
import { useEducations } from '../../../stores/education';
import { useExperiences } from '../../../stores/experience';


const TOTAL_TEMPLATES_AVAILABLE = Object.keys(AVAILABLE_TEMPLATES).length;

const NavBarLayout = () => {
  
  const fileInputRef = useRef(null);

  const exportResumeData = useCallback(() => {
    const updatedResumeJson = {
      ...DEFAULT_RESUME_JSON,
      basics: {
        ...DEFAULT_RESUME_JSON.basics,
        ...useBasicDetails.getState().values,
      },
      work: useExperiences.getState().experiences,
      education: useEducations.getState().academics,
      skills: {
        languages: useLanguages.getState().get(),
        frameworks: useFrameworks.getState().get(),
        technologies: useTechnologies.getState().get(),
        libraries: useLibraries.getState().get(),
        databases: useDatabases.getState().get(),
        practices: usePractices.getState().get(),
        tools: useTools.getState().get(),
      },
    };
    const fileName = updatedResumeJson.basics.name + '_' + new Date().toLocaleString();
    const exportType = exportFromJSON.types.json;
    exportFromJSON({
      data: updatedResumeJson,
      fileName,
      exportType,
    });
  }, []);

  const handleFileChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    const reader = new FileReader();

    reader.readAsText(fileObj);

    event.target.value = ''; // To read the same file

    reader.onload = (e) => {
      if (typeof e.target?.result === 'string') {
        const uploadedResumeJSON = JSON.parse(e.target?.result);
        const {
          basics = {},
          skills = {},
          work = [],
          education = [],
        } = uploadedResumeJSON;
        const {
          languages = [],
          frameworks = [],
          libraries = [],
          databases = [],
          technologies = [],
          practices = [],
          tools = [],
        } = skills;
        useBasicDetails.getState().reset(basics);
        useLanguages.getState().reset(languages);
        useFrameworks.getState().reset(frameworks);
        useLibraries.getState().reset(libraries);
        useDatabases.getState().reset(databases);
        useTechnologies.getState().reset(technologies);
        usePractices.getState().reset(practices);
        useTools.getState().reset(tools);
        useExperiences.getState().reset(work);
        useEducations.getState().reset(education);
      }
    };
  }, []);

  return (
    <nav className="h-14 w-full bg-yellow h-14  p-4 relative flex py-2.5 pl-5 pr-4 items-center shadow-level-8dp z-20 print:hidden">
      <a href="/" className='flex items-center'>
        <p className='text-2xl font-bold'>Rizzume</p><img src={'/icons/rizzume-logo.png'} alt="logo" height="36" width="36" />
      </a>
      <div className="flex-auto flex justify-between items-center ml-5">
        <NavBarMenu>
          <NavMenuItem
            caption={`Templates (${TOTAL_TEMPLATES_AVAILABLE})`}
            popoverChildren={<TemplateSelect />}
          />
          
        </NavBarMenu>
        <NavBarActions>
          <button  onClick={exportResumeData}>
            Export
          </button>
          <button
            
            onClick={() => {
              if (fileInputRef.current) {
                const fileElement = fileInputRef.current as HTMLInputElement;
                fileElement.click();
              }
            }}
          >
            Import{' '}
            <input
              type="file"
              hidden
              ref={fileInputRef}
              accept="application/json"
              onChange={handleFileChange}
            />
          </button>
         
        </NavBarActions>
      </div>
      
    </nav>
  );
};

export default NavBarLayout;

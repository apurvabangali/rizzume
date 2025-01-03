import React, { ChangeEvent, useCallback, useRef } from 'react';
import { useBasicDetails } from '../stores/basic';
import { useEducations } from '../stores/education';
import { useExperiences } from '../stores/experience';
import { useLanguages, useFrameworks, useLibraries, useDatabases, useTechnologies, usePractices, useTools } from '../stores/skill';
import { useProjects } from '../stores/projects';
import exportFromJSON from 'export-from-json';
import DEFAULT_RESUME_JSON from '../helpers/resume-data.json';


const Header: React.FC = () => {

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

    const fileInputRef = useRef(null);
    const handleFileChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {

        const fileObj = event.target.files && event.target.files[0];
        if (!fileObj) {
            return;
        }

        const reader = new FileReader();

        reader.readAsText(fileObj);

        event.target.value = ''; 

        reader.onload = (e) => {
            if (typeof e.target?.result === 'string') {
                const uploadedResumeJSON = JSON.parse(e.target?.result);
                const {
                    basics = {},
                    skills = {},
                    work = [],
                    education = [],
                    projects = [],
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
                useProjects.getState().reset(projects)

            }
        };
    }, []);
    return (
        <header className="bg-yellow h-14  p-4 ">
            <nav className='flex justify-between items-center '>

                <div className='flex items-center'>
                <h1 className="text-2xl font-bold">Rizzume</h1>
                <img src={'/icons/rizzume-logo.png'}  alt="logo" height="36" width="36"/>
                </div>

                <ul className="flex items-center gap-6">  
                    <li><a><img className='w-8 h-8' src="/icons/github.svg" /></a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

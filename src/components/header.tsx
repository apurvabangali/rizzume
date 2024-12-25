import React, { ChangeEvent, useCallback, useRef } from 'react';
import { useBasicDetails } from '../stores/basic';
import { useEducations } from '../stores/education';
import { useExperiences } from '../stores/experience';
import { useLanguages, useFrameworks, useLibraries, useDatabases, useTechnologies, usePractices, useTools } from '../stores/skill';
import { useProjects } from '../stores/projects';


const Header: React.FC = () => {

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
            <nav className='flex justify-between items-center'>
                <h1 className="text-2xl font-bold">Rizzume</h1>
                <ul className="flex items-center gap-6">
                    <li>
                        <button
                            onClick={() => {
                                if (fileInputRef.current) {
                                    const fileElement = fileInputRef.current as HTMLInputElement;
                                    fileElement.click();
                                }
                            }}
                            className="hover:underline">Import  <input
                                type="file"
                                hidden
                                ref={fileInputRef}
                                accept="application/json"
                                onChange={handleFileChange}
                            /></button></li>
                    <li><a><img className='w-8 h-8' src="/icons/github.svg" /></a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

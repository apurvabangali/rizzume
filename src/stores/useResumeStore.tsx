import ResumeData from '../helpers/resume-data.json';
import { useBasicDetails } from './basic';
import { useEducations } from './education';
import { useExperiences } from './experience';
import { useProjects } from './projects';
import { useLanguages, useFrameworks, useTechnologies, useLibraries, useDatabases, usePractices, useTools } from './skill';



export const useResumeStore = () => {
  return {
    ...ResumeData,  
    basics: useBasicDetails((state) => state.values),
    education: useEducations((state) => state.academics),
    work: useExperiences((state) => state.experiences),
    personalProjects:useProjects((state)=>state.projects),
    skills: {
      languages: useLanguages((state) => state.get()),
      frameworks: useFrameworks((state) => state.get()),
      technologies: useTechnologies((state) => state.get()),
      libraries: useLibraries((state) => state.get()),
      databases: useDatabases((state) => state.get()),
      practices: usePractices((state) => state.get()),
      tools: useTools((state) => state.get()),
    },
  };
};

export const resetResumeStore = () => {
  useBasicDetails.getState().reset(ResumeData.basics);
  useLanguages.getState().reset(ResumeData.skills.languages);
  useFrameworks.getState().reset(ResumeData.skills.frameworks);
  useLibraries.getState().reset(ResumeData.skills.libraries);
  useDatabases.getState().reset(ResumeData.skills.databases);
  useTechnologies.getState().reset(ResumeData.skills.technologies);
  usePractices.getState().reset(ResumeData.skills.practices);
  useTools.getState().reset(ResumeData.skills.tools);
  useExperiences.getState().reset(ResumeData.work);
  useEducations.getState().reset(ResumeData.education);
  
};
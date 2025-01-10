import ResumeData from '../helpers/resume-data.json';
import { useBasicDetails } from './basic';
import { useEducations } from './education';
import { useExperiences } from './experience';
import { useProjects } from './projects';
import {  useFrameworks, useLanguages, useTechnologies, useTools } from './skill';



export const useResumeStore = () => {
  return {
    ...ResumeData,  
    basics: useBasicDetails((state) => state.values),
    education: useEducations((state) => state.academics),
    work: useExperiences((state) => state.experiences),
    personalProjects:useProjects((state)=>state.projects),
    
    skills:{
      
      languages: useLanguages((state) => state.values),
      frameworks: useFrameworks((state) => state.values),
      technologies: useTechnologies((state) => state.values),
      tools: useTools((state) => state.values),
    },
   
  };
};

export const resetResumeStore = () => {
  useBasicDetails.getState().reset(ResumeData.basics);
  useLanguages.getState().reset(ResumeData.skills.languages);
  useFrameworks.getState().reset(ResumeData.skills.frameworks);
  
  useTechnologies.getState().reset(ResumeData.skills.technologies);
 
  useExperiences.getState().reset(ResumeData.work);
  useEducations.getState().reset(ResumeData.education);
  useProjects.getState().reset(ResumeData.projects)
  
};
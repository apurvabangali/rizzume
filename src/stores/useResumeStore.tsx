import ResumeData from '../helpers/resume-data.json';
import { useBasicDetails } from './basic';
import { useEducations } from './education';
import { useExperiences } from './experience';


export const useResumeStore = () => {
  return {
    ...ResumeData,  
    basics: useBasicDetails((state) => state.values),
    education: useEducations((state) => state.academics),
    work: useExperiences((state) => state.experiences),
  };
};
import ResumeData from '../helpers/resume-data.json';
import { useBasicDetails } from './basic';

export const useResumeStore = () => {
  return {
    ...ResumeData,  
    basics: useBasicDetails((state) => state.values),
  };
};
import {create} from 'zustand';
import { persist } from 'zustand/middleware';
import resumeData from '../helpers/resume-data.json';
import { IEducationItem, IEducationStore } from './education.interface';

const useEducations = create<IEducationStore>()(
  persist(
    (set, get) => ({
      academics: resumeData.education,

      
      add: (newEducation: IEducationItem) => {
        set(state => ({
          academics: [...state.academics, newEducation],
        }));
      },

      
      get: (index: number) => {
        const state = get();
        return state.academics[index];
      },

      remove: (index: number) => {
        set(state => ({
          academics: state.academics.filter((_, i) => i !== index),
        }));
      },

  
      reset: (values: IEducationItem[]) => {
        set({
          academics: values,
        });
      },

    
      onmoveup: (index: number) => {
        set(state => {
          const academics = [...state.academics];
          if (index > 0) {
            const temp = academics[index];
            academics[index] = academics[index - 1];
            academics[index - 1] = temp;
          }
          return { academics };
        });
      },

      
      onmovedown: (index: number) => {
        set(state => {
          const academics = [...state.academics];
          const totalExp = academics.length;
          if (index < totalExp - 1) {
            const temp = academics[index];
            academics[index] = academics[index + 1];
            academics[index + 1] = temp;
          }
          return { academics };
        });
      },

    
      updateEducation: (index: number, updatedInfo: IEducationItem) => {
        set(state => {
          const academics = [...state.academics];
          academics[index] = updatedInfo;
          return { academics };
        });
      },
    }),
    { name: 'education' }
  )
);

export { useEducations };

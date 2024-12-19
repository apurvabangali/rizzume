import { create  } from 'zustand';
import { persist } from 'zustand/middleware';
import resumeData from '../helpers/resume-data.json';
import { IExperienceItem, IExperienceStore } from './experience.interface';

const useExperiences = create<IExperienceStore>()(
    persist(
      (set, get) => ({
        experiences: resumeData.work,
  
        add: (newExperience: IExperienceItem) => {
          set(state => ({
            experiences: [...state.experiences, newExperience],
          }));
        },
  
        get: (index: number) => {
          const state = get();
          return state.experiences[index];
        },
  
        remove: (index: number) => {
          set(state => ({
            experiences: state.experiences.filter((_, i) => i !== index),
          }));
        },
  
        reset: (values: IExperienceItem[]) => {
          set({
            experiences: values,
          });
        },
  
        onmoveup: (index: number) => {
          set(state => {
            const experiences = [...state.experiences];
            if (index > 0) {
              const temp = experiences[index];
              experiences[index] = experiences[index - 1];
              experiences[index - 1] = temp;
            }
            return { experiences };
          });
        },
  
        onmovedown: (index: number) => {
          set(state => {
            const experiences = [...state.experiences];
            const totalExp = experiences.length;
            if (index < totalExp - 1) {
              const temp = experiences[index];
              experiences[index] = experiences[index + 1];
              experiences[index + 1] = temp;
            }
            return { experiences };
          });
        },
  
        updateExperience: (index: number, updatedInfo: IExperienceItem) => {
          set(state => {
            const experiences = [...state.experiences];
            experiences[index] = updatedInfo;
            return { experiences };
          });
        },
      }),
      { name: 'experience' }
    )
  );
  
  export { useExperiences };
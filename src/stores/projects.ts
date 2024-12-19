import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import resumeData from '../helpers/resume-data.json';
import { IProjectItem, IProjectsStore } from './projects.interface';

const useProjects = create<IProjectsStore>()(
  persist(
    (set, get) => ({
      projects: resumeData.projects,  

      add: (newProject: IProjectItem) => {
        set(state => ({
          projects: [...state.projects, newProject],
        }));
      },

      get: (index: number) => {
        const state = get();
        return state.projects[index];
      },

      remove: (index: number) => {
        set(state => ({
          projects: state.projects.filter((_, i) => i !== index),
        }));
      },

      reset: (values: IProjectItem[]) => {
        set({
          projects: values,
        });
      },

      onmoveup: (index: number) => {
        set(state => {
          const projects = [...state.projects];
          if (index > 0) {
            const temp = projects[index];
            projects[index] = projects[index - 1];
            projects[index - 1] = temp;
          }
          return { projects };
        });
      },

      onmovedown: (index: number) => {
        set(state => {
          const projects = [...state.projects];
          const totalProjects = projects.length;
          if (index < totalProjects - 1) {
            const temp = projects[index];
            projects[index] = projects[index + 1];
            projects[index + 1] = temp;
          }
          return { projects };
        });
      },

      updateProject: (index: number, updatedInfo: IProjectItem) => {
        set(state => {
          const projects = [...state.projects];
          projects[index] = updatedInfo;
          return { projects };
        });
      },
    }),
    { name: 'projects' }
  )
);

export { useProjects };

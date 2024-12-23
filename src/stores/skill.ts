import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ISkillItem, ISkillState } from './skill.interface';
import resumeData from '../helpers/resume-data.json';

const addSkill = (state: ISkillState, skill: ISkillItem) => ({
  ...state,
  values: [...state.values, skill],
});

const removeSkill = (state: ISkillState, index: number) => ({
  ...state,
  values: state.values.filter((_, i) => i !== index),
});

const setSkills = (state: ISkillState, values: ISkillItem[]) => ({
  ...state,
  values,
});

const setIsEnabled = (state: ISkillState, isEnabled: boolean) => ({
  ...state,
  isEnabled,
});

const getMethods = (set: (fn: (state: ISkillState) => ISkillState) => void, get: () => ISkillState) => ({
  get: () => get().isEnabled ? get().values : [],
  add: (skill: ISkillItem) => set((state) => addSkill(state, skill)),
  remove: (index: number) => set((state) => removeSkill(state, index)),
  reset: (values: ISkillItem[]) => set((state) => setSkills(state, values)),
  setIsEnabled: (isEnabled: boolean) => set((state) => setIsEnabled(state, isEnabled)),
});

export const useLanguages = create<ISkillState>()(
  persist(
    (set, get) => ({
      title: 'Languages',
      hasLevel: true,
      values: resumeData.skills.languages,
      isEnabled: true,
      ...getMethods(set, get),
    }),
    { name: 'languages' }
  )
);

export const useFrameworks = create<ISkillState>()(
  persist(
    (set, get) => ({
      title: 'Frameworks',
      hasLevel: true,
      values: resumeData.skills.frameworks,
      isEnabled: true,
      ...getMethods(set, get),
    }),
    { name: 'frameworks' }
  )
);

export const useTechnologies = create<ISkillState>()(
  persist(
    (set, get) => ({
      title: 'Technologies',
      hasLevel: false,
      values: resumeData.skills.technologies,
      isEnabled: true,
      ...getMethods(set, get),
    }),
    { name: 'technologies' }
  )
);

export const useLibraries = create<ISkillState>()(
  persist(
    (set, get) => ({
      title: 'Libraries',
      hasLevel: false,
      values: resumeData.skills.libraries,
      isEnabled: true,
      ...getMethods(set, get),
    }),
    { name: 'libraries' }
  )
);

export const useDatabases = create<ISkillState>()(
  persist(
    (set, get) => ({
      title: 'Databases',
      hasLevel: false,
      values: resumeData.skills.databases,
      isEnabled: true,
      ...getMethods(set, get),
    }),
    { name: 'databases' }
  )
);

export const usePractices = create<ISkillState>()(
  persist(
    (set, get) => ({
      title: 'Practices',
      hasLevel: false,
      values: resumeData.skills.practices,
      isEnabled: true,
      ...getMethods(set, get),
    }),
    { name: 'practices' }
  )
);

export const useTools = create<ISkillState>()(
  persist(
    (set, get) => ({
      title: 'Tools',
      hasLevel: false,
      values: resumeData.skills.tools,
      isEnabled: true,
      ...getMethods(set, get),
    }),
    { name: 'tools' }
  )
);



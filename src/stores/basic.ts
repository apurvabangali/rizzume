
import {create} from 'zustand';
import { persist } from 'zustand/middleware';
import resumeData from '../helpers/resume-data.json';
import { IBasicDetailsItem, IBasicDetailsStore } from './basic.interface';


const onChangeText = (set: any) => (values: IBasicDetailsItem) => {
  set({ values });
};

export const useBasicDetails = create<IBasicDetailsStore>()(
  persist(
    (set) => ({
      values: resumeData.basics,
      reset: onChangeText(set), 
    }),
    {
      name: 'basic', 
    }
  )
);

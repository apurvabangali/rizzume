import dynamic from 'next/dynamic';
import { ITemplate } from './index.interface';



export const AVAILABLE_TEMPLATES: ITemplate = {
  formal: {
    id: 'formal',
    name: 'formal Resume',
    thumbnail: '/templates/formal.png',
    component: dynamic(() => import('../../templates/formal/FormalTemplate'), {
      ssr: false,
    }),
  },
  modern: {
    id: 'modern',
    name: 'modern Resume',
    thumbnail: '/templates/modern.png',
    component: dynamic(() => import('../../templates/modern/ModernTemplate'), {
      ssr: false,
    }),
  },
};



export const DATE_PICKER_FORMAT = 'DD/MM/YYYY';

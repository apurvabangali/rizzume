import BasicLayout from '../../modules/builder/editor/modules/basic/BasicLayout';

export const headers: {
  [key: string]: { title: string; component: () => JSX.Element };
} = {
  'basic-details': { title: 'Basic details', component: BasicLayout }
 
};
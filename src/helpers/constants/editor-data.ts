import BasicLayout from '../../modules/builder/editor/modules/basic/BasicLayout';
import EducationLayout from '../../modules/builder/editor/modules/education/EducationLayout';
import ExperienceLayout from '../../modules/builder/editor/modules/experience/ExperienceLayout';

export const headers: {
  [key: string]: { title: string; component: () => JSX.Element };
} = {
  'basic-details': { title: 'Basic details', component: BasicLayout },
  education: { title: 'Education', component: EducationLayout },
  experience:{title:'Experience', component: ExperienceLayout},
 
};
import BasicLayout from '../../modules/builder/editor/modules/basic/BasicLayout';
import EducationLayout from '../../modules/builder/editor/modules/education/EducationLayout';
import ExperienceLayout from '../../modules/builder/editor/modules/experience/ExperienceLayout';
import ProjectsLayout from '../../modules/builder/editor/modules/projects/ProjectsLayout';
import SkillsLayout from '../../modules/builder/editor/modules/skills/SkillLayout';

export const headers: {
  [key: string]: { title: string; component: () => JSX.Element };
} = {
  'basic-details': { title: 'Basic details', component: BasicLayout },
  education: { title: 'Education', component: EducationLayout },
  experience:{title:'Experience', component: ExperienceLayout},
  personalProjects: { title: 'Projects', component: ProjectsLayout },
  'skills-and-expertise': {
    title: 'Skills and expertise',
    component: SkillsLayout,
  },
};
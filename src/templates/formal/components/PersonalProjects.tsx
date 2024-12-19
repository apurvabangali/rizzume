import { dateParser } from '../../../helpers/utils';
import { IPersonalProject } from '../../../stores/index.interface'; 
import { SectionHeading } from '../atoms/SectionHeading';
import { SectionList } from '../atoms/SectionList';
import { SectionSubtitle } from '../atoms/SectionSubtitle';
import { SectionTitle } from '../atoms/SectionTitle';

export const PersonalProjectsSection = ({ personalProjects }: { personalProjects: IPersonalProject[] }) => {
  return (
    <div className="mb-2">
      <SectionHeading title="Personal Projects" />

      {personalProjects.map((project: IPersonalProject, index: number) => (
        <div key={index} className="pb-2">
          <SectionTitle label={project.title} />
          <div className="flex justify-between projects-center">
            <div>
              <p className="text-xs">{dateParser(project.date)}</p> 
            </div>
          </div>

          <SectionList>
            {project.summary}
          </SectionList>
        </div>
      ))}
    </div>
  );
};

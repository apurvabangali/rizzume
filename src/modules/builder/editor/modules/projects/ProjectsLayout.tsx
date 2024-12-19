import { useEffect, useState } from 'react';
import { useProjects } from '../../../../../stores/projects'; 
import AddPersonalProject from './components/AddPersonalProject'; 
import Projects from './components/Projects'; 
import MoveEditSection from '../../../../../helpers/common/components/MoveEditSectionContainer';
import { IProjectItem } from '../../../../../stores/projects.interface';

const ProjectsLayout = () => {
  
  const allProjects = useProjects((state) => state.projects);
  const removeProject = useProjects.getState().remove; 
  const onMoveUp = useProjects.getState().onmoveup; 
  const onMoveDown = useProjects.getState().onmovedown; 

  const [expanded, setExpanded] = useState<string | false>(false);

  useEffect(() => {
    setExpanded(allProjects[0]?.id); 
  }, [allProjects]);

  const handleChange = (panel: string, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false); 
  };

  return (
    <div className="flex flex-col gap-8 mb-8">
      {allProjects.map((project,index) => (
        <MoveEditSection
        key={project.id}
        title={project.title || 'Project'} 
        expanded={expanded === project.id} 
        length={allProjects.length} 
        index={index} 
        clickHandler={() => handleChange(project.id, expanded !== project.id)} 
        onMoveUp={onMoveUp} 
        onMoveDown={onMoveDown} 
        onDelete={removeProject} 
      >
        {/* Wrap multiple components inside a single div */}
        <div>
          <Projects projectInfo={project} currentIndex={index} /> {/* Updated component */}
        </div>
      </MoveEditSection>
      
      ))}
      <AddPersonalProject handleChange={handleChange} isEmpty={allProjects.length === 0} /> {/* Updated component */}
    </div>
  );
};

export default ProjectsLayout;

import { useMemo } from 'react';
import { useProjects } from '../../../../../../stores/projects';  
import { IProjectItem } from '../../../../../../stores/projects.interface'; 

const NEW_PROJECT: IProjectItem = {
  id: '',
  title: '',
  startDate: null,
  endDate: null,
  summary: '',
  isWorking: false
};

const AddPersonalProject = ({
  handleChange,
  isEmpty,
}: {
  handleChange: (name: string, isExpanded: boolean) => void;
  isEmpty: boolean;
}) => {

  const addProjectToStore = useProjects((state) => state.add);

  const onCreateProject = () => {
    const uniqueExpandedId = `${Math.random()}`;
    const newProject: IProjectItem = { ...NEW_PROJECT, id: uniqueExpandedId };
    
    addProjectToStore(newProject);
    handleChange(uniqueExpandedId, true);
  };

  const buttonCaption = useMemo(() => {
    if (isEmpty) {
      return '+ Add a personal project';
    } else {
      return '+ Add more projects';
    }
  }, [isEmpty]);

  return (
    <div className="flex gap-2 mt-3">
      <button onClick={onCreateProject} disabled={false}>
        {buttonCaption}
      </button>
    </div>
  );
};

export default AddPersonalProject;

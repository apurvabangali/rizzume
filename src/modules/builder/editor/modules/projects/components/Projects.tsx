import React, { ChangeEvent, Fragment, useCallback } from 'react';
import TextField from '@mui/material/TextField';
import { useProjects } from '../../../../../../stores/projects';  
import { IProjectItem } from '../../../../../../stores/projects.interface'; 
import { RichtextEditor } from '../../../../../../helpers/common/components/richtext';  

interface IPersonalProjectComp {
  projectInfo: IProjectItem;
  currentIndex: number;
}

const Projects: React.FC<IPersonalProjectComp> = ({ projectInfo, currentIndex }) => {
  const onChangeHandler = useCallback(
    (name: string, value: any) => {
      const currentProjectInfo = { ...projectInfo };
      const updateProject = useProjects.getState().updateProject;  
      switch (name) {
        case 'title':
          currentProjectInfo.title = value;
          break;
        case 'date':
          currentProjectInfo.date = value;
          break;
        case 'summary':
          currentProjectInfo.summary = value;
          break;
        default:
          break;
      }
      updateProject(currentIndex, currentProjectInfo);  
    },
    [currentIndex, projectInfo]
  );

  const onSummaryChange = useCallback(
    (htmlOutput: string) => {
      onChangeHandler('summary', htmlOutput);
    },
    [onChangeHandler]
  );

  return (
    <Fragment>
      <TextField
        label="Project Title"
        variant="filled"
        value={projectInfo.title}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          onChangeHandler('title', value);
        }}
        autoComplete="off"
        fullWidth
        required
        autoFocus={true}
        sx={{ marginBottom: '26px' }}
      />
      <TextField
        label="Completion Date"
        variant="filled"
        value={projectInfo.date || ''}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          onChangeHandler('date', value);
        }}
        autoComplete="off"
        fullWidth
        required
        sx={{ marginBottom: '26px' }}
      />

      <RichtextEditor
        label="About the project"
        value={projectInfo.summary}
        onChange={onSummaryChange}
        name="summary"
      />
    </Fragment>
  );
};

export default Projects;

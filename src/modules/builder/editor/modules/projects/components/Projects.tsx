import React, { ChangeEvent, Fragment, useCallback } from 'react';
import TextField from '@mui/material/TextField';
import { useProjects } from '../../../../../../stores/projects';  
import { IProjectItem } from '../../../../../../stores/projects.interface'; 
import { RichtextEditor } from '../../../../../../helpers/common/components/richtext';  
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { SwitchWidget } from '../../../../../../helpers/common/components/Switch';

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
        case 'startDate':
          currentProjectInfo.startDate = value;
          break;
        case 'isWorking':
          currentProjectInfo.isWorking = value;
          break;
        case 'endDate':
          currentProjectInfo.endDate = value;
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
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;  
      onChangeHandler('summary', value);  
    },
    [onChangeHandler]
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Fragment>
        <TextField
          label="Project Title"
          variant="outlined"
          value={projectInfo.title || ''} 
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
        <DatePicker
          label="Start Date"
          value={projectInfo.startDate ? dayjs(projectInfo.startDate) : null} 
          onChange={(newDate: Dayjs | null) => {
            onChangeHandler('startDate', newDate ? newDate.toISOString() : null);
          }}
          slotProps={{
            textField: {
              fullWidth: true,
              variant: 'outlined',
              margin: 'normal',
              helperText: 'Please select a valid start date',
            },
          }}
        />
         <SwitchWidget
                label={' currently working on it'}
                value={projectInfo.isWorking ?? false}
                onChange={(newValue: boolean) => {
                  onChangeHandler('isWorking', newValue);
                }}
              />
        <DatePicker
          label="End Date"
          value={projectInfo.endDate ? dayjs(projectInfo.endDate) : null}  
          onChange={(newDate: Dayjs | null) => {
            onChangeHandler('endDate', newDate ? newDate.toISOString() : null);
          }}
          slotProps={{
            textField: {
              fullWidth: true,
              variant: 'outlined',
              margin: 'normal',
              helperText: 'Please select a valid end date',
            },
          }}
          disabled={projectInfo.isWorking}
        />
        <TextField
          label="About the project"
          value={projectInfo.summary}
          onChange={onSummaryChange}
          name="summary"
        />
      </Fragment>
    </LocalizationProvider>
  );
};


export default Projects;

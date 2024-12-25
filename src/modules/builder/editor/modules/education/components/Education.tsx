import React, { ChangeEvent, Fragment, useCallback } from 'react';
import TextField from '@mui/material/TextField';
import { useEducations } from '../../../../../../stores/education';
import { IEducationItem } from '../../../../../../stores/education.interface';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { SwitchWidget } from '../../../../../../helpers/common/components/Switch';

interface IEducationProps {
  educationInfo: IEducationItem;
  currentIndex: number;
}

const Education: React.FC<IEducationProps> = ({ educationInfo, currentIndex }) => {
  const onChangeHandler = useCallback(
    (name: string, value: any) => {
      const currentExpInfo = { ...educationInfo };
      switch (name) {
        case 'academyName':
          currentExpInfo.institution = value;
          break;
        case 'degree':
          currentExpInfo.studyType = value;
          break;
        case 'area':
          currentExpInfo.area = value;
          break;
        case 'grade':
          currentExpInfo.score = value;
          break;
        case 'startDate':
          if (dayjs(value).isValid()) {
            currentExpInfo.startDate = value;
          }
          break;
        case 'isStudyingHere':
          currentExpInfo.isStudyingHere = value;
          break;
        case 'endDate':
          if (dayjs(value).isValid()) {
            currentExpInfo.endDate = value;
          }
          break;

        default:
          break;
      }
      useEducations.getState().updateEducation(currentIndex, currentExpInfo);
    },
    [currentIndex, educationInfo]
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Fragment>
        <TextField
          label="School or College name"
          variant="outlined"
          value={educationInfo.institution}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            onChangeHandler('academyName', value);
          }}
          autoComplete="off"
          fullWidth
          required
          autoFocus={true}
          sx={{ marginBottom: '26px' }}
        />
        <TextField
          label="Degree"
          variant="outlined"
          value={educationInfo.studyType}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            onChangeHandler('degree', value);
          }}
          autoComplete="off"
          fullWidth
          required
          sx={{ marginBottom: '26px' }}
        />
        <TextField
          label="Area"
          variant="outlined"
          value={educationInfo.area}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            onChangeHandler('area', value);
          }}
          autoComplete="off"
          fullWidth
          required
          sx={{ marginBottom: '26px' }}
        />
        <TextField
          label="Grade"
          variant="outlined"
          value={educationInfo.score}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            onChangeHandler('grade', value);
          }}
          autoComplete="off"
          fullWidth
          required
          sx={{ marginBottom: '26px' }}
        />
        <DatePicker
          label="Start date"
          value={dayjs(educationInfo.startDate)}
          onChange={(newDate) => {
            onChangeHandler('startDate', newDate);
          }}
          slotProps={{ calendarHeader:{format: 'MM/YYYY'},
            textField: {
              variant: 'outlined',
              margin: 'normal',
              helperText: 'Please select a valid start date',
            },
          }}
        />
        <SwitchWidget
        label={'I currently study here'}
        value={educationInfo.isStudyingHere ?? false}
        onChange={(newValue: boolean) => {
          onChangeHandler('isStudyingHere', newValue);
        }}
      />
       <DatePicker
        label="End date"
        value={dayjs(educationInfo.endDate)}
        onChange={(newDate) => {
          onChangeHandler('endDate', newDate);
        }}
        slotProps={{ calendarHeader:{format: 'MM/YYYY'},
        textField: {
          variant: 'outlined',
          margin: 'normal',
          helperText: 'Please select a valid start date',
        },
      }}
        
        disabled={educationInfo.isStudyingHere}
      />
      </Fragment>
    </LocalizationProvider>
  );
};

export default Education;

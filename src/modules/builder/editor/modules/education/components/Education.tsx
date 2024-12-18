import React, { ChangeEvent, Fragment, useCallback } from 'react';
import TextField from '@mui/material/TextField';
import { useEducations } from '../../../../../../stores/education';
import { IEducationItem } from '../../../../../../stores/education.interface';




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
          if (value?.isValid()) {
            currentExpInfo.startDate = value;
          }
          break;
        case 'isStudyingHere':
          currentExpInfo.isStudyingHere = value;
          break;
        case 'endDate':
          if (value?.isValid()) {
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
       
    </Fragment>
  );
};

export default Education;

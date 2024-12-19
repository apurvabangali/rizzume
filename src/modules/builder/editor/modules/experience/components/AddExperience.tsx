import { useMemo } from 'react';
import { useExperiences } from '../../../../../../stores/experience';
import { IExperienceItem } from '../../../../../../stores/experience.interface';

const NEW_EXPERIENCE: IExperienceItem = {
  name: '',
  position: '',
  startDate: null,
  isWorkingHere: false,
  endDate: null,
  summary: '',
  years: '',
  id: '',
  url: '',
  highlights: [],
};

const AddExperience = ({
  handleChange,
  isEmpty,
}: {
  handleChange: (name: string, isExpanded: boolean) => void;
  isEmpty: boolean;
}) => {
  const addNewExperience = useExperiences((state) => state.add);

  const onCreateNewExperience = () => {
    const uniqueExpandedId = `${Math.random()}`;
    NEW_EXPERIENCE.id = uniqueExpandedId;
    addNewExperience(NEW_EXPERIENCE);
    handleChange(uniqueExpandedId, true);
  };

  const buttonCaption = useMemo(() => {
    if (isEmpty) {
      return '+ Add an experience';
    } else {
      return '+ Add more';
    }
  }, [isEmpty]);

  return (
    <div className="flex gap-2 mt-3">
      <button onClick={onCreateNewExperience} disabled={false}>
        {buttonCaption}
      </button>
    </div>
  );
};

export default AddExperience;

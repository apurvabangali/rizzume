import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { TextField } from '@mui/material';
import SliderValue from '../atoms/SkillValue';
import { ISkillItem } from '../../../../../../stores/skill.interface.ts';

const AddSkill = ({
  addHandler,
  items,
  hasLevel = false,
}: {
  addHandler: ({ name, level }: ISkillItem) => void;
  items: ISkillItem[];
  hasLevel: boolean;
}) => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [level, setLevel] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [errorText, setErrorText] = useState('');
  const inputRef = useRef<HTMLInputElement>();

  const toggleForm = () => {
    setShowForm(!showForm);
    setName('');
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setErrorText('');
  };

  const submitHandler = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    doneHandler();
  };

  const doneHandler = () => {
    const trimmedText = name.trim();
    const trimmedLowerText = trimmedText.toLowerCase();

    if (items.find((item) => item.name.toLowerCase() === trimmedLowerText)) {
      setErrorText('Duplicate entry');
    } else {
      setName('');
      setErrorText('');
      addHandler({ name: trimmedText, level });
      inputRef.current?.focus();
    }
  };

  useEffect(() => {
    if (name.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name]);

  const formEl = (
    <form onSubmit={submitHandler}>
      <TextField
        label="Skill"
        variant="filled"
        value={name}
        error={!!errorText}
        helperText={errorText}
        onChange={changeHandler}
        autoComplete="off"
        inputRef={inputRef}
        fullWidth
        required
        autoFocus
      />
      {hasLevel && <SliderValue level={level} setLevel={setLevel} />}
      <div className="flex gap-2 mt-3">
        <button onClick={doneHandler} disabled={disabled}>
          Add
        </button>
        <button onClick={toggleForm}>Cancel</button>
      </div>
    </form>
  );

  return showForm ? formEl : <button onClick={toggleForm}>+ Add more</button>;
};

export default AddSkill;

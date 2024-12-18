import { ChangeEvent, Fragment } from 'react';
import TextField from '@mui/material/TextField';

const Contacts = ({
  basicTabs,
  onChangeHandler,
}: {
  basicTabs: any;
  onChangeHandler: (value: any, key: string) => void;
}) => {
  return (
    <Fragment>
      <TextField
        label="Name"
        variant="outlined"
        value={basicTabs.name}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'name');
        }}
        fullWidth
        sx={{ marginBottom: 2, marginTop:2 }} 
      />
      <TextField
        label="Image URL"
        variant="outlined"
        value={basicTabs.image}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'image');
        }}
        fullWidth
        sx={{ marginBottom: 2 }} 
      />
      <TextField
        label="Title"
        variant="outlined"
        value={basicTabs.label}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'label');
        }}
        fullWidth
        sx={{ marginBottom: 2 }} 
      />
      <TextField
        label="Email"
        variant="outlined"
        value={basicTabs.email}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'email');
        }}
        fullWidth
        sx={{ marginBottom: 2 }} 
      />
      <TextField
        label="Website URL"
        variant="outlined"
        value={basicTabs.url}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'url');
        }}
        fullWidth
        sx={{ marginBottom: 2 }} 
      />
      <TextField
        label="Phone"
        variant="outlined"
        value={basicTabs.phone}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'phone');
        }}
        fullWidth
        sx={{ marginBottom: 2 }} 
      />
      <TextField
        label="Location"
        variant="outlined"
        value={basicTabs.location.city}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const location = basicTabs.location;
          location.city = event.target.value;
          onChangeHandler(location, 'location');
        }}
        fullWidth
        sx={{ marginBottom: 2 }} 
      />
      <TextField
        label="Relevant Experience"
        variant="outlined"
        value={basicTabs.relExp}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'relExp');
        }}
        fullWidth
        sx={{ marginBottom: 2 }} 
      />
      <TextField
        label="Total Experience"
        variant="outlined"
        value={basicTabs.totalExp}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'totalExp');
        }}
        fullWidth
        sx={{ marginBottom: 2 }} 
      />
    </Fragment>
  );
};

export default Contacts;

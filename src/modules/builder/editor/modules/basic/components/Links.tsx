import { ChangeEvent, Fragment, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';

const SUPPORTED_NETWORKS = {
  linkedin: 'linkedin',
  twitter: 'twitter',
  github: 'github',
  hackerrank: 'hackerrank',
  hackerearth: 'hackerearth',
  codechef: 'codechef',
  leetcode: 'leetcode',
};

interface IProfileNetwork {
  network: string;
  username: string;
  url: string;
}

interface ISupportedNtwkDefaultState {
  [key: string]: IProfileNetwork;
}

const SUPPORTED_NETWORK_DEFAULT_STATE: ISupportedNtwkDefaultState = {
  linkedin: {
    network: 'linkedin',
    username: 'janedoe',
    url: '',
  },
  twitter: {
    network: 'twitter',
    username: 'janedoe',
    url: '',
  },
  github: {
    network: 'github',
    username: 'janedoe',
    url: '',
  },
  hackerrank: {
    network: 'hackerrank',
    username: 'janedoe',
    url: '',
  },
  hackerearth: {
    network: 'hackerearth',
    username: 'janedoe',
    url: '',
  },
  codechef: {
    network: 'codechef',
    username: 'janedoe',
    url: '',
  },
  leetcode: {
    network: 'leetcode',
    username: 'janedoe',
    url: '',
  },
};

const Links = ({
  basicTabs,
  onChangeHandler,
}: {
  basicTabs: any;
  onChangeHandler: (value: any, key: string) => void;
}) => {
  const [networks, setNetworks] = useState(SUPPORTED_NETWORK_DEFAULT_STATE);

  useEffect(() => {
    const defaultNetworks = { ...SUPPORTED_NETWORK_DEFAULT_STATE };
    Object.keys(SUPPORTED_NETWORKS).forEach((ntwk) => {
      const matchedNetwork = basicTabs.profiles.find(
        (profile: IProfileNetwork) => profile.network === ntwk
      );
      if (matchedNetwork) {
        defaultNetworks[ntwk] = matchedNetwork;
      }
    });
    setNetworks(defaultNetworks);
    onChangeHandler(Object.values(defaultNetworks), 'profiles');
  }, []);

  const onURLChange = (value: string, network: string) => {
    const profiles = basicTabs.profiles;
    const matchedNetwork = profiles.find((profile: IProfileNetwork) => profile.network === network);
    matchedNetwork.url = value;
    onChangeHandler(profiles, 'profiles');
  };

  return (
    <Fragment>
      <TextField
        label="LinkedIn"
        variant="outlined"
        value={networks[SUPPORTED_NETWORKS.linkedin].url}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onURLChange(event.target.value, SUPPORTED_NETWORKS.linkedin);
        }}
        fullWidth
        sx={{ marginBottom: 2 , marginTop: 2}} 
      />
    
      <TextField
        label="Github"
        variant="outlined"
        value={networks[SUPPORTED_NETWORKS.github].url}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onURLChange(event.target.value, SUPPORTED_NETWORKS.github);
        }}
        fullWidth
        sx={{ marginBottom: 2 }} 
      />
     
      
    </Fragment>
  );
};

export default Links;

import React, { Fragment } from 'react';
import { useBasicDetails } from '../../../../../stores/basic';
import BasicHeader from './components/BasicHeader';
import BasicPanel from './components/BasicPanel';

const tabTitles = ['Contacts', 'Links', 'About'];

const BasicLayout = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const basicTabs = useBasicDetails((state) => state.values);
  const onChangeText = useBasicDetails.getState().reset;

  const changeActiveTab = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <Fragment>
      <BasicHeader
        activeTab={activeTab}
        changeActiveTab={changeActiveTab}
        tabTitles={tabTitles}
      />
      <BasicPanel
        activeTab={activeTab}
        basicTabs={basicTabs}
        onChangeText={onChangeText}
      />
    </Fragment>
  );
};

export default BasicLayout;

import React, { Fragment } from 'react';
import Contacts from './Contacts';
import Links from './Links';
import About from './About';
import * as Tabs from '@radix-ui/react-tabs';

const BasicPanel = ({
  activeTab,
  basicTabs,
  onChangeText,
}: {
  activeTab: number;
  basicTabs: any;
  onChangeText: any;
}) => {
  const onChangeHandler = (value: any, key: string) => {
    const updatedTabs = { ...basicTabs };
    updatedTabs[key] = value;
    onChangeText(updatedTabs);
  };

  return (
    <Fragment>
      <div>
        <Tabs.Root value={String(activeTab)} onValueChange={(value) => onChangeText(value)}>
          <Tabs.Content value="0" hidden={activeTab !== 0}>
            <Contacts basicTabs={basicTabs} onChangeHandler={onChangeHandler} />
          </Tabs.Content>
          <Tabs.Content value="1" hidden={activeTab !== 1}>
            <Links basicTabs={basicTabs} onChangeHandler={onChangeHandler} />
          </Tabs.Content>
          <Tabs.Content value="2" hidden={activeTab !== 2}>
            <About basicTabs={basicTabs} onChangeHandler={onChangeHandler} />
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </Fragment>
  );
};

export default BasicPanel;

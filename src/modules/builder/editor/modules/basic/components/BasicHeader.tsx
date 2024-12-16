import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';

const BasicHeader = ({
  activeTab,
  changeActiveTab,
  tabTitles,
}: {
  activeTab: number;
  changeActiveTab: (tabIndex: number) => void;
  tabTitles: string[];
}) => {
  return (
    <Tabs.Root value={String(activeTab)} onValueChange={(value) => changeActiveTab(Number(value))}>
      <Tabs.List
        aria-label="Basic Tabs"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0.5rem 0',
          borderBottom: '1px solid #ccc',
        }}
      >
        {tabTitles.map((title, index) => (
          <Tabs.Trigger
            key={index}
            value={String(index)}
            style={{
              padding: '0.5rem 1rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              color: activeTab === index ? 'blue' : 'rgb(46 64 82)',
              textTransform: 'none',
            }}
          >
            {title}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
    </Tabs.Root>
  );
};

export default BasicHeader;

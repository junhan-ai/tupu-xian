import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const onChange = (key: string) => {
  console.log(key);
};
// 增材制造、航空航天、家电、新能源
const items: TabsProps['items'] = [
  {
    key: '1',
    label: '增材制造',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: '航空航天',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: '家电',
    children: 'Content of Tab Pane 3',
  },
  {
    key: '4',
    label: '新能源',
    children: 'Content of Tab Pane 4',
  },
];

const App: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

export default App;

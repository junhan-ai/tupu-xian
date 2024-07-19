import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, Upload } from 'antd';

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


const props: UploadProps = {
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
  },
  defaultFileList: [
    {
      uid: '1',
      name: 'xxx.png',
      status: 'uploading',
      url: 'http://www.baidu.com/xxx.png',
      percent: 33,
    },
    {
      uid: '2',
      name: 'yyy.png',
      status: 'done',
      url: 'http://www.baidu.com/yyy.png',
    },
    {
      uid: '3',
      name: 'zzz.png',
      status: 'error',
      response: 'Server Error 500', // custom error message to show
      url: 'http://www.baidu.com/zzz.png',
    },
  ],
};

const App: React.FC = () =>(
  <div>
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>

    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
  </div>


  ) ;





export default App;

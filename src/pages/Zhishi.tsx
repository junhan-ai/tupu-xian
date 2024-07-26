import React from 'react';
import {Card, Col, Row, Tabs} from 'antd';
import type { TabsProps } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, Upload } from 'antd';

const onChange = (key: string) => {
  console.log(key);
};
// window.globalVariable = "这是一个全局变量";
// 增材制造、航空航天、家电、新能源
const items: TabsProps['items'] = [
  {
    key: '1',
    label: '增材制造',
    children: (
      <text> nihap</text>
    ),
  },
  {
    key: '2',
    label: '航空航天',
    children: (
      <Row gutter={15}>
        <Col span={8}>
          <Card
            title="全流程"
            bordered={false}
            style={{height: '800px'}} // 自定义高度
          >
            <h3>设计：</h3>
            <h4 style={{textAlign: 'left', textIndent: '1em'}}>这里是正文内容，待补充，待补充，待补充，待补充....</h4>
            <h3>材料准备：</h3>
            <h4 style={{textAlign: 'left', textIndent: '1em'}}>这里是正文内容，待补充，待补充，待补充，待补充....</h4>
            <h3>加工制造：</h3>
            <h3>测试组装：</h3>
            <h3>调试优化：</h3>
            <h3>认证验收：</h3>
            <h3>生产交付：</h3>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="跨部门"
            bordered={false}
            style={{height: '800px'}} // 自定义高度
          >
            <h3>设计部门：</h3>
            <h4 style={{textAlign: 'left', textIndent: '1em'}}>这里是正文内容，待补充，待补充，待补充，待补充....</h4>

            <h3>采购部门：</h3>
            <h4 style={{textAlign: 'left', textIndent: '1em'}}>这里是正文内容，待补充，待补充，待补充，待补充....</h4>

            <h3>生产部门：</h3>
            <h3>质量控制部门：</h3>
            <h3>测试部门：</h3>
            <h3>调试优化部门：</h3>
            <h3>认证部门：</h3>
            <h3>生产规划部门：</h3>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="多层次"
            bordered={false}
            style={{height: '800px'}} // 自定义高度
          >
            <h3>研发工程师：</h3>
            <h4 style={{textAlign: 'left', textIndent: '1em'}}>这里是正文内容，待补充，待补充，待补充，待补充....</h4>

            <h3>采购专员：</h3>
            <h4 style={{textAlign: 'left', textIndent: '1em'}}>这里是正文内容，待补充，待补充，待补充，待补充....</h4>

            <h3>工艺工程师：</h3>
            <h3>过程质量保证工程师：</h3>
            <h3>机械工程师：</h3>
            <h3>质量工程师：</h3>
            <h3>生产主管：</h3>
            <h3>试车工程师：</h3>
            <h3>售前方案工程师：</h3>
          </Card>
        </Col>
      </Row>
    ),
  },
  {
    key: '3',
    label: '家电',
    children: 'Content of Tab Pane 3',
  },
  {
    key: '4',
    label: '新能源',
    children: (
      <Row gutter={15}>
        <Col span={8}>
          <Card
            title="全流程"
            bordered={false}
            style={{height: '800px'}} // 自定义高度
          >
            <h3>零部件生产和准备：</h3>
            <h4 style={{textAlign: 'left', textIndent: '1em'}}>这里是正文内容，待补充，待补充，待补充，待补充....</h4>
            <h3>主体结构装配：</h3>
            <h4 style={{textAlign: 'left', textIndent: '1em'}}>这里是正文内容，待补充，待补充，待补充，待补充....</h4>
            <h3>动力系统装配：</h3>
            <h3>电池组装配：</h3>
            <h3>内饰装配：</h3>
            <h3>电气系统安装：</h3>
            <h3>质量检测与调试：</h3>
            <h3>交付：</h3>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="跨部门"
            bordered={false}
            style={{height: '800px'}} // 自定义高度
          >
            <h3>研发部：</h3>
            <h4 style={{textAlign: 'left', textIndent: '1em'}}>这里是正文内容，待补充，待补充，待补充，待补充....</h4>

            <h3>采购部：</h3>
            <h4 style={{textAlign: 'left', textIndent: '1em'}}>这里是正文内容，待补充，待补充，待补充，待补充....</h4>

            <h3>生产制造部：</h3>
            <h3>质量控制部：</h3>
            <h3>物流部：</h3>
            <h3>市场营销部：</h3>
            <h3>售后服务部：</h3>
            <h3>财务部：</h3>
            <h3>人力资源部：</h3>
            <h3>信息技术部：</h3>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="多层次"
            bordered={false}
            style={{height: '800px'}} // 自定义高度
          >
            <h3>销售：</h3>
            <h4 style={{textAlign: 'left', textIndent: '1em'}}>这里是正文内容，待补充，待补充，待补充，待补充....</h4>

            <h3>市场推广经理：</h3>
            <h4 style={{textAlign: 'left', textIndent: '1em'}}>这里是正文内容，待补充，待补充，待补充，待补充....</h4>

            <h3>电池工程师：</h3>
            <h3>电机工程师：</h3>
            <h3>控制系统工程师：</h3>
            <h3>系统集成工程师：</h3>
            <h3>生产经理：</h3>
            <h3>质量工程师：</h3>
            <h3>项目经理：</h3>
            <h3>物流经理：</h3>
          </Card>
        </Col>
      </Row>
    ),
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

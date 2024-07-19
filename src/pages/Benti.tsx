import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { Card, Col, Row } from 'antd';
import './styles.css'; // 导入 CSS 文件
import myImage from '../assets/微信图片_20240719233240.jpg'; // 导入本地图片


const onChange = (key: string) => {
  console.log(key);
};
// 增材制造、航空航天、家电、新能源
const items: TabsProps['items'] = [
  {
    key: '1',
    label: '增材制造',
    children: (
      <Row gutter={16}>
        <Col span={18}>
          <Card
            title="宽度为 3 的 Card"
            bordered={false}
            style={{ height: '500px' }} // 自定义高度
          >
            卡片内容
          </Card>
        </Col>
        <Col span={6}>
          <Card
            title="宽度为 1 的 Card"
            bordered={false}
            style={{ height: '500px' }} // 自定义高度
          >
            卡片内容
          </Card>
        </Col>
      </Row>
    ),
  },
  {
    key: '2',
    label: '航空航天',
    children: (
  <Row gutter={16}>
    <Col span={12}>
      <Card
        title=""
        bordered={false}
        style={{height: '700px', width: '100%'}} // 自定义高度
      >
        {/*<pre className="preformatted-text">*/}

        航天航空制造业流程包括以下关键流程（以飞机发动机为例）：
        1. 设计阶段：⼯程师团队进⾏发动机的设计，考虑⻜机的⽤途、性能需求、空⽓动⼒学特性以及安全标准等因
        素。
        2. 材料准备：采购合适的材料，包括⾦属合⾦、复合材料等，经过精密加⼯和检验确保符合设计标准。
        3. 加⼯制造：将设计好的零部件进⾏加⼯制造，包括铸造、锻造、机加⼯、热处理等⼯艺步骤。
        4. 组装测试：将制造好的零部件组装成完整的发动机，进⾏各种测试，包括静态测试和动态测试。
        5. 调试优化：根据测试结果对发动机进⾏调试和优化，确保性能和可靠性达到设计要求。
        6. 认证验收：提交给相关认证机构进⾏验收和认证，确保符合航空标准和安全要求。
        7. ⽣产交付：批量⽣产并交付给⻜机制造⼚进⾏安装和使⽤。

        航天航空制造制造业流程涉及的部⻔通常包括（以飞机发动机为例）：
        1. 设计部⻔：负责设计发动机的⼯程师团队，考虑⻜机性能需求、空⽓动⼒学特性、安全标准等因素，制定发
        动机设计⽅案。
        2. 采购部⻔：负责采购发动机制造所需的原材料、零部件和设备，并与供应商进⾏谈判和合作，确保采购的材
        料和零部件符合质量和规格要求。
        3. ⽣产部⻔：包括各种加⼯制造⼯艺的⼯作⼈员和设备，负责将设计好的发动机零部件进⾏加⼯和制造，确保
        符合设计标准和质量要求。
        4. 质量控制部⻔：负责对制造过程中的每个环节进⾏质量控制和检验，包括原材料检验、加⼯过程检验、成品
        检验等，以确保产品质量和安全性。
        5. 测试部⻔：负责对制造好的发动机进⾏各种测试，包括静态测试和动态测试，验证发动机性能和可靠性是否
        符合设计要求。
        6. 调试优化部⻔：根据测试结果对发动机进⾏调试和优化，确保性能和可靠性达到设计要求。
        7. 认证部⻔：将经过调试优化的发动机提交给相关认证机构进⾏验收和认证，确保符合航空标准和安全要求。
        8. ⽣产规划部⻔：制定⽣产计划和流程，协调各部⻔⼯作，确保⽣产进度和质量。
        <img src={myImage} alt="描述文本" style={{ width: 'auto', height: '200px' }} />

        {/*</pre>*/}
      </Card>
    </Col>
    <Col span={6}>
    <Card
        title="本体定义"
        bordered={false}
        style={{height: '700px', width: '100%' }} // 自定义高度
      >
      定义的本体概念（22个）
      增材制造设备：具体的增材制造设备
      航空航天器：具体的航天航空设备
      智能家居设备：具体的智能家居设备
      新能源汽车：具体的新能源设备
      工艺：产品涉及的流程
      部门：产品涉及的部门
      岗位：产品涉及的岗位层次
      材料：产品涉及到的材料
      技术：产品涉及到的技术
      标准：技术、部门、工艺流程等涉及到的国家标准
      法规：技术、工艺流程、岗位等涉及到的法律法规
      项目：岗位、部门等涉及到项目计划
      产品：具体的产品
      组件：产品的组件说明
      传感器：产品涉及到具体传感器
      控制系统：产品的控制系统，如车控系统、智能家居的控制系统等
      客户：部门、岗位涉及到的客户
      供应商：部门、工艺流程、材料等涉及到的供应商
      合作伙伴：工艺流程、材料、岗位等涉及到的合作伙伴
      研究机构：工艺流程、材料等涉及到的研究机构
      专利：产品涉及到的相应专利
      市场：产品、材料等涉及市场营销的内容
      </Card>
    </Col>
    <Col span={6}>
      <Card
        title="关系定义"
        bordered={false}
        style={{height: '700px'}} // 自定义高度
      >
        定义的关系类型（31种）：
        制造使用 (manufactured_using)
        技术应用 (technology_applied)
        组件组成 (component_of)
        设备组成 (equipment_of)
        控制系统组成 (system_component)
        传感器使用 (sensor_used)
        负责部门 (responsible_department)
        岗位职责 (position_responsibility)
        遵循标准 (complies_with)
        法规适用 (regulated_by)
        项目合作 (project_collaboration)
        技术合作 (technology_collaboration)
        供应关系 (supplies)
        客户购买 (purchased_by)
        市场销售 (marketed_in)
        专利保护 (protected_by)
        研究开发 (researched_by)
        产品生产 (produced_by)
        产品开发 (developed_by)
        流程包含 (process_includes)
        设备操作 (operated_by)
        产品维护 (maintained_by)
        市场需求 (demanded_by)
        技术需求 (required_by)
        工艺优化 (optimized_by)
        设备维护 (maintained_by)
        组件生产 (produced_by)
        材料需求 (needed_for)
        市场反馈 (feedback_from)
        岗位培训 (trained_for)
        监管部门 (regulated_by)
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
      <Row gutter={16}>
        <Col span={12}>
          <Card
            title=""
            bordered={false}
            style={{height: '700px', width: '100%'}} // 自定义高度
          >
            {/*<pre className="preformatted-text">*/}

            新能源制造业包括以下关键流程（以新能源车为例）：
            1、零部件生产和准备 ：在组装开始前，首先需要准备好所有必要的零部件，包括车身、底盘、动力系统、电池组、内饰件等。这些零部件通常是在之前的生产阶段中制造完成的，并经过严格的质量检测。
            2、主体结构装配：主要包括了汽车底盘和车体框架装配，其中底盘是新能源汽车的基础结构，其他部件都将安装在这个基础上。底盘装配包括安装悬挂系统、制动系统、转向系统等关键部件。
            3、动力系统装配：新能源汽车的动力系统可能包括电机、变速器、传动轴等部件。这些部件需要根据设计要求精确装配，以确保动力输出的顺畅和高效。
            4、电池组装配：这包括电池单体的组装、电池模块的连接以及整个电池组的固定和布线等步骤。
            5、内饰装配：内饰装配包括车门、座椅、仪表盘、音响系统等部件的安装。这些部件的安装不仅要满足功能需求，还要注重舒适性和美观性。
            6、电气系统安装：电气系统是新能源汽车的核心部分，包括整流器、电气控制器、电池管理系统等。这些部件的安装需要严格按照电气图纸进行，确保电气连接的准确性和可靠性。
            7、质量检测与调试：组装完成后，需要对整车进行质量检测，包括外观检查、性能测试、安全性能评估等。同时，还需要进行调试工作，确保车辆各项功能正常运行。
            8、交付客户使用

            新能源制造业包括以下关键部门（以新能源车为例）：

            1、研发部 (Research and Development Department)：
            负责新车型的设计和技术开发，包括电池技术、电动机、车载电子系统等。
            进行原型车测试和验证，确保车辆性能和安全性。

            2、采购部 (Procurement Department)：
            负责采购生产所需的原材料和零部件，包括电池、电子元件、车身材料等。
            管理供应链，确保原材料的及时供应和质量。

            3、生产制造部 (Manufacturing Department)：
            负责车辆的装配和生产，包括车身制造、电池组装、内饰安装等。
            确保生产线的高效运作和产品质量的稳定。

            4、质量控制部 (Quality Control Department)：
            负责对生产过程和成品进行质量检查和控制，确保产品符合质量标准。
            处理生产过程中出现的质量问题，并进行改进。

            5、物流部 (Logistics Department)：
            负责原材料和成品的运输和仓储管理，确保供应链的高效运行。
            管理库存，优化物流流程，降低成本。

            6、市场营销部 (Marketing Department)：
            负责市场调研、品牌推广和销售策略的制定。
            通过广告、活动和促销等手段提高产品知名度和销售量。

            7、售后服务部 (After-sales Service Department)：
            负责为客户提供售后服务和技术支持，包括车辆维护、维修和客户反馈处理。
            建立和管理售后服务网络，确保客户满意度。

            8、财务部 (Finance Department)：
            负责公司财务管理，包括预算编制、成本控制、资金运作等。
            进行财务分析，为管理层提供决策支持。

            9、人力资源部 (Human Resources Department)：
            负责公司人员招聘、培训、绩效管理和员工关系等工作。
            提供必要的人力资源支持，确保各部门高效运作。

            10、信息技术部 (Information Technology Department)：
            负责公司的信息系统和技术支持，包括生产管理系统、物流系统、客户关系管理系统等。
            确保公司信息系统的安全和稳定运行。

            新能源制造业多层次岗位主要包括如下（以新能源车为例）：
            1.销售代表:负责与客户沟通，推广公司的新能源汽车产品，实现销售目标。
            2.市场推广经理:制定市场营销策略，开拓市场，提升品牌知名度。
            3.电池工程师:负责新能源汽车电池系统的研发和优化。
            4.电机工程师:设计和优化电动汽车的电机系统，提高性能和效率。
            5.控制系统工程师:研发车辆的控制系统，确保车辆安全和性能稳定。
            6.系统集成工程师:负责整车系统的集成设计和优化。
            7.生产经理:负责生产车辆的生产计划制定和实施。
            8.质量工程师:监督汽车生产过程中的质量控制，确保产品质量符合标准。
            9.项目经理:负责新能源汽车项目的规划、实施和监督。
            10.物流经理:负责新能源汽车零部件的采购和供应链管理。
            {/*</pre>*/}
          </Card>
        </Col>
        <Col span={6}>
          <Card
            title="本体定义"
            bordered={false}
            style={{height: '700px', width: '100%' }} // 自定义高度
          >
            定义的本体概念（22个）
            增材制造设备：具体的增材制造设备
            航空航天器：具体的航天航空设备
            智能家居设备：具体的智能家居设备
            新能源汽车：具体的新能源设备
            工艺：产品涉及的流程
            部门：产品涉及的部门
            岗位：产品涉及的岗位层次
            材料：产品涉及到的材料
            技术：产品涉及到的技术
            标准：技术、部门、工艺流程等涉及到的国家标准
            法规：技术、工艺流程、岗位等涉及到的法律法规
            项目：岗位、部门等涉及到项目计划
            产品：具体的产品
            组件：产品的组件说明
            传感器：产品涉及到具体传感器
            控制系统：产品的控制系统，如车控系统、智能家居的控制系统等
            客户：部门、岗位涉及到的客户
            供应商：部门、工艺流程、材料等涉及到的供应商
            合作伙伴：工艺流程、材料、岗位等涉及到的合作伙伴
            研究机构：工艺流程、材料等涉及到的研究机构
            专利：产品涉及到的相应专利
            市场：产品、材料等涉及市场营销的内容
          </Card>
        </Col>
        <Col span={6}>
          <Card
            title="关系定义"
            bordered={false}
            style={{height: '700px'}} // 自定义高度
          >
            定义的关系类型（31种）：
            制造使用 (manufactured_using)
            技术应用 (technology_applied)
            组件组成 (component_of)
            设备组成 (equipment_of)
            控制系统组成 (system_component)
            传感器使用 (sensor_used)
            负责部门 (responsible_department)
            岗位职责 (position_responsibility)
            遵循标准 (complies_with)
            法规适用 (regulated_by)
            项目合作 (project_collaboration)
            技术合作 (technology_collaboration)
            供应关系 (supplies)
            客户购买 (purchased_by)
            市场销售 (marketed_in)
            专利保护 (protected_by)
            研究开发 (researched_by)
            产品生产 (produced_by)
            产品开发 (developed_by)
            流程包含 (process_includes)
            设备操作 (operated_by)
            产品维护 (maintained_by)
            市场需求 (demanded_by)
            技术需求 (required_by)
            工艺优化 (optimized_by)
            设备维护 (maintained_by)
            组件生产 (produced_by)
            材料需求 (needed_for)
            市场反馈 (feedback_from)
            岗位培训 (trained_for)
            监管部门 (regulated_by)
          </Card>
        </Col>
      </Row>
    ),
  },
];


const App: React.FC = () => (
  <div>
    <Tabs defaultActiveKey="1" items={items} onChange={onChange}/>
  </div>


);


export default App;

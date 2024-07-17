import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';

const Footer: React.FC = () => {
  const defaultMessage = '南京大学';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'codeNav',
          title: '软件学院',
          href: 'https://yupi.icu',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          // title: '编程宝典',
          title: '',
          href: 'https://codefather.cn',
          blankTarget: true,
        },
        {
          key: 'github',
          title: (
            <>
              {/*<GithubOutlined /> 鱼皮源码*/}
              <GithubOutlined />
            </>
          ),
          // href: 'https://github.com/liyupi',
          href: '',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;

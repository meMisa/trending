// node modules
import * as React from 'react';
import { Space } from 'antd';
import { QuestionCircleFilled } from '@ant-design/icons';

const InboxStatus = (props: { status: string }) => (
  <div
    className={`flex flex-align-center pr-5 ${
      props.status === 'open' ? 'open-status' : 'close-status'
    }`}
  >
    <QuestionCircleFilled />
    <Space> {props.status}</Space>
  </div>
);

export default InboxStatus;

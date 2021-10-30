// node modules
import * as React from 'react';
import { Typography } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const InboxSupport = (props: { supportType: string; className?: string }) => (
  <div className="flex flex-align-baseline">
    <InboxOutlined className={`ml-3 ${props.className}`} />
    <Typography.Text strong type="secondary" className="ml-1">
      {props.supportType}
    </Typography.Text>
  </div>
);

export default InboxSupport;

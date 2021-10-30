// node modules
import * as React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const InboxListTitle = (props: { title: string; id: string }) => (
  <div className="flex flex-align-start width-max-content">
    <Title level={4}>{props.title}</Title>
    <Title level={5} type="secondary" className="mt-0 ml-2">
      {props.id}
    </Title>
  </div>
);

export default InboxListTitle;

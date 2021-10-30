// node modules
import * as React from 'react';
import { Space } from 'antd';
// components
import InboxStatus from '../common/InboxStatus';
// assets
import Deposit from 'assets/icons/Deposit';

const ListExtra = (props: { status: string; closedStatus: string }) => (
  <div className="flex">
    {props.closedStatus && (
      <div className="deposit-wrapper mr-3">
        <Deposit />
        <Space align="baseline"> {props.closedStatus}</Space>
      </div>
    )}
    <InboxStatus status={props.status} />
  </div>
);
export default ListExtra;

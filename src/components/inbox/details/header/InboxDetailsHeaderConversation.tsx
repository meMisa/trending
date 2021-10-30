// node modules
import * as React from 'react';
import { Typography, Avatar, Card, Space } from 'antd';
import {
  ShrinkOutlined,
  BellOutlined,
  EditOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';
// components
import InboxStatus from '../../common/InboxStatus';
// assets
import ExternalLink from 'assets/icons/ExternalLink';
import DepositIcon from 'assets/icons/Deposit';
import Bookmark from 'assets/icons/Bookmark';
// texts
import { CONVERSATION, REPLY_IN } from 'constants/texts';

const { Meta } = Card;
const { Text } = Typography;

interface Props {
  id: string;
  status: string;
  replyTime: string;
}

const InboxDetailsHeaderConversation = (props: Props) => {
  return (
    <Card
      className="conversation-card-wrapper details-header-common p-3"
      bordered={false}
      size="small"
      cover={
        <div className="flex flex-justify-space-between">
          <Text strong type="secondary">
            {CONVERSATION}
          </Text>
          <Space align="start">
            <Avatar
              className="conversation-title-header-avatar"
              shape="square"
              icon={<ShrinkOutlined />}
            />
            <Avatar
              className="conversation-title-header-avatar"
              shape="square"
              icon={<ExternalLink />}
            />
          </Space>
        </div>
      }
      actions={[
        <Avatar shape="square" icon={<DepositIcon />} />,
        <Avatar shape="square" icon={<Bookmark />} />,
        <Avatar shape="square" icon={<BellOutlined />} />,
        <Avatar shape="square" icon={<EditOutlined />} />,
        <Space className="conversation-footer-header" align="center">
          <ClockCircleOutlined className="ml-2" />
          <Text type="secondary">{REPLY_IN}</Text>
          <Text mark>{props.replyTime}</Text>
        </Space>,
      ]}
    >
      <Meta
        title={props.id}
        description={<InboxStatus status={props.status} />}
      />
    </Card>
  );
};

export default InboxDetailsHeaderConversation;

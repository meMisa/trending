// node modules
import * as React from 'react';
import { Avatar, Timeline, Card, Typography } from 'antd';
import { MailOutlined, UserOutlined } from '@ant-design/icons';
// components
import InboxSupport from '../../common/InboxSupport';
// assets
import CommentIconLarge from 'assets/icons/CommentIconLarge';
import Phone from 'assets/icons/Phone';
import PhoneOutGoingIcon from 'assets/icons/PhoneOutGoing';
// utils
import { formatDate } from 'utils/dateTime';
import { formatEmail } from 'utils/utilities';
// types
import { Conversations, StepTypes } from '../../types/inbox';

const { Text } = Typography;
const { Meta } = Card;

const InboxDetailsContent = (props: { conversations: Conversations[] }) => {
  const createTimelineIcon = (step: string) => {
    switch (step) {
      case StepTypes.MAIL:
        return (
          <Avatar
            className="mail-icon-background"
            icon={<MailOutlined className="mail-icon" />}
          />
        );
      case StepTypes.COMMENT:
        return (
          <Avatar
            className="comment-icon-background"
            icon={<CommentIconLarge className="mail-icon" />}
          />
        );
      case StepTypes.CALL:
        return (
          <Avatar
            className="call-icon-background"
            icon={<Phone className="call-icon" />}
          />
        );
      case StepTypes.ON_CALL: {
        return (
          <Avatar
            className="call-icon-background"
            icon={<PhoneOutGoingIcon style={{ width: '13', height: '16' }} />}
          />
        );
      }
    }
  };

  const createTitle = (item) => (
    <>
      <Text className="details-content-header" strong>
        {formatDate(item.date, true)}
      </Text>
      <br />
      {item.title}
      <div className="flex details-content-header">
        <Text type="secondary">{`To: ${item.supportUserName} ${formatEmail(
          item.supportEmail,
        )}`}</Text>
        <InboxSupport
          supportType="Support"
          className="flex-align-self-center support-icon-color"
        />
      </div>
    </>
  );

  const createUserInfo = (item) => (
    <>
      <Avatar
        className="user-avatar-background float-right"
        src={item.avatar}
        icon={<UserOutlined />}
      />
      <div className="flex flex-column details-content-header flex-align-end mr-4">
        <Text type="secondary">{item.username}</Text>
        <Text type="secondary">{formatEmail(item.email)}</Text>
      </div>
    </>
  );

  return (
    <div className="details-content-container p-5">
      <Timeline>
        {props.conversations.map((item: Conversations) => (
          <Timeline.Item key={item.id} dot={createTimelineIcon(item.step)}>
            <Card title={createTitle(item)} extra={createUserInfo(item)}>
              <Meta description={item.description} />
            </Card>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
};

export default InboxDetailsContent;

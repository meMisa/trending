// node modules
import * as React from 'react';
import { Typography, Avatar, Card } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
// assets
import Message from 'assets/icons/Message';
// texts
import { CUSTOMER } from 'constants/texts';

const { Text } = Typography;
const { Meta } = Card;

interface Props {
  userAvatar?: string;
  name: string;
  email: string;
  phoneNumber?: string;
}

const InboxDetailsHeaderCustomer = (props: Props) => {
  return (
    <Card
      className="customer-card-wrapper details-header-common"
      bordered={false}
      size="small"
      cover={
        <Text strong type="secondary">
          {CUSTOMER}
        </Text>
      }
      actions={[
        <Message key="message" />,
        <MailOutlined key="mail" />,
        <PhoneOutlined key="phone" />,
      ]}
    >
      <Meta
        avatar={
          props.userAvatar ? (
            <Avatar src={props.userAvatar} />
          ) : (
            <Avatar
              className="user-avatar-background"
              icon={<UserOutlined />}
            />
          )
        }
        title={props.name}
        description={
          <>
            {props.email}
            <br />
            {props.phoneNumber}
          </>
        }
      />
    </Card>
  );
};

export default InboxDetailsHeaderCustomer;

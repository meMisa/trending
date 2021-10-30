// node modules
import * as React from 'react';
import { Avatar, Typography } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
// component
import InboxSupport from '../common/InboxSupport';
// assets
import CommentIcon from 'assets/icons/CommentIcon';
// utils
import { formatDate } from 'utils/dateTime';
import { formatEmail } from 'utils/utilities';
// types
import { InboxesItems } from '../types/inbox';
// texts
import { INTRACTIONS } from 'constants/texts';

const { Title, Text } = Typography;

const ListDescriptions = (props: {
  item: InboxesItems;
  showDetails: boolean;
}) => {
  const createInteractionsIcon = () => {
    if (props.item.interactionsType === 'mail') {
      return (
        <>
          <Avatar
            size="small"
            className="mail-icon-background intractions"
            icon={<MailOutlined className="mail-icon" />}
          />
          <Avatar
            size="small"
            className="comment-icon-background"
            icon={<CommentIcon className="mail-icon" />}
          />
        </>
      );
    } else {
      return (
        <>
          <Avatar
            size="small"
            className="call-icon-background intractions"
            icon={<PhoneOutlined className="call-icon" />}
          />
          <Avatar
            size="small"
            className="call-icon-background"
            icon={<PhoneOutlined className="call-icon" />}
          />
        </>
      );
    }
  };

  return (
    <div className="flex">
      <Title level={5} type="secondary">
        {formatDate(props.item.date, true)}
      </Title>
      {!props.showDetails && (
        <div className="ml-2 flex">
          <UserOutlined className="ml-3 mr-2" />
          <Text type="secondary">{props.item.name}</Text>
          <Text type="secondary" className="ml-1 mr-2">
            {formatEmail(props.item.email)}
          </Text>

          {props.item.interactionsType !== 'none' && (
            <>
              {createInteractionsIcon()}
              <Text
                type="secondary"
                className="ml-1"
              >{`${`${props.item.interactions} ${INTRACTIONS}`}`}</Text>
            </>
          )}
        </div>
      )}
      <InboxSupport supportType={props.item.supportType} />
    </div>
  );
};

export default ListDescriptions;

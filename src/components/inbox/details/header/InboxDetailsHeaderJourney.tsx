// node modules
import * as React from 'react';
import { Typography, Avatar, Card } from 'antd';
// assets
import BookOpen from 'assets/icons/BookOpen';
// types
import { JourneyStepsTypes } from '../../types/inbox';
// texts
import { CUSTOMER_JOURNEY } from 'constants/texts';
import InboxTitleIcons from '../../common/InboxTitleIcons';

const { Text } = Typography;

const InboxDetailsHeaderJourney = (props: {
  customerJourney: JourneyStepsTypes[];
}) => {
  return (
    <Card
      className="journey-card-wrapper details-header-common p-3"
      bordered={false}
      size="small"
      cover={
        <div className="flex flex-justify-space-between">
          <Text strong type="secondary">
            {CUSTOMER_JOURNEY}
          </Text>
          <Avatar
            className="conversation-title-header-avatar"
            shape="square"
            icon={<BookOpen />}
          />
        </div>
      }
    >
      <InboxTitleIcons steps={props.customerJourney} />
    </Card>
  );
};

export default InboxDetailsHeaderJourney;

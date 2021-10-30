// node modules
import * as React from 'react';
import { Row, Col, Divider } from 'antd';
// components
import InboxDetailsHeaderConversation from './header/InboxDetailsHeaderConversation';
import InboxDetailsHeaderCustomer from './header/InboxDetailsHeaderCustomer';
import InboxDetailsHeaderJourney from './header/InboxDetailsHeaderJourney';
import InboxDetailsContent from './content/InboxDetailsContent';
// types
import { InboxesItems } from '../types/inbox';

const InboxDetailsContainer = (props: { selectedRow: InboxesItems }) => {
  const {
    id,
    status,
    replyTime,
    email,
    name,
    userAvatar,
    phoneNumber,
    customerJourney,
    conversations,
  } = props.selectedRow;
  return (
    <div className={'selected-row-details'}>
      <Row className="details-header-wrapper">
        <Col span={9}>
          <InboxDetailsHeaderConversation
            id={id}
            status={status}
            replyTime={replyTime}
          />
        </Col>
        <Divider type="vertical" className="details-header-divider" />
        <Col span={6}>
          <InboxDetailsHeaderCustomer
            email={email}
            name={name}
            phoneNumber={phoneNumber}
            userAvatar={userAvatar}
          />
        </Col>
        <Divider type="vertical" className="details-header-divider" />
        <Col span={7}>
          <InboxDetailsHeaderJourney customerJourney={customerJourney} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <InboxDetailsContent conversations={conversations} />
        </Col>
      </Row>
    </div>
  );
};

export default InboxDetailsContainer;

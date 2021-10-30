// node modules
import * as React from 'react';
import { Avatar, Steps } from 'antd';
import { MailOutlined } from '@ant-design/icons';
// types
import { StepTypes, JourneyStepsTypes } from '../types/inbox';
// assets
import CommentIcon from 'assets/icons/CommentIcon';
import CommentIconLarge from 'assets/icons/CommentIconLarge';
import Phone from 'assets/icons/Phone';
import PhoneOutGoingIcon from 'assets/icons/PhoneOutGoing';

const { Step } = Steps;

const InboxTitleIcons = (props: { steps: string[] | JourneyStepsTypes[] }) => {
  const handleIconSize = (index) => {
    let style: object = { marginLeft: '0.2rem' };
    let size: any = 'small';
    if (index === 0) {
      size = 'default';
      style = { marginLeft: 0 };
    }
    return { size, style };
  };

  const createListTitleIcon = (item: string, index: number) => {
    switch (item) {
      case StepTypes.MAIL:
        return (
          <Avatar
            className="mail-icon-background"
            icon={<MailOutlined className="mail-icon" />}
          />
        );
      case StepTypes.COMMENT:
        const IconComponent = index === 0 ? CommentIconLarge : CommentIcon;
        const { size, style } = handleIconSize(index);
        return (
          <Avatar
            style={style}
            size={size}
            className="comment-icon-background"
            icon={<IconComponent className="mail-icon" />}
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
        const { size, style } = handleIconSize(index);
        const iconStyle =
          index === 0
            ? { width: '13', height: '16' }
            : { width: '9', height: '10' };
        return (
          <Avatar
            size={size}
            style={style}
            className="call-icon-background"
            icon={<PhoneOutGoingIcon style={iconStyle} />}
          />
        );
      }
    }
  };

  /**
   * Create steps description of list mode in header
   * @param item : object type or null
   */
  const createDescription = (item?: JourneyStepsTypes) => (
    <>
      {item.status ? (
        <>
          <span>{item.id} &#8226; </span>
          <span>{item.date} &#8226; </span>
          <span>{item.status}</span>
        </>
      ) : (
        ''
      )}
    </>
  );

  return (
    <Steps
      className="step-wrapper"
      direction="vertical"
      current={1}
      status="wait"
    >
      {props.steps.map((item: any, index: number) => (
        <Step
          className="list-title-icon-step"
          key={index}
          description={createDescription(item)}
          icon={createListTitleIcon(item.step || item, index)}
        />
      ))}
    </Steps>
  );
};

export default InboxTitleIcons;

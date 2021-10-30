// node modules
import * as React from 'react';
import { List, Space, Tag, Avatar } from 'antd';
import {
  EyeOutlined,
  ClockCircleOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
// components
import InboxTitleIcons from './common/InboxTitleIcons';
import ListDescriptions from './list/ListDescriptions';
import ListExtra from './list/ListExtra';
import InboxDetailsHeader from './details/InboxDetailsContainer';
import InboxListTitle from './list/InboxListTitle';
// actions
import { selectInboxRow } from './actions/inboxActions';
// reducer
import { initialState, reducer } from './reducers/inboxReducer';
// types
import { ActionProps, InboxesItems } from './types/inbox';
// text
import { REPLY_IN } from 'constants/texts';

interface ActionIconText {
  icon: any;
  text: string;
  src?: string;
  tag: boolean;
  replyTimeUnit?: string;
}
interface PropsFromState {
  showDetails: boolean;
  selectedRow: InboxesItems | null;
}
type AllProps = PropsFromState;

/**
 * Create icon and text of actions(viewed by and reply in)
 * @param icon: antd icon component
 * @param text: string
 * @param src:string
 * @param tag:boolean
 * @param replyTimeUnit:string(hour || minute)
 * @constructor
 */
const IconText = ({ icon, text, src, tag, replyTimeUnit }: ActionIconText) => (
  <Space>
    {tag ? (
      <Tag icon={React.createElement(icon)} color="#F3F4F7">
        <Avatar size="small" src={src}>
          {text}
        </Avatar>
      </Tag>
    ) : (
      <>
        {React.createElement(icon)}
        {REPLY_IN}
        <Tag
          className={`${
            replyTimeUnit === 'h' ? 'reply-in-hour' : 'reply-in-minute'
          }`}
        >
          {text}
        </Tag>
      </>
    )}
  </Space>
);

// todo: works on responsive
const InboxContainer = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const showDetails = React.useCallback(
    (item: InboxesItems) => {
      dispatch(selectInboxRow(item));
    },
    [state.showDetails],
  );

  const createActionIcon = (key: string) => {
    if (key === 'viewBy') {
      return EyeOutlined;
    } else if (key === 'replyIn') {
      return ClockCircleOutlined;
    } else {
      return QuestionCircleOutlined;
    }
  };

  return (
    <div
      className={`inbox-container ${
        state.showDetails && 'flex flex-justify-space-around'
      }`}
    >
      <List
        bordered
        className={`list-container ${state.showDetails && 'list-selected'}`}
        itemLayout="horizontal"
        size="small"
        dataSource={initialState.inboxes}
        renderItem={(item) => (
          <List.Item
            className={`list-container mb-1 ${
              item.status === 'open' ? 'open-status-row' : 'close-status-row'
            }`}
            key={item.title}
            actions={item.actions.map((action: ActionProps, index: number) => (
              <IconText
                key={`${action.text}_${index}`}
                icon={createActionIcon(action.key)}
                text={action.text}
                src={action.src}
                tag={action.tag}
                replyTimeUnit={action.replyTimeUnit}
              />
            ))}
            extra={
              <ListExtra
                status={item.status}
                closedStatus={item.closedStatus}
              />
            }
            onClick={() => showDetails(item)}
          >
            <List.Item.Meta
              avatar={<InboxTitleIcons steps={item.steps} />}
              title={<InboxListTitle id={item.id} title={item.title} />}
              description={
                <ListDescriptions item={item} showDetails={state.showDetails} />
              }
            />
          </List.Item>
        )}
      />
      {state.showDetails && (
        <InboxDetailsHeader selectedRow={state.selectedRow} />
      )}
    </div>
  );
};

export default InboxContainer;

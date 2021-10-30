import * as React from 'react';
import { Tabs, Typography, Row, Col } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import {
  StarFilled,
  InboxOutlined,
  UsergroupDeleteOutlined,
  RiseOutlined,
} from '@ant-design/icons';
// text
import { ATLAS, INBOX, CUSTOMERS, STATISTICS } from 'constants/texts';

const { Title } = Typography;
const { TabPane } = Tabs;

const TabPanel: React.FC<{}> = () => {
  const history = useHistory();
  const pathName = history.location.pathname;

  return (
    <div className="pt-3 flex">
      {/****************************************************** LOGO PART  *******************************************/}
      <Row align="bottom" gutter={10}>
        <Col>
          <StarFilled />
        </Col>
        <Col>
          <Title level={2}>{ATLAS}</Title>
        </Col>
      </Row>
      {/****************************************************** TABS PART  *******************************************/}
      <Tabs
        className="ml-5 text-center tab-panel-wrapper"
        size="large"
        defaultActiveKey={pathName}
        activeKey={pathName}
      >
        <TabPane
          tab={
            <Link to="/inbox">
              <InboxOutlined className="inbox-tab-icon" />
              <Title level={5}>{INBOX}</Title>
            </Link>
          }
          key="/inbox"
        />
        <TabPane
          tab={
            <Link to="/users">
              <UsergroupDeleteOutlined className="inbox-tab-icon" />
              <Title level={5}>{CUSTOMERS}</Title>
            </Link>
          }
          key="/users"
        />
        <TabPane
          tab={
            <Link to="/statistics">
              <RiseOutlined className="inbox-tab-icon" />
              <Title level={5}>{STATISTICS}</Title>
            </Link>
          }
          key="/statistics"
        />
      </Tabs>
    </div>
  );
};
export default TabPanel;

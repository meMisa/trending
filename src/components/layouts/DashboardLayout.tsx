// node modules
import * as React from 'react';
import { Layout } from 'antd';
// components
import TabPanel from 'components/general/TabPanel';
import GlobalSearch from 'components/general/GlobalSearch';
// texts
import { FOOTER } from 'constants/texts';

const { Header, Content, Footer } = Layout;

const DashboardLayout = ({ children }) => {
  return (
    <Layout>
      <Header className="flex flex-justify-space-between height-auto">
        <TabPanel />
        <GlobalSearch />
      </Header>
      <Content>{children}</Content>
      <Footer>{FOOTER}</Footer>
    </Layout>
  );
};

export default React.memo(DashboardLayout);

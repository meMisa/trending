// node modules
import * as React from 'react';
import { Avatar } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const GlobalSearch = () => {
  return (
    <Avatar
      className="global-search-avatar mt-3 clickable"
      size={64}
      icon={<SearchOutlined className="global-search-icon" />}
    />
  );
};

export default GlobalSearch;

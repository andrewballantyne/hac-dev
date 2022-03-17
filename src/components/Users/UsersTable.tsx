import * as React from 'react';
import { Table } from '../../shared';
import { userHeaders } from './userHeaders';
import UsersRow from './UsersRow';
import useUserData from './useUserData';

const UsersTable: React.FC = () => {
  const [data, loaded] = useUserData();

  return (
    <Table
      aria-label="Workspace Users"
      loaded={loaded}
      data={data}
      Header={userHeaders}
      Row={UsersRow}
    />
  );
};

export default UsersTable;

import * as React from 'react';
import EllipsisVIcon from '@patternfly/react-icons/dist/js/icons/ellipsis-v-icon';
import { RowFunctionArgs, TableData } from '../../shared/components/table';
import { UserKind } from './types';
import { userTableColumnClasses } from './userHeaders';

const UsersRow: React.FC<RowFunctionArgs<UserKind>> = ({ obj }) => {
  return (
    <>
      <TableData className={userTableColumnClasses.name}>{obj.spec.name}</TableData>
      <TableData className={userTableColumnClasses.role}>{obj.spec.role}</TableData>
      <TableData className={userTableColumnClasses.email}>{obj.spec.email}</TableData>
      <TableData className={userTableColumnClasses.added}>{obj.spec.added}</TableData>
      <TableData className={userTableColumnClasses.kebab}>
        <EllipsisVIcon />
      </TableData>
    </>
  );
};

export default UsersRow;

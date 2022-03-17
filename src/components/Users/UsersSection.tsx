import * as React from 'react';
import { Button, Stack, StackItem, Title } from '@patternfly/react-core';
import UsersTable from './UsersTable';

const UsersSection: React.FC = () => {
  return (
    <Stack hasGutter>
      <StackItem>
        <Title headingLevel="h2">Users</Title>
      </StackItem>
      <StackItem>
        <Button isDisabled variant="primary">
          Add User
        </Button>
      </StackItem>
      <StackItem>
        <UsersTable />
      </StackItem>
    </Stack>
  );
};

export default UsersSection;

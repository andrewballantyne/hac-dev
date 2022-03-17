import * as React from 'react';
import { Stack, StackItem } from '@patternfly/react-core';
import { Main } from '@redhat-cloud-services/frontend-components/Main';
import { PageHeader, PageHeaderTitle } from '@redhat-cloud-services/frontend-components/PageHeader';
import EnvironmentSection from '../../components/Environments/EnvironmentSection';
import UsersSection from '../../components/Users/UsersSection';

const WorkspaceSettings: React.FC = () => {
  return (
    <React.Fragment>
      <PageHeader>
        <PageHeaderTitle title="Settings" />
      </PageHeader>
      <Main>
        <Stack hasGutter>
          <StackItem>
            <EnvironmentSection />
          </StackItem>
          <StackItem>
            <UsersSection />
          </StackItem>
        </Stack>
      </Main>
    </React.Fragment>
  );
};

export default WorkspaceSettings;

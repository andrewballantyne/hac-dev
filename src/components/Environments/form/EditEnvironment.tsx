import * as React from 'react';
import { Main } from '@redhat-cloud-services/frontend-components/Main';
import { PageHeader, PageHeaderTitle } from '@redhat-cloud-services/frontend-components/PageHeader';
import EnvironmentForm from './EnvironmentForm';

const CreateEnvironment: React.FC = () => {
  return (
    <React.Fragment>
      <PageHeader>
        <PageHeaderTitle title="Edit Environment" />
      </PageHeader>
      <Main>
        <EnvironmentForm />
      </Main>
    </React.Fragment>
  );
};

export default CreateEnvironment;

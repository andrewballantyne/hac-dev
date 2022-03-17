import * as React from 'react';
import { Main } from '@redhat-cloud-services/frontend-components/Main';
import { PageHeader, PageHeaderTitle } from '@redhat-cloud-services/frontend-components/PageHeader';
import EmptyCluster from './EmptyCluster';
import EnvironmentForm from './EnvironmentForm';
import useClusterDetection from './useClusterDetection';

const CreateEnvironment: React.FC = () => {
  const hasClusters = useClusterDetection();

  return (
    <React.Fragment>
      <PageHeader>
        <PageHeaderTitle title="Create Environment" />
      </PageHeader>
      <Main>{hasClusters ? <EnvironmentForm /> : <EmptyCluster />}</Main>
    </React.Fragment>
  );
};

export default CreateEnvironment;

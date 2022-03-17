import * as React from 'react';
import { Button, Stack, StackItem, Title } from '@patternfly/react-core';
import { useNavigateAddEnvironment } from './actions';
import EnvironmentCards from './EnvironmentCards';
import useEnvironmentHelp from './useEnvironmentHelp';

const EnvironmentsSection: React.FC = () => {
  const navigateAddEnvironment = useNavigateAddEnvironment();
  const environmentHelp = useEnvironmentHelp();

  return (
    <Stack hasGutter>
      <StackItem>
        <Title headingLevel="h2">Environments</Title>
      </StackItem>
      {environmentHelp && <StackItem>{environmentHelp}</StackItem>}
      <StackItem>
        <Button variant="primary" onClick={() => navigateAddEnvironment()}>
          Create environment
        </Button>
      </StackItem>
      <StackItem>
        <EnvironmentCards />
      </StackItem>
    </Stack>
  );
};

export default EnvironmentsSection;

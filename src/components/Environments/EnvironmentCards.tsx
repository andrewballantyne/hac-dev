import * as React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';
import EnvironmentCard from './EnvironmentCard';
import EnvironmentCardArrow from './EnvironmentCardArrow';
import useEnvironments from './useEnvironments';

const EnvironmentCards: React.FC = () => {
  const environments = useEnvironments();

  return (
    <Flex>
      {environments.map((env, i) => (
        <React.Fragment key={env.metadata.name}>
          <FlexItem>
            <EnvironmentCard environment={env} />
          </FlexItem>
          {i < environments.length - 1 && (
            <FlexItem>
              <EnvironmentCardArrow />
            </FlexItem>
          )}
        </React.Fragment>
      ))}
    </Flex>
  );
};

export default EnvironmentCards;

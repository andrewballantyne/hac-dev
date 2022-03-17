import * as React from 'react';
import { ExpandableSection, SelectVariant, Spinner, Title } from '@patternfly/react-core';
import { useField } from 'formik';
import { SelectInputField } from '../../../shared';
import { EnvironmentFormData } from './types';
import useClusters from './useClusters';
import useContinuousStatus from './useContinuousStatus';
import { createClusterOptions } from './utils';

const SelectClusterFormSection: React.FC = () => {
  const [isExpanded, setExpanded] = React.useState(false);
  const clusters = useClusters();
  const [{ value }] = useField<EnvironmentFormData['cluster']>('cluster');
  const selectedCluster = clusters.find((cluster) => cluster.name === value);
  useContinuousStatus({ missingClusterList: clusters.length === 0 });

  return (
    <>
      <Title headingLevel="h2">Select cluster</Title>
      <p>Currently, infrastructure for environments are supporting one cluster.</p>
      {selectedCluster ? (
        <>
          <SelectInputField
            variant={SelectVariant.single}
            isDisabled={clusters.length === 1}
            options={createClusterOptions(clusters)}
            name="cluster"
            label="Cluster"
          />
          <ExpandableSection
            toggleText={`${isExpanded ? 'View' : 'Hide'} cluster details`}
            onToggle={() => setExpanded(!isExpanded)}
            isExpanded={isExpanded}
          >
            Some content that UX will determine. Selected cluster: {selectedCluster.name}
          </ExpandableSection>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default SelectClusterFormSection;

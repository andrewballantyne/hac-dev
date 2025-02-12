import * as React from 'react';
import {
  Button,
  EmptyState,
  EmptyStateBody,
  EmptyStateIcon,
  EmptyStateSecondaryActions,
  EmptyStateVariant,
  Title,
} from '@patternfly/react-core';
import { SearchIcon } from '@patternfly/react-icons/dist/js/icons';

type SamplesEmptyStateProps = {
  onClear?: () => void;
};

const SamplesEmptyState: React.FC<SamplesEmptyStateProps> = ({ onClear }) => {
  return (
    <EmptyState variant={EmptyStateVariant.full}>
      <EmptyStateIcon icon={SearchIcon} />
      <Title headingLevel="h2" size="lg">
        No results found
      </Title>
      <EmptyStateBody>
        No results match the filter criteria. Remove filters or clear all filters to show results.
      </EmptyStateBody>
      <EmptyStateSecondaryActions>
        <Button variant="link" onClick={onClear} data-test-id="catalog-clear-filters">
          Clear all filters
        </Button>
      </EmptyStateSecondaryActions>
    </EmptyState>
  );
};

export default SamplesEmptyState;

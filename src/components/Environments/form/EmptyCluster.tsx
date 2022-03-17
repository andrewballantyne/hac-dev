import * as React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  EmptyState,
  EmptyStateBody,
  EmptyStateIcon,
  EmptyStateSecondaryActions,
  Modal,
  ModalVariant,
  Title,
} from '@patternfly/react-core';
import CubesIcon from '@patternfly/react-icons/dist/js/icons/cubes-icon';
import ExternalLinkIcon from '@patternfly/react-icons/dist/js/icons/external-link-alt-icon';

const EmptyCluster: React.FC = () => {
  const history = useHistory();
  const [isModalOpen, setModalOpen] = React.useState(false);

  return (
    <>
      <EmptyState>
        <EmptyStateIcon icon={CubesIcon} />
        <Title headingLevel="h4" size="lg">
          No clusters detected yet
        </Title>
        <EmptyStateBody>
          <p>Use clusters as infrastructure for your environments.</p>
          <p>
            Create a new cluster in OpenShift Cluster Manager or import an existing cluster to
            create a new environment.
          </p>
        </EmptyStateBody>
        <Button
          icon={<ExternalLinkIcon />}
          iconPosition="right"
          variant="primary"
          onClick={() => {
            // eslint-disable-next-line no-alert
            alert('Navigate to OCM -- Not implemented');
          }}
        >
          Create cluster
        </Button>{' '}
        <Button variant="secondary" onClick={() => setModalOpen(true)}>
          Import cluster
        </Button>
        <EmptyStateSecondaryActions>
          <Button variant="link" onClick={() => history.goBack()}>
            Cancel
          </Button>
        </EmptyStateSecondaryActions>
      </EmptyState>
      <Modal
        variant={ModalVariant.small}
        title="Import Cluster"
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        actions={[
          <Button key="cancel" variant="link" onClick={() => setModalOpen(false)}>
            Cancel
          </Button>,
        ]}
      >
        Content to be added. Scripts to link a cluster.
      </Modal>
    </>
  );
};

export default EmptyCluster;

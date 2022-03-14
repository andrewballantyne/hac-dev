import * as React from 'react';
import {
  Card,
  CardActions,
  CardBody,
  CardHeader,
  CardHeaderMain,
  Dropdown,
  DropdownItem,
  KebabToggle,
  Label,
  Text,
  TextVariants,
  Title,
} from '@patternfly/react-core';
import { capitalize } from 'lodash-es';
import { handleEditEnvironment } from './actions';
import EnvironmentStatus from './EnvironmentStatus';
import { EnvironmentKind } from './types';

import './EnvironmentCard.scss';

type EnvironmentCardsProps = {
  environment: EnvironmentKind;
};

const EnvironmentCard: React.FC<EnvironmentCardsProps> = ({ environment }) => {
  const [actionsOpen, setActionsOpen] = React.useState(false);

  const {
    metadata: { name: title },
    spec: { link, deploymentStrategy, count },
    status: { status },
  } = environment;

  return (
    <Card className="hacDev-environment-card">
      <CardHeader>
        <CardHeaderMain>
          <Title headingLevel="h3">{title}</Title>
        </CardHeaderMain>
        <CardActions>
          <Dropdown
            onSelect={() => setActionsOpen(!actionsOpen)}
            toggle={<KebabToggle onToggle={setActionsOpen} />}
            isOpen={actionsOpen}
            isPlain
            dropdownItems={[
              <DropdownItem key="edit" onClick={() => handleEditEnvironment(environment)}>
                Edit Environment
              </DropdownItem>,
            ]}
            position="right"
          />
        </CardActions>
      </CardHeader>
      <CardBody>
        <dl>
          <dt>Environment link</dt>
          <dd>
            <Text component={TextVariants.a} href={link}>
              {link}
            </Text>
          </dd>

          <dt>Deployment strategy</dt>
          <dd>
            <Label>{capitalize(deploymentStrategy)}</Label>
          </dd>

          <dt>Environment status</dt>
          <dd>
            <EnvironmentStatus status={status} />
          </dd>

          <dt>Applications</dt>
          <dd>{count}</dd>
        </dl>
      </CardBody>
    </Card>
  );
};

export default EnvironmentCard;

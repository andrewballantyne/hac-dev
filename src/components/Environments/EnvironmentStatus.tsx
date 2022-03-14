import * as React from 'react';
import CheckCircleIcon from '@patternfly/react-icons/dist/js/icons/check-circle-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/js/icons/question-circle-icon';
import { capitalize } from 'lodash-es';
import { EnvironmentStatus as EnvironmentStatusState } from './types';

type EnvironmentStatusProps = {
  status: EnvironmentStatusState;
};

const EnvironmentStatus: React.FC<EnvironmentStatusProps> = ({ status }) => {
  const renderIcon = (iconStatus: EnvironmentStatusState) => {
    switch (iconStatus) {
      case EnvironmentStatusState.RUNNING:
        return <CheckCircleIcon />;
      default:
        return <QuestionCircleIcon />;
    }
  };

  return (
    <>
      {renderIcon(status)} {capitalize(status)}
    </>
  );
};

export default EnvironmentStatus;

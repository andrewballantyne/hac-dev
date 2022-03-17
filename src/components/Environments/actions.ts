import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { EnvironmentKind } from './types';

export const useNavigateAddEnvironment = (): (() => void) => {
  const history = useHistory();

  return React.useCallback(() => {
    history.push('/environment/create');
  }, [history]);
};

export const useNavigationEditEnvironment = (): ((environment: EnvironmentKind) => void) => {
  const history = useHistory();

  return React.useCallback(
    (environment: EnvironmentKind) => {
      history.push(`/environment/edit/${environment.metadata.name}`);
    },
    [history],
  );
};

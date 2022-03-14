import { DeploymentStrategy, EnvironmentStatus, EnvironmentKind } from './types';

const useEnvironments = (): EnvironmentKind[] => {
  const mockEnv: EnvironmentKind = {
    apiVersion: '',
    kind: 'Environment',
    metadata: {
      name: 'POC',
    },
    spec: {
      link: 'https://dev-stage-cluster.com',
      deploymentStrategy: DeploymentStrategy.AUTOMATED,
      count: 4,
    },
    status: {
      status: EnvironmentStatus.RUNNING,
    },
  };

  return [mockEnv];
};

export default useEnvironments;

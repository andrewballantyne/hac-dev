import { DeploymentStrategy, EnvironmentStatus, EnvironmentKind } from './types';

const mockEnv: EnvironmentKind = {
  apiVersion: '',
  kind: 'Environment',
  metadata: {
    name: 'POC',
  },
  spec: {
    order: 1,
    link: 'https://dev-stage-cluster.com',
    deploymentStrategy: DeploymentStrategy.AUTOMATED,
    count: 4,
    /** @type ClusterType.name */
    cluster: 'my-rosa-cluster',
  },
  status: {
    status: EnvironmentStatus.RUNNING,
  },
};

const useEnvironments = (): EnvironmentKind[] => {
  return [mockEnv];
};

export default useEnvironments;

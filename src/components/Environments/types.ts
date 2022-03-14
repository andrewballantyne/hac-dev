import { K8sResourceCommon } from '../../dynamic-plugin-sdk';

export enum DeploymentStrategy {
  MANUAL = 'manual',
  AUTOMATED = 'automatic',
}

export enum EnvironmentStatus {
  RUNNING = 'running',
}

export type EnvironmentKind = K8sResourceCommon & {
  spec: {
    link: string;
    count: number;
    deploymentStrategy: DeploymentStrategy;
  };
  status: {
    status: EnvironmentStatus;
  };
};

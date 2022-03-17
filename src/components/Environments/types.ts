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
    order: number;
    link: string;
    count: number;
    deploymentStrategy: DeploymentStrategy;
    cluster: string;
  };
  status: {
    status: EnvironmentStatus;
  };
};

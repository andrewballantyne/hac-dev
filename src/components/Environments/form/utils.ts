import { SelectInputOption } from '../../../shared';
import { EnvironmentKind } from '../types';
import { ClusterType } from './types';

export const createOrderOptions = (environments: EnvironmentKind[]): SelectInputOption[] => {
  return environments.map<SelectInputOption>((environment, i) => ({
    value: environment.spec.order.toString(),
    disabled: false,
    label: `#${i}${i === environments.length - 1 ? ' (last)' : ''}`,
  }));
};

export const createClusterOptions = (clusters: ClusterType[]): SelectInputOption[] => {
  return clusters.map<SelectInputOption>((cluster) => ({
    value: cluster.name,
    disabled: false,
    label: cluster.name,
  }));
};

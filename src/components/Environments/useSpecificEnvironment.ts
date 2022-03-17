import { EnvironmentKind } from './types';
import useEnvironments from './useEnvironments';

const useSelectedEnvironment = (name: string): EnvironmentKind | null => {
  const environments = useEnvironments();

  return environments.find((environment) => environment.metadata.name === name);
};

export default useSelectedEnvironment;

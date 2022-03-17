import { K8sResourceCommon } from '../../dynamic-plugin-sdk';
import { UserKind } from './types';

const useUserData = (): [K8sResourceCommon[], boolean, unknown] => {
  /**
   * TODO: Will this be derived from Workspaces?
   */
  const mockUserData: UserKind = {
    apiVersion: '',
    kind: 'User',
    metadata: {
      name: 'abigail',
    },
    spec: {
      name: 'Abigail (owner)',
      role: 'Architect',
      email: 'abigail@aspian.com',
      added: '1 week ago',
    },
  };

  return [[mockUserData], true, null];
};

export default useUserData;

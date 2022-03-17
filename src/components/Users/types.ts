import { K8sResourceCommon } from '../../dynamic-plugin-sdk';

export type UserKind = K8sResourceCommon & {
  spec: {
    name: string;
    role: string;
    email: string;
    added: string;
  };
};

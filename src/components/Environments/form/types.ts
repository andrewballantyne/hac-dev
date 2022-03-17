export type EnvironmentFormData = {
  name: string;
  strategy: string;
  order: number;
  cluster: string;
};

export type ClusterType = {
  name: string;
};

export type StatusObjectState = null | Partial<{
  formError: string;
  stillLoadingClusters: boolean;
}>;

export type StatusObjectConfigs = Partial<{
  missingClusterList: boolean;
}>;

import * as React from 'react';
import { ClusterType } from './types';

// @ts-ignore
window.__clustersEnabled = false;

const staticClusters: ClusterType[] = [
  {
    name: 'my-rosa-cluster',
  },
];

const useClusters = (): ClusterType[] => {
  const [clusters, setClusters] = React.useState<ClusterType[]>(
    // @ts-ignore
    window.__clustersEnabled ? staticClusters : [],
  );

  // @ts-ignore
  window.__enableCluster = () => {
    // @ts-ignore
    window.__clustersEnabled = true;
    setClusters(staticClusters);
  };

  return clusters;
};

export default useClusters;

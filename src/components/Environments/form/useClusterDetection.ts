import useClusters from './useClusters';

const useClusterDetection = () => {
  const clusters = useClusters();
  return clusters.length > 0;
};

export default useClusterDetection;

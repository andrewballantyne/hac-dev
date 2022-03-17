import { useFormikContext } from 'formik';
import { isEqual } from 'lodash-es';
import { EnvironmentFormData, StatusObjectConfigs, StatusObjectState } from './types';

const createFormikStatusObject = ({
  missingClusterList,
}: StatusObjectConfigs): StatusObjectState => {
  if (missingClusterList) {
    return {
      stillLoadingClusters: true,
    };
  }

  return null;
};

const useContinuousStatus = (state: StatusObjectConfigs): void => {
  const { setStatus, status } = useFormikContext<EnvironmentFormData>();

  const statusState = createFormikStatusObject(state);

  if (isEqual(status, statusState)) {
    return;
  }

  setStatus(statusState);
};

export default useContinuousStatus;

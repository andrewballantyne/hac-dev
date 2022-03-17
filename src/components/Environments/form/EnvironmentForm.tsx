import * as React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Alert, Spinner } from '@patternfly/react-core';
import { Formik, FormikHelpers } from 'formik';
import useSpecificEnvironment from '../useSpecificEnvironment';
import EnvironmentFormContent from './EnvironmentFormContent';
import { EnvironmentFormData } from './types';
import useClusters from './useClusters';
import { validationSchema } from './validation-utils';

const initialFormData: EnvironmentFormData = {
  name: '',
  strategy: 'automatic',
  order: 1,
  cluster: '',
};

const EnvironmentForm: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const isEditMode = !!name;
  const environment = useSpecificEnvironment(name);
  const history = useHistory();
  const [loaded, setLoaded] = React.useState(!isEditMode);

  const clusters = useClusters();
  const [initialData, setInitialData] = React.useState<EnvironmentFormData | null>({
    ...initialFormData,
    cluster: clusters[0]?.name,
  });

  React.useEffect(() => {
    if (environment && !loaded) {
      setInitialData({
        ...initialFormData,
        order: environment.spec.order,
        name: environment.metadata.name,
        cluster: environment.spec.cluster,
        strategy: environment.spec.deploymentStrategy,
      });
      setLoaded(true);
    }
  }, [environment, loaded]);

  if (!loaded) {
    return <Spinner />;
  }

  if (!initialData?.cluster) {
    return <Alert variant="danger" isInline title="Error loading clusters" />;
  }

  if (!environment && isEditMode) {
    return <Alert variant="danger" isInline title="Error editing environment" />;
  }

  const handleSubmit = (
    formData: EnvironmentFormData,
    helpers: FormikHelpers<EnvironmentFormData>,
  ) => {
    // eslint-disable-next-line no-console
    console.debug('submit data', formData, helpers);
    history.push('/settings');
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      onReset={() => history.goBack()}
      initialValues={initialData}
      validationSchema={validationSchema}
    >
      {(props) => <EnvironmentFormContent {...props} isEditMode={isEditMode} />}
    </Formik>
  );
};

export default EnvironmentForm;

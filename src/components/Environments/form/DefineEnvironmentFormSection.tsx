import * as React from 'react';
import { SelectVariant, Title } from '@patternfly/react-core';
import { InputField, SelectInputField } from '../../../shared';
import useEnvironments from '../useEnvironments';
import { createOrderOptions } from './utils';

type DefineEnvironmentFormSectionProps = {
  isEditMode: boolean;
};

const DefineEnvironmentFormSection: React.FC<DefineEnvironmentFormSectionProps> = ({
  isEditMode,
}) => {
  const environments = useEnvironments();

  return (
    <>
      <Title headingLevel="h2">Define environment</Title>
      <p>This environment will be available only within this workspace.</p>
      <InputField name="name" label="Environment name" />
      <SelectInputField
        isDisabled
        variant={SelectVariant.single}
        options={[{ disabled: true, value: 'automatic', label: 'Automatic' }]}
        name="strategy"
        label="Deployment strategy"
        helpText="Apps will require manual trigger to move to this environment."
      />
      <SelectInputField
        isDisabled={environments.length === 1 && isEditMode}
        variant={SelectVariant.single}
        options={createOrderOptions(environments)}
        name="order"
        label="Order in continuous delivery"
        helpText="Set the default continuous delivery order for your application. You can modify this later for each application."
      />
    </>
  );
};

export default DefineEnvironmentFormSection;

import * as React from 'react';
import { Alert, AlertActionCloseButton, Button } from '@patternfly/react-core';

const hideEnvHelpKey = 'hacDev/hide-env-help';

const hasEnvHelp = (): boolean => {
  return localStorage.getItem(hideEnvHelpKey) === 'true';
};

const disableEnvHelp = (): void => {
  localStorage.setItem(hideEnvHelpKey, 'true');
};

const useEnvironmentHelp = (): React.ReactNode | null => {
  const [hideHelp, setHideInfo] = React.useState(hasEnvHelp());

  const disableHelp = () => {
    setHideInfo(false);
    disableEnvHelp();
  };

  const environmentHelp = (
    <Alert
      title="About environments"
      isInline
      variant="info"
      actionClose={<AlertActionCloseButton onClose={disableHelp} />}
      actionLinks={
        <Button variant="secondary" onClick={disableHelp}>
          Got it, thanks!
        </Button>
      }
    >
      Manage your continuous delivery process for your applications via environments. What&apos;s an
      &ldquo;environment&rdquo;? It&apos;s an abstraction of infrastructure. With environments,
      define a continuous delivery order and manage application components between them.
    </Alert>
  );

  return hideHelp ? null : environmentHelp;
};

export default useEnvironmentHelp;

import * as React from 'react';
import { Button, Title } from '@patternfly/react-core';
import { getServerStatus } from '../api';

const TestAPI = () => {
  const [serverStatus, setServerStatus] = React.useState('??');

  const callServerStatus = () => {
    getServerStatus()
      .then(() => setServerStatus('Success!'))
      .catch((...args) => {
        console.debug('hmmm?', ...args);
        setServerStatus('Unavailable; did you start it?')
      });
  }

  return (
    <>
      <Button variant="primary" onClick={callServerStatus}>Test API</Button>
      <Title headingLevel="h2">Server Status currently is: {serverStatus}</Title>
    </>
  );
};

export default TestAPI;

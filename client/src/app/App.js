import * as React from 'react';
import { Page } from '@patternfly/react-core';
import AppHeader from './AppHeader';
import AppNavBar from './AppNavBar';
import AppContents from './AppContents';

const App = () => {
  const [isNavOpen, setNavOpen] = React.useState();

  return (
    <Page
      header={<AppHeader isNavOpen={isNavOpen} setNavOpen={setNavOpen} />}
      sidebar={<AppNavBar isNavOpen={isNavOpen} />}
    >
      <AppContents />
    </Page>
  );
};

export default App;

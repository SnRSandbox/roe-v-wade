import * as React from 'react';
import {
  Masthead,
  MastheadToggle,
  MastheadMain,
  MastheadContent,
  PageToggleButton,
} from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import { OutlinedNewspaperIcon } from '@patternfly/react-icons';

const AppHeader = ({ isNavOpen, setNavOpen }) => {
  return (
    <Masthead>
      <MastheadToggle>
        <PageToggleButton
          variant="plain"
          aria-label="Global navigation"
          isNavOpen={isNavOpen}
          onNavToggle={() => setNavOpen(!isNavOpen)}
        >
          <BarsIcon />
        </PageToggleButton>
      </MastheadToggle>
      <MastheadMain>
        <OutlinedNewspaperIcon size="xl" />
      </MastheadMain>
      <MastheadContent>Rov v. Wade</MastheadContent>
    </Masthead>
  );
};

export default AppHeader;

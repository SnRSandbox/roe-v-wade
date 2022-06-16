import * as React from 'react';
import PropTypes from 'prop-types';
import { Nav, NavItem, NavList, PageSidebar } from '@patternfly/react-core';

const AppNavBarProps = {
  isNavOpen: PropTypes.bool,
};

const AppNavBar = ({ isNavOpen }) => {
  return (
    <PageSidebar
      isNavOpen={isNavOpen}
      nav={
        <Nav>
          <NavList>
            <NavItem>Home</NavItem>
          </NavList>
        </Nav>
      }
    />
  );
};

AppNavBar.propTypes = AppNavBarProps;

export default AppNavBar;

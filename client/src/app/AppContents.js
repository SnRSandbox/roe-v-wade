import * as React from 'react';
import { CubesIcon } from '@patternfly/react-icons';
import { EmptyState, EmptyStateBody, EmptyStateIcon, Title } from '@patternfly/react-core';
import TestAPI from '../test-api/TestAPI';

const AppContents = () => {
  return (
    <EmptyState>
      <EmptyStateIcon icon={CubesIcon} />
      <Title headingLevel="h4" size="lg">
        Empty state
      </Title>
      <EmptyStateBody>
        This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but flexible
        enough to meet a variety of needs.
      </EmptyStateBody>
      <TestAPI />
    </EmptyState>
  );
};

export default AppContents;

import React from 'react';
import { render, screen, getByText } from '@testing-library/react';
import NoMatch from 'views/noMatch';

test('the page renders as expected', () => {
  const component = render(<NoMatch />);
  screen.getByText('No Match');

  expect(component).toMatchSnapshot();
});

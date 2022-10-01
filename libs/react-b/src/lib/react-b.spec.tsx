import { render } from '@testing-library/react';

import ReactB from './react-b';

describe('ReactB', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactB />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import ReactA from './react-a';

describe('ReactA', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactA />);
    expect(baseElement).toBeTruthy();
  });
});

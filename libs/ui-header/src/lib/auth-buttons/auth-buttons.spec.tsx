import { render } from '@testing-library/react';

import AuthButtons from './auth-buttons';

describe('AuthButtons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< AuthButtons />);
    expect(baseElement).toBeTruthy();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import { ClientButton } from '.';


test('calling render with the same component on the same container does not remount', () => {
  const Client_Button = render(<ClientButton text={'Espace Client'} />)
  expect(Client_Button.getByTestId('text-display')).toHaveTextContent('Espace Client')

})
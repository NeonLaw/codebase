import React from 'react';
import { StringInput } from '../stringInput';
import { render } from '@testing-library/react';

describe('StringInput', () => {
  it('renders correctly', () => {
    const name = 'email';
    const placeholder = 'email';
    const register = () => { return; };
    const errors = {};
    const label = 'Your email';
    const { getByTestId } = render(
      <StringInput
        register={register}
        testId={name}
        errors={errors}
        label={label}
        placeholder={placeholder}
        name={name} />
    );

    expect(getByTestId(name)).toHaveProperty('placeholder', placeholder);
    expect(getByTestId(name)).toHaveProperty('name', name);
  });
});

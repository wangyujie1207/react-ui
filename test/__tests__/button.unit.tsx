import renderer from 'react-test-renderer'
import React from 'react';
import Button from '../../lib/button';
describe('button', () => {
  it('是个div', () => {
    const json = renderer.create(<Button></Button>).toJSON()
    expect(json).toMatchSnapshot()
  })
})
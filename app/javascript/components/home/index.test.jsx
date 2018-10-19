import React from 'react'
import { shallow } from 'enzyme'
import Home from '.'

it('Home', () => {
  const output = shallow(<Home />)
  expect(output).toMatchSnapshot()
})

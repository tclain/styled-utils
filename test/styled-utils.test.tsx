import * as React from 'react'
import emotionStyled from '@emotion/styled'
import { createThemedStyled } from '../src/styled-utils'

import * as renderer from 'react-test-renderer'
import { matchers } from 'jest-emotion'

// Add the custom matchers provided by 'jest-emotion'
expect.extend(matchers)

const theme = {
  'bg-color': 'blue',
  color: 'red',
  otherColor: 'green'
}

/** a new styled with superpowers */
const styled = createThemedStyled<typeof theme>(emotionStyled)

/**
 * Dummy test
 */
describe('createThemedStyled', () => {
  it('should support theme keys along ', () => {
    const Button = styled('div')<{ primary: boolean }>`
      background-color: ${'bg-color'};
      ${[] as any}
    `
    const tree = renderer.create(<Button />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('it should still support interpolation function', () => {
    const Button = emotionStyled('div')<{ primary?: boolean }>`
      color: ${props => (props.primary ? theme.color : 'teal')};
      /** direct string */
      border-color: ${'teal' as any};
    `
    const tree = renderer.create(<Button primary />).toJSON()
    expect(tree).toMatchSnapshot('primary')

    const notprimary = renderer.create(<Button />).toJSON()
    expect(notprimary).toMatchSnapshot('notprimary')
  })
})

import { ThemedInterpolation, ThemeLike, PropsWithTheme } from './types'

/** Now our interpolation function can return theme keys so we need the resolve the actual value from the props */
function resolveInterpolation(interpolation: ThemedInterpolation, props: PropsWithTheme): unknown {
  const { theme } = props
  if (typeof interpolation === 'function') {
    // get the result of the interpolation
    const possibleThemeKey = interpolation(props)
    return resolveInterpolation(possibleThemeKey, props)
  }
  if (typeof interpolation === 'string') {
    // the result can be a key in theme object, so try to fetch it
    const possibleThemeValue = theme[interpolation]
    // if the theme key exists return it
    if (possibleThemeValue !== undefined) return possibleThemeValue
    // else return the value directly (string, css`` call...)
    return interpolation
  }
  return ''
}

/** a tagged template with themed superpowers
 * It can return a key of a theme in an autocompleted manner thanks to typescript
 */
export function createThemedStyled<Theme extends ThemeLike = any>(styledLikeFunction: Function) {
  return function<Props extends PropsWithTheme>(
    strings: TemplateStringsArray,
    ...interpolations: ThemedInterpolation<Props, Theme>[]
  ) {
    const resolvedInterpolations = interpolations.map(interpolation => (props: PropsWithTheme) =>
      resolveInterpolation(interpolation as ThemedInterpolation, props)
    )
    return styledLikeFunction(strings, ...resolvedInterpolations)
  }
}

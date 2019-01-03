/** A theme, basically a one level object */
export interface ThemeLike {
  [key: string]: string | number
}

export interface PropsWithTheme {
  theme: ThemeLike
}

/** A restricted key from a theme */
export type ThemeLikeKey<ThemeLikeType extends ThemeLike> = keyof ThemeLikeType

/** A function that can take the props  and output a key in the theme */
export type PropsToTheme<Props extends {}, Theme extends ThemeLike> = (
  props: Props
) => ThemeLikeKey<Theme>

/** A new type for an interpolation, can be either a theme key of a function that take props and return a theme key */
export type ThemedInterpolation<
  Props extends PropsWithTheme = { theme: {} },
  Theme extends ThemeLike = {}
> = PropsToTheme<Props, Theme> | ThemeLikeKey<Theme>

export type ListProps = {
  total: number
  skip: number
  limit: number
}

export type Params = Record<string, string | string[] | number | number[] | undefined | Date | boolean | null> | undefined

export type Palette = {
  gray_0: string
  gray_1: string
  gray_2: string
  gray_3: string
  gray_4: string
  primary: string
  secondary: string
  warning: string
  font_size_1: string
  font_size_2: string
  font_size_3: string
  font_weight_thin: number
  font_weight_bold: number
  font_weight_heavy: number
  spacer_1: string
  spacer_2: string
  spacer_3: string
  spacer_4: string
  spacer_5: string
  shadows: string
  nav_height: string
  margin_body: string
  content_width: string
}

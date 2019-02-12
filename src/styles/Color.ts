import { IColorScale } from '../schemas/IColorScale'

class PrimaryColor implements IColorScale {
  veryLight = '#86c8ff'
  light = '#008eff'
  base = '#026CFF'
  dark = '#000' // TODO: define
  veryDark = '#000' // TODO: define
}

class TextColor {}

export const Color = {
  primary: new PrimaryColor(),
  primaryColor: '#026CFF',
  superLightPrimaryColor: '#86c8ff',
  lightPrimaryColor: '#008eff',
  borderColor: 'rgba(0, 0, 0, 0.12)',
  textColor: '#607d8b',
  darkTextColor: 'rgb(42, 47, 69)',
  secondaryTextColor: 'rgb(105, 115, 134)'
}

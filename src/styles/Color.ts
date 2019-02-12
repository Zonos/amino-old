import { IColorScale } from '../schemas/IColorScale'

class PrimaryColor implements IColorScale {
  veryLight = '#90BAFF'
  light = '#649FFF'
  base = '#3784FF'
  dark = '#3174DF'
  veryDark = '#2A63BF'
}

class TextColor implements IColorScale {
  veryLight = ''; // TODO: define
  light = '#595959';
  base = '#333';
  dark = '#000';
  veryDark = ''; // TODO: define
}

export const Color = {
  primary: new PrimaryColor(),
  text: new TextColor(),

  primaryColor: '#3784FF',
  superLightPrimaryColor: '#86c8ff',
  lightPrimaryColor: '#008eff',
  borderColor: 'rgba(0, 0, 0, 0.12)',
  textColor: '#607d8b',
  darkTextColor: 'rgb(42, 47, 69)',
  secondaryTextColor: 'rgb(105, 115, 134)'
}

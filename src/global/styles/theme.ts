import { Dimensions } from 'react-native';

export default {
  colors: {
    primary: '#354559',
    secondary: '#0098b7',
    tertiary: '#FFA25B',
    dark: '#131b1f',
    white: '#fff',
    gray: '#c5c9c8',
    amber: '#D6C7A1',
    mediumGray: '#696e74',
    darkGray: '#676767',
  },
  fonts: {
    regular: 'NotoSans_400Regular',
    bold: 'NotoSans_700Bold',
  },
  dimensions: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
};

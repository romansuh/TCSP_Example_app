import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

// Used device: One Plus 8
const guidelineBaseWidth = 424;
const guidelineBaseHeight = 900;

// Usage: responsive horizontal margins and paddings, width etc.
const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;
// Usage: responsive vertical margins and paddings, height etc.
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
// Usage: font size, border radius etc.
const moderateScale = (size: number, factor: number = 0.5) => size + (horizontalScale(size) - size) * factor;

export {horizontalScale, verticalScale, moderateScale};
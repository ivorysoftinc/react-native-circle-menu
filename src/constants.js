import { Dimensions } from 'react-native';

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

export const OUTER_CIRCLE_SIZE = WIDTH * 0.9;
export const INNER_CIRCLE_SIZE = OUTER_CIRCLE_SIZE * 0.6;
export const OUTER_CIRCLE_THICKNESS = (OUTER_CIRCLE_SIZE - INNER_CIRCLE_SIZE) / 2;
export const ITEMS_CIRCLE_RADIUS = INNER_CIRCLE_SIZE / 2 + OUTER_CIRCLE_THICKNESS / 2;
export const ANGLE_START = -15;
export const ANGLE = 210;

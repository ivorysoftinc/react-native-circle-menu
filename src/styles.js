import { StyleSheet } from 'react-native';

import { INNER_CIRCLE_SIZE, OUTER_CIRCLE_SIZE, HEIGHT } from './constants';

const styles = StyleSheet.create({
  rootPoint: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    width: HEIGHT * 2,
    height: HEIGHT * 2,
    borderRadius: HEIGHT,
    backgroundColor: '#eee',
  },
  smallCircle: {
    position: 'absolute',
    width: INNER_CIRCLE_SIZE,
    height: INNER_CIRCLE_SIZE,
    borderRadius: INNER_CIRCLE_SIZE / 2,
    backgroundColor: '#222',
  },
  largeCircle: {
    position: 'absolute',
    width: OUTER_CIRCLE_SIZE,
    height: OUTER_CIRCLE_SIZE,
    borderRadius: OUTER_CIRCLE_SIZE / 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  point: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;

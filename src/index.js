import React, { Component } from 'react';
import { Animated, TouchableOpacity, View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import { ANGLE, ANGLE_START, ITEMS_CIRCLE_RADIUS } from './constants';
import styles from './styles';

class CircleMenu extends Component {
  static propTypes = {
    style: ViewPropTypes.style,
    children: PropTypes.node.isRequired,
    data: PropTypes.array.isRequired,
    renderItem: PropTypes.func.isRequired,
    keyExtractor: PropTypes.func,
  };

  static defaultProps = {
    keyExtractor: () => {},
    renderItem: () => null,
  };

  animation = new Animated.Value(0);

  _getItemPosition = (index) => {
    const count = this.props.data.length;
    const step = ANGLE / (count - 1);
    const radians = (index * step + ANGLE_START) * (Math.PI / 180);
    return {
      right: ITEMS_CIRCLE_RADIUS * Math.cos(radians),
      bottom: ITEMS_CIRCLE_RADIUS * Math.sin(radians),
    };
  };

  _renderMenuItem = (item, index) => (
    <View
      key={this.props.keyExtractor(item, index)}
      style={[styles.point, this._getItemPosition(index)]}
    >
      {this.props.renderItem(item)}
    </View>
  );

  isMenuOpened = false;

  toggle = () => {
    if (this.isMenuOpened) this.close();
    else this.open();
  };

  open = () => {
    if (this.isMenuOpened) return;
    this.isMenuOpened = true;
    Animated.timing(this.animation, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  close = () => {
    if (!this.isMenuOpened) return;
    this.isMenuOpened = false;
    Animated.timing(this.animation, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  render() {
    const { style, children, data } = this.props;

    const backgroundOpacity = this.animation.interpolate({
      inputRange: [0, 0.6, 1],
      outputRange: [0, 1, 1],
    });

    const smallCircleScale = this.animation.interpolate({
      inputRange: [0, 0.6, 1],
      outputRange: [0, 1, 1],
    });

    const largeCircleRotate = this.animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['-50deg', '-50deg', '0deg'],
    });

    return (
      <View style={[styles.rootPoint, style]}>
        <Animated.View
          style={[
            styles.background,
            { opacity: backgroundOpacity, transform: [{ scale: this.animation }] },
          ]}
        />
        <Animated.View
          style={[
            styles.largeCircle,
            { transform: [{ scale: this.animation }, { rotate: largeCircleRotate }] },
          ]}
        >
          <View style={styles.rootPoint}>{data.map(this._renderMenuItem)}</View>
        </Animated.View>
        <Animated.View style={[styles.smallCircle, { transform: [{ scale: smallCircleScale }] }]} />
        <TouchableOpacity onPress={this.toggle}>{children}</TouchableOpacity>
      </View>
    );
  }
}

export default CircleMenu;

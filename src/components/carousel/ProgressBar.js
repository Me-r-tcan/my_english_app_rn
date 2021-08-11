import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Animated } from "react-native";
import Svg, { Line } from "react-native-svg";

import defaultStyles from "../../config/styles";

const ProgressBar = ({ size = 250, percentage }) => {
  const strokeWidth = 26;
  const x1 = 0;
  const x2 = size;
  const y1 = 0;
  const y2 = 0;
  const circumference = x1 + x2 + y1 + y2;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);

  const animation = (toValue) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener(
      (value) => {
        const strokeDashoffset =
          circumference - (circumference * value.value) / 100;

        if (progressRef?.current) {
          progressRef.current.setNativeProps({
            strokeDashoffset,
          });
        }
      },
      [percentage]
    );

    return () => {
      progressAnimation.removeAllListeners();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Svg width={size} height={13}>
        <Line
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={defaultStyles.colors.silver}
          strokeWidth={strokeWidth}
        />
        <Line
          ref={progressRef}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={defaultStyles.colors.success}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProgressBar;

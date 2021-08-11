import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";

import AppActivityIndicator from "../components/AppActivityIndicator";
import Screen from "../components/Screen";

import CategoryList from "../components/CategoryList";
import { loadLevels } from "../store/levels";
import { loadGeneralInfo } from "../store/generalInfo";

const LandingScreen = () => {
  const dispatch = useDispatch();

  const { levels, loading, errorMessage } = useSelector(
    (state) => state.entities.levels
  );

  useFocusEffect(
    useCallback(() => {
      dispatch(loadLevels());
      dispatch(loadGeneralInfo());
    }, [])
  );

  return (
    <Screen>
      <AppActivityIndicator visible={loading} />
      <View style={styles.container}>
        <CategoryList progressData={levels} title='Seviyeler' />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
});

export default LandingScreen;

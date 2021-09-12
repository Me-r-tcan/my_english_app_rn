import React, { useCallback } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";

import AppActivityIndicator from "../components/AppActivityIndicator";
import SubjectOptionCircle from "../components/circles/SubjectOptionCircle";

import { loadSubjectOptions } from "../store/subjectOptions";

const SubjectDetailScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const { subjectOptions, loading } = useSelector(
    (state) => state.entities.subjectOptions
  );

  const { subjectId } = route.params;

  useFocusEffect(
    useCallback(() => {
      dispatch(loadSubjectOptions(subjectId));
    }, [])
  );

  return (
    <>
      {loading ? (
        <AppActivityIndicator visible={loading} />
      ) : (
        <View style={styles.container}>
          <FlatList
            columnWrapperStyle={styles.columnWrapperStyle}
            data={subjectOptions}
            keyExtractor={(subjectOption) => subjectOption._id.toString()}
            numColumns={2}
            renderItem={({ item }) => {
              return (
                <SubjectOptionCircle
                  percent={item.progress ? item.progress : 0}
                  icon={item.icon}
                  iconLib={item.iconLib}
                  style={styles.subjectOption}
                  onPress={() =>
                    navigation.navigate(item.educationType, {
                      subjectId: subjectId,
                      subjectOptionId: item._id,
                      progress: item.progress ? item.progress : 0,
                    })
                  }
                >
                  {item.name}
                </SubjectOptionCircle>
              );
            }}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  columnWrapperStyle: {
    justifyContent: "space-around",
    marginTop: 40,
  },
});

export default SubjectDetailScreen;

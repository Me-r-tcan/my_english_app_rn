import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import AppActivityIndicator from "../components/AppActivityIndicator";
import ScrollList from "../components/lists/ScrollList";
import { loadSubjects } from "../store/subjects";

const SubjectListScreen = ({ route }) => {
  const dispatch = useDispatch();

  const { subjects, loading } = useSelector((state) => state.entities.subjects);

  useEffect(() => {
    dispatch(loadSubjects(route.params.level));
  }, []);

  return (
    <>
      <AppActivityIndicator visible={loading} />
      <View style={styles.container}>
        <ScrollList
          distanceBetweenItem={6}
          data={subjects}
          keyExtractor={(item) => item._id}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default SubjectListScreen;

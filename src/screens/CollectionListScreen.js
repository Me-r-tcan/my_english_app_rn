import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import AppActivityIndicator from "../components/AppActivityIndicator";
import SearchBar from "../components/SearchBar";
import Screen from "../components/Screen";
import ScrollList from "../components/lists/ScrollList";
import ScrollItemWordCard from "../components/lists/ScrollItemWordCard";

import { loadMyWordList } from "../store/myWordLists";

const CollectionListScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMyWordList());
  }, []);

  const { myWordList, loading } = useSelector(
    (state) => state.entities.myWordLists
  );

  return (
    <Screen>
      <AppActivityIndicator visible={loading} />

      <SearchBar />

      <View style={styles.container}>
        {myWordList && (
          <ScrollList
            distanceBetweenItem={6}
            data={myWordList.wordIds}
            ScrollItemCardComponent={ScrollItemWordCard}
            keyExtractor={(item) => item._id}
          />
        )}
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: "20%",
  },
});

export default CollectionListScreen;

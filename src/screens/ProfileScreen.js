import React, { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import AppActivityIndicator from "../components/AppActivityIndicator";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import { authDeleted } from "../store/auth";
import { userProfile } from "../store/users";

const ProfileScreen = () => {
  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.entities.users);

  const handleLogout = () => {
    dispatch(authDeleted());
  };

  useEffect(() => {
    dispatch(userProfile());
  }, []);

  return (
    <>
      <AppActivityIndicator visible={loading} />

      <Screen>
        <Text>ProfileScreen</Text>

        {user ? (
          <>
            <Text>isim:{user.username}</Text>
            <Text>mail:{user.email}</Text>
          </>
        ) : null}

        <AppButton title='Çıkış yap' onPress={handleLogout} />
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({});

export default ProfileScreen;

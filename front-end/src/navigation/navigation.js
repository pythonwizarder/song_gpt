import * as React from "react";
import { Platform } from "react-native";
import * as Linking from "expo-linking";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// internal
import { appRoutesConfig } from "./route.config";
import { SongListScreen } from "../screens/song-list.screen";
import { SongCreateScreen } from "../screens/song-create.screen";
import { SongDetailScreen } from "../screens/song-detail.screen";

const Stack = createStackNavigator();

export const Navigation = () => (
  <NavigationContainer
    documentTitle={{
      enabled: false,
    }}
    linking={
      Platform.OS === "web"
        ? {
            enabled: true,
            config: appRoutesConfig,
            prefixes: [Linking.createURL("/"), "https://songGPT.xyz/"],
          }
        : undefined
    }
  >
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SongCreate" component={SongCreateScreen} />
      <Stack.Screen name="SongDetail" component={SongDetailScreen} />
      <Stack.Screen name="SongList" component={SongListScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

import { Link, Stack, useGlobalSearchParams } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

export default function Page() {
  const params = useGlobalSearchParams();

  return (
    <>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          title: "Dados",
        }}
      />

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Tela 2</Text>
        <Text>{params.id}</Text>
        <Link href="/">Link</Link>
      </View>
    </>
  );
}

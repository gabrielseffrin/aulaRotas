import { Link, Stack, useGlobalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

export default function Page() {

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
          title: "Sem Dados",
        }}
      />

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela 2</Text>
      <Text>Sem parâmetros para exibir</Text>
      <Link href="/">Link</Link>
    </View>
    </>
  );
};
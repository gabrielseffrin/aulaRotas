import { Stack, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, Button} from 'react-native';

export default function Page() {
  const [text, setText] = useState('');
  const router = useRouter();

  const handlePress = () => {
    router.push(`/Tela2/${text}`); // Navegar para outra tela
  };

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
        title: "Home",
      }}
    />


    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginBottom: 20 }}>Index</Text> {/* Adicionando margem na parte inferior do texto */}
      
      <TextInput
        style={{ marginBottom: 20 }}
        onChangeText={setText}
        value={text}
        placeholder='Coloque o Texto'
      />
      
      <Button title="Ir para Outra Tela" onPress={handlePress} />
    </View></>
  );
};

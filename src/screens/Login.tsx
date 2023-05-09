import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import TextField from '../components/base/inputs/TextField';
import Button from '../components/base/buttons/Button';
import SocialMediaButton from '../components/base/buttons/SocialMediaButton';
import PasswordField from '../components/base/inputs/PasswordField';
import { useAuth } from '../contexts/Auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  return (
    <SafeAreaView className="flex flex-1 p-4 justify-center">
      <View className="flex justify-center items-center mb-6">
        <Image source={require('../../assets/images/Logo.png')} />
      </View>

      <Text className="text-4xl text-dark text bold mb-3">Login</Text>
      <TextField
        label="E-mail"
        placeholder="adotapets@adota.com"
        type="email-address"
        onChangeText={setEmail}
        value={email}
      />
      <PasswordField
        label="Senha"
        value={password}
        onChangeText={setPassword}
      />

      <View className="flex items-center justify-center my-2">
        <Button
          label="Entrar"
          onPress={() => signIn({ email: email, password: password })}
        />
        <Text className="text-center my-3">ou</Text>
        <SocialMediaButton />
      </View>

      <View className="flex flex-row justify-center items-center gap-1 mt-10">
        <Text className="text-gray-500 text-xs">Não possui conta?</Text>
        <Text className="underline text-blue-400">Cadastrar</Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;

import React from 'react';
import { Image, Text, View } from 'react-native';

const PetNotFound = () => {
  return (
    <View className="flex flex-col justify-center items-center">
      <Image
        source={require('../../../assets/images/not-found.png')}
        className="w-60 h-60"
      />
      <View className="w-72 ">
        <Text className="text-center text-xl">
          Desculpe, tivemos um problema ao buscar dados deste pet.
        </Text>
        <Text className="text-center text-gray-500">
          Tente novamente, se o problema persistir entre em contato com nosso
          suporte
        </Text>
      </View>
    </View>
  );
};

export default PetNotFound;

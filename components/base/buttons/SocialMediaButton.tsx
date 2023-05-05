import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

const SocialMediaButton = () => {
  return (
    <TouchableOpacity
      className="
        py-2
        px-20
        rounded-lg 
        flex items-center justify-between
        flex-row
        w-full
        border border-primary
      "
    >
      <Image
        source={require('../../../assets/images/g-logo.png')}
        resizeMode="center"
        className="w-9 h-6"
      />
      <Text className="text-sm text-dark">Entrar com o Google</Text>
    </TouchableOpacity>
  );
};

export default SocialMediaButton;

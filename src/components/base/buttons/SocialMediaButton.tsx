import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

const SocialMediaButton = () => {
  return (
    <TouchableOpacity
      className="
        p-2
        rounded-lg 
        flex items-center justify-center
        flex-row
        w-3/4
        border border-primary
      "
    >
      <Image
        source={require('../../../assets/images/g-logo.png')}
        resizeMode="center"
        className="w-9 h-6 mr-2"
      />
      <Text className="text-sm text-dark">Entrar com o Google</Text>
    </TouchableOpacity>
  );
};

export default SocialMediaButton;

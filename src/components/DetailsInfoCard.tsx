import React from 'react';
import { Image, Text, View } from 'react-native';

type DetailsInfoCardProps = {
  title: string;
  subtitle: string;
  color: 'green' | 'blue' | 'orange' | 'purple';
};

const DetailsInfoCard = ({ title, subtitle, color }: DetailsInfoCardProps) => {
  const getImage = () => {
    if (color === 'green') {
      return require('../assets/images/background-card-details-green.png');
    } else if (color === 'blue') {
      return require('../assets/images/background-card-details-blue.png');
    } else if (color === 'orange') {
      return require('../assets/images/background-card-details-orange.png');
    } else if (color === 'purple') {
      return require('../assets/images/background-card-details-purple.png');
    }
  };

  const image = getImage();

  return (
    <View className="flex flex-row items-center justify-center my-3 mx-1">
      <Image
        source={image}
        resizeMode="cover"
        className="w-20 h-16 opacity-60 rounded-2xl relative"
      />
      <View className="absolute items-center max-w-min">
        <Text className="text-dark font-bold capitalize">{title}</Text>
        <Text className="text-gray-400 font-semibold capitalize">
          {subtitle}
        </Text>
      </View>
    </View>
  );
};

export default DetailsInfoCard;

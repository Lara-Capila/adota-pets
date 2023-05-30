import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

type CardProps = {
  id: string;
  title: string;
  species: string;
  age: number;
  breed: string;
  color: string;
  imageUrl: string;
};

const Card = ({
  title,
  age,
  breed,
  color,
  species,
  imageUrl,
  id,
}: CardProps) => {
  const navigation = useNavigation();
  const formatAge = age > 1 ? `${age} anos` : `${age} ano`;

  return (
    <TouchableOpacity
      className="flex flex-row items-center rounded-md bg-gray-100 shadow-sm p-2 mt-2"
      onPress={() =>
        navigation.navigate('Detalhes', {
          id: id,
        })
      }
    >
      <Image
        source={{
          uri: `${imageUrl}`,
        }}
        resizeMode="cover"
        className="w-16 h-16 rounded-full mr-2"
      />

      <View>
        <Text className="font-semibold text-base capitalize">{title}</Text>
        <Text
          className="text-gray-500 text-sm truncate"
          numberOfLines={1}
          ellipsizeMode="tail"
        >{`${species} | ${breed} | ${formatAge} | ${color}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

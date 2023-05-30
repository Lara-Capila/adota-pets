import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { DetailsParamsProps } from '../@types/params';
import { Pet } from '../@types/pet';
import { getPet } from '../utils/pet';
import PetNotFound from '../components/base/NotFound/PetNotFound';
import DetailsInfoCard from '../components/DetailsInfoCard';
import { HeartIcon, MapPinIcon } from 'react-native-heroicons/solid';
import theme from '../constants/default-colors.json';
import { ScrollView } from 'react-native';
import { classNames } from '../constants/classNames';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFavorites } from '../contexts/Favorites';

const formatSpecie = (specie: string) => {
  if (specie === 'Cachorro') {
    return (
      <Image source={require('../assets/images/dog.png')} className="w-5 h-5" />
    );
  }

  return (
    <Image source={require('../assets/images/cat.png')} className="w-5 h-5" />
  );
};

const Details = () => {
  const [petData, setPetData] = useState<Pet>();
  const route = useRoute();
  const { getFavorites, addFavorite, favorites, setFavorites } = useFavorites();

  const isFavorite = petData && favorites.includes(petData.id.toString());

  const { id } = route.params as DetailsParamsProps;
  console.log(id, petData, 'details');

  useEffect(() => {
    fetch(`/api/pet/${id}`)
      .then((response) => response.json())
      .then((pet) => setPetData(pet.pet));
  }, []);

  return (
    <>
      {petData && (
        <View className="p-4 flex-1">
          <View className="flex flex-col items-center">
            <Image
              source={{
                uri: `${petData.imageUrl}`,
              }}
              resizeMode="cover"
              className="w-40 h-40 rounded-md"
            />
          </View>

          <View className="w-full flex flex-row justify-between items-center">
            <View className="flex flex-row items-center gap-2">
              <Text className="text-3xl">{petData.name}</Text>
              {formatSpecie(petData.species)}
            </View>
            <Pressable
              className="p-1 rounded-md"
              onPress={() => addFavorite(petData.id.toString())}
            >
              <HeartIcon
                width={20}
                height={20}
                stroke={classNames(
                  !isFavorite
                    ? `${theme.colors.primary}`
                    : `${theme.colors.red[500]}`
                )}
                fill={classNames(
                  isFavorite ? `${theme.colors.red[500]}` : 'transparent'
                )}
              />
            </Pressable>
          </View>

          <View className="flex flex-row items-center gap-1">
            <MapPinIcon width={15} height={15} stroke={theme.colors.primary} />
            <Text className="text-gray-400">{petData.location}</Text>
          </View>

          <View className="flex flex-row justify-center">
            <DetailsInfoCard
              title={petData.sex}
              subtitle="Sexo"
              color="green"
            />
            <DetailsInfoCard
              title={
                petData.age > 1 ? `${petData.age} anos` : `${petData.age} ano`
              }
              subtitle="Idade"
              color="orange"
            />
            <DetailsInfoCard
              title={petData.size}
              subtitle="Porte"
              color="blue"
            />
          </View>

          <View className="flex-1">
            <ScrollView fadingEdgeLength={50}>
              <Text className="text-sm font-normal text-gray-500 text-justify">
                {petData.animalConditions}
              </Text>
            </ScrollView>
          </View>
        </View>
      )}

      {!petData && <PetNotFound />}
    </>
  );
};

export default Details;

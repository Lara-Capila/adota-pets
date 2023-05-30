import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import theme from '../constants/default-colors.json';
import SearchField from '../components/base/inputs/SearchField';
import { FunnelIcon } from 'react-native-heroicons/solid';
import Card from '../components/base/Card';
import { petsService } from '../services/storage/pets';
import { Pet } from '../@types/pet';
import PetNotFound from '../components/base/NotFound/PetNotFound';

const Home = () => {
  const [allPets, setAllPets] = useState<Pet[]>([]);

  useEffect(() => {
    fetch('/api/pets')
      .then((response) => response.json())
      .then((pets) => setAllPets(pets.pets));
  }, []);

  console.log(allPets);

  return (
    <View className="flex flex-1 bg-gray-50 p-3">
      {allPets && (
        <>
          <View className="flex flex-row items-center justify-between mb-2">
            <Text className="text-3xl">Adoção</Text>
            <FunnelIcon width={20} height={20} stroke={theme.colors.dark} />
          </View>

          <View className="flex-1">
            <FlatList
              data={allPets}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <Card
                  key={item.id.toString()}
                  id={item.id.toString()}
                  title={item.name}
                  age={item.age}
                  breed={item.breed}
                  color={item.color}
                  species={item.species}
                  imageUrl={item.imageUrl}
                />
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </>
      )}

      {!allPets && <PetNotFound />}
    </View>
  );
};

export default Home;

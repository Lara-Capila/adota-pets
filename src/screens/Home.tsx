import React from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import theme from '../constants/default-colors.json';
import SearchField from '../components/base/inputs/SearchField';
import { FunnelIcon } from 'react-native-heroicons/solid';
import Card from '../components/base/Card';
import pets from '../services/pets.json';

const Home = () => {
  return (
    <View className="flex flex-1 bg-gray-50 p-3">
      <View className="flex flex-row items-center justify-between">
        <Text className="text-3xl">Adoção</Text>
        <FunnelIcon width={20} height={20} stroke={theme.colors.dark} />
      </View>

      <View className="flex-1">
        <FlatList
          data={pets}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <Card
              key={index}
              title={item.name}
              age={item.age}
              breed={item.breed}
              color={item.color}
              species={item.species}
              imageUrl={item.imageUrl}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Home;

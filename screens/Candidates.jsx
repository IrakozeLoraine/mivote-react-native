import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import ListItem from '../components/ListItem';

export default function Candidates() {
  const candidates = [
    {
      title: 'John Doe',
      image: require('../assets/img/person1.png'),
      description: 'Marketing director at MiVote',
    },
    {
      title: 'Jane Doe',
      image: require('../assets/img/person2.jpg'),
      description: 'Vice-Chief of Finance Department',
    },
    {
      title: 'John Doe',
      image: require('../assets/img/person1.png'),
      description: 'Marketing director at MiVote',
    },
    {
      title: 'Jane Doe',
      image: require('../assets/img/person2.jpg'),
      description: 'Vice-Chief of Finance Department',
    },
    {
      title: 'John Doe',
      image: require('../assets/img/person1.png'),
      description: 'Marketing director at MiVote',
    },
    {
      title: 'Jane Doe',
      image: require('../assets/img/person2.jpg'),
      description: 'Vice-Chief of Finance Department',
    },
  ];

  const renderItem = ({ item, index }) => (
    <ListItem key={`candidate#${index}`} items={item} />
  );

  return (
    <SafeAreaView>
      <FlatList data={candidates} renderItem={renderItem} />
    </SafeAreaView>
  );
}

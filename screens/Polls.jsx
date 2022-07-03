import React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { ScrollView } from 'react-native-web';
import ListItem from '../components/ListItem';

export default function Polls() {
  const polls = [
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

  const renderItem = ({ item }) => (
    <ListItem key={`news#${index}`} items={item} />
  );

  return (
    <SafeAreaView>
      <FlatList data={polls} renderItem={renderItem} />
    </SafeAreaView>
    // <ScrollView>
    //   {polls.map((poll, index) => (
    //     <ListItem key={`news#${index}`} items={poll} />
    //   ))}
    // </ScrollView>
  );
}

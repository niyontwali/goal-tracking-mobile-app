import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ListItem from './components/ListItem';
import Header from './components/Header';
import AddGoal from './components/AddIGoal';

const App = () => {
  const [items, setItems] = useState([
    {id: 1, text: 'Study React'},
    {id: 2, text: 'Study Python'},
    {id: 3, text: 'Study Javascript'},
    {id: 4, text: 'Study React Native'},
  ]);

  const handleDelete = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };
  const addGoal = text => {
    setItems(prevItems => {
      return [...prevItems, {id: 5, text}];
    });
  };
  return (
    <View style={styles.container}>
      <Header />
      <AddGoal addGoal={addGoal} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem handleDelete={handleDelete} item={item} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;

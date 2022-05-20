import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'My Goals',
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 10,
    backgroundColor: '#075985',
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Header;

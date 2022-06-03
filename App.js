import React from 'react';
import { Text, View, FlatList } from 'react-native';

const data = new Array(100).fill(null).map((v, i) => ({key: i.toString(), value: `Item ${i}`}));

function Item(props) {
  return(
    <Text style={styles.item}>{props.value}</Text>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data = {data}
        renderItem={(item) => <Item value={item.value}/>}
      />
    </View>
  );
}
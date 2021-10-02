import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import ModalPopup from '../components/ModalPopup';

const Home: React.FC = () => {
  const [visible, setVisible] = React.useState(false);

  function handleOpenModal() {
    setVisible(true);
  }

  return (
    <View style={styles.container}>
      <ModalPopup visible={visible} close={() => setVisible(false)}>
        <Text>Modal</Text>
      </ModalPopup>
      <Button title="Open Modal" onPress={handleOpenModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;

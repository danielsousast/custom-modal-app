import React from 'react';
import {
  Image,
  Modal,
  ModalProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

interface ComponentProps extends ModalProps {
  close: () => void;
}

const ModalPopup: React.FC<ComponentProps> = ({visible, close}) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [scaleValue, visible]);

  return (
    <Modal transparent visible={showModal} onRequestClose={close}>
      <View style={styles.background}>
        <Animated.View
          style={[styles.container, {transform: [{scale: scaleValue}]}]}>
          <View style={styles.header}>
            <TouchableOpacity onPress={close}>
              <Icon name="close" size={30} />
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            <Image
              source={require('../assets/success.png')}
              style={styles.image}
            />
            <Text style={styles.message}>
              Congratulations registration wa successfully
            </Text>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    width: '80%',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  content: {
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 150,
    marginBottom: 20,
  },
  message: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default ModalPopup;

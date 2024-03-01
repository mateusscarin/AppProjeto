import { Button, Image, StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./../assets/logo.png')}
      />
      <Button color="#7788FF"
        title="Iniciar"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#778899',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 100,
    padding: 30
  },
  logo: {
    width: 120,
    height: 120,
    paddingTop: 10,
    paddingLeft: 20
  }
});
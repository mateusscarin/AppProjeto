import { Image, StyleSheet, View } from 'react-native';
import { Card, Text, TextInput } from 'react-native-paper';

export default function Login() {
    //tipo recebe padrão logado
    return (
  <View style={styles.container}>
  <Image style={styles.logo} source={require('./../assets/favicon_symptoscan_concept.png')} />
  <Card style={styles.card}>
  <Card.Title title="" subtitle="" />
  <Card.Content style={styles.cardContent}>
  <Text variant="bodyMedium"></Text>
  <TextInput
              style={styles.label}
              mode="outlined"
              label="Email"
              outlineColor="#ff0000"
              activeOutlineColor="#ff0000"
              //onChangeText={(text) => setEmail(text)}
              //value={email}
            />
  <TextInput
              style={styles.label}
              mode="outlined"
              label="Senha"
              secureTextEntry
              //onChangeText={(text) => setPassword(text)}
              //value={password}
              outlineColor="#ff0000"
              activeOutlineColor="#ff0000"
            />
  </Card.Content>
  </Card>
  </View>
    );
  }
   
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      textAlign: 'center',
    },
    logo: {
      width: 200,
      height: 250,
      justifyContent: 'center',
      alignSelf: 'center',
      marginTop: 50,
    },
    label: {
      marginBottom: 10,
      color: 'red',
    },
    loginText:{
      color: '#FFF',
      fontSize: 24,
    },
    card:{
        
        marginHorizontal: 20
    }
  });
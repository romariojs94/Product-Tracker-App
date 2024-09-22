import { View, Text, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function Root() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Link href="/scanner" style={{
        color: 'blue',
        marginTop: 20,
        textDecorationLine: 'underline',

}}>Ir para a página de camera</Link>
    </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},
});
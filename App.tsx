import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FloatingActionButton from './components/floating-action-button';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    /* SafeAreaView: Asegura que el contenido no se superponga
    con las áreas no utilizables de la pantalla (notch, barra de estado, etc.) */

    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.textHuge}>{count}</Text>

        <FloatingActionButton
          label='Resetar'
          position='left'
          onPress={() => setCount(0)}
          onLongPress={() => setCount(0)}
        />

        <FloatingActionButton
          label='+1'
          onPress={() => setCount(count + 1)}
          onLongPress={() => setCount(0)}
        />

        <StatusBar style='auto' />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textHuge: {
    fontSize: 64,
    fontWeight: 'thin',
  },
});

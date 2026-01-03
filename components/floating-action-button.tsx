// Shortcut (rnf + tab)

import { Pressable, StyleSheet, Text } from 'react-native';

type Props = {
  label: string;
  position?: 'left' | 'right';
  onPress?: () => void;
  onLongPress?: () => void;
};

{
  /* Tipos de Botones:
  Pressable (Recomendado) y TouchableOpacity */
}

export default function FloatingActionButton({
  label,
  position = 'right',
  onPress,
  onLongPress,
}: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.floatingButton,
        position === 'right' ? styles.positionRight : styles.positionLeft,
        pressed ? { opacity: 0.8 } : { opacity: 1 },
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text
        style={{
          color: '#fff',
          fontSize: 20,
          textAlign: 'center',
          textAlignVertical: 'center',
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    width: 'auto',
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#65558f',
    padding: 20,
    borderRadius: 24,
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 4 }, // Sombra para iOS
    shadowOpacity: 0.3, // Sombra para iOS
    elevation: 3, // Sombra para Android
    shadowRadius: 4,
  },
  positionRight: {
    right: 20,
  },
  positionLeft: {
    left: 20,
  },
});

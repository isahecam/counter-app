# My First App with Expo 🥳

Esta es mi primera app hecha con Expo </>

## Highlights

- Instalación de dependencias con `npm install` o con cualquier otro gestor de paquetes.
- Para correr el proyecto, usar el comando `npx expo start`
- Para renderizar un texto en pantalla, usar el componente `<Text>`
- Para crear vistas, usar el componente `<View>`
- Puedo establecer estilos, usando `StyleSheet.create({})`, dentro del objeto, se pueden definir estilos como tipo "clases" que relativamente son objetos que contienen propiedades de CSS.

```js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
```

- Existen varios componentes nativos que puedo usar, en cuestión de botones como `<Pressable>` y/o `<TouchableOpacity>`, el más recomendable a utilizar es `<Pressable>`, ya que es más versátil y moderno.
- Puedo manejar eventos de interacción con los componentes, por ejemplo, el evento `onPress` en un `<Pressable>`, que se activa cuando el usuario presiona el botón.

```js
<Pressable onPress={() => console.log("Botón presionado!")}>
  <Text>Presióname</Text>
</Pressable>
```

- Puedo usar hooks de React, como `useState` para manejar el estado dentro de mis componentes funcionales.

- Puedo integrar paquetes propios de Expo o de terceros para agregar funcionalidades adicionales a mi aplicación. Uno de utilidad es <SafeAreaView> para asegurar que el contenido no se superponga con las áreas seguras del dispositivo (como la muesca o la barra de estado).

```bash
npx install react-native-safe-area-context
```

```js
import { SafeAreaView } from "react-native-safe-area-context";
```

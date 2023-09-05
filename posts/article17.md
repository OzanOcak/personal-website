---
title: "Hello React Navigator"
date: "2023-06-07"
author: "ozan ocak"
tags: ["React Native", "React Navigator"]
subtitle: "Implementing React Navigator in to React Native app ...."
---

We need toadd required packages into our react native app

```console
yarn add @react-navigation/native
yarn add react-native-screens react-native-safe-area-context
```

- android/app/src/main/java/<your package name>/MainActivity.java.

```java

class MainActivity extends ReactActivity {
// ...
@Override
protected void onCreate(Bundle savedInstanceState) {
super.onCreate(null);
}
// ...
}
```

and make sure to add the following import statement at the top of this file below your package statement:

import android.os.Bundle;

- then finaly we need dependency injection by wrapping whole app

```
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  );
}
```

-we need to remove SafeAreaView

yarn add @react-navigation/native

```javascript
// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```

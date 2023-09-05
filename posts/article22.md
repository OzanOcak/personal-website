---
title: "Text to Speech with Expo-speech"
date: "2023-08-13"
author: "ozan ocak"
tags: ["JavaScript", "Expo", "React Native"]
subtitle: "Adding voice  with Expo-speech..."
---

We first need to install expo-speech npm package

```console
npx expo install expo-speech
```

Text to Speech is in react package fairly easy all we need is calling speech object and passing text into the function

```javascript
import * as Speech from "expo-speech";

        Speech.speak("bonjour, l'application fonctionne", {
          language: "fr-FR",
```

Note that we can use other languages such as american english with "en-US" code. You can find [source code](https://github.com/OzanOcak/rn-voiceandspeech/blob/main/TextToVoiceButton.js) in my github.

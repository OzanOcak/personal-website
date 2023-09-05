---
title: "Speech to Text with React Native voice"
date: "2023-08-13"
author: "ozan ocak"
tags: ["JavaScript", "Expo", "React Native"]
subtitle: "Adding voice to text with @react-native-voice/voice..."
---

Firstly we need install two npm packages,

```console
npm i @react-native-voice/voice expo-dev-client
```

expo-dev-client helps to automade and link the code files,plugins to project
then write below in app.json

```json
"plugins": [
[
"@react-native-voice/voice",
{
"microphonePermission": "Allow Voice to Text Tutorial to access the microphone",
"speechRecognitionPermission": "Allow Voice to Text Tutorial to securely recognize user speech"
}]]
```

Now we need to sign in eas to create apk for simulating the application in local environment

```console
eas login
eas build:configure
```

this will create eas.json
And to simulate ios device in eas.json

```json
"build": {"development":{"ios":{"smilutor":"true"}}
```

```console
eas build -p android --profile development --local
expo start --dev-client
```

All packages are not updated for expo 49, so in order to ignore notifications

```javascript
import { LogBox } from "react-native";
LogBox.ignoreLogs(["new NativeEventEmitter"]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
```

Lastly very important thing is while being logged in eas, pushing code into github will take ages since there are unseen eas megabytes of code. we need to log out eas before pushing github. You can find [source code](https://github.com/OzanOcak/rn-voiceandspeech/blob/main/VoiceButton.js) in my github.

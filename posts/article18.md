---
title: "How to build export React Native App with Expo"
date: "2023-07-15"
author: "ozan ocak"
tags: ["React Native", "Expo", "eas"]
subtitle: "Building compiling for development and production ...."
---

The esiest way to compile react native app in local environment and watch the changes in emulator we need

```console
npm start -c
```

However this doesnt work if we integrate ads.
In this case building mobile app via eas is the best case. We need first set up eas then login expo.

```console
npm i -g eas
eas login
```

finally we can build apk for emulator with

```console
eas build -p android --profile development --local
```

Apk file will be build within project folder, we need click to reveal folder then drag/drop the file into emulator

once we run the command , the app with integrated ads will start in the emulator

```console
expo start --dev-client
```

However we need to publish 7 and 10 inch screenshots and try the app with many different emulators. In order to do this,
we need to create devices within android studio then drag/drop apk file created with "--local flag" then

```console
expo start --dev-client
```

will let us tes our app many differet devices. Everytime we want to change the device, all we need is closing and openning android studio to pick new device.

This allow us to have screenshots of different devices.
Finally we need aab file to publish app to Google Play

```console
eas build
```

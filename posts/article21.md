---
title: "Sound Effect with Expo-av"
date: "2023-08-13"
author: "ozan ocak"
tags: ["JavaScript", "Expo", "React Native"]
subtitle: "Adding sound effect with Expo-av..."
---

To be able use Expo-av npm module, we need to have expo 49. First we need to install expo-av package

```console
npx expo install expo-av
```

After creating Audio object,we directly create sound from sound asset file, then play sound

```javascript
import { Audio } from "expo-av";

  const [sound, setSound] = React.useState();

  async function trueSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require(`./assets/right2.mp3`)
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();

```

Eventually we need to delete the sound from memomory, we wait until the sound is allocated to closure (useState) then useEffect will initiated since state transited from null to assigned value, and it will be deleted.

```javascript
React.useEffect(() => {
  return sound
    ? () => {
        console.log("Unloading Sound");
        sound.unloadAsync();
      }
    : undefined;
}, [sound]);
```

Note that we use async await in order to make sure the files loaded so we let the thread hold on (await).
Finally we can code ui as below, you can find [source code](https://github.com/OzanOcak/rn-voiceandspeech/blob/main/SoundButton.js) in github.

```html
<button title="Play Sound" onPress="{true" ? trueSound : falseSound} />
```

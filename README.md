This is the custom collabsible view for making the custom FAQ section or dropdown menu in your react native project. it supports both android and ios operating systems.

# Installation
1. Run: `$ npm install --save react-native-collabsible-view`

2. Run: `$ npm install --save react-native-vector-icons`

3. [`Click here`](https://www.npmjs.com/package/react-native-vector-icons?activeTab=readme) Follow the all steps to use `react-native-vector-icons` package OR follow below steps.

## Android

#### Option: With Gradle (recommended)

This method has the advantage of fonts being copied from this module at build time so that the fonts and JS are always in sync, making upgrades painless.

1. Edit `android/app/build.gradle` ( NOT `android/build.gradle` ) and add the following:

```gradle
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

2. Edit `android/settings.gradle` to look like this (without the +):

  ```diff
  rootProject.name = 'MyApp'

  include ':app'

  + include ':react-native-vector-icons'
  + project(':react-native-vector-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vector-icons/android')
  ```

3. Edit `android/app/build.gradle` (note: **app** folder) to look like this:

  ```diff
  apply plugin: 'com.android.application'

  android {
    ...
  }

  dependencies {
    implementation fileTree(dir: "libs", include: ["*.jar"])
    //noinspection GradleDynamicVersion
    implementation "com.facebook.react:react-native:+"  // From node_modules

  + implementation project(':react-native-vector-icons')
  }
  ```

- Note: this is `optional step`, it's necessary only and only if your **react-native app doesn't support auto-linking** otherwise you can ignore this.
 
 [`Click here`](https://www.npmjs.com/package/react-native-vector-icons?activeTab=readme) to read the documentation.
 

## iOS

If you want to use any of the bundled icons, you need to add the icon fonts to your Xcode project. Just follow these steps:

[`Click here `](https://www.npmjs.com/package/react-native-vector-icons?activeTab=readme#ios) to read documentation.

<br>

_Note: you need to recompile your project after adding new fonts._
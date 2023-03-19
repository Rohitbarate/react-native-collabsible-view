This is the custom collabsible view for making the custom FAQ section or dropdown menu in your react native project. it supports both android and ios operating systems.

## Table of Contents

- [Bundled Icon Sets](#bundled-icon-sets)
- [Installation](#installation)
  - [iOS](#ios)
  - [Android](#android)

# Installation
1. Run: `$ npm install --save react-native-collabsible-view`

2. Run: `$ npm install --save react-native-vector-icons`

3. [`Click here`](https://www.npmjs.com/package/react-native-vector-icons?activeTab=readme) Follow the all steps to use this react-native-vector-icons package OR follow below steps.

4. ## iOS

If you want to use any of the bundled icons, you need to add the icon fonts to your Xcode project. Just follow these steps:

[`Click here `](https://www.npmjs.com/package/react-native-vector-icons?activeTab=readme#ios) to read documentation.

<br>

_Note: you need to recompile your project after adding new fonts._

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

- Edit your `MainApplication.java` (deep in `android/app/src/main/java/...`) to look like this (note **two** places to edit):
- Note: this is optional step, it's necessary only and only if your **react-native app doesn't support auto-linking** otherwise you can ignore this.

  ```diff
  package com.myapp;

  + import com.oblador.vectoricons.VectorIconsPackage;

  ....

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
        new MainReactPackage()
  +   , new VectorIconsPackage()
      );
    }

  }
  ```

### macOS via [`react-native-macos`](https://github.com/microsoft/react-native-macos)

- Browse to `node_modules/react-native-vector-icons` and drag the folder `Fonts` to your project in Xcode. **Make sure your app is checked under "Add to targets" and that "Create folder references" is checked**.
- Edit `Info.plist` and add a property called **Application fonts resource path** (or `ATSApplicationFontsPath` if Xcode won't autocomplete/not using Xcode) and type `Fonts` as the value.

_Note: you need to recompile your project after adding new fonts, also ensure that the `Fonts` folder also appear under **Copy Bundle Resources** in **Build Phases**._

### Windows via [`react-native-windows`](https://github.com/microsoft/react-native-windows)

- In the top level projects (/windows/project-name/Assets), copy and paste the font files.
- Open your solution in Visual Studio, right click the Assets folder in your solution, click **Add > Existing Item**.
- Select the fonts that were into /windows/project-name/assets and click **Add**.

_Note: you need to recompile your project after adding new fonts._

### Web (with [webpack](https://webpack.js.org/))

In your webpack configuration file, add a section to handle ttf files using url-loader (or file-loader)

```js
{
  test: /\.ttf$/,
  loader: "url-loader", // or directly file-loader
  include: path.resolve(__dirname, "node_modules/react-native-vector-icons"),
},
```

Then consume those files in your JavaScript entry point to get the bundled url and inject a style tag in your page:

```js
// Use prebuilt version of RNVI in dist folder
import Icon from 'react-native-vector-icons/dist/FontAwesome';

// Generate required css
import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: FontAwesome;
}`;

// Create stylesheet
const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}

// Inject stylesheet
document.head.appendChild(style);
```
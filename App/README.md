# Recommended next steps:
Note: Make sure you have installed native code dependencies [here](https://reactnative.dev/docs/environment-setup#installing-dependencies)

### To preview and run the project on your device:
1. Open project folder in <u>Visual Studio Code</u>
2. Run  `npm install`  in the terminal
3. Run  `npx expo start`  in the terminal
4. Run on For iOS device (only on MacOS)
    1. Press  `i`  to view on iOS simulator or follow the instructions [here](https://docs.expo.dev/workflow/run-on-device/) to run on a physical device.
5. Run on For android device
    1. Press  `a`  to view on Android Virtual Device or follow the instructions [here](https://docs.expo.dev/workflow/run-on-device/) to run on a physical device.

### Error's--

1. Error: EMFILE: too many open files, watch
    at FSEvent.FSWatcher._handle.onchange (node:internal/fs/watchers:207:21)

Fix -- brew install watchman

2. The following packages should be updated for best compatibility with the installed expo version:
  react-native-screens@3.30.1 - expected version: ~3.29.0
Your project may not work correctly until you install the correct versions of the packages.

Fix -- npm install react-native-screens@~3.29.0

3. If you get an error like 'no internet connectivity' when you scan the app in the your ios/android device -

Fix -- Make sure to enable local Network connectivity in -- Setting -> App Name -> Enable Local Network


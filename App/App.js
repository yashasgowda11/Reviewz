const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import HOME from "./screens/HOME";
import LOGO from "./screens/LOGO";
import SEARCH from "./screens/SEARCH";
import DASHBOARD from "./screens/DASHBOARD";
import MYPROFILE from "./screens/MYPROFILE";
import MYLIST from "./screens/MYLIST";
import Onboarding from "./screens/Onboarding";
import SIGNIN from "./screens/SIGNIN";
import SIGNIN1 from "./screens/SIGNIN1";
import FORYOU from "./screens/FORYOU";
import MYREVIEWS from "./screens/MYREVIEWS";
import EACHRATINGREVIEWS from "./screens/EACHRATINGREVIEWS";
import PROFILEFROMREVIEW from "./screens/PROFILEFROMREVIEW";
import CLICKEDREVIEWS from "./screens/CLICKEDREVIEWS";
import CLICKEDMOVIEABOUT from "./screens/CLICKEDMOVIEABOUT";
import CLICKEDMOVIEREVIEWS from "./screens/CLICKEDMOVIEREVIEWS";
import CLICKEDMOVIECAST from "./screens/CLICKEDMOVIECAST";
import REVIEW from "./screens/REVIEW";
import SUBMITTEDREVIEW from "./screens/SUBMITTEDREVIEW";
import OVERALLRATING from "./screens/OVERALLRATING";
import VIEWERRATING from "./screens/VIEWERRATING";
import CRITICRATING from "./screens/CRITICRATING";
import SIGNUP from "./screens/SIGNUP";
import CLICKEDMOVIEMYLISTCLICKED from "./screens/CLICKEDMOVIEMYLISTCLICKED";
import VIEWERSRATING from "./screens/VIEWERSRATING";
import DASHBOARD1 from "./screens/DASHBOARD1";
import Onboarding1 from "./screens/Onboarding1";
import Onboarding2 from "./screens/Onboarding2";
import Onboarding3 from "./screens/Onboarding3";
import CRITICRATINGS from "./screens/CRITICRATINGS";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Roboto-Thin": require("./assets/fonts/Roboto-Thin.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-LightItalic": require("./assets/fonts/Roboto-LightItalic.ttf"),
    "Roboto-BoldItalic": require("./assets/fonts/Roboto-BoldItalic.ttf"),
    "DMSans-Bold": require("./assets/fonts/DMSans-Bold.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
    "OpenSans-Light": require("./assets/fonts/OpenSans-Light.ttf"),
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "Jost-Regular": require("./assets/fonts/Jost-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="HOME"
              component={HOME}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LOGO"
              component={LOGO}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SEARCH"
              component={SEARCH}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DASHBOARD"
              component={DASHBOARD}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MYPROFILE"
              component={MYPROFILE}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MYLIST"
              component={MYLIST}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SIGNIN"
              component={SIGNIN}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SIGNIN1"
              component={SIGNIN1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FORYOU"
              component={FORYOU}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MYREVIEWS"
              component={MYREVIEWS}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EACHRATINGREVIEWS"
              component={EACHRATINGREVIEWS}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PROFILEFROMREVIEW"
              component={PROFILEFROMREVIEW}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CLICKEDREVIEWS"
              component={CLICKEDREVIEWS}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CLICKEDMOVIEABOUT"
              component={CLICKEDMOVIEABOUT}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CLICKEDMOVIEREVIEWS"
              component={CLICKEDMOVIEREVIEWS}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CLICKEDMOVIECAST"
              component={CLICKEDMOVIECAST}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="REVIEW"
              component={REVIEW}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SUBMITTEDREVIEW"
              component={SUBMITTEDREVIEW}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OVERALLRATING"
              component={OVERALLRATING}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VIEWERRATING"
              component={VIEWERRATING}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CRITICRATING"
              component={CRITICRATING}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SIGNUP"
              component={SIGNUP}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CLICKEDMOVIEMYLISTCLICKED"
              component={CLICKEDMOVIEMYLISTCLICKED}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VIEWERSRATING"
              component={VIEWERSRATING}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DASHBOARD1"
              component={DASHBOARD1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding1"
              component={Onboarding1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding2"
              component={Onboarding2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding3"
              component={Onboarding3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CRITICRATINGS"
              component={CRITICRATINGS}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;

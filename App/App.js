import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HOME from './screens/HOME';
import LOGO from './screens/LOGO';
import SEARCH from './screens/SEARCH';
import DASHBOARD from './screens/DASHBOARD';
import MYPROFILE from './screens/MYPROFILE';
import MYLIST from './screens/MYLIST';
import Onboarding from './screens/Onboarding';
import SIGNIN from './screens/SIGNIN';
import SIGNIN1 from './screens/SIGNIN1';
import FORYOU from './screens/FORYOU';
import MYREVIEWS from './screens/MYREVIEWS';
import EACHRATINGREVIEWS from './screens/EACHRATINGREVIEWS';
import PROFILEFROMREVIEW from './screens/PROFILEFROMREVIEW';
import CLICKEDREVIEWS from './screens/CLICKEDREVIEWS';
import CLICKEDMOVIEABOUT from './screens/CLICKEDMOVIEABOUT';
import CLICKEDMOVIEREVIEWS from './screens/CLICKEDMOVIEREVIEWS';
import CLICKEDMOVIECAST from './screens/CLICKEDMOVIECAST';
import REVIEW from './screens/REVIEW';
import SUBMITTEDREVIEW from './screens/SUBMITTEDREVIEW';
import OVERALLRATING from './screens/OVERALLRATING';
import VIEWERRATING from './screens/VIEWERRATING';
import CRITICRATING from './screens/CRITICRATING';
import SIGNUP from './screens/SIGNUP';
import CLICKEDMOVIEMYLISTCLICKED from './screens/CLICKEDMOVIEMYLISTCLICKED';
import VIEWERSRATING from './screens/VIEWERSRATING';
import DASHBOARD1 from './screens/DASHBOARD1';
import Onboarding1 from './screens/Onboarding1';
import Onboarding2 from './screens/Onboarding2';
import Onboarding3 from './screens/Onboarding3';
import CRITICRATINGS from './screens/CRITICRATINGS';

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <View style={styles.container}>
      {hideSplashScreen ? (
        <NavigationContainer style={{backgroundColor:"black"}}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HOME" component={HOME} />
            <Stack.Screen name="LOGO" component={LOGO} />
            <Stack.Screen name="SEARCH" component={SEARCH} />
            <Stack.Screen name="DASHBOARD" component={DASHBOARD} />
            <Stack.Screen name="MYPROFILE" component={MYPROFILE} />
            <Stack.Screen name="MYLIST" component={MYLIST} />
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="SIGNIN" component={SIGNIN} />
            <Stack.Screen name="SIGNIN1" component={SIGNIN1} />
            <Stack.Screen name="FORYOU" component={FORYOU} />
            <Stack.Screen name="MYREVIEWS" component={MYREVIEWS} />
            <Stack.Screen
              name="EACHRATINGREVIEWS"
              component={EACHRATINGREVIEWS}
            />
            <Stack.Screen
              name="PROFILEFROMREVIEW"
              component={PROFILEFROMREVIEW}
            />
            <Stack.Screen name="CLICKEDREVIEWS" component={CLICKEDREVIEWS} />
            <Stack.Screen
              name="CLICKEDMOVIEABOUT"
              component={CLICKEDMOVIEABOUT}
            />
            <Stack.Screen
              name="CLICKEDMOVIEREVIEWS"
              component={CLICKEDMOVIEREVIEWS}
            />
            <Stack.Screen
              name="CLICKEDMOVIECAST"
              component={CLICKEDMOVIECAST}
            />
            <Stack.Screen name="REVIEW" component={REVIEW} />
            <Stack.Screen
              name="SUBMITTEDREVIEW"
              component={SUBMITTEDREVIEW}
            />
            <Stack.Screen
              name="OVERALLRATING"
              component={OVERALLRATING}
            />
            <Stack.Screen
              name="VIEWERRATING"
              component={VIEWERRATING}
            />
            <Stack.Screen
              name="CRITICRATING"
              component={CRITICRATING}
            />
            <Stack.Screen
              name="SIGNUP"
              component={SIGNUP}
            />
            <Stack.Screen
              name="CLICKEDMOVIEMYLISTCLICKED"
              component={CLICKEDMOVIEMYLISTCLICKED}
            />
            <Stack.Screen
              name="VIEWERSRATING"
              component={VIEWERSRATING}
            />
            <Stack.Screen
              name="DASHBOARD1"
              component={DASHBOARD1}
            />
            <Stack.Screen
              name="Onboarding1"
              component={Onboarding1}
            />
            <Stack.Screen
              name="Onboarding2"
              component={Onboarding2}
            />
            <Stack.Screen
              name="Onboarding3"
              component={Onboarding3}
            />
            <Stack.Screen
              name="CRITICRATINGS"
              component={CRITICRATINGS}
            />
          </Stack.Navigator>
        </NavigationContainer>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;

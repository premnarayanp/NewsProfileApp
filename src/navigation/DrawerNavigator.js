import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BottomTabNavigator from './BottomTabNavigator';
import CustomDrawer from './CustomDrawer';
import { Login, SignUp } from '../screens/drawarNavigatorScreens/index'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();
const DrawerNavigator = ({ navigation }) => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{
          headerShown: true,
          title: "",//() => null,
          headerRight: (props) => (
            <MaterialCommunityIcons name="dots-vertical" color="gray" size={30} />
          ),
        }}
      />
      <Drawer.Screen name="Login" component={Login}
        options={{
          headerShown: true, headerLeft: ({ }) => <TouchableOpacity onPress={() => { navigation.goBack() }}>
            <MaterialCommunityIcons name="arrow-left" color="gray" size={30} />
          </TouchableOpacity>
        }} />

      <Drawer.Screen name="SignUp" component={SignUp}
        options={{
          headerShown: true, headerLeft: ({ }) => <TouchableOpacity onPress={() => { navigation.goBack() }}>
            <MaterialCommunityIcons name="arrow-left" color="gray" size={30} />
          </TouchableOpacity>
        }} />

    </Drawer.Navigator>
  );
};
//drawerContent={props => <CustomDrawer {...props} />}
export default DrawerNavigator;
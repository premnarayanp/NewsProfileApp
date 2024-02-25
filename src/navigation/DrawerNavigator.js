import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BottomTabNavigator from './BottomTabNavigator';
import CustomDrawer from './CustomDrawer'

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{
          headerShown: true,
          title: () => null,
          headerRight: (props) => (
            <MaterialCommunityIcons name="dots-vertical" color="gray" size={30} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
//drawerContent={props => <CustomDrawer {...props} />}
export default DrawerNavigator;
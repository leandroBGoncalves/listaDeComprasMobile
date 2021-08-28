import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


import TelaLogin from './pages/login';
import CadastroTela from './pages/cadastro';
import DasheboardInitial from './pages/dashaboard/dasheboard';
import CustonDrawer from './components/CustonDrawer/custonDrawer';

const Drawer = createDrawerNavigator();

export function Routes() {
    
  return (
 
        <Drawer.Navigator 
        initialRouterName='Login'
        drawerContent={props => <CustonDrawer {...props}/>}
        >
            <Drawer.Screen 
            name="Login" 
            component={TelaLogin} 
            />
            <Drawer.Screen 
            name="Cadastro" 
            component={CadastroTela} 
            />
            <Drawer.Screen 
            name="Dashaboard" 
            component={DasheboardInitial} 
            />
        </Drawer.Navigator>
        

  );
}
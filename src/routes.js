import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';


import TelaLogin from './pages/login';
import CadastroTela from './pages/cadastro';
import DasheboardInitial from './pages/dashaboard/dasheboard';

const Stack = createStackNavigator();

export function Routes() {
    
  return (
 
        <Stack.Navigator initialRouterName='Login'>
            <Stack.Screen 
            name="Login" 
            component={TelaLogin} 
            options={{headerShown: false}}
            />
            <Stack.Screen 
            name="Cadastro" 
            component={CadastroTela} 
            />
            <Stack.Screen 
            name="Dashaboard" 
            component={DasheboardInitial} 
            />
        </Stack.Navigator>    

  );
}
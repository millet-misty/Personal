import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Second: undefined;
  Home: undefined;
};
export type SecondScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export function SecondScreen() {
  const navigation = useNavigation<SecondScreenProp>();
  return (    
    <button onClick={() => navigation.navigate('Home')}>Back to Home Screen</button>
  );
}

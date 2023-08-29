import { StatusBar } from 'react-native';
import { Home } from './src/Screens/Home';

export default function(){
  return(
    <>
      <StatusBar
      barStyle='light-content'
      backgroundColor='transparent'
      translucent={true}
      />

      <Home/>
    </>
  )
}

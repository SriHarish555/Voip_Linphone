import {PermissionsAndroid, StatusBar, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigators/auth';
import {useEffect, useState} from 'react';
import HomePages from './navigators/home';
import Login from './screens/Login';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SipProvider,Call, UserAgent} from 'react-native-linphone-sdk';

export default function App() {
  const [auth, setAuth] = useState(null);
  const  sipConfigs = {
    id: "1234",
    username: "7001",
    password: "7001",
    domain: "192.168.76.135",
    displayName: "7001"
  }

  useEffect(() => {
    init();
    
   
    
  }, []);

  const userAgentConfig={
    id: "7003",
    username: "7003",
    password: "7003",
    domain: "192.168.76.135",
    displayName: "7003",
  };

  const init = async () => {
    try {
      const userAgent = new UserAgent(userAgentConfig)
      console.log("speaker1",userAgent.register())
      const a =   userAgent.start()
      console.log("speaker",a)
      
    } catch (error) {
        console.log(error)
    }

  };

  return (
    // <SipProvider sipConfigs={[userAgentConfig]}>
      <NavigationContainer>
        {auth ? (
          <HomePages />
        ) : (
          <SafeAreaView style={{flex: 1}}>
            <Login setAuth={setAuth} />
          </SafeAreaView>
        )}
      </NavigationContainer>
    //  </SipProvider>
  );
}

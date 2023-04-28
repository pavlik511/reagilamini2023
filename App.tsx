import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { GlobalProvider } from "./context/GlobalContext";

import Main from "./screens/Main";
import SPC from "./screens/spc";

import SchizoO2 from "./screens/01Schizofrenie/page2";

import Schizo03 from "./screens/02ProcReagila/page3";

import Schizo04 from "./screens/03Mechanismus/page4";
import Schizo05 from "./screens/03Mechanismus/page5";
import Schizo055 from "./screens/03Mechanismus/page5.5";
import Schizo06 from "./screens/03Mechanismus/page6";
import SchizoM7 from "./screens/03Mechanismus/page7";

import Schizo07 from "./screens/04Ucinnost/page7";
import Schizo08 from "./screens/04Ucinnost/page8";
import Schizo09 from "./screens/04Ucinnost/page9";
import Schizo10 from "./screens/04Ucinnost/page10";
import Schizo11 from "./screens/04Ucinnost/page11";
import Schizo12 from "./screens/04Ucinnost/page12";
import Schizo13 from "./screens/04Ucinnost/page13";

import Schizo14 from "./screens/05Bezpecnost/page14";
import Schizo15 from "./screens/05Bezpecnost/page15";
import Schizo16 from "./screens/05Bezpecnost/page16";

import Schizo17 from "./screens/06Davkovani/page17";
import Schizo18 from "./screens/06Davkovani/page18";
import Schizo19 from "./screens/06Davkovani/page19";
import Schizo20 from "./screens/06Davkovani/page20";

import Schizo21 from "./screens/07Pacient/page21";
import Schizo22 from "./screens/07Pacient/page22";

import Schizo23 from "./screens/08Dostupnost/page23";

import Schizo24 from "./screens/09Srovnani/page24";
import Schizo25 from "./screens/09Srovnani/page25";
import Schizo26 from "./screens/09Srovnani/page26";
import Schizo27 from "./screens/09Srovnani/page27";
import { Image } from "react-native"
import { Asset } from 'expo-asset';


const Drawer = createDrawerNavigator();
export default function App() {
  
  useEffect(() => {

    let process: boolean = true;
    cacheImages([
      require("./assets/1.jpg"),
      require("./assets/10.jpg"),
      require("./assets/11.jpg"),
      require("./assets/12.jpg"),
      require("./assets/13.jpg"),
      require("./assets/14.jpg"),
      require("./assets/15.jpg"),
      require("./assets/16.jpg"),
      require("./assets/17.jpg"),
      require("./assets/18.jpg"),
      require("./assets/19.jpg"),
      require("./assets/2.jpg"),
      require("./assets/20.jpg"),
      require("./assets/21.jpg"),
      require("./assets/22.jpg"),
      require("./assets/23.jpg"),
      require("./assets/24.jpg"),
      require("./assets/25.jpg"),
      require("./assets/26.jpg"),
      require("./assets/27.jpg"),
      require("./assets/3.jpg"),
      require("./assets/4.jpg"),
      require("./assets/4_zaloha.jpg"),
      require("./assets/5.5.jpg"),
      require("./assets/5.jpg"),
      require("./assets/5_zaloha.jpg"),
      require("./assets/5p.jpg"),
      require("./assets/6.jpg"),
      require("./assets/7.jpg"),
      require("./assets/7m.jpg"),
      require("./assets/7m2.jpg"),
      require("./assets/7m2.png"),
      require("./assets/8.jpg"),
      require("./assets/9.jpg"),
      require("./assets/adaptive-icon.png"),
      require("./assets/aripiprazol.png"),
      require("./assets/aripiprazol_n.png"),
      require("./assets/brexipiprazol.png"),
      require("./assets/brexipiprazol_n.png"),
      require("./assets/dead.png"),
      require("./assets/favicon.png"),
      require("./assets/icon.png"),
      require("./assets/kariprazin.png"),
      require("./assets/karizprazin_n.png"),
      require("./assets/reagila_background.jpg"),
      require("./assets/richter_gedeon_official_logo.png"),
      require("./assets/spc.pdf"),
      require("./assets/splash.png"),
    ]);
    return () => {
      process = false;
    }
  }, [])

  function cacheImages(images: string[]) {
    return images.map(image => {
      if (typeof image === 'string') {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
  }
   
  return (
    <>
    <NavigationContainer>
      <GlobalProvider>
    <Drawer.Navigator initialRouteName="Home" screenOptions={{
  headerShown:false
    }}>
      <Drawer.Screen name="Main" component={Main} />
      <Drawer.Screen name="Page2Schizofrenie" component={SchizoO2} />

      <Drawer.Screen name="Page3ProcReagila" component={Schizo03} />

      <Drawer.Screen name="Page4MechanismusUcinku" component={Schizo04} />
      <Drawer.Screen name="Page5MechanismusUcinku" component={Schizo05} />
      <Drawer.Screen name="Page55HodinyMechanismusUcinku" component={Schizo055} />
      <Drawer.Screen name="Page6MechanismusUcinku" component={Schizo06} />
      <Drawer.Screen name="Page7MechanismusUcinku" component={SchizoM7} />

      <Drawer.Screen name="Page7Ucinnost" component={Schizo07} />
      <Drawer.Screen name="Page8Ucinnost" component={Schizo08} />
      <Drawer.Screen name="Page9Ucinnost" component={Schizo09} />
      <Drawer.Screen name="Page10Ucinnost" component={Schizo10} />
      <Drawer.Screen name="Page11Ucinnost" component={Schizo11} />
      <Drawer.Screen name="Page12Ucinnost" component={Schizo12} />
      <Drawer.Screen name="Page13Ucinnost" component={Schizo13} />

      <Drawer.Screen name="Page14Bezpecnost" component={Schizo14} />
      <Drawer.Screen name="Page15Bezpecnost" component={Schizo15} />
      <Drawer.Screen name="Page16Bezpecnost" component={Schizo16} />

      <Drawer.Screen name="Page17Davkovani" component={Schizo17} />
      <Drawer.Screen name="Page18Davkovani" component={Schizo18} />
      <Drawer.Screen name="Page19Davkovani" component={Schizo19} />
      <Drawer.Screen name="Page20Davkovani" component={Schizo20} />

      <Drawer.Screen name="Page21Pacient" component={Schizo21} />
      <Drawer.Screen name="Page22Pacient" component={Schizo22} />

      <Drawer.Screen name="Page23Dostupnost" component={Schizo23} />

      <Drawer.Screen name="Page24Srovnani" component={Schizo24} />
      <Drawer.Screen name="Page25Srovnani" component={Schizo25} />
      <Drawer.Screen name="Page26Srovnani" component={Schizo26} />
      <Drawer.Screen name="Page27Srovnani" component={Schizo27} />

      <Drawer.Screen name="SPC" component={SPC} />


    </Drawer.Navigator>
    </GlobalProvider>
  </NavigationContainer>
  <StatusBar hidden={true}/>
  </>
  );
}


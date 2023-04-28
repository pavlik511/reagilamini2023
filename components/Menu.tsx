import React, {useContext} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {GlobalContext} from "../context/GlobalContext";
const Menu = () => {
    const {menu, zmenMenuPolozku, subMenu, zmenSubMenuPolozku}:any = useContext(GlobalContext);
    const {navigate} = useNavigation();
    return (
        <View>
           <Text></Text>
           <Text></Text>
           <Text></Text>
           <Text></Text>
           <Text></Text>
           <Text></Text>
           <Text></Text>
           <Text></Text>
            <Text onPress={() => {
                zmenMenuPolozku("schizofrenie");
                zmenSubMenuPolozku("notset");
                navigate("Page2Schizofrenie");
            }} style={menu==="schizofrenie"?styles.greenColor:styles.menuItem}>SCHIZOFRENIE</Text>
            <Text onPress={() => {
                zmenMenuPolozku("proc-reagila");
                zmenSubMenuPolozku("notset");
                navigate("Page3ProcReagila")
            }} style={menu==="proc-reagila"?styles.greenColor:styles.menuItem}>PROČ REAGILA</Text>
            <Text onPress={() => {
                 zmenMenuPolozku("mechanismus-ucinku");
                 zmenSubMenuPolozku("notset");
                navigate("Page4MechanismusUcinku")
            }} style={menu==="mechanismus-ucinku"?styles.greenColor:styles.menuItem}>MECHANISMUS{"\n"}ÚČINKU</Text>
            <Text onPress={() => {
                zmenMenuPolozku("ucinnost");
                zmenSubMenuPolozku("akutni-exacerbace");
                navigate("Page7Ucinnost")
            }} style={menu==="ucinnost"?styles.greenColor:styles.menuItem}>ÚČINNOST</Text>

{menu==="ucinnost"?<><Text onPress={() => {
                        zmenSubMenuPolozku("akutni-exacerbace");
                        navigate("Page7Ucinnost");
                    }} style={subMenu==="akutni-exacerbace"?styles.subItemColor:styles.subItem}>- akutní exacerbace</Text>
                        <Text onPress={() => {
                        zmenSubMenuPolozku("negativni-symptomy");
                        navigate("Page9Ucinnost")   
                    }} style={subMenu==="negativni-symptomy"?styles.subItemColor:styles.subItem}>- negativní symptomy</Text>
                        <Text onPress={() => {
                         zmenSubMenuPolozku("funkcni-schopnosti");
                        navigate("Page11Ucinnost")
                    }} style={subMenu==="funkcni-schopnosti"?styles.subItemColor:styles.subItem}>- funkční schopnosti</Text>
                        <Text onPress={() => {
                        zmenSubMenuPolozku("prevence-relapsu");
                        navigate("Page13Ucinnost")
                    }} style={subMenu==="prevence-relapsu"?styles.subItemColor:styles.subItem}>- prevence relapsu</Text>
</>:<></>}
                        
                    
            <Text onPress={() => {
                   zmenMenuPolozku("bezpecnost");
                   zmenSubMenuPolozku("notset");
                navigate("Page14Bezpecnost")
            }} style={menu==="bezpecnost"?styles.greenColor:styles.menuItem}>BEZPEČNOST</Text>
            <Text onPress={() => {
                   zmenMenuPolozku("davkovani");
                   zmenSubMenuPolozku("notset");
                navigate("Page17Davkovani")
            }} style={menu==="davkovani"?styles.greenColor:styles.menuItem}>DÁVKOVÁNÍ</Text>
           
           {menu==="davkovani"?<><Text style={subMenu==="ekvipotentni"?styles.subItemColor:styles.subItem} onPress={() => {
                        zmenSubMenuPolozku("ekvipotentni");
                        navigate("Page19Davkovani")
                    }}>- ekvipotentní dávky</Text></>:<></>}
                    


            <Text onPress={() => {
                   zmenMenuPolozku("pacient");
                   zmenSubMenuPolozku("notset");
                navigate("Page21Pacient")
            }} style={menu==="pacient"?styles.greenColor:styles.menuItem}>PACIENT</Text>
            <Text onPress={() => {
                   zmenMenuPolozku("dostupnost");
                   zmenSubMenuPolozku("notset");
                navigate("Page23Dostupnost")
            }} style={menu==="dostupnost"?styles.greenColor:styles.menuItem}>DOSTUPNOST</Text>
            <Text onPress={() => {
                   zmenMenuPolozku("srovnani");
                   zmenSubMenuPolozku("notset");
                navigate("Page24Srovnani")
            }} style={menu==="srovnani"?styles.greenColor:styles.menuItem}>SROVNÁNÍ AP</Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <TouchableOpacity style={{padding:10}} onPress={() => {
              navigate("Main");
          }}>
            <Image source={require("../assets/richter_gedeon_official_logo.png")} style={styles.logo}/>
            </TouchableOpacity>
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    logo:{
     width:undefined,
      resizeMode:"contain",
      padding:10
    },
    menuItem:{
        fontWeight:"normal",
        color:"#3c4146",
        fontSize:20,
        marginLeft:10,
        marginTop:20
    },
    subItem:{
        marginTop:10,
        marginLeft:20,
        fontSize:16,
    },
    subItemColor:{
        marginTop:10,
        marginLeft:20,
        fontSize:16,
        color:"#07a6a9",
        fontWeight:"bold"
    },
    greenColor:{
        color:"#07a6a9",
        fontWeight:"bold",
        fontSize:20,
        marginLeft:10,
        marginTop:20
    }
})

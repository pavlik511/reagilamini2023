import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Image, TouchableOpacity} from 'react-native'

const ImageComponents = ({src, next, back}:any) => {
    const {navigate} = useNavigation();
    return (
        <>
           <Image style={styles.image} source={src} />
           {next?<TouchableOpacity style={styles.next} onPress={() => {
               navigate(next)
           }}>
           </TouchableOpacity>:<></>}
           {back?<TouchableOpacity style={styles.back} onPress={() => {
               navigate(back)
           }}>
           </TouchableOpacity>:<></>}
           <TouchableOpacity style={styles.spc} onPress={() => {
               navigate("SPC")
           }}>

           </TouchableOpacity>
        </>
    )
}

export default ImageComponents

const styles = StyleSheet.create({
    spc:{
        width:100,
        height:60,
        position:"absolute",
        bottom:0,
        left:0,
        marginLeft:20
    },
    image:{
        flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover'
    },
    next:{
        width:100,
        height:60,
        position:"absolute",
        bottom:0,
        right:0,
        marginRight:20
    },
    back:{
        width:100,
        height:60,
        position:"absolute",
        bottom:0,
        right:0,
        marginRight:120
    }
});

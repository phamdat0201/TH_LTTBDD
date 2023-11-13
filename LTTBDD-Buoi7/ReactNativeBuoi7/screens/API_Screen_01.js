import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable, Button  } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Border, FontFamily } from "../GlobalStyles";

const API_Screen_01 = ({navigation}) => {

  

  return (
    <View style={styles.apiScreen01}>
      <Text style={[styles.welcomeToCafe, styles.getStartedFlexBox]}>
        Welcome to Cafe world
      </Text>
      <View style={[styles.image, styles.imageIconLayout]} />
      <Image
        style={[styles.imageIcon, styles.imageIconLayout]}
        contentFit="cover"
        source={require("../assets/image.png")}
      />
      <Image
        style={[styles.imageIcon1, styles.imageIconLayout]}
        contentFit="cover"
        source={require("../assets/image1.png")}
      />
        <Pressable style={styles.button72} onPress={() => navigation.navigate("API_Screen_02") }>
        <Text style={[styles.getStarted, styles.getStartedFlexBox]}>
          GET STARTED
        </Text> 
        </Pressable>
        
      <View style={styles.apiScreen01Child} />
    </View>
  );
};

const styles = StyleSheet.create({
  getStartedFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  imageIconLayout: {
    width: 200,
    left: 90,
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  welcomeToCafe: {
    top: 89,
    left: 58,
    fontSize: 24,
    lineHeight: 36,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: "#171a1f",
  },
  image: {
    top: 465,
    backgroundColor: "#d9d9d9",
    height: 76,
  },
  imageIcon: {
    top: 331,
    height: 73,
  },
  imageIcon1: {
    top: 197,
    height: 62,
  },
  getStarted: {
    marginTop: -11,
    marginLeft: -47.5,
    top: "50%",
    left: "50%",
    fontSize: 14,
    lineHeight: 22,
    fontFamily: FontFamily.interRegular,
    color: "#fff",
  },
  button72: {
    top: 692,
    left: 39,
    backgroundColor: "#00bdd6",
    width: 312,
    height: 50,
    borderRadius: Border.br_7xs,
    position: "absolute",
    overflow: "hidden",
  },
  apiScreen01Child: {
    top: 0,
    left: -5,
    backgroundColor: "rgba(222, 225, 230, 0)",
    borderStyle: "solid",
    borderColor: "#bcc1ca",
    borderWidth: 1,
    width: 395,
    position: "absolute",
    height: 844,
  },
  apiScreen01: {
    backgroundColor: "#dee1e6",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 844,
  },
});

export default API_Screen_01;

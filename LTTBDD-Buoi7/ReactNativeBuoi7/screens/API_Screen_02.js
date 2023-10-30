import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const APIScreen02 = () => {

  return (
    <View style={styles.apiScreen02}>
      <Text style={styles.shopsNearMe}>Shops Near Me</Text>
      <View style={styles.button70}>
        <Text style={styles.text} />
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame.png")}
        />
      </View>
      <Image
        style={[styles.image177Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-177.png")}
      />
      <View style={[styles.item1, styles.containerShadowBox]}>
        <View style={[styles.image, styles.imageIconLayout]} />
        <Text
          style={styles.kitandaEspresso}
        >{`Kitanda Espresso & Acai-U District`}</Text>
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <Image
            style={styles.image178Icon}
            contentFit="cover"
            source={require("../assets/image-178.png")}
          />
          <Text style={[styles.acceptingOrders, styles.ne45StTypo]}>
            Accepting Orders
          </Text>
        </View>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.minutes, styles.minutesTypo]}>5-10 minutes</Text>
          <Image
            style={[styles.image180Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-180.png")}
          />
        </View>
        <Image
          style={[styles.image181Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-181.png")}
        />
        <Text style={[styles.ne45St, styles.ne45StTypo]}>1121 NE 45 St</Text>
        <View style={[styles.item1Child, styles.childLayout]} />
      </View>
      <View style={[styles.container152, styles.containerShadowBox]}>
        <Text style={styles.kitandaEspresso}>Jewel Box Cafe</Text>
        <View style={[styles.rectangleContainer, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.minutes, styles.minutesTypo]}>
            10-15 minutes
          </Text>
          <Image
            style={[styles.image180Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-180.png")}
          />
        </View>
        <Image
          style={[styles.image181Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-181.png")}
        />
        <Text style={[styles.ne45St, styles.ne45StTypo]}>1145 GE 54 St</Text>
        <Image
          style={[styles.imageIcon, styles.imageIconLayout]}
          contentFit="cover"
          source={require("../assets/image.png")}
        />
        <View style={[styles.groupView, styles.viewLayout]}>
          <View style={[styles.rectangleView, styles.viewLayout]} />
          <Text style={[styles.temporyUnavailable, styles.minutesTypo]}>
            Tempory Unavailable
          </Text>
          <Image
            style={[styles.image190Icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/image-190.png")}
          />
        </View>
      </View>
      <View style={[styles.container154, styles.imageIcon2Position]}>
        <Text style={styles.kitandaEspresso}>Javasti Cafe</Text>
        <View style={[styles.rectangleContainer, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.minutes, styles.minutesTypo]}>
            15-20 minutes
          </Text>
          <Image
            style={[styles.image180Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-180.png")}
          />
        </View>
        <Image
          style={[styles.image181Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-185.png")}
        />
        <Text style={[styles.ne45St, styles.ne45StTypo]}>1167 GE 54 St</Text>
        <View style={[styles.groupView, styles.viewLayout]}>
          <View style={[styles.rectangleView, styles.viewLayout]} />
          <Text style={[styles.temporyUnavailable, styles.minutesTypo]}>
            Tempory Unavailable
          </Text>
          <Image
            style={[styles.image190Icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/image-190.png")}
          />
        </View>
        <Image
          style={[styles.imageIcon1, styles.imageIconLayout]}
          contentFit="cover"
          source={require("../assets/image1.png")}
        />
      </View>
      <Image
        style={[styles.imageIcon2, styles.imageIcon2Position]}
        contentFit="cover"
        source={require("../assets/image2.png")}
      />
      <View style={[styles.apiScreen02Child, styles.childLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  containerShadowBox: {
    height: 200,
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  imageIconLayout: {
    width: 347,
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  groupChildLayout: {
    height: 30,
    width: 161,
    position: "absolute",
  },
  ne45StTypo: {
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  groupLayout: {
    width: 141,
    height: 30,
    position: "absolute",
  },
  minutesTypo: {
    color: Color.colorCrimson,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: 18,
    position: "absolute",
  },
  childLayout: {
    height: 854,
    width: 395,
    borderWidth: 1,
    borderColor: Color.colorSilver,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  viewLayout: {
    width: 182,
    height: 30,
    left: 0,
    position: "absolute",
  },
  imageIcon2Position: {
    left: 20,
    width: 347,
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  shopsNearMe: {
    top: 19,
    left: 71,
    fontSize: 24,
    lineHeight: 36,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorGray_100,
    position: "absolute",
  },
  text: {
    marginTop: -13,
    marginLeft: 10,
    color: "#9095a0",
    fontFamily: FontFamily.interRegular,
    lineHeight: 26,
    fontSize: FontSize.size_base,
    left: "50%",
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  frameIcon: {
    marginTop: -10,
    marginLeft: -10,
    width: 20,
    height: 20,
    left: "50%",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  button70: {
    top: 15,
    left: 13,
    borderRadius: 4,
    backgroundColor: "rgba(0, 0, 0, 0)",
    width: 44,
    height: 44,
    position: "absolute",
    overflow: "hidden",
  },
  image177Icon: {
    top: 25,
    left: 311,
  },
  image: {
    backgroundColor: "#d9d9d9",
    height: 114,
    left: 0,
    top: 0,
  },
  kitandaEspresso: {
    top: 153,
    left: 7,
    lineHeight: 26,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupChild: {
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhitesmoke,
  },
  image178Icon: {
    top: 8,
    left: 6,
    width: 19,
    height: 14,
    position: "absolute",
  },
  acceptingOrders: {
    color: "#1dd75b",
    width: 121,
    left: 34,
    top: 4,
  },
  rectangleParent: {
    top: 121,
    left: 7,
  },
  groupItem: {
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhitesmoke,
  },
  minutes: {
    left: 32,
    width: 97,
    top: 4,
  },
  image180Icon: {
    top: 6,
    left: 5,
    width: 18,
  },
  rectangleGroup: {
    left: 174,
    top: 121,
  },
  image181Icon: {
    top: 125,
    left: 326,
    width: 14,
  },
  ne45St: {
    top: 178,
    opacity: 0.62,
    left: 7,
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
  },
  item1Child: {
    top: -77,
    left: -26,
  },
  item1: {
    top: 74,
    width: 347,
    borderRadius: Border.br_7xs,
    position: "absolute",
    left: 21,
    height: 200,
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    backgroundColor: Color.colorWhite,
  },
  rectangleContainer: {
    top: 122,
    left: 177,
  },
  imageIcon: {
    left: -1,
    height: 114,
    top: 0,
  },
  rectangleView: {
    top: 0,
    backgroundColor: Color.colorWhitesmoke,
  },
  temporyUnavailable: {
    top: 5,
    width: 148,
    left: 34,
  },
  image190Icon: {
    top: 3,
    left: 0,
  },
  groupView: {
    top: 121,
  },
  container152: {
    top: 293,
    width: 347,
    borderRadius: Border.br_7xs,
    position: "absolute",
    left: 21,
    height: 200,
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    backgroundColor: Color.colorWhite,
  },
  imageIcon1: {
    height: 114,
    left: 0,
    top: 0,
  },
  container154: {
    top: 518,
    height: 200,
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  imageIcon2: {
    top: 737,
    height: 114,
  },
  apiScreen02Child: {
    top: -3,
    left: -5,
  },
  apiScreen02: {
    shadowColor: "rgba(18, 15, 40, 0.12)",
    shadowRadius: 6,
    elevation: 6,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    backgroundColor: Color.colorWhitesmoke,
  },
});

export default APIScreen02;

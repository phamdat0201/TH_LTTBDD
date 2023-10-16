import * as React from 'react';
import {Text, StyleSheet, Pressable, Image, View} from 'react-native';
import {FontFamily, Color, FontSize, Border} from '../GlobalStyles';
const Screen01 = () => {
  return (
    <View style={{width: 360, height: 640}}>
      <Text style={[styles.inThoiVsmart, styles.muChnMu1Typo]}>
        Điện Thoại Vsmart Joy 3 - Hàng chính hãng
      </Text>
      <Pressable style={styles.muChnMu} onPress={() => {}}>
        <Text style={styles.muChnMu1Typo}>4 MÀU-CHỌN MÀU</Text>
      </Pressable>
      <Text style={[styles.text, styles.textTypo]}>1.790.000 đ</Text>
      <Text style={[styles.uRHn, styles.textTypo]}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
      <Text style={[styles.text1, styles.textTypo]}>1.790.000 đ</Text>
      <Text style={[styles.xem828Nh, styles.muChnMu1Typo]}>
        (Xem 828 đánh giá)
      </Text>
      <Image
        style={[styles.starIcon, styles.starIconLayout1]}
        resizeMode="cover"
        source={require('../assets/star.png')}
      />
      <Image
        style={[styles.starIcon1, styles.starIconLayout]}
        resizeMode="cover"
        source={require('../assets/star.png')}
      />
      <Image
        style={[styles.starIcon2, styles.starIconLayout1]}
        resizeMode="cover"
        source={require('../assets/star.png')}
      />
      <Image
        style={[styles.starIcon3, styles.starIconLayout]}
        resizeMode="cover"
        source={require('../assets/star.png')}
      />
      <Image
        style={[styles.starIcon4, styles.starIconLayout1]}
        resizeMode="cover"
        source={require('../assets/star.png')}
      />
      <View style={styles.screen01Child} />
      <Image
        style={[styles.screen01Item, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require('../assets/group-1.png')}
      />
      <Pressable
        style={[styles.screen01Inner, styles.groupChildShadowBox]}
        onPress={() => {}}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require('../assets/vector.png')}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.chnMua, styles.textTypo]}>CHỌN MUA</Text>
      </View>
      <Image
        style={[styles.vsBlueIcon, styles.groupChildPosition]}
        resizeMode="cover"
        source={require('../assets/vs-blue.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  muChnMu1Typo: {
    textAlign: 'left',
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
  },
  textTypo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: '700',
    textAlign: 'left',
    position: 'absolute',
  },
  starIconLayout1: {
    height: 25,
    width: 23,
    top: 382,
    position: 'absolute',
  },
  starIconLayout: {
    width: 24,
    height: 25,
    top: 382,
    position: 'absolute',
  },
  vectorIconLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  groupChildShadowBox: {
    borderWidth: 1,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: Border.br_3xs,
    borderStyle: 'solid',
  },
  groupChildLayout: {
    height: 44,
    width: 326,
  },
  groupChildPosition: {
    top: 0,
    position: 'absolute',
  },
  inThoiVsmart: {
    top: 355,
    left: 22,
    position: 'absolute',
  },
  muChnMu: {
    left: 121,
    top: 498,
    position: 'absolute',
  },
  text: {
    top: 420,
    fontSize: 18,
    left: 23,
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoBold,
    fontWeight: '700',
  },
  uRHn: {
    top: 457,
    fontSize: 12,
    color: '#fa0000',
    left: 23,
  },
  text1: {
    top: 422,
    left: 166,
    color: 'rgba(0, 0, 0, 0.58)',
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.robotoBold,
    fontWeight: '700',
  },
  xem828Nh: {
    top: 386,
    left: 170,
    width: 135,
    position: 'absolute',
  },
  starIcon: {
    left: 23,
  },
  starIcon1: {
    left: 48,
  },
  starIcon2: {
    left: 74,
  },
  starIcon3: {
    left: 99,
  },
  starIcon4: {
    left: 125,
  },
  screen01Child: {
    top: 431,
    left: 162,
    borderColor: Color.colorBlack,
    borderTopWidth: 1,
    width: 93,
    height: 1,
    borderStyle: 'solid',
    position: 'absolute',
  },
  screen01Item: {
    height: '3.13%',
    width: '5.56%',
    top: '70.94%',
    right: '45.28%',
    bottom: '25.94%',
    left: '49.17%',
  },
  screen01Inner: {
    top: 490,
    left: 18,
    backgroundColor: 'rgba(196, 196, 196, 0)',
    borderColor: 'rgba(0, 0, 0, 0.46)',
    width: 332,
    height: 34,
    position: 'absolute',
  },
  vectorIcon: {
    height: '2.19%',
    width: '3.19%',
    top: '78.13%',
    right: '8.19%',
    bottom: '19.69%',
    left: '88.61%',
  },
  groupChild: {
    left: 0,
    backgroundColor: '#ee0a0a',
    borderColor: '#ca1536',
    height: 44,
    width: 326,
    borderWidth: 1,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: Border.br_3xs,
    borderStyle: 'solid',
  },
  chnMua: {
    top: 12,
    left: 106,
    fontSize: 20,
    color: '#f9f2f2',
  },
  rectangleParent: {
    top: 583,
    left: 21,
    position: 'absolute',
  },
  vsBlueIcon: {
    left: 29,
    width: 301,
    height: 361,
  },
  screen01: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    height: 640,
    overflow: 'hidden',
  },
});

export default Screen01;

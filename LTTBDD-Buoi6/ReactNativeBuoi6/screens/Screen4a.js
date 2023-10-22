import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";

const Screen_1 = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {
            imagePro: require("../assets/ca_nau_lau.png"),
            decription: "Ca nấu lẩu, nấu mì mini",
            shop: "Devang",
          },
          {
            imagePro: require("../assets/ga_bo_toi.png"),
            decription: "Ca nấu lẩu, nấu mì mini",
            shop: "Devang",
          },
          {
            imagePro: require("../assets/xa_can_cau.png"),
            decription: "Ca nấu lẩu, nấu mì mini",
            shop: "Devang",
          },
          {
            imagePro: require("../assets/do_choi_dang_mo_hinh.png"),
            decription: "Ca nấu lẩu, nấu mì mini",
            shop: "Devang",
          },
          {
            imagePro: require("../assets/lanh_dao_gian_don.png"),
            decription: "Ca nấu lẩu, nấu mì mini",
            shop: "Devang",
          },
          {
            imagePro: require("../assets/hieu_long_con_tre.png"),
            decription: "Ca nấu lẩu, nấu mì mini",
            shop: "Devang",
          },
          {
            imagePro: require("../assets/trump 1.png"),
            decription: "Ca nấu lẩu, nấu mì mini",
            shop: "Devang",
          },
        ]}
        renderItem={({ item }) => (
          <View style={styles.Product_container}>
            <Image style={styles.imageProduct} source={item.imagePro} />

            <View>
              <Text>{item.decription}</Text>
              <Text>Shop {item.shop}</Text>
            </View>
            <Pressable style={styles.container_btn}>
              <Text style={{ color: "white" }}>Chat</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  Product_container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  imageProduct: {
    height: "100px",
    width: "100px",
    resizeMode: "contain",
  },
  container_btn: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: "red",
    height: "50%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Screen_1;

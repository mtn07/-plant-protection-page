import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function App() {

    return(
        <View style={styles.view}>
          <Pressable
            style={styles.iconAndroid24Chevron}
            onPress={() => navigation.navigate("Screen11")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("./assets/icon--android--24--chevronleft.png")}
            />
          </Pressable>
          <Text style={styles.text}>องค์ความรู้ด้านการอารักขาพืช</Text>
          <View style={styles.containerView}>
            <Pressable
              style={styles.groupPressable}
              onPress={() => navigation.navigate("Screen")}
            >
              <Image
                style={styles.home7FillIcon}
                resizeMode="cover"
                source={require("./assets/home7fill.png")}
              />
              <Text style={styles.text1}>หน้าแรก</Text>
            </Pressable>
            <View style={styles.iconFillbookmarkView} />
            <Image
              style={styles.iconFillsetting}
              resizeMode="cover"
              source={require("./assets/iconfillsetting.png")}
            />
            <Text style={styles.text2}>ตั้งค่า</Text>
            <Pressable
              style={styles.groupPressable1}
              onPress={() => navigation.navigate("Screen8")}
            >
              <Image
                style={styles.vectorIcon}
                resizeMode="cover"
                source={require("./assets/vector.png")}
              />
              <Image
                style={styles.vectorIcon1}
                resizeMode="cover"
                source={require("./assets/vector1.png")}
              />
              <Image
                style={styles.vectorIcon2}
                resizeMode="cover"
                source={require("./assets/vector2.png")}
              />
              <Text style={styles.text3}>ที่บันทึกไว้</Text>
            </Pressable>
          </View>
          <View style={styles.card1View}>
            <View style={styles.rectangleView} />
            <Text style={styles.text6}>
              <Text style={styles.text4}>โรค-แมลงศัตรูพืชไร่</Text>
              <Text style={styles.text5}>และการป้องกันจำกัด</Text>
            </Text>
            <Image
              style={styles.newsKnowledge561Icon}
              resizeMode="cover"
              source={require("./assets/news-knowledge56-1.png")}
            />
          </View>
          <View style={styles.card1View1}>
            <View style={styles.rectangleView1} />
            <Text style={styles.text9}>
              <Text style={styles.text7}>โรค-แมลงศัตรูข้าว</Text>
              <Text style={styles.text8}>และการป้องกันจำกัด</Text>
            </Text>
            <Image
              style={styles.icon1}
              resizeMode="cover"
              source={require("./assets/1501338106-1.png")}
            />
          </View>
          <View style={styles.card1View2}>
            <View style={styles.rectangleView2} />
            <Text style={styles.text13}>
              <Text style={styles.text10}>โรค-แมลงศัตรู</Text>
              <Text style={styles.text11}>ไม้ดอก ไม้ประดับ</Text>
              <Text style={styles.text12}>และการป้องกันจำกัด</Text>
            </Text>
            <Image
              style={styles.icon2}
              resizeMode="cover"
              source={require("./assets/-1.png")}
            />
          </View>
          <View style={styles.card1View3}>
            <View style={styles.rectangleView3} />
            <Text style={styles.text14}>ศัตรูธรรมชาติ และจุลินทรีย์ที่สำคัญ</Text>
            <Image
              style={styles.px6nd8rxgMZEMuuof7LO1Icon}
              resizeMode="cover"
              source={require("./assets/px6nd8rxgmzemuuof7lo-1.png")}
            />
          </View>
          <View style={styles.card1View4}>
            <View style={styles.rectangleView4} />
            <Text style={styles.text17}>
              <Text style={styles.text15}>โรค-แมลงศัตรูผัก</Text>
              <Text style={styles.text16}>และการป้องกันจำกัด</Text>
            </Text>
            <Image
              style={styles.pix0vcnt125952Icon}
              resizeMode="cover"
              source={require("./assets/pix0vcnt12595-2.png")}
            />
          </View>
          <Pressable
            style={styles.card1Pressable}
            onPress={() => navigation.navigate("Screen7")}
          >
            <View style={styles.rectangleView5} />
            <Text style={styles.text20}>
              <Text style={styles.text18}>โรค-แมลงศัตรูไม้ผล</Text>
              <Text style={styles.text19}>และการป้องกันจำกัด</Text>
            </Text>
            <Image
              style={styles.dQpjUtzLUwmJZZPD1447G2qYN1XpOCIcon}
              resizeMode="cover"
              source={require("./assets/4dqpjutzluwmjzzpd1447g2qyn1xpoct2itu4iztpeoq-1.png")}
            />
          </Pressable>
        </View>
      );
}

const styles = StyleSheet.create({
    borderBottomView: {
        position: "absolute",
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "#020202",
        height: 1,
      },
      triangleIcon: {
        position: "absolute",
        marginTop: -5.5,
        top: "50%",
        right: 7.88,
        borderRadius: 0.5,
        width: 12.24,
        height: 10.53,
      },
      squareView: {
        position: "absolute",
        marginTop: -5.5,
        top: "50%",
        right: 43.5,
        borderRadius: 0.5,
        borderStyle: "solid",
        borderColor: "#212121",
        borderWidth: 1,
        width: 11,
        height: 11,
      },
      circleIcon: {
        position: "absolute",
        marginTop: -5.5,
        top: "50%",
        right: 25.5,
        width: 11,
        height: 11,
      },
      wireText: {
        color: "#020202",
      },
      dText: {
        color: "#757575",
      },
      wiredText: {
        position: "absolute",
        top: 3,
        left: 6,
        fontSize: 12,
        fontFamily: "Kalam",
        textAlign: "center",
      },
      genericSystemBar: {
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "#fff",
        width: 411,
        height: 24,
        overflow: "hidden",
      },
      borderBottomView1: {
        position: "absolute",
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "#020202",
        height: 1,
      },
      triangleIcon1: {
        position: "absolute",
        marginTop: -5.5,
        top: "50%",
        right: 7.88,
        borderRadius: 0.5,
        width: 12.24,
        height: 10.53,
      },
      squareView1: {
        position: "absolute",
        marginTop: -5.5,
        top: "50%",
        right: 43.5,
        borderRadius: 0.5,
        borderStyle: "solid",
        borderColor: "#212121",
        borderWidth: 1,
        width: 11,
        height: 11,
      },
      circleIcon1: {
        position: "absolute",
        marginTop: -5.5,
        top: "50%",
        right: 25.5,
        width: 11,
        height: 11,
      },
      wireText1: {
        color: "#020202",
      },
      dText1: {
        color: "#757575",
      },
      wiredText1: {
        position: "absolute",
        top: 3,
        left: 6,
        fontSize: 12,
        fontFamily: "Kalam",
        textAlign: "center",
      },
      genericSystemBar1: {
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "#fff",
        width: 411,
        height: 24,
        overflow: "hidden",
      },
      icon: {
        height: "100%",
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
        maxHeight: "100%",
      },
      iconAndroid24Chevron: {
        position: "absolute",
        left: "0%",
        top: "4.5%",
        right: "86.62%",
        bottom: "88.82%",
        width: "13.38%",
        height: "6.68%",
      },
      text: {
        position: "absolute",
        top: 48,
        left: 55,
        fontSize: 27,
        fontFamily: "Inter",
        color: "#313333",
        textAlign: "left",
        width: 336,
        height: 32,
      },
      home7FillIcon: {
        position: "absolute",
        height: "54.39%",
        width: "46.97%",
        top: "0%",
        right: "25.76%",
        bottom: "45.61%",
        left: "27.27%",
        maxWidth: "100%",
        overflow: "hidden",
        maxHeight: "100%",
      },
      text1: {
        position: "absolute",
        height: "38.6%",
        width: "100%",
        top: "61.4%",
        left: "0%",
        fontSize: 20,
        fontFamily: "Roboto",
        color: "#000",
        textAlign: "left",
      },
      groupPressable: {
        position: "absolute",
        height: "57%",
        width: "16.06%",
        top: "22.77%",
        right: "75.67%",
        bottom: "20.23%",
        left: "8.27%",
      },
      iconFillbookmarkView: {
        position: "absolute",
        height: "32%",
        width: "7.79%",
        top: "20.79%",
        right: "46.47%",
        bottom: "47.21%",
        left: "45.74%",
        overflow: "hidden",
      },
      iconFillsetting: {
        position: "absolute",
        height: "32%",
        width: "7.79%",
        top: "20.79%",
        right: "13.63%",
        bottom: "47.21%",
        left: "78.59%",
        maxWidth: "100%",
        overflow: "hidden",
        maxHeight: "100%",
      },
      text2: {
        position: "absolute",
        height: "22%",
        width: "10.95%",
        top: "57.43%",
        left: "77.13%",
        fontSize: 20,
        fontFamily: "Roboto",
        color: "#000",
        textAlign: "left",
      },
      vectorIcon: {
        position: "absolute",
        height: "38.98%",
        width: "29.49%",
        top: "48.8%",
        right: "-176.92%",
        bottom: "12.22%",
        left: "247.44%",
        maxWidth: "100%",
        overflow: "hidden",
        maxHeight: "100%",
      },
      vectorIcon1: {
        position: "absolute",
        height: "54.24%",
        width: "41.03%",
        top: "35.24%",
        right: "-182.05%",
        bottom: "10.52%",
        left: "241.03%",
        maxWidth: "100%",
        overflow: "hidden",
        maxHeight: "100%",
      },
      vectorIcon2: {
        position: "absolute",
        height: "40.68%",
        width: "23.93%",
        top: "6.78%",
        right: "39.32%",
        bottom: "52.54%",
        left: "36.75%",
        maxWidth: "100%",
        overflow: "hidden",
        maxHeight: "100%",
      },
      text3: {
        position: "absolute",
        height: "37.29%",
        width: "100%",
        top: "62.71%",
        left: "0%",
        fontSize: 20,
        fontFamily: "Roboto",
        color: "#000",
        textAlign: "left",
      },
      groupPressable1: {
        position: "absolute",
        height: "59%",
        width: "18.98%",
        top: "20.79%",
        right: "40.63%",
        bottom: "20.21%",
        left: "40.39%",
      },
      containerView: {
        position: "absolute",
        top: 722,
        left: 0,
        backgroundColor: "#f1f1f1",
        width: 411,
        height: 101,
        overflow: "hidden",
      },
      rectangleView: {
        position: "absolute",
        top: 0,
        right: 0,
        borderRadius: 8,
        backgroundColor: "#fff",
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
          width: 1,
          height: 3,
        },
        shadowRadius: 10,
        elevation: 10,
        shadowOpacity: 1,
        width: 155.11,
        height: 156,
      },
      text4: {
        marginBlockStart: 0,
        marginBlockEnd: 0,
      },
      text5: {
        margin: 0,
      },
      text6: {
        position: "absolute",
        top: 110,
        right: 0.11,
        fontSize: 17,
        letterSpacing: 0.3,
        fontWeight: "500",
        fontFamily: "Roboto",
        color: "#313333",
        textAlign: "center",
        width: 155,
        height: 35,
      },
      newsKnowledge561Icon: {
        position: "absolute",
        top: 0,
        right: 0.11,
        borderRadius: 7,
        width: 155,
        height: 100,
      },
      card1View: {
        position: "absolute",
        top: 333,
        right: 32.89,
        width: 155.11,
        height: 156,
      },
      rectangleView1: {
        position: "absolute",
        top: 0,
        right: 0,
        borderRadius: 8,
        backgroundColor: "#fff",
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
          width: 1,
          height: 3,
        },
        shadowRadius: 10,
        elevation: 10,
        shadowOpacity: 1,
        width: 155.11,
        height: 156,
      },
      text7: {
        marginBlockStart: 0,
        marginBlockEnd: 0,
      },
      text8: {
        margin: 0,
      },
      text9: {
        position: "absolute",
        top: 110,
        right: 0.11,
        fontSize: 17,
        letterSpacing: 0.3,
        fontWeight: "500",
        fontFamily: "Roboto",
        color: "#313333",
        textAlign: "center",
        width: 155,
        height: 35,
      },
      icon1: {
        position: "absolute",
        top: 0,
        right: 0.11,
        borderRadius: 8,
        width: 154,
        height: 99,
      },
      card1View1: {
        position: "absolute",
        top: 532,
        right: 222.89,
        width: 155.11,
        height: 156,
      },
      rectangleView2: {
        position: "absolute",
        top: 0,
        right: 0,
        borderRadius: 8,
        backgroundColor: "#fff",
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
          width: 1,
          height: 3,
        },
        shadowRadius: 10,
        elevation: 10,
        shadowOpacity: 1,
        width: 155.11,
        height: 156,
      },
      text10: {
        marginBlockStart: 0,
        marginBlockEnd: 0,
      },
      text11: {
        marginBlockStart: 0,
        marginBlockEnd: 0,
      },
      text12: {
        margin: 0,
      },
      text13: {
        position: "absolute",
        top: 103,
        right: 0.11,
        fontSize: 15,
        letterSpacing: 0.2,
        fontWeight: "500",
        fontFamily: "Roboto",
        color: "#313333",
        textAlign: "center",
        width: 155,
        height: 35,
      },
      icon2: {
        position: "absolute",
        top: 0,
        right: 0.11,
        borderRadius: 8,
        width: 155,
        height: 99,
      },
      card1View2: {
        position: "absolute",
        top: 333,
        right: 225.89,
        width: 155.11,
        height: 156,
      },
      rectangleView3: {
        position: "absolute",
        top: 0,
        right: 0,
        borderRadius: 8,
        backgroundColor: "#fff",
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
          width: 1,
          height: 3,
        },
        shadowRadius: 10,
        elevation: 10,
        shadowOpacity: 1,
        width: 155.11,
        height: 156,
      },
      text14: {
        position: "absolute",
        top: 110,
        right: 0.11,
        fontSize: 17,
        letterSpacing: 0.3,
        fontWeight: "500",
        fontFamily: "Roboto",
        color: "#313333",
        textAlign: "center",
        width: 155,
        height: 35,
      },
      px6nd8rxgMZEMuuof7LO1Icon: {
        position: "absolute",
        top: 0,
        right: 0.11,
        borderRadius: 8,
        width: 155,
        height: 99,
      },
      card1View3: {
        position: "absolute",
        top: 532,
        right: 32.89,
        width: 155.11,
        height: 156,
      },
      rectangleView4: {
        position: "absolute",
        top: 0,
        right: 0,
        borderRadius: 8,
        backgroundColor: "#fff",
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
          width: 1,
          height: 3,
        },
        shadowRadius: 10,
        elevation: 10,
        shadowOpacity: 1,
        width: 155.11,
        height: 156,
      },
      text15: {
        marginBlockStart: 0,
        marginBlockEnd: 0,
      },
      text16: {
        margin: 0,
      },
      text17: {
        position: "absolute",
        top: 110,
        right: 0.11,
        fontSize: 17,
        letterSpacing: 0.3,
        fontWeight: "500",
        fontFamily: "Roboto",
        color: "#313333",
        textAlign: "center",
        width: 155,
        height: 35,
      },
      pix0vcnt125952Icon: {
        position: "absolute",
        top: 0,
        right: 0.11,
        borderRadius: 7,
        width: 155,
        height: 99,
      },
      card1View4: {
        position: "absolute",
        top: 134,
        right: 32.89,
        width: 155.11,
        height: 156,
      },
      rectangleView5: {
        position: "absolute",
        height: "100%",
        width: "100%",
        top: "0%",
        right: "0%",
        bottom: "0%",
        left: "0%",
        borderRadius: 8,
        backgroundColor: "#fff",
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
          width: 1,
          height: 3,
        },
        shadowRadius: 10,
        elevation: 10,
        shadowOpacity: 1,
      },
      text18: {
        marginBlockStart: 0,
        marginBlockEnd: 0,
      },
      text19: {
        margin: 0,
      },
      text20: {
        position: "absolute",
        height: "22.44%",
        width: "99.93%",
        top: "70.51%",
        left: "0%",
        fontSize: 17,
        letterSpacing: 0.3,
        fontWeight: "500",
        fontFamily: "Roboto",
        color: "#313333",
        textAlign: "center",
      },
      dQpjUtzLUwmJZZPD1447G2qYN1XpOCIcon: {
        position: "absolute",
        height: "63.46%",
        width: "99.93%",
        top: "0%",
        right: "0.07%",
        bottom: "36.54%",
        left: "0%",
        borderRadius: 8,
        maxWidth: "100%",
        overflow: "hidden",
        maxHeight: "100%",
      },
      card1Pressable: {
        position: "absolute",
        top: 134,
        left: 30,
        width: 155.11,
        height: 156,
      },
      view: {
        position: "relative",
        backgroundColor: "#fff",
        flex: 1,
        width: "100%",
        height: 823,
        overflow: "hidden",
      },
});

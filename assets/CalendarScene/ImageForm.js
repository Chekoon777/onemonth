import { useEffect } from 'react';
import { TouchableOpacity, View, Image, Text, Linking, Animated } from 'react-native';

import { styles } from './CalendarStyle';

const PATTERN_LINKS = [
    null,
    null,
    null,
    null,
    null,
    null,
    "https://www.culture.go.kr/tradition/traditionalDesignPatternView.do?seq=9199&did=78069&reffer=shape&sType=00&sWord=9199&gubun=all&pages=20&cPage=1",
    "https://www.culture.go.kr/tradition/traditionalDesignPatternView.do?seq=9584&did=69520&reffer=shape&sType=00&sWord=9584&gubun=all&cPage=1",
    "https://www.culture.go.kr/tradition/traditionalDesignPatternView.do?seq=9793&did=63859&reffer=shape&sType=00&sWord=9793&gubun=all&cPage=1",
    "https://www.culture.go.kr/tradition/traditionalDesignPatternView.do?seq=5228&did=51375&reffer=shape&sType=00&sWord=5228&gubun=all&pages=20&cPage=1",
    "https://www.culture.go.kr/tradition/traditionalDesignPatternView.do?seq=9552&did=81688&reffer=shape&sType=00&sWord=9552&gubun=all&cPage=1",
    "https://www.culture.go.kr/tradition/traditionalDesignPatternView.do?seq=9494&did=80628&reffer=shape&sType=00&sWord=9494&gubun=all&cPage=1",
];

const IMG = [
    require("../Images/1.png"),
    require("../Images/2.png"),
    require("../Images/3.png"),
    require("../Images/4.png"),
    require("../Images/5.png"),
    require("../Images/6.png"),
    require("../Images/7.png"),
    require("../Images/8.png"),
    require("../Images/9.png"),
    require("../Images/10.png"),
    require("../Images/11.png"),
    require("../Images/12.png"),
];

const IMAGE_NAMES = [
    "태극문(8536)",
    "해태문(8687)",
    "학문(9115)",
    "연덩굴문(9174)",
    "연꽃문(9193)",
    "아자문(9500)",
    "십장생문(9199)",
    "소나무문(9584)",
    "불꽃문(9793)",
    "봉황문수막새문(5228)",
    "복자문(9552)",
    "모란문(9494)",
];

const WHERE_FROM = [
    "한국/조선후기",
    "한국/조선",
    "한국/20세기",
    "한국/조선",
    "한국/조선",
    "한국/조선후기",
    "한국/조선",
    "한국/조선",
    "한국/근대",
    "한국/조선",
    "한국/20세기",
    "한국/조선후기",
];

const SOURCE = [
    "노리개",
    "동관왕묘 석수",
    "붓주머니(필낭)",
    "제주향교 화반",
    "반닫이 백동장석",
    "베갯모",
    "백동반닫이",
    "자수보자기",
    "미상",
    "봉황문수막새",
    "베갯모",
    "방석",
];

export default function ImageForm({ month }) {
    const handlePress = async (url) => {
        await Linking.openURL(url);
    };

    return(
        <>
            <Animated.View>
                <Text style={styles.imagenametext}>
                    {IMAGE_NAMES[month-1]}
                </Text>
                <Image source={IMG[month-1]} style={styles.image} />
                <Text style={[styles.descriptiontext, {marginBottom: 5}]}>
                    국적/시대: {WHERE_FROM[month-1]}
                </Text>
            </Animated.View>
            <View style={styles.descriptionform}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {handlePress(PATTERN_LINKS[month-1])}}
                    style={[styles.detailbutton, styles.shadowProp]}
                >
                    <Text style={styles.detailbuttontext}>
                        자세히 알아보기
                    </Text>
                </TouchableOpacity>
                <Text style={styles.descriptiontext}>
                    원천유물명: {SOURCE[month-1]}
                </Text>
            </View>
        </>
    );
}
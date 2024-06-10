import {View, StyleSheet, Text, Image} from "react-native";
import {horizontalScale, moderateScale, verticalScale} from "@/utility/metrics";
import {getIIIFImageURL} from "@/utility/getIIIFImageURL";
import {ArtworkEntity} from "@/models/ArtworkEntity";

const ArtworkItem = ({item}: { item: ArtworkEntity }) => {
    return (
        <View style={[styles.photoListElementContainer, styles.shadow]}>
            <View>
                <Image
                    source={{uri: item.image_url}}
                    style={styles.photoListElementImage}
                    alt="Photo"
                />
                <Text
                    style={styles.photoListElementDescriptionText}
                >
                    {item.title}
                </Text>
            </View>
            <Text
                style={styles.photoListElementByText}
            >
                {item.artist_display}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    photoListElementContainer: {
        flex: 1,
        borderColor: "black",
        borderWidth: 1,
        marginVertical: verticalScale(5),
        width: horizontalScale(210),
        height: verticalScale(450),
        justifyContent: "space-between",
        marginHorizontal: horizontalScale(5),
        backgroundColor: "#fff",
        borderRadius: moderateScale(3)
    },
    shadow: {
        shadowColor: "#171717",
        // Shadow for android devices:
        elevation: 5,
        // Shadow for IOS devices:
        shadowOffset: {width: horizontalScale(-2), height: verticalScale(4)},
        shadowOpacity: 0.2,
        shadowRadius: moderateScale(3),
    },
    photoListElementImage: {
        height: verticalScale(150),
        width: horizontalScale(150),
        marginTop: verticalScale(5),
        borderRadius: moderateScale(3),
        borderColor: "gray",
        borderWidth: 1,
        alignSelf: "center"
    },
    photoListElementByText: {
        color: "gray",
        maxWidth: horizontalScale(95),
        marginBottom: verticalScale(3),
        marginLeft: horizontalScale(5)
    },
    photoListElementDescriptionText: {
        marginHorizontal: horizontalScale(5),
        marginTop: verticalScale(7)
    },
});

export default ArtworkItem
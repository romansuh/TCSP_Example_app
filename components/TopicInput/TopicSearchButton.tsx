import {Pressable, View, StyleSheet, Text} from "react-native";
import {horizontalScale, moderateScale, verticalScale} from "@/utility/metrics";

const TopicSearchButton = ({handlePress}: { handlePress: () => void }) => {
    return (
        <Pressable
            onPress={handlePress}
        >
            <View
                style={styles.loadPhotosButton}
            >
                <Text style={styles.loadPhotosButtonText}>Search</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    loadPhotosButton: {
        alignItems: "center",
        alignSelf: "center",
        paddingHorizontal: horizontalScale(7),
        paddingVertical: verticalScale(14),
        marginTop: verticalScale(5),
        width: horizontalScale(100),
        backgroundColor: "#2d43cc",
        borderRadius: moderateScale(5),

        shadowColor: "#171717",
        // Shadow for android devices:
        elevation: 20,
        // Shadow for IOS devices:
        shadowOffset: {width: horizontalScale(-2), height: verticalScale(4)},
        shadowOpacity: 0.5,
        shadowRadius: moderateScale(3),
    },
    loadPhotosButtonText: {
        textAlign: "center",
        fontSize: moderateScale(16),
        color: "#ffffff",
        fontWeight: "bold"
    }
})


export default TopicSearchButton;
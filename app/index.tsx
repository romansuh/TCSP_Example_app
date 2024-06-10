import {Platform, SafeAreaView, StatusBar} from "react-native";
import ArtworksList from "@/components/ArtworksList/ArtworksList";

export default function Index() {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
                paddingHorizontal: 15,
                justifyContent: "center"
            }}
        >
            <ArtworksList/>
        </SafeAreaView>
    );
}

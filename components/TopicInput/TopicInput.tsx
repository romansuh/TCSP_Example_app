import {View} from "react-native";
import TopicTextInput from "./TopicTextInput";
import TopicSearchButton from "./TopicSearchButton";
import {useState} from "react";
import {observer} from "mobx-react";
import {artworksListViewModel} from "@/components/ArtworksList/ArtworksList";

const TopicInput = () => {
    const [searchableTopic, setSearchableTopic]
        = useState<string>(artworksListViewModel.activeTopic);

    const handleSearchByTopic = () => {
        artworksListViewModel.fetchArtworksByTopic(searchableTopic)
            .then(() => console.log("Searched artworks by topic"))
            .catch(e => console.log("Searching by topic error: ", e))
    }

    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between"
            }}
        >
            <TopicTextInput topic={searchableTopic} setTopic={setSearchableTopic}/>
            <TopicSearchButton handlePress={handleSearchByTopic}/>
        </View>
    )
}

export default observer(TopicInput);
import {ActivityIndicator, FlatList, Text} from "react-native";
import {observer} from "mobx-react/src";
import ArtworkItem from "@/components/ArtworksList/ArtworkItem";
import {useEffect} from "react";
import TopicInput from "@/components/TopicInput/TopicInput";
import dataSource from "@/data/DataSource";
import ArtworksListViewModel from "@/viewModels/ArtworksListViewModel";

export const artworksListViewModel = new ArtworksListViewModel(dataSource)

const ArtworksList = () => {
    useEffect(() => {
        setTimeout(() => {
            artworksListViewModel.fetchArtworks()
                .then(() => console.log("Artworks fetched by list component"))
                .catch(e => console.log("Fetching artworks by list component error:", e))

        }, 1000)

        return () => {
            console.log("Artworks deleted completed")
        }
    }, []);

    if (artworksListViewModel.status === "pending") {
        return <ActivityIndicator size="large" style={{alignSelf: "center"}} color="#2d43cc"/>
    }

    if (artworksListViewModel.status === "failed") {
        return <Text style={{color: "red"}}>Error loading artworks</Text>
    }

    return (
        <FlatList
            data={artworksListViewModel.artworks}
            renderItem={ArtworkItem}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={TopicInput}
            stickyHeaderIndices={[0]}
        />
    )
}

export default observer(ArtworksList)
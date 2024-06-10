import React from "react";
import {TextInput} from "react-native";
import {moderateScale, verticalScale} from "@/utility/metrics";

const TopicTextInput = (
    {topic, setTopic}: {
        topic: string,
        setTopic: React.Dispatch<React.SetStateAction<string>>
    }) => {

    return (
        <TextInput
            style={{
                height: verticalScale(40),
                margin: 12,
                borderWidth: 1,
                padding: 10,
                flex: 1,
                backgroundColor: "#fff",
                borderRadius: moderateScale(5)
            }}
            value={topic}
            placeholder={"Enter topic"}
            onChangeText={setTopic}
        />
    )
}

export default TopicTextInput;
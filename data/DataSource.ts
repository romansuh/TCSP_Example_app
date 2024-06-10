import {DataSource} from "typeorm";
import * as SQLite from "expo-sqlite/legacy";
import {ArtworkEntity} from "@/models/ArtworkEntity";

const dataSource = new DataSource({
    database: "artworks",
    driver: SQLite,
    entities: [
        ArtworkEntity
    ],
    synchronize: true,
    type: "expo",
})

export default dataSource;
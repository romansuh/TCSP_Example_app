import {makeAutoObservable, runInAction} from "mobx";
import {ArtworkEntity} from "@/models/ArtworkEntity";
import {ArtworksRepository} from "@/data/ArtworksRepository";
import {DataSource} from "typeorm";
import {ArtworkData} from "@/models/Artworks";

type Status = "pending" | "fulfilled" | "failed"

const ARTIC_BASE_URL = "https://api.artic.edu/api/v1/artworks"
const ARTIC_SEARCH_URL = "https://api.artic.edu/api/v1/artworks/search"

class ArtworksListViewModel {
    artworks: ArtworkEntity[] = []
    status: Status = "pending"
    error: string = ""
    activeTopic: string = ""
    artworksRepository: ArtworksRepository;

    constructor(dataSource: DataSource) {
        this.connect(dataSource).then(connection => {
                this.artworksRepository = new ArtworksRepository(connection)
            }
        )
        makeAutoObservable(this)
    }

    private async connect(dataSource: DataSource) {
        return dataSource.initialize()
    }

    async fetchArtworks() {
        this.status = "pending"
        try {
            const databaseArtworks = await this.artworksRepository.getAll();

            if (databaseArtworks.length) {
                runInAction(() => {
                    this.status = "fulfilled"
                    this.artworks = databaseArtworks
                    this.error = ""
                    this.activeTopic = ""
                })
            } else {
                const fetchUrl = new URL(ARTIC_BASE_URL)
                fetchUrl.searchParams.append("fields", "title,artist_display,image_id")

                const response = await fetch(fetchUrl)
                const artworksFromApi = (await response.json()).data as ArtworkData[]

                const artworks: ArtworkEntity[] = []
                for (const artwork of artworksFromApi) {
                    artworks.push(await this.artworksRepository.create(artwork))
                }

                runInAction(() => {
                    this.status = "fulfilled"
                    this.artworks = artworks
                    this.error = ""
                    this.activeTopic = ""
                })
            }
        } catch (e) {
            console.log("Fetching data", e)
            runInAction(() => {
                this.status = "failed"
                this.error = String(e)
            })
        }
    }

    async fetchArtworksByTopic(topic: string) {
        this.status = "pending"
        try {
            const searchUrl = new URL(ARTIC_SEARCH_URL)
            searchUrl.searchParams.append("q", topic)
            searchUrl.searchParams.append("fields", "title,artist_display,image_id")

            const response = await fetch(searchUrl)
            const artworksFromApi = (await response.json()).data as ArtworkData[]

            await this.artworksRepository.removeAll()
            const artworks: ArtworkEntity[] = []
            for (const artwork of artworksFromApi) {
                artworks.push(await this.artworksRepository.create(artwork))
            }

            runInAction(() => {
                this.status = "fulfilled"
                this.artworks = artworks
                this.error = ""
                this.activeTopic = topic
            })
        } catch (e) {
            console.log("Fetching data", e)
            runInAction(() => {
                this.status = "failed"
                this.error = String(e)
            })
        }
    }
}

export default ArtworksListViewModel;
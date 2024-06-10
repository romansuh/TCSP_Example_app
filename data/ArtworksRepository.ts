import {ArtworkEntity} from "@/models/ArtworkEntity";
import {DataSource, Repository} from "typeorm";
import {ArtworkData} from "@/models/Artworks";
import {getIIIFImageURL} from "@/utility/getIIIFImageURL";
export class ArtworksRepository {
    private ormRepository: Repository<ArtworkEntity>;

    constructor(connection: DataSource | null) {
        if (connection)
        this.ormRepository = connection.getRepository(ArtworkEntity);
    }

    public async getAll(): Promise<ArtworkEntity[]> {
        return await this.ormRepository.find();
    }

    public async create(artworkData: ArtworkData): Promise<ArtworkEntity> {
        const artwork = this.ormRepository.create({
            title: artworkData.title,
            image_url: getIIIFImageURL(artworkData.image_id),
            artist_display: artworkData.artist_display
        })

        await this.ormRepository.save(artwork)

        return artwork
    }

    public async removeAll(): Promise<void> {
        await this.ormRepository.clear()
    }
}
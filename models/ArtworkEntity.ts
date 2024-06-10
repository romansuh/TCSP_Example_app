import {Column, Entity, PrimaryGeneratedColumn} from "typeorm/browser";

@Entity()
export class ArtworkEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    image_url: string;

    @Column()
    title: string;

    @Column()
    artist_display: string;
}
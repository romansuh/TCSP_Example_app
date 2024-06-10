export interface ArticResponse {
    config: ArtworksConfig;
    data: ArtworkData[];
    info: ArtworksInfo;
    pagination: ArtworksPagination;
}

export interface ArtworksPagination {
    current_page: number;
    limit: number;
    next_url: string;
    offset: number;
    total: number;
    total_pages: number;
}

export interface ArtworksDataThumbnail {
    alt_text: string;
    height: number;
    lqip: string;
    width: number;
}

export interface ArtworksDataDimensions_detail {
    clarification: string;
    depth?: any;
    diameter?: any;
    height: number;
    width: number;
}

export interface ArtworksDataColor {
    h: number;
    l: number;
    percentage: number;
    population: number;
    s: number;
}

export interface ArtworksDataSuggest_autocomplete_allContexts {
    groupings: string[];
}

export interface ArtworksDataSuggest_autocomplete_all {
    contexts: ArtworksDataSuggest_autocomplete_allContexts;
    input: string[];
}

export interface ArtworkData {
    artist_display: string;
    artist_id: number;
    artist_ids: number[];
    artist_title: string;
    artist_titles: string[];
    artwork_type_id: number;
    artwork_type_title: string;
    boost_rank?: any;
    catalogue_display: string;
    category_ids: string[];
    category_titles: string[];
    classification_id: string;
    classification_ids: string[];
    classification_title: string;
    classification_titles: string[];
    color: ArtworksDataColor;
    colorfulness: number;
    copyright_notice?: any;
    credit_line: string;
    date_display: string;
    date_end: number;
    date_qualifier_id?: any;
    date_qualifier_title: string;
    date_start: number;
    department_id: string;
    department_title: string;
    description?: any;
    dimensions: string;
    dimensions_detail: ArtworksDataDimensions_detail[];
    document_ids: any[];
    edition?: any;
    exhibition_history?: any;
    fiscal_year: number;
    fiscal_year_deaccession?: any;
    gallery_id?: any;
    gallery_title?: any;
    has_advanced_imaging: boolean;
    has_educational_resources: boolean;
    has_multimedia_resources: boolean;
    has_not_been_viewed_much: boolean;
    id: number;
    image_id: string;
    inscriptions?: any;
    internal_department_id: number;
    is_boosted: boolean;
    is_on_view: boolean;
    is_public_domain: boolean;
    is_zoomable: boolean;
    latitude?: any;
    latlon?: any;
    longitude?: any;
    main_reference_number: string;
    material_id: string;
    material_ids: string[];
    material_titles: string[];
    max_zoom_window_size: number;
    medium_display: string;
    nomisma_id?: any;
    on_loan_display: string;
    place_of_origin: string;
    provenance_text?: any;
    publication_history?: any;
    publishing_verification_level: string;
    section_ids: any[];
    section_titles: any[];
    short_description?: any;
    site_ids: any[];
    sound_ids: any[];
    source_updated_at: string;
    style_id?: any;
    style_ids: any[];
    style_title?: any;
    style_titles: any[];
    subject_id: string;
    subject_ids: string[];
    subject_titles: string[];
    suggest_autocomplete_all: ArtworksDataSuggest_autocomplete_all[];
    technique_id?: any;
    technique_ids: any[];
    technique_titles: any[];
    term_titles: string[];
    text_ids: any[];
    theme_titles: string[];
    thumbnail: ArtworksDataThumbnail;
    timestamp: string;
    title: string;
    updated_at: string;
    video_ids: any[];
}

export interface ArtworksInfo {
    license_links: string[];
    license_text: string;
    version: string;
}

export interface ArtworksConfig {
    iiif_url: string;
    website_url: string;
}
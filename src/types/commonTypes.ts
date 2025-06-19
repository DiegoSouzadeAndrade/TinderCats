export interface Cat {
    id: string;
    name: string;
    reference_image_id?: string;
    image?: {
        url: string;
    };
    [key: string]: any
}
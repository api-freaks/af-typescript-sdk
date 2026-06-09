export interface GetCountriesResponse {
    countries: GetCountriesResponse.Countries.Item[];
}
export declare namespace GetCountriesResponse {
    type Countries = Countries.Item[];
    namespace Countries {
        interface Item {
            name: string;
            iso_alpha_2: string;
            iso_alpha_3: string;
            iso_numeric: number;
            capital: string;
            region: string;
            subregion: string;
        }
    }
}

export interface GetCitiesResponse {
    cities: GetCitiesResponse.Cities.Item[];
}
export declare namespace GetCitiesResponse {
    type Cities = Cities.Item[];
    namespace Cities {
        interface Item {
            name: string;
            latitude: number;
            longitude: number;
            admin_unit: Item.AdminUnit;
            iso_alpha_2: string;
        }
        namespace Item {
            interface AdminUnit {
                name: string;
                admin_code: string;
                admin_level: string;
            }
        }
    }
}

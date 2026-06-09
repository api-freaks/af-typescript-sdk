export interface GetAdminUnitsResponse {
    admin_units: GetAdminUnitsResponse.AdminUnits.Item[];
}
export declare namespace GetAdminUnitsResponse {
    type AdminUnits = AdminUnits.Item[];
    namespace AdminUnits {
        interface Item {
            name: string;
            admin_code: string;
            admin_level: string;
        }
    }
}

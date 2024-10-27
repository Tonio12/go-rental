export declare const CarStatus: string[];
export declare const CarBrand: string[];
export declare const CarCategories: string[];
export declare const CarFuelTypes: string[];
export declare const CarTransmissions: string[];
export declare const CarDoors: number[];
export declare const CarSeats: number[];
export interface ICar {
    id: string;
    name: string;
    description: string;
    status: string;
    rentPerDay: number;
    address: string;
    images: {
        url: string;
        public_id: string;
    }[];
    reviews: string[];
    brand: string;
    year: number;
    transmission: string;
    doors: number;
    seats: number;
    milleage: number;
    power: number;
    fuelType: string;
    category: string;
    ratings: {
        value: number;
        count: number;
    };
    createdAt: string;
    updatedAt: string;
}
//# sourceMappingURL=interfaces.d.ts.map
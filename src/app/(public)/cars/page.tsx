import {FC} from 'react';
import {ICar} from '@/models/ICar';
import CarsComponent from "@/components/CarsComponents";

const fetchCars = async () => {
    const res = await fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    });
    const cars: ICar[] = await res.json();
    return cars;
};

const CarsPage: FC = async () => {
    const cars = await fetchCars();

    return (
        <div>
            <h1>Cars</h1>
            <CarsComponent cars={cars}/>
        </div>
    );
};

export default CarsPage;



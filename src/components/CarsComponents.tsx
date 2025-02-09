import {FC} from 'react';
import {ICar} from '@/models/ICar';
import CarComponent from './CarComponent';

interface CarsComponentProps {
    cars: ICar[];
}

const CarsComponent: FC<CarsComponentProps> = ({cars}) => {
    return (
        <div>
            {cars.map((car) => (
                <CarComponent key={car.id} item={car}/>
            ))}
        </div>
    );
};

export default CarsComponent;




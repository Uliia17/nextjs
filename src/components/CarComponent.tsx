import {FC} from 'react';
import {ICar} from '@/models/ICar';

type CarTypeProps = {
    item: ICar;
};

const CarComponent: FC<CarTypeProps> = ({item}) => {
    return (
        <div>
            <p>
                <strong>{item.brand}</strong> — {item.price} UAH ({item.year})
            </p>
        </div>
    );
};

export default CarComponent;

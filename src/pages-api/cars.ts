import {NextApiRequest, NextApiResponse} from 'next';
import {ICar} from '@/models/ICar';
import {CarValidator} from '@/validators/CarValidator';
import sql from 'better-sqlite3';

const db = sql('cars.db');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const car: ICar = req.body;

        const {error} = CarValidator.validate(car);
        if (error) {
            return res.status(400)
                .json({error: error.details.map(detail => detail.message)
                        .join(', ')});
        }

        const stmt = db.prepare('INSERT INTO cars (brand, price, year) VALUES (?, ?, ?)');
        stmt.run(car.brand, car.price, car.year);

        return res.status(201).json(car);
    }

    if (req.method === 'GET') {
        const stmt = db.prepare('SELECT * FROM cars');
        const cars: unknown[] = stmt.all();

        const carsTyped: ICar[] = cars.map(car => {
            if (typeof car === 'object' && car !== null && 'brand' in car && 'price' in car && 'year' in car) {
                return car as ICar;
            } else {
                throw new Error('Invalid data');
            }
        });

        return res.status(200).json(carsTyped);
    }

    return res.status(405).json({ error: 'Method not allowed' });
}



"use client";

import {FC} from 'react';
import {ICar} from '@/models/ICar';
import {CarValidator} from '@/validators/CarValidator';
import Form from 'next/form';
import {addCar} from "@/services/CarService";

const CreateCarPage: FC = () => {
    const handleSubmit = async (formData: FormData) => {
        const car: ICar = {
            brand: formData.get('brand') as string,
            price: Number(formData.get('price')),
            year: Number(formData.get('year'))
        };

        const { error } = CarValidator.validate(car);

        if (error) {
            alert(`${error.details.map(detail => detail.message).join(', ')}`);
            return;
        }

        try {
            await addCar(car);
            alert('Car created successfully!');
        } catch (error) {
            console.error('Error creating car:', error);
        }
    };

    return (
        <div>
            <Form action={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="brand"
                        placeholder="Brand"
                        required
                    />
                </div>
                <div>
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        required
                    />
                </div>
                <div>
                    <input
                        type="number"
                        name="year"
                        placeholder="Year"
                        required
                    />
                </div>
                <button type="submit">Add</button>
            </Form>
        </div>
    );
};

export default CreateCarPage;




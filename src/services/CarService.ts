import axios from 'axios';
import {ICar} from '@/models/ICar';

const API_URL = 'http://owu.linkpc.net/carsAPI/v1';

export const getAllCars = async (): Promise<ICar[]> => {
    const response = await axios.get<ICar[]>(`${API_URL}/cars`);
    return response.data;
};

export const addCar = async (car: ICar): Promise<ICar> => {
    const response = await axios.post<ICar>(`${API_URL}/cars`, car);
    return response.data;
};





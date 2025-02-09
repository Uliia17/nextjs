'use server';
import sql from 'better-sqlite3';
import {revalidatePath} from "next/cache";

const db = sql('meals.db')

const saveMeal = async (formData:FormData) => {
    // console.log(formData);
    // console.log('saveAction');
    const titleValue = formData.get('title');
    db.prepare('insert into meals(title) values(?)')
        .run(titleValue);
    revalidatePath('/');
};

export default saveMeal;

type Meal = { id: number, title: string };
export const getMeals = async ():Promise<Meal[]> => {
   return db.prepare<Meal[]>('select * from meals')
       .all() as Meal[];
}
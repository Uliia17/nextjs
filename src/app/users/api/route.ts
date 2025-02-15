// export async function GET(){
//     console.log('GET request route handler');
//     const users = await fetch('https://jsonplaceholder.typicode.com/users')
//                 .then(value => value.json());
//
//     return Response.json(users);
// }

export const GET = async (req: Request, res: Response) => {
    return Response.json({message: req.url, status: 200});
}

import {IUser} from "@/models/IUser";

export type SearchParams = {
    [key: string]: string | string[] | undefined;
};

export const parseSearchParams = async (searchParams: Promise<SearchParams>): Promise<IUser | null> => {
    const {data} = await searchParams;
    if (typeof data === "string") {
        return JSON.parse(data) as IUser;
    }
    return null;
};

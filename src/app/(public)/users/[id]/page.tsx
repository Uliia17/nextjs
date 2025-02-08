import {FC} from "react";
import {parseSearchParams, SearchParams} from "@/helpers/helpers";

type Props = {
    params: Promise<{ id: string }>;
    searchParams: Promise<SearchParams>;
};

const UserPage: FC<Props> = async ({searchParams}) => {
    const message = await parseSearchParams(searchParams);

    return (
        <div>
            {
                message && <>user page {message.id} {message.name}</>
            }
        </div>
    );
};

export default UserPage;

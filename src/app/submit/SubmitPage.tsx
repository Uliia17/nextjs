import {FC} from "react";

export type Props = {
    searchParams:Promise<{ [key: string]: string | string[] | undefined; }>
};
const SubmitPage:FC<Props> = async ({searchParams}) => {
    const awaitedSP = await searchParams;

    return (
        <div>
            submit page {awaitedSP.name}
        </div>
    );
};

export default SubmitPage;
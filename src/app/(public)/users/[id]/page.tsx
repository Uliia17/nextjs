import {FC} from "react";
import {Metadata} from "next";

type Props = {
    params: {id:string}
}

const UserPage:FC<Props> = async ({params}) => {
    console.log(params);
    const {id} = await params;

    return (
        <div>
           user page {id}
        </div>
    );
};

export default UserPage;
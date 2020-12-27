import { formatWithValidation } from "next/dist/next-server/lib/utils"
import {useRouter} from 'next/router';

export default function bruno(){
    const router = useRouter();
    return <h1>{router.query.vehicle} {router.query.bruno} </h1>
}
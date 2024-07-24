import {resetDB} from "../../db/db";


export const testingRepository = {
    deleteAll () {
        return resetDB()
    }
}

import {deleteAllController} from "../testing/controllers/deleteAllController";
import router from "./blogsRoutes";


router.route('/').delete(deleteAllController)

export default router

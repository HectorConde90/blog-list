import Router from 'express';
import list from '../controllers/blog/list.js'
import create from '../controllers/blog/create.js'

const router = Router();

router.route('/')
    .get(list)
    .post(create);

export default router;

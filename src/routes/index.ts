import { Router } from 'express';

const router = Router();

import { createPhoto, getPhotos, getPhoto, deletePhoto, updatedPhoto } from '../controllers/photo.controller';

import multer from '../libs/multer'
router.route('/photos')
    .get(getPhotos)
    .post(multer.single('image'), createPhoto);
    
router.route('/photos/:id')
    .get(getPhoto)
    .delete(deletePhoto)
    .put(updatedPhoto)


export default router;
import express from 'express';
import {
  listSignalements,
  showForm,
  createSignalement,
  deleteSignalement
} from '../controllers/signalementController';

const router = express.Router();

router.get('/', listSignalements);
router.get('/new', showForm);
router.post('/', createSignalement);
router.post('/:id/delete', deleteSignalement);

export default router;
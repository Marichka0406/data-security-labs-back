import express from 'express';
import { hashString, hashFile, verifyFile } from '../controllers/md5Controller';

const router = express.Router();

router.get('/hash', hashString);
router.post('/file-hash', hashFile);
router.post('/verify-file', verifyFile);

export default router;
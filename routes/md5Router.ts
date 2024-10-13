import express, { RequestHandler } from 'express';
import { hashString, hashFile, verifyFile } from '../controllers/md5Controller';

const router = express.Router();

router.get('/hash', hashString as RequestHandler);
router.post('/file-hash', hashFile as RequestHandler[]);
router.post('/verify-file', verifyFile as RequestHandler[]);

export default router;
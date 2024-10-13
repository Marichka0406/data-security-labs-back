import { Request, Response } from 'express';
import { Md5Service } from '../services/md5Service';
import multer from 'multer';

const upload = multer({ storage: multer.memoryStorage() });
const md5Service = new Md5Service();

export const hashString = async (req: Request, res: Response) => {
  try {
    const inputBuffer = Buffer.from(req.query.input as string, 'utf-8');
    const hash = await md5Service.md5(inputBuffer);
    res.json(hash);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const hashFile = [
  upload.single('file'),
  async (req: Request, res: Response) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file provided' });
      }
      const fileContent = req.file.buffer;
      const hash = await md5Service.md5(fileContent);
      res.json(hash);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
];

export const verifyFile = [
  upload.single('file'),
  async (req: Request, res: Response) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file provided' });
      }
      const fileContent = req.file.buffer;
      const expectedHash = req.body.expectedHash;
      const isVerified = await md5Service.verifyFileIntegrity(
        fileContent,
        expectedHash,
      );
      res.json(isVerified);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
];

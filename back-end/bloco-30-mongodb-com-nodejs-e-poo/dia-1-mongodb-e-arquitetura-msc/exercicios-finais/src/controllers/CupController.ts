import { Request, Response } from 'express';
import CupService from '../services/CupService';

export default class CupController {
  constructor(private cupService = new CupService()) {}

  internalError = 'Internal server error';

  public getCups = async (req: Request, res: Response): Promise<Response> => {
    try {
      const cups = await this.cupService.getCups();

      return res.status(200).send(cups);
    } catch (err: unknown) {
      return res.status(500).send({ message: this.internalError });
    }
  };
};
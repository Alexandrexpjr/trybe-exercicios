import { model as createModel } from 'mongoose';
import { CupSchema, ICup } from '../schemas/CupSchema';

export default class CupModel {
  constructor(private cupModel = createModel<ICup>('tournaments', CupSchema)) {}

  public async getCups(): Promise<ICup[]> {
    const cups = await this.cupModel.find();
    return cups;
  }

  public async getCupByYear(year: number): Promise<ICup | null> {
    const cup = await this.cupModel.findOne({ year });
    return cup;
  }

  public async create(data: ICup): Promise<ICup | null> {
    const cup = await this.cupModel.create(data);
    return cup;
  }
}
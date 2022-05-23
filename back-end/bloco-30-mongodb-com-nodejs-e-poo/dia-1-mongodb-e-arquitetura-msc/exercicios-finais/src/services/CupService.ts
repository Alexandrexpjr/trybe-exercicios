import CupModel from "../models/CupModel";
import { ICup } from "../schemas/CupSchema";

export default class CupService {
  constructor(private cupModel = new CupModel()) {}

  public async getCups(): Promise<ICup[]> {
    const cups = await this.cupModel.getCups();
    return cups;
  }

  public async getCupByYear(year: number): Promise<ICup|null> {
    const cup = await this.cupModel.getCupByYear(year);
    return cup;
  }

  public async create(data: ICup): Promise<ICup|null> {
    const cup = await this.cupModel.create(data);
    return cup;
  }
}
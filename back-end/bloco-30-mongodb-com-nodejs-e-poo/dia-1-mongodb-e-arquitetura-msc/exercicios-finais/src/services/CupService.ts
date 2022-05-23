import CupModel from "../models/CupModel";
import { ICup } from "../schemas/CupSchema";

export default class CupService {
  constructor(private cupModel = new CupModel()) {}

  public async getCups(): Promise<ICup[]> {
    const cups = await this.cupModel.getCups();
    return cups;
  }
}
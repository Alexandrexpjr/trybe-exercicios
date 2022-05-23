import { Schema } from "mongoose";

export interface ICup {
  year: number,
  hostCountry: string,
  champions: string,
  runnerUp: string,
  editionGoals: number,
  editionStrikers: string[],
  bestPlayer: string,
  bestGoalkeeper: string,
  bestYoungPlayer: string,
}

export const CupSchema = new Schema<ICup>({
  year: Number,
  hostCountry: String,
  champions: String,
  runnerUp: String,
  editionGoals: Number,
  editionStrikers: [ String ],
  bestPlayer: String,
  bestGoalkeeper: String,
  bestYoungPlayer: String,
})
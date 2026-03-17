// types.ts

import { Tensor } from 'machine-learning-engine';

export interface ModelInput {
  data: Tensor;
}

export interface ModelOutput {
  predictions: Tensor;
}

export interface ModelConfig {
  modelType: string;
  layers: LayerConfig[];
}

export interface LayerConfig {
  type: string;
  neurons: number;
  activation: string;
}

export interface TrainingConfig {
  batchSize: number;
  epochs: number;
  learningRate: number;
}

export interface TrainingOutput {
  loss: number;
  accuracy: number;
}

export interface TrainingSummary {
  epochs: number;
  loss: number[];
  accuracy: number[];
}
// types.ts

export interface ModelConfig {
  model: string;
  epochs: number;
  batch_size: number;
  loss_fn: string;
  optimizer: string;
  metrics: string[];
}

export interface DataConfig {
  train: string;
  validation: string;
  test: string;
  input_shape: number[];
  output_shape: number[];
  categories: string[];
}

export interface HyperparameterSearchConfig {
  model: string;
  param_grid: { [key: string]: any }[];
  scoring: string;
  n_iter: number;
  cv: number;
  random_state: number;
  verbose: number;
}

export interface TrainingConfig {
  model_config: ModelConfig;
  data_config: DataConfig;
  hyperparameter_search_config: HyperparameterSearchConfig;
}

export interface ModelOutput {
  model: any;
  history: any;
  metrics: { [key: string]: number[] };
}

export interface ModelEvaluation {
  model_name: string;
  score: number;
  metrics: { [key: string]: number };
}

export interface ModelPrediction {
  input: number[][];
  output: number[][];
}
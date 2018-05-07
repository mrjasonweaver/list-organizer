export interface IUiState {
  actionOngoing: boolean;
  message: string;
  page: number;
  sort: string;
  order: string;
}

export const initialUiState: IUiState = {
  actionOngoing: false,
  message: '',
  page: 1,
  sort: 'created',
  order: 'desc'
};

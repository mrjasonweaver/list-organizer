export interface IUiState {
  actionOngoing: boolean;
  message: string;
  perPage: string;
  page: string;
  sort: string;
  order: string;
}

export const initialUiState: IUiState = {
  actionOngoing: false,
  message: '',
  perPage: '10',
  page: '1',
  sort: 'created',
  order: 'desc'
};

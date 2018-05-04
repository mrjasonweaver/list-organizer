export interface IIssue {
  id: number;
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  number: number;
  state: string;
  title: string;
  body: string;
  user: {
    login: string;
    id: number;
    avatar_url: string;
    url: string;
    html_url: string;
  };
  created_at: string;
}

export interface IParams {
  username: string;
  repo: string;
  page: number;
  perPage: number;
}

export const params: IParams = {
  username: 'angular',
  repo: 'angular',
  page: 1,
  perPage: 10
}

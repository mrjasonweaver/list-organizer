export interface IIssue {
  id: number;
  url: string;
  comments: number;
  number: number;
  title: string;
  body: string;
  user: {
    login: string;
  };
  created_at: string;
}

export interface IIssuesObject {
  total_count: number;
  items: IIssue[];
}

export const issuesObject: IIssuesObject = {
  total_count: 100,
  items: []
};

export interface IParams {
  username: string;
  repo: string;
  page: number;
  perPage: number;
  sort: string;
  order: string;
}

export const params: IParams = {
  username: 'angular',
  repo: 'angular',
  page: 1,
  perPage: 10,
  sort: 'created',
  order: 'desc'
};

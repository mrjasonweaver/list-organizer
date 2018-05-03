export interface IIssue {
  id: number;
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  number: number
  state: string;
  title: string;
  body: string;
  user: {
    login: string;
    id: number;
    avatar_url: string;
    url: string;
    html_url: string;
  },
}
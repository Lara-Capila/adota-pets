export interface ApiGetParams {
  url: string | URL;
}

export interface ApiPostParams extends ApiGetParams {
  body?: any;
}

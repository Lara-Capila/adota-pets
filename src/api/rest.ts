import { ApiGetParams, ApiPostParams } from '../@types/api';

export default {
  async get({ url }: ApiGetParams) {
    const response = await fetch(`/api/${url}`).then((res) => res.json());

    return await response;
  },

  async post({ body, url }: ApiPostParams) {
    const response = await fetch(`/api/${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer my-token',
        'My-Custom-Header': 'foobar',
      },
      body,
    });

    return { data: response.json() };
  },
};

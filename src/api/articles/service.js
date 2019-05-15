import request from 'superagent';

export default {
  list(query = {}) {
    return request.get('/articles', query);
  },
  getById(id, query) {
    if (!id) return Promise.reject(new Error('id'));

    return request.get(`/articles/${id}`, query)
      .then(response => response.body);
  }
};

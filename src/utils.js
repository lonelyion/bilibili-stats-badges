const axios = require('axios').default;
const sess_data = process.env.SESSDATA;

export function fetch_url(url) {
  let promise = axios.get(url);
  return promise.then(res => res);
}

export function fetch_relation_stat (id, type) {
  const promise = axios.get(`https://api.bilibili.com/x/relation/stat?vmid=${id}`);
  return promise.then(res => type === 'follower' ? res.data.data.follower : res.data.data.following);
}

export function fetch_upstat(id, type) {
  const promise = axios.get(`http://api.bilibili.com/x/space/upstat?mid=${id}`, {
    headers: {
      Cookie: `SESSDATA=${sess_data};`
    }
  });
  return promise.then(res => {
    switch(type) {
      case 'likes':
        return res.data.data.likes;
      case 'article':
        return res.data.data.article.view;
      default:
        return res.data.data.archive.view;
    }
  })
}
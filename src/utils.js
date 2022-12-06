const axios = require('axios').default;
const sess_data = process.env.SESSDATA;
const UAs = [ "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.42",
              "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 EdgiOS/100.1185.50 Mobile/15E148 Safari/605.1.15" ]

export function fetch_url(url) {
  let promise = axios.get(url, {
    headers: {
      'User-Agent': UAs[Math.floor(Math.random()*UAs.length)]
    }
  });
  return promise.then(res => res);
}

export function fetch_relation_stat (id, type) {
  const promise = axios.get(`https://api.bilibili.com/x/relation/stat?vmid=${id}`, {
    headers: {
      'User-Agent': UAs[Math.floor(Math.random()*UAs.length)]
    }
  });
  return promise.then(res => type === 'follower' ? res.data.data.follower : res.data.data.following);
}

export function fetch_upstat(id, type) {
  const promise = axios.get(`https://api.bilibili.com/x/space/upstat?mid=${id}`, {
    headers: {
      Cookie: `SESSDATA=${sess_data};`,
      'User-Agent': UAs[Math.floor(Math.random()*UAs.length)]
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

export function fetch_account_info(id, type) {
  //console.log(`SESSDATA=${sess_data}`);
  const promise = axios.get(`https://api.bilibili.com/x/space/acc/info?mid=${id}`, {
    headers: {
      Cookie: `SESSDATA=${sess_data};`,
      'User-Agent': UAs[Math.floor(Math.random()*UAs.length)]
    }
  });
  return promise.then(res => {
    //console.log(res.data);
    switch(type) {
      case 'level':
        return res.data.data.level;
      default: //'live_status'
        return res.data.data.live_room.liveStatus;
    }
  })
}

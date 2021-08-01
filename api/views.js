const utils = require('../src/utils');
const constructor = require('../src/badge_constructor');

let defaults = {
  color: 'blue',
  logo_color: '00A1D6',
  style: 'flat-square',
  format: 'none',
  label: 'Bilibili 播放数',
  label_color: 'grey',
  uid: '7564991'
}

module.exports = (req, res) => {
  switch(req.query.type) {
    case 'likes':
      defaults.label = 'Bilibili 获赞数'; break;
    case 'article':
      defaults.label = 'Bilibili 阅读数'; break;
    default:
      defaults.label = 'Bilibili 播放数';
  }
  
  utils.fetch_upstat(req.query.uid, req.query.type)
  .then(count => {
    req.query.content = count;
    let svg = constructor.get_shields_svg(req.query, defaults);
      res.setHeader('Content-Type', 'image/svg+xml');
      res.setHeader('Cache-Control', 'max-age=900, public');
      res.status(200).send(svg);
  })
}
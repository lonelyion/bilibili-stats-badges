const utils = require('../src/utils');
const constructor = require('../src/badge_constructor');

const defaults = {
  color: 'blue',
  logo_color: '00A1D6',
  style: 'flat-square',
  format: 'none',
  label: 'Bilibili 粉丝数',
  label_color: 'grey',
  uid: '7564991'
}

module.exports = (req, res) => {
  utils.fetch_relation_stat(req.query.uid, 'follower')
  .then(followers => {
      req.query.content = followers;
      let svg = constructor.get_shields_svg(req.query, defaults);
      res.setHeader('Content-Type', 'image/svg+xml');
      res.setHeader('Cache-Control', 'max-age=900, public');
      res.status(200).send(svg);
      /*
      let url = constructor.get_shieldio_url(req.query, defaults);
      utils.fetch_url(url).then(response => {
        res.setHeader('Content-Type', 'image/svg+xml');
        res.setHeader('Cache-Control', 'max-age=900, public');
        res.status(200).send(response.data);
      })
      */
  })
}
const utils = require('../src/utils');
const constructor = require('../src/badge_constructor');

const defaults = {
  color: 'blue',
  logo_color: '00A1D6',
  style: 'flat-square',
  format: 'none',
  label: 'Bilibili 等级',
  label_color: 'grey',
  uid: '7564991'
}

module.exports = (req, res) => {
  utils.fetch_account_info(req.query.uid, 'level')
  .then(level => {
      req.query.content = level;
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
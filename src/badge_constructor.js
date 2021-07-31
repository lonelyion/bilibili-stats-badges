const queryString = require('querystring');

function validate_parameter(value, pattern, init) {
  if(value && pattern.test(value)) {
    return value;
  } else {
    return init;
  }
}

export function get_shieldio_url(params, defaults) {
  let color = validate_parameter(params.color, /^([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[A-Za-z]+)$/, defaults.color);
  let logo = validate_parameter(params.logo, /^[A-Za-z0-9\-]+$/, defaults.logo);
  let logo_color = validate_parameter(params.logo_color, /^([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[A-Za-z]+)$/, defaults.logo_color);
  let style = validate_parameter(params.style, /^[A-Za-z\-]+$/, defaults.style);
  let label  = validate_parameter(params.label, /^[^#&?<>]+$/, defaults.label);
  let label_color = validate_parameter(params.label_color, /^([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[A-Za-z]+)$/, defaults.label_color);
  let format = validate_parameter(params.label_color, /^(commas|short|none)$/, defaults.format);

  let message = '';
  switch(format) {
    case 'commas':
      message = number_format(params.content);
      break;
    case 'short':
      message = short_number(params.content);
      break;
    default: 
      message = params.content;
  }

  return 'https://img.shields.io/static/v1?' + queryString.stringify({
    color: color,
    logo: logo,
    logoColor: logo_color,
    style: style,
    label: label,
    labelColor: label_color,
    message: message
  })
}

function number_format(number, decimals, dec_point, thousands_point) {
  //https://stackoverflow.com/questions/12820312/
  if (number == null || !isFinite(number)) {
      throw new TypeError("number is not valid");
  }
  if (!decimals) {
      var len = number.toString().split('.').length;
      decimals = len > 1 ? len : 0;
  }
  if (!dec_point) {
      dec_point = '.';
  }
  if (!thousands_point) {
      thousands_point = ',';
  }
  number = parseFloat(number).toFixed(decimals);
  number = number.replace(".", dec_point);
  var splitNum = number.split(dec_point);
  splitNum[0] = splitNum[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousands_point);
  number = splitNum.join(dec_point);
  return number;
}

function short_number(num)
{
    let units = ['', 'k', 'm', 'b', 't'];
    let i = 0;
    for (i = 0; num >= 1000; i++) {
        num /= 1000;
    }
    return round(num, 1).toString() + units[i];
}
import axios from 'axios';

const queryString = require('querystring');
const { makeBadge, ValidationError } = require('./badge-maker')
const bilibili_logo = '<svg fill="#00A1D6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bilibili</title><path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z"/></svg>';


function validate_parameter(value, pattern, init) {
  if(value && pattern.test(value)) {
    return value;
  } else {
    return init;
  }
}

export function get_shields_svg(params, defaults) {
  let logo = validate_parameter(params.logo, /^[A-Za-z0-9\-]+$/, bilibili_logo);
  let color = validate_parameter(params.color, /^([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[A-Za-z]+)$/, defaults.color);
  let logo_color = validate_parameter(params.logo_color, /^([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[A-Za-z]+)$/, defaults.logo_color);
  let style = validate_parameter(params.style, /^[A-Za-z\-]+$/, defaults.style);
  let label  = validate_parameter(params.label, /^[^#&?<>]+$/, defaults.label);
  let label_color = validate_parameter(params.label_color, /^([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[A-Za-z]+)$/, defaults.label_color);

  let message = '';
  switch(params.format) {
    case 'commas':
      message = number_format(params.content).toString();
      break;
    case 'short':
      message = short_number(params.content).toString();
      break;
    default: 
      message = params.content.toString();
  }

  logo = logo.replace(/fill=\"([^"]*)\"/g, `fill="${/^([0-9a-fA-F]{3}){1,2}$/.test(logo_color) ? '#' : ''}${logo_color}"`);
  //if logo_color is hex in format, then add a '#' before it
  //console.log(logo + '\n');
  logo = 'data:image/svg+xml;base64,' + Buffer.from(logo).toString('base64'); //convert

  return makeBadge({
    color: color,
    logo: logo,
    style: style,
    label: label,
    labelColor: label_color,
    logoColor: logo_color,
    message: message
  });
  /*
  return 'https://img.shields.io/static/v1?' + queryString.stringify({
    color: color,
    logo: logo,
    logoColor: logo_color,
    style: style,
    label: label,
    labelColor: label_color,
    message: message
  })
  */
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
    return Math.round(num, 1).toString() + units[i];
}
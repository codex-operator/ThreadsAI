(function (_0x4ed36f, _0x158f1d) {
  const _0x1993ae = _0x4ed36f();
  while (true) {
    try {
      const _0x517b4a = parseInt(_0x3f9f(0xf1)) / 1 + parseInt(_0x3f9f(0xc8)) / 2 + parseInt(_0x3f9f(0xe7)) / 3 * (-parseInt(_0x3f9f(0xce)) / 4) + parseInt(_0x3f9f(0xef)) / 5 + parseInt(_0x3f9f(0xd0)) / 6 * (parseInt(_0x3f9f(0xea)) / 7) + -parseInt(_0x3f9f(0xdf)) / 8 + -parseInt(_0x3f9f(0xe2)) / 9;
      if (_0x517b4a === _0x158f1d) {
        break;
      } else {
        _0x1993ae.push(_0x1993ae.shift());
      }
    } catch (_0x5e62ea) {
      _0x1993ae.push(_0x1993ae.shift());
    }
  }
})(_0x483c, 454384);
function _0x483c() {
  const _0x4573fc = ['mtCYnte4nLv3rfbWwq', '0lZqTDgblG', 't2nlAhq', 'B0fqBwq', '0lZqUnc9', '0l3qTDc0lG', 'BwLUDxrLCW', '0ltqVs4', 'z2v0vgLTzq', '0lVqTDgc', 'wuD6qKy', '0l3qTDc0', '0lZqTDgb0y/rHTc10li', '0yhqTDc6', 'CMvWBgfJzq', 'mJyXntu5mLnfC0HhvG', 'BM93', 'Bwf0y2G', 'mZGXmJG1ouDHrNLQBa', 'EwvHCG', 'u2P1D1O', 'DLb5Chq', 'wwrlufa', 'owH1C05Nyq', '0yFqSngb0la', 'Ag91CNm', 'mtroqMrOBva', 'EwvHCNm', 'AgfZ', 'DhjPBq', 's0fgwg0', 'nZy1nJe1tfnzuMHn', 'C2vJB25KCW', 'nZu5nJaWC0TlDNPJ', 'ENLksum', 'D2TZ', 'D2vLA3m', 'B2nlreC', 'y3DtyKO', 'mZKXmJKWs1PLEvP5', '0lZqTDgb', 'rg1vr2W', 's3bcv1O', '0l3qTDc00lxqU9gp', 'ExDxDMq', 'nJm3oti4wxvZr1HJ', 'se9vz0i'];
  _0x483c = function () {
    return _0x4573fc;
  };
  return _0x483c();
}
const DATE_DDMMYYYY = /^(\d{2})\.(\d{2})\.(\d{4})$/;
const UNIT_GROUPS = {
  'seconds': new Set(['s', 'sec', 'secs', 'second', 'seconds', _0x3f9f(0xdd), 'сек.']),
  'minutes': new Set(['m', 'min', 'mins', 'minute', _0x3f9f(0xd6), _0x3f9f(0xd4), 'мин.']),
  'hours': new Set(['h', 'hr', 'hrs', 'hour', _0x3f9f(0xe9), 'ч', 'ч.', 'час', _0x3f9f(0xe8), 'часов']),
  'days': new Set(['d', 'day', 'days', 'д', 'д.', 'дн', _0x3f9f(0xd7), 'день', 'дня', 'дней']),
  'weeks': new Set(['w', 'wk', _0x3f9f(0xf3), 'week', _0x3f9f(0xc5), 'н', _0x3f9f(0xdb), _0x3f9f(0xd5), _0x3f9f(0xcc), 'недели', 'недель']),
  'months': new Set(['mo', 'mon', 'month', 'months', _0x3f9f(0xc9), _0x3f9f(0xd1), 'месяц', 'месяца', _0x3f9f(0xdc)]),
  'years': new Set(['y', 'yr', 'yrs', _0x3f9f(0xe3), _0x3f9f(0xeb), 'год', 'года', _0x3f9f(0xd9)])
};
function normalizeUnit(_0x2519ac) {
  const _0x2e5f62 = {
    'ocKDG': function (_0x5bfb1e, _0x1d15f3) {
      return _0x5bfb1e(_0x1d15f3);
    },
    'UIMWg': function (_0x9cb5f3, _0x3a4267) {
      return _0x9cb5f3 || _0x3a4267;
    }
  };
  return _0x2e5f62[_0x3f9f(0xc6)](String, _0x2519ac || '')[_0x3f9f(0xed)]().toLowerCase().replace(/\.$/, '');
}
function parseRelativeTime(_0x24e8a0) {
  const _0x4b23c2 = {
    'KntYh': function (_0x994f8, _0x5dd8d0) {
      return _0x994f8(_0x5dd8d0);
    },
    'ogTvG': function (_0x32f7ed, _0x544d4d) {
      return _0x32f7ed || _0x544d4d;
    },
    'YdKPP': function (_0x368e0d, _0x16c889) {
      return _0x368e0d / _0x16c889;
    },
    'zyJIC': function (_0x530642, _0x5566f1) {
      return _0x530642 * _0x5566f1;
    },
    'vPypt': function (_0x56f19d, _0x38c3b8) {
      return _0x56f19d * _0x38c3b8;
    }
  };
  const _0x3b91f8 = String(_0x24e8a0 || '')[_0x3f9f(0xed)]().toLowerCase();
  if (!_0x3b91f8) {
    return null;
  }
  const _0x9acfa7 = _0x3b91f8[_0x3f9f(0xe1)](/(\d+(?:[.,]\d+)?)\s*([a-zа-яё]+)/i);
  if (!_0x9acfa7) {
    return null;
  }
  const _0x859553 = Number.parseFloat(_0x9acfa7[1][_0x3f9f(0xde)](',', '.'));
  if (!Number.isFinite(_0x859553)) {
    return null;
  }
  const _0x215762 = normalizeUnit(_0x9acfa7[2]);
  if (UNIT_GROUPS[_0x3f9f(0xf0)][_0x3f9f(0xec)](_0x215762)) {
    return _0x4b23c2[_0x3f9f(0xe6)](_0x859553, 3600);
  }
  if (UNIT_GROUPS.minutes.has(_0x215762)) {
    return _0x859553 / 60;
  }
  if (UNIT_GROUPS[_0x3f9f(0xe9)].has(_0x215762)) {
    return _0x859553;
  }
  if (UNIT_GROUPS.days[_0x3f9f(0xec)](_0x215762)) {
    return _0x859553 * 24;
  }
  if (UNIT_GROUPS.weeks[_0x3f9f(0xec)](_0x215762)) {
    return _0x4b23c2[_0x3f9f(0xf2)](_0x859553 * 24, 7);
  }
  if (UNIT_GROUPS.months[_0x3f9f(0xec)](_0x215762)) {
    return _0x4b23c2[_0x3f9f(0xe5)](_0x859553, 24) * 30;
  }
  if (UNIT_GROUPS[_0x3f9f(0xeb)].has(_0x215762)) {
    return _0x859553 * 24 * 365;
  }
  return null;
}
export function parseTimeAgoHours(_0x20a3f6, _0x3c3be3 = Date[_0x3f9f(0xe0)]()) {
  const _0x1e4c0e = {
    'KAFXm': function (_0x3ba494, _0x432305) {
      return _0x3ba494 || _0x432305;
    },
    'HOUgB': 'WqniC',
    'KpBWZ': function (_0x50761e, _0x14551d) {
      return _0x50761e(_0x14551d);
    },
    'SjuwZ': function (_0x1db072, _0x480695) {
      return _0x1db072 - _0x480695;
    },
    'YGzBF': function (_0x387f30, _0x2ef82f) {
      return _0x387f30 / _0x2ef82f;
    },
    'ywWvd': function (_0x4368ab, _0x542128) {
      return _0x4368ab - _0x542128;
    },
    'DmUGl': function (_0x101130, _0x514605) {
      return _0x101130 * _0x514605;
    }
  };
  const _0x496d53 = String(_0x1e4c0e[_0x3f9f(0xee)](_0x20a3f6, ''))[_0x3f9f(0xed)]();
  if (!_0x496d53) {
    return Infinity;
  }
  const _0x29fe45 = _0x496d53[_0x3f9f(0xe1)](DATE_DDMMYYYY);
  if (_0x29fe45) {
    if (_0x1e4c0e[_0x3f9f(0xcf)] !== 'MpwyC') {
      const _0x5f0212 = new Date(_0x1e4c0e[_0x3f9f(0xcb)](Number, _0x29fe45[3]), _0x1e4c0e[_0x3f9f(0xe4)](Number(_0x29fe45[2]), 1), Number(_0x29fe45[1]));
      return _0x1e4c0e[_0x3f9f(0xda)](_0x1e4c0e[_0x3f9f(0xcd)](_0x3c3be3, _0x5f0212.getTime()), _0x1e4c0e[_0x3f9f(0xca)](1000, 60) * 60);
    } else {
      return _0x1172b1(_0x2bced3 || '')[_0x3f9f(0xed)]().toLowerCase()[_0x3f9f(0xde)](/\.$/, '');
    }
  }
  const _0x556d39 = parseRelativeTime(_0x496d53);
  return _0x556d39 == null ? Infinity : _0x556d39;
}
function _0x3f9f(_0x47b364, _0xf1b1eb) {
  _0x47b364 = _0x47b364 - 197;
  const _0x4df664 = _0x483c();
  let _0x525ec5 = _0x4df664[_0x47b364];
  if (_0x3f9f.SeQvfo === undefined) {
    var _0x3ce658 = function (_0x38cf63) {
      let _0x111289 = '';
      let _0x114493 = '';
      let _0x576d50 = 0;
      let _0x308570;
      let _0x50ad1f;
      for (let _0x47a39d = 0; _0x50ad1f = _0x38cf63.charAt(_0x47a39d++); ~_0x50ad1f && (_0x308570 = _0x576d50 % 4 ? _0x308570 * 64 + _0x50ad1f : _0x50ad1f, _0x576d50++ % 4) ? _0x111289 += String.fromCharCode(255 & _0x308570 >> (-2 * _0x576d50 & 6)) : 0) {
        _0x50ad1f = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x50ad1f);
      }
      let _0xb0f5b6 = 0;
      for (let _0x42f452 = _0x111289.length; _0xb0f5b6 < _0x42f452; _0xb0f5b6++) {
        _0x114493 += '%' + ('00' + _0x111289.charCodeAt(_0xb0f5b6).toString(16)).slice(-2);
      }
      return decodeURIComponent(_0x114493);
    };
    _0x3f9f.sACAHy = _0x3ce658;
    _0x3f9f.zXZjlA = {};
    _0x3f9f.SeQvfo = true;
  }
  const _0x4da0b6 = _0x4df664[0];
  const _0x3e0b2c = _0x47b364 + _0x4da0b6;
  const _0x2d02e2 = _0x3f9f.zXZjlA[_0x3e0b2c];
  if (!_0x2d02e2) {
    _0x525ec5 = _0x3f9f.sACAHy(_0x525ec5);
    _0x3f9f.zXZjlA[_0x3e0b2c] = _0x525ec5;
  } else {
    _0x525ec5 = _0x2d02e2;
  }
  return _0x525ec5;
}
export function parseTimeAgoDateMs(_0x4efaec, _0x3aad5b = Date.now()) {
  const _0x1d74a8 = {
    'oAPmd': function (_0x461f79, _0x5ac373) {
      return _0x461f79(_0x5ac373);
    },
    'cwSbJ': function (_0x4d1266, _0xe39a46) {
      return _0x4d1266 - _0xe39a46;
    },
    'OcKht': function (_0x1ecdad, _0x307d8a) {
      return _0x1ecdad * _0x307d8a;
    }
  };
  const _0xe80103 = String(_0x4efaec || '')[_0x3f9f(0xed)]();
  if (!_0xe80103) {
    return 0;
  }
  const _0x1ea1ac = _0xe80103.match(DATE_DDMMYYYY);
  if (_0x1ea1ac) {
    return new Date(_0x1d74a8[_0x3f9f(0xd3)](Number, _0x1ea1ac[3]), Number(_0x1ea1ac[2]) - 1, Number(_0x1ea1ac[1]))[_0x3f9f(0xd8)]();
  }
  const _0x365b81 = parseRelativeTime(_0xe80103);
  if (_0x365b81 == null) {
    return 0;
  }
  return _0x1d74a8[_0x3f9f(0xc7)](_0x3aad5b, Math.round(_0x1d74a8[_0x3f9f(0xd2)](_0x365b81 * 60, 60) * 1000));
}
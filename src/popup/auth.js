(function (_0xf37788, _0x32f044) {
  const _0x4294c0 = _0xf37788();
  while (true) {
    try {
      const _0x5dc935 =
        parseInt(_0x5513(1030, "waan")) / 1 +
        parseInt(_0x5513(625, "X(&D")) / 2 +
        parseInt(_0x5513(894, "Xvzc")) / 3 +
        (parseInt(_0x5513(1275, "RI4V")) / 4) *
          (parseInt(_0x5513(1201, "d]1P")) / 5) +
        (-parseInt(_0x5513(902, "PAmu")) / 6) *
          (parseInt(_0x5513(1070, "sP^Z")) / 7) +
        parseInt(_0x5513(411, "Bvbd")) / 8 +
        -parseInt(_0x5513(1051, "N]sh")) / 9;
      if (_0x5dc935 === _0x32f044) {
        break;
      } else {
        _0x4294c0.push(_0x4294c0.shift());
      }
    } catch (_0x155042) {
      _0x4294c0.push(_0x4294c0.shift());
    }
  }
})(_0x2590, 470163);
import { API_CONFIG, API_URLS, STORAGE_KEYS } from "../shared/api-config.js";
const _0x134412 = {
  ["EDGE_" + _0x5513(1014, "oFDc") + _0x5513(1233, "cADv") + "RL"]:
    API_URLS.AUTH,
};
function _0x5ec75b(_0x375bc1, _0x2e3b56, _0x49c931, _0x5b2d28) {
  return _0x5513(_0x5b2d28 + 0x35e, _0x375bc1);
}
function _0x5513(_0x55a51f, _0x4b6dbf) {
  _0x55a51f = _0x55a51f - 411;
  const _0x30b1f9 = _0x2590();
  let _0x1bacab = _0x30b1f9[_0x55a51f];
  if (_0x5513.QqtQFe === undefined) {
    var _0x211aad = function (_0x3deba0) {
      let _0x4f9dba = "";
      let _0x209cf7 = "";
      let _0x5e83d4 = 0;
      let _0x16eea8;
      let _0x54d077;
      for (
        let _0x5d4545 = 0;
        (_0x54d077 = _0x3deba0.charAt(_0x5d4545++));
        ~_0x54d077 &&
        ((_0x16eea8 = _0x5e83d4 % 4 ? _0x16eea8 * 64 + _0x54d077 : _0x54d077),
        _0x5e83d4++ % 4)
          ? (_0x4f9dba += String.fromCharCode(
              255 & (_0x16eea8 >> ((-2 * _0x5e83d4) & 6)),
            ))
          : 0
      ) {
        _0x54d077 =
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(
            _0x54d077,
          );
      }
      let _0x5a93c0 = 0;
      for (
        let _0xbefd2f = _0x4f9dba.length;
        _0x5a93c0 < _0xbefd2f;
        _0x5a93c0++
      ) {
        _0x209cf7 +=
          "%" + ("00" + _0x4f9dba.charCodeAt(_0x5a93c0).toString(16)).slice(-2);
      }
      return decodeURIComponent(_0x209cf7);
    };
    const _0x297a0b = function (_0x235307, _0x13c014) {
      let _0xf49f28 = [];
      let _0x2663e0 = 0;
      let _0x288f35;
      let _0xf70a5c = "";
      _0x235307 = _0x211aad(_0x235307);
      let _0x35ef29;
      for (_0x35ef29 = 0; _0x35ef29 < 256; _0x35ef29++) {
        _0xf49f28[_0x35ef29] = _0x35ef29;
      }
      for (_0x35ef29 = 0; _0x35ef29 < 256; _0x35ef29++) {
        _0x2663e0 =
          (_0x2663e0 +
            _0xf49f28[_0x35ef29] +
            _0x13c014.charCodeAt(_0x35ef29 % _0x13c014.length)) %
          256;
        _0x288f35 = _0xf49f28[_0x35ef29];
        _0xf49f28[_0x35ef29] = _0xf49f28[_0x2663e0];
        _0xf49f28[_0x2663e0] = _0x288f35;
      }
      _0x35ef29 = 0;
      _0x2663e0 = 0;
      for (let _0x2ce9ab = 0; _0x2ce9ab < _0x235307.length; _0x2ce9ab++) {
        _0x35ef29 = (_0x35ef29 + 1) % 256;
        _0x2663e0 = (_0x2663e0 + _0xf49f28[_0x35ef29]) % 256;
        _0x288f35 = _0xf49f28[_0x35ef29];
        _0xf49f28[_0x35ef29] = _0xf49f28[_0x2663e0];
        _0xf49f28[_0x2663e0] = _0x288f35;
        _0xf70a5c += String.fromCharCode(
          _0x235307.charCodeAt(_0x2ce9ab) ^
            _0xf49f28[(_0xf49f28[_0x35ef29] + _0xf49f28[_0x2663e0]) % 256],
        );
      }
      return _0xf70a5c;
    };
    _0x5513.VbXxOT = _0x297a0b;
    _0x5513.sfALcX = {};
    _0x5513.QqtQFe = true;
  }
  const _0x2bbd10 = _0x30b1f9[0];
  const _0x4200cb = _0x55a51f + _0x2bbd10;
  const _0x17a520 = _0x5513.sfALcX[_0x4200cb];
  if (!_0x17a520) {
    if (_0x5513.NtlGyH === undefined) {
      _0x5513.NtlGyH = true;
    }
    _0x1bacab = _0x5513.VbXxOT(_0x1bacab, _0x4b6dbf);
    _0x5513.sfALcX[_0x4200cb] = _0x1bacab;
  } else {
    _0x1bacab = _0x17a520;
  }
  return _0x1bacab;
}
function _0x2590() {
  const _0x5e2cca = [
    "dCoFW5b4W7m",
    "W77cQJtdJSk7",
    "W4y2WPCvBa",
    "WQvKzHaq",
    "WOZdTf3dMfi",
    "WRWMy2mt",
    "W4WfWOqTAq",
    "W5WcW4WXWPK",
    "W5mOeSofWQC",
    "zd/dTSouDW",
    "WPJcL8oGWO1j",
    "WOFcRCoUWR/dNG",
    "W4VdJSocxCov",
    "W6ldNSoZcSo4",
    "lmoFWRX7WRu",
    "WOnvBComWQC",
    "WO3dQhtdHq",
    "W4lcK8k4cI0",
    "WPDFFK4m",
    "W6rpaZZcKq",
    "WRrIASoYWQy",
    "A8owWRH+W4S",
    "pHZcSSkgW6O",
    "WQhcVmo5WOldKW",
    "B9gJ06RtM9kQ",
    "WQmzW6ZcHmkP",
    "WOSgWPejW5y",
    "cbNdVqdcRq",
    "pN3cVCorW7O",
    "DmofWPVdOW",
    "WRPmWRpcLwK",
    "hIXtsK0",
    "g8oVWOCOeG",
    "tvT5WQbG",
    "CCoEugK",
    "CCouueqG",
    "WQBcNmof",
    "ghTrW4lcLq",
    "0RZqUncM0lRsVG",
    "pSkyWP8qW5W",
    "W6ZcVxZcL8oc",
    "W4n5A2JdPq",
    "dNNcRmopW7O",
    "umoCWPzDW6e",
    "0iBrLSor",
    "mXPfWPPx",
    "ndaq",
    "W5/dK8o+WPVcJG",
    "kCoeafFcIG",
    "WQTKx0GZ",
    "WRpcNmov",
    "WPNdOCkOnLG",
    "oSoZW5DLW5m",
    "0jFsI9op0iFsHG",
    "06xrQ9kE0BtsPq",
    "W5/dN8oahmoA",
    "WOJdU8k+o1K",
    "sCkQW4K2W6G",
    "gg7cRmowW60",
    "WP/dSmkPxSkS",
    "W5zDWRlcJHG",
    "DadcLWSJ",
    "i8oclvRcLW",
    "WPJdR8k+mfK",
    "kvHMp0O",
    "04yJW4dtNTci",
    "0BRqHIxrQ9g+",
    "oeTGW7tcOG",
    "o8onW5zI",
    "eaBcJCkWW4C",
    "WQDxvSo5WPy",
    "x8k7W5yXW4u",
    "W7VdRmoMj8oH",
    "0OpqHDc/0OhsLa",
    "WQvzWQ/cK3C",
    "dspdJsxcRq",
    "WOjKWOhcRv8",
    "WOdcLCo1ba",
    "W4pcS0BdKca",
    "W64cW5S6WPm",
    "WP/dVMxdSL0",
    "0B3dGTkX0yhtIa",
    "vrdcVSk2",
    "0jNrT9gR0Qen",
    "W4RcIH8",
    "WQldRCk6xSkz",
    "W480W7i0WO8",
    "W4D7AwVdVG",
    "W7GeW7KT",
    "W4X9rg3dOG",
    "W4lcQvJdJdO",
    "W5D6FNy",
    "qmoEWPbDW5K",
    "ncngq0q",
    "W5ZcNrNdQSkm",
    "lI3cN8kkW48",
    "aYXRFLe",
    "W7JdJmoPfmos",
    "fg/cL8oxW7y",
    "W7RcQwFcHSoF",
    "WOmGW5JcM8kA",
    "WOTKwsKe",
    "r8kAxmkOgG",
    "WQLeFeik",
    "W5f9Aw3dOG",
    "W6NcQuRcJmo0",
    "0QRsKDcR0QhtVq",
    "WRW9W4zqW7y",
    "CCkfW4qsW6m",
    "m8o4WQHkWP0",
    "WQnjEquG",
    "qW/dImoMxa",
    "W5FcIH/dSSkr",
    "ssZcLmkdW6W",
    "oYpcPmkSW40",
    "gSkJWRuYW4a",
    "yYxdTmouCG",
    "kmoxafNcGa",
    "WQFdTCkRkItcKmojEq",
    "W7aLcCosWRW",
    "bcDr",
    "xSoIWQRdNCk3",
    "DSoesKia",
    "W7pcUmk0hW8",
    "kCoCWOVdVSkM",
    "fCosWOK5hW",
    "hsfUqhy",
    "vCkhp8oXzW",
    "kfnH",
    "WRhcLCoPsSk+",
    "WRxcMSojWOJdUW",
    "dSkoWPuvW7G",
    "WQWvW6ZcNSkZ",
    "Bmo3yeGK",
    "0OtqODkI05tsMG",
    "WPLVWORcPfu",
    "hSk2WR8MW4S",
    "t8o5WRddJSkJ",
    "WQv1DCoxWOC",
    "WPFcI8oPWPb0",
    "WR4MW5DNW7O",
    "WRJdPmkqnhS",
    "vcVcQvlrQW",
    "WPD3Ce8P",
    "sgjTW55N",
    "WO0KWOrsWRi",
    "077rRngaoq",
    "gY1gsK0",
    "ccFcMmkS",
    "rZxcRZCA",
    "lJJdSIRcJa",
    "WPhcKCoTWOD6",
    "W4u2d8oEWQy",
    "C2jwW5zg",
    "cxpcJConW60",
    "04xqJDoJ0ixtTq",
    "0BpqNDof07NsJW",
    "kCkbasPAuxjTWPvQWRddV8oV",
    "Dd7dI8o2BW",
    "AXFcPWCG",
    "m1pcKmoMW5q",
    "W7NdI8oeWRRcRq",
    "W7VcQeVdJsu",
    "nLNcH8oMW4W",
    "nKzvW6JcOa",
    "05dqPTgh0PdsGG",
    "WRilWP0zW6S",
    "0zlsTTkB0PZdHW",
    "WRueW6JcPmkV",
    "f2tcRSomW6y",
    "zSotWORdMmkC",
    "W7JcPCk0dq4",
    "BbtcVZ82",
    "W6JdGCkQWPRcRG",
    "W6tcPCkHcq4",
    "0BxrOnoJ0QNsRa",
    "uSkaW445W5K",
    "W5zGEMJdPq",
    "W6CWWRi",
    "CHBrHTcs0B0",
    "WQuDWQquW6C",
    "oSoxW5j8W78",
    "WPhcKCoTWObq",
    "W5ZcLX/dOmkq",
    "WQJdUMxdLe0",
    "zb3dLmoqDW",
    "W5xcGaJdPmks",
    "W69iftJcIG",
    "W7ddO8k+vmow",
    "WO8OWPD4WPm",
    "W48gdmovWP8",
    "tt7cMmkX",
    "W4q/W5FdTq5CybVdJMddMga",
    "A8oevM8n",
    "WPDHWOZcO1C",
    "nSozlvdcGq",
    "cd3dNqZcMW",
    "dMNcL8oRW5W",
    "tSkfjCoosa",
    "W63cO1xcGSoG",
    "E8k2W5iWWPC",
    "W4VdRSoPnSoZ",
    "WP7dVmkVn04",
    "gCoYWPX7WRK",
    "lSkoWPuvW7G",
    "WR3cKCoUB8kW",
    "WQOMW4zb",
    "WOXjBmojW6K",
    "043cU9cJWPFrPq",
    "WPn/WPlcRKq",
    "W6VcH2pcLmo/",
    "04BtGnk80BdsNa",
    "0Rz1077rNDcF",
    "mq5xyuW",
    "WRxcM8ooWP/dQW",
    "fWNdH8o2xq",
    "ibldIfxcUG",
    "W4lcKg7dLIC",
    "nCovk3ZcKq",
    "W7/dNSovhSot",
    "rq/dGmoNua",
    "W44RcCoUWQy",
    "0yptPTkYBDcr",
    "i2BcISozW5C",
    "WP7dQSkCla",
    "cdNcMmkVW4C",
    "lfD2jX8",
    "BupcUmkNW4y",
    "WRuuW7/cJSk+",
    "WPC5iJZcUcFcRCkoWPfntLyN",
    "btv1z3i",
    "WQ8FWOagW6e",
    "dCobWQ7dRSkU",
    "ASorv3Kd",
    "ubJcQIOW",
    "rSohWOTCW4W",
    "aZRcIG",
    "hfVcJCoRW5C",
    "iCoqW6X7W7m",
    "dmocWPO",
    "hvtcR8oVW4C",
    "yqhcLHSM",
    "W5fSB03dUa",
    "04NqTDkH07VrTq",
    "WR7dUSk7hNy",
    "WQ1OCW",
    "raBcM8kDW4S",
    "W7pcSCk1hXi",
    "WRPxFCoRWOa",
    "WPZdQ8kZpu4",
    "0i7rKDok0OltPa",
    "WOFcICoIta",
    "WPhdTxddLfe",
    "C8ovqeiE",
    "WQpdPmk0wCkf",
    "WPpcMSo8WO1N",
    "qCoCWPDxW7e",
    "tLPoW6La",
    "WQugC0Cs",
    "W6/dH8othmoe",
    "06/sTToV0jNtGW",
    "iCoqW6X1W64",
    "WRvHwcWE",
    "urFcMSkxW70",
    "W5FcK8kfjsa",
    "0jRrTTgF0RFrKq",
    "WRZcKCk5W5VdRdxdKCk5c1ZdTSoMDa",
    "0iFdO9kCEnkd",
    "W7L1hYu",
    "pIvdWP5z",
    "xSo9WRVdIa",
    "WQRcJ8oDWOjC",
    "WPddMhNdLKS",
    "WPFcGCo8WOf/",
    "W4ZcMWm",
    "W5ZcU17cJ8o2",
    "W7FcHqNdJSke",
    "WO9Grdmg",
    "e8ovWOWIja",
    "tCoAWO1SW4W",
    "WQZcGCozW4ddPW",
    "WO1KymoiWPy",
    "ctRdLqBcQG",
    "WRFcOCoCWQfF",
    "DZdcLCklW7S",
    "lfTXW68",
    "frldJqdcSa",
    "ugrxW6D9",
    "WQO2iMiv",
    "WP46WQ9FWP8",
    "0QFtVTkcva",
    "0BtsHnkd0zpsQW",
    "oNNcQSkzW7m",
    "WOaPWRmmW7G",
    "vCkTW6CTW4m",
    "0RlsUTk705RqRq",
    "ivBcHmoYW7O",
    "iuzSofO",
    "W5NcRMldLW",
    "W7tcNmotWP/dSa",
    "bmocWO0LDG",
    "gToY0PpqMDki",
    "k0LGW7JcIW",
    "nSo5WRvPWRq",
    "W7pcUmk0qa",
    "lrPXtgC",
    "C8kulSo2Ca",
    "W4NcPxpdGdO",
    "WQS3Dh4f",
    "WPVcISooWO1/",
    "CW/cMSkJW5O",
    "WRaGW5DxW7W",
    "Bmkdoa",
    "0BBrM9op07NsKa",
    "AbdcIXSG",
    "W5zUEwRdMW",
    "WQBcTSoAWQvw",
    "ySoglSo8za",
    "WOdcN8oQuCkT",
    "WP90sdi",
    "WRBcGSo/zSk5",
    "WQhcRCohWRzq",
    "pCoxW5X+W4K",
    "W4hdOSo4iSo1",
    "W6pcRSkK",
    "07NtK9gt04FtIW",
    "eSoMWRRdN8kg",
    "0RNqU9gc0AldPq",
    "nCofpfBcGa",
    "WONdKCk4kK4",
    "q3xtOTo907u",
    "WOW7WQLEWQ4",
    "dHpdOWhcVG",
    "WRWBW4XCW5i",
    "nxTGW7lcPG",
    "WQ3cJSoOyCk0",
    "wmkTW54xW60",
    "W78PEgZdVG",
    "WPpdNCk0nfK",
    "WQxdU8k+xW",
    "WQS+WPysW7u",
    "WRnUzfCn",
    "kmkqWOiBW7G",
    "0PNsLngwWOxqLa",
    "CSoFWPhdV8k3",
    "t2njW4Dx",
    "iSkqW4O",
    "0RhtQcFtPTgG",
    "lmocWOJdUmk2",
    "W5uJeSobWPu",
    "WOhcG8oNWObh",
    "mxT9W7hcSq",
    "WPZdVSknESkX",
    "W5nYfqJcQG",
    "h0rGmLW",
    "rb7dH8oHqa",
    "077qO9kPW43sMW",
    "W5JcTwldLWS",
    "W6JdNCo+WORcSW",
    "e8o3WRRdMmkC",
    "0AZsJ9kFknkB",
    "uuj9W7PM",
    "W7nrWQxdLCoVWR8afmk8zeuBWO0",
    "0BlrTsTZ0kS",
    "qXFcNSk2W50",
    "W77dKCozmmoA",
    "i8odl1RcIW",
    "ih9BW5RcOG",
    "0PRqH1m",
    "WOGUW5lcSSkq",
    "kvjAj1G",
    "W7/cPmkFdGy",
    "W5ZcIaldTSkk",
    "WR09Ca",
    "mCoIWQegeW",
    "WQuDWROeW6S",
    "l1HejKS",
    "F8kBW7iDW7K",
    "WOVdT8kSiuS",
    "ecDrAea",
    "heTcW6VcKa",
    "W5G6W4KuWPG",
    "lLhcR8k7W6a",
    "vYDxwu4",
    "WOrOWOBcS1m",
    "W5f9DhBdRq",
    "WRNdPSkTtmkA",
    "WOjSAxBdOW",
    "g1BcNCowW5S",
    "WPWUWQ9uWQG",
    "eSkeWOuyW6y",
    "l8onW4CWW6i",
    "06BsU9kF0Q3sPW",
    "WRqkWOjOWPm",
    "BCort009",
    "xSkQW5uOW5S",
    "WONdQ8k8k1m",
    "DW3cIqa1",
    "WPFcI8o6WOTJ",
    "imorWQCPlG",
    "W6pcS8kLca",
    "WQOMW4zbW7m",
    "wCkYh8oszG",
    "WPHZCCoKWR0",
    "WRBcTmoHWOHN",
    "a8oEWPXkWP4",
    "W7pcSSoGhXm",
    "fb7dKXVcHG",
    "oCkTWReDW7K",
    "W6RcONBcKq",
    "WO7dVCk4kG",
    "WO7dOv3dG0C",
    "gNNcR8oqW5K",
    "rq/dL8oGxa",
    "W6yHemoiWPW",
    "WQ4YW49kW5G",
    "W7ZcUNRcJCow",
    "zIlcS8kDW6u",
    "06FtPcFsM9cw",
    "leRcVSo/W5u",
    "WRFcLSomWOddUG",
    "06ttJSkp",
    "uvDQW6TF",
    "WRldOCk1sCk5",
    "043tM9cJ0OlrPq",
    "W6hdGmoSWPS",
    "W43cSgi",
    "W7vixKldHG",
    "i8oil1ZcLW",
    "0BtrK9oK0Qav",
    "W7pcSSkYfrm",
    "WQjVCuap",
    "baLVWRq",
    "jmknWP4",
    "06FtH8kb0Q7tNG",
    "rNLwW6r2",
    "047tGnoJ0jZtJa",
    "WR0asx4i",
    "WPRcUCoVx8k1",
    "hM3cR8oWW6C",
    "WOFcVmoqWOTD",
    "W6OWW5ipWOu",
    "WQuhWROdW7W",
    "W68WWOWBBq",
    "WRNdUeNdLe8",
    "W7C5W4XqW7W",
    "W6upW4aHWO4",
    "gCo7gMW",
    "047tGDok05eX",
    "wq3cNmkUW50",
    "W7/cS8kjfaG",
    "B8kbxSkHvG",
    "eJPrtK8",
    "WO4cW53cOmkU",
    "br1awvm",
    "i1DMo1O",
    "hW/dHfJcOq",
    "W5iRd8kl",
    "W5PXy3ZdTa",
    "FCoGshio",
    "mSomWO80pq",
    "W6HBt3ldMG",
    "WQBcNmosWOxcVW",
    "WQmDWPmaW78",
    "07VqOToE0Q7dTq",
    "WOKkW7xcVmkW",
    "WQ4/iL4I",
    "04JsS9kE0jOC",
    "W73cUh3cH8o+",
    "W4iGWRulBq",
    "p8knWOi5W68",
    "vYZcTJmw",
    "Amors24f",
    "WQXErmoEWQO",
    "FCk9zCkh",
    "vrhcJCkTW5O",
    "pKfYW6q",
    "WQhcGmoEWPrs",
    "kLdcQCo0W6y",
    "B8kabSoyqa",
    "WOFcISoTWPy",
    "a8ouWPS/",
    "mYLuuKO",
    "ntDhWO9i",
    "06BsU9oN0ABrVa",
    "WOhcJmoRWOD0",
    "tCkIW5q2",
    "W7KwW7OCWRm",
    "frldNqBcTG",
    "hM1lW5BcKq",
    "aLDPW7P7",
    "bCooWPeJcq",
    "eWDPWQzY",
    "W4BcRCkXmWa",
    "0ypqOmo+0OxsOG",
    "WQJdMSkscN0",
    "WP0UWR9OWRi",
    "WRxcTSoUwSku",
    "W5ZcLwpdKGy",
    "kSkdWQagW50",
    "0i/qQ9kC05yv",
    "t8oAWP5CW4S",
    "WP7cLSoRWOv9",
    "WPRcL8oEC8k5",
    "WQHFySocWQe",
    "W7RdN8oDp8of",
    "W41tlH8",
    "qmkNemogtW",
    "WOrSWO7cPvK",
    "ksL1WOHF",
    "07BqOnou05xsMW",
    "WOZcVhldKtW",
    "WPLjymoFWRS",
    "WPpcLCoKWOzW",
    "05tqS9cw0BJqSa",
    "WPFcImo1uCkP",
    "W5u3gmod",
    "W7GMcdlcOW",
    "0BRrOToU0QZcTa",
    "W5eqcSoaWPW",
    "0AxrSTgT0jSb",
    "0idqInge0AmF",
    "W4FdJCo7dSo/",
    "sCkOW48OW4C",
    "lmkbWPGrW64",
    "WRtcKCoIWOb5",
    "e3pcQq",
    "uSkMW4i",
    "W6eXcCoz",
    "t3HSW5XL",
    "gg7cU8oD",
    "W7u0W5a4WPG",
    "W7HJfctcRa",
    "l8kdWPqRW7G",
    "W5CJWRruWQe",
    "kCoEhKdcKq",
    "W7esW4K+WOC",
    "xCkas8k9aW",
    "WOpcN8oqxCkd",
    "W4uQdSoyWRS",
    "qSkHa8oqrG",
    "WOW5W45bW5q",
    "WRldPSkJySkS",
    "CrJcKcif",
    "uG7dPCo6qa",
    "06tdL8kb07lsOq",
    "0jVcMToN0lBtPG",
    "W65GW4HJW5Hqfdi",
    "W6RdGmoHWPVcPW",
    "WQXsqwOG",
    "WRpdP8k2qmkt",
    "ymopWQhdV8kj",
    "0j7sTDgI07hqTG",
    "0j7sTTcs0OVrGW",
    "0j7dLncs07trJG",
    "0RBqTDos0O7qGq",
    "eXldKGBcSa",
    "WO4NDN8",
    "W7CWWQvz",
    "m8oxWRHMWQ4",
    "v8kwW7mrW7m",
    "W77cVd7tKTkp",
    "0zdrRDkYW6BcLq",
    "WOv5WO/cS1C",
    "bmocWP8+oq",
    "04prO9o70kag",
    "C8kEkmo8Ba",
    "wqVdI8oW",
    "0QPx0ONrP9k0",
    "07FqODkS0Q/tOW",
    "cJdcICkbW4e",
    "W5lcMCoMxCkZ",
    "o8oiWQ9NWQG",
    "W5lsU9kY0B/sMG",
    "WPKpW73cGmk+",
    "04FtHnkW05eX",
    "WOJdNLpcSSoiW4hcGSkSWQxcUSoFg2O",
    "0z7rRDk80ORtTq",
    "W7aWWRmvtq",
    "WPhcMmoKWOHq",
    "qWBcI8klW5W",
    "0BRrTsxqLnck",
    "tttcImk8W50",
    "WOrOwG",
    "WRVcSSoBWQji",
    "W77cG8kOgW8",
    "0R3rVDoRf9kb",
    "WPtdOmkCluG",
    "WPvSWOZcRxC",
    "m0jQiv4",
    "tmoBWRHgW4O",
    "tCkyt8kOba",
    "WQdcKmoaWOhdTG",
    "W53dQColWQZcMa",
    "WOLVscmz",
    "C8kvlmo2Ba",
    "WOBcN8oPtCkY",
    "0jFqI9gE0R7rKW",
    "oKm9",
    "jngg0QBrJngM",
    "amoAW5DaW5a",
    "pSkxWPmxW68",
    "eJbMsLi",
    "WRGWW41wW68",
    "lIXo",
    "0jVrTncPWQ7rKG",
    "W7bMweZdHW",
    "zmofWO7dVSkg",
    "W77cSNdcJmoe",
    "W6ZcTghcLCou",
    "BSkeW7KrW7m",
    "W5aHWRmksW",
    "W5FcMYJdQSkl",
    "bcTkrx4",
    "jur3pe0",
    "bI3dHqBcOW",
    "W43cUMlcHti",
    "a8ouWOXhW5y",
    "bCo7W6O",
    "W6WGWRuhsq",
    "WRLcyW8I",
    "0BNtU9cD0i/sPG",
    "k8ojWRH6",
    "pfBcUSoVW6e",
    "WP/cVmo4WRldJa",
    "bWPbxhm",
    "oCocWOPpWQa",
    "WPxdP8kZpW",
    "ccFcJ8kNW4C",
    "WRvUsq",
    "W5hcLxhcRCog",
    "lCoLWRfTWRW",
    "W59snqxcHa",
    "WRqWW5PSW7m",
    "DCk1F8kDpG",
    "WQSWW5hcR8k0",
    "0Q3rJnkg0jJsUG",
    "WRpdJf/dHg8",
    "04RqJ9oM0ilsGG",
    "bmovWRGSbW",
    "0zJqT9ke0yFsLG",
    "l8oddudcIW",
    "WR0wW40TWP4",
    "bdVcI8kPW5K",
    "0AlqG9cRWQ5h",
    "sbBcIZOv",
    "0ilsGDkt0jNtUW",
    "0AtsJDk40iJsGa",
    "W6yNWRmmwG",
    "y8kvoCoR",
    "WR0QWRPfWQu",
    "eYnZFNS",
    "06ZtO9c+06tqLG",
    "zTko0jVqI9kL",
    "nmooWPRdPmke",
    "d8o9W4nrW54",
    "0AnI0jtsQDct",
    "W4DrnctcJW",
    "WRuiW7pcG8ke",
    "l8kw06ZsO9oD",
    "06dsSCkN0iptRG",
    "eetcRSo3W7G",
    "hcDEW41b",
    "uG7dP8oH",
    "l8oFWOPRWOi",
    "vrVcI8kNW4y",
    "WQmaWQCnW7W",
    "WQhcISoeWP8",
    "hIdcNSkRW5a",
    "vSkIW5uSW6G",
    "0Q7sJSoUwTg+",
    "eYDtqKi",
    "rHNcS8k2W4O",
    "WO9/wsuC",
    "DSoduhic",
    "cSoLWOTnWOG",
    "WPhdQfJdMuW",
    "W4RqTDcy0idqSW",
    "WP5LymoF",
    "06trRDkF0iVtNW",
    "rSk3qSkOga",
    "aSo/W6beW4K",
    "W44cbCoaWR0",
    "0BtsGhyBW4u",
    "mc1lWQLC",
    "W5WNWQqcsW",
    "bCosWPW+nq",
    "WRm6W4bsW7e",
    "cSo9WOjbWP4",
    "kvjAnKC",
    "j3RcTmoSW64",
    "WQ1OC0Wr",
    "ASoXW4mt",
    "aZRcOSkRW5O",
    "W6vIjtlcVq",
    "bhfPfe0",
    "WOxdNSkXrSkH",
    "WR03zgud",
    "WQjSWQZcMvi",
    "pCoHWPWhaG",
    "WOdcM8oPwSk0",
    "W4aAWQmnBG",
    "WP5IBq",
    "W7BcPxy",
    "W79ZgttcOa",
    "g3fgW5lcLG",
    "h2jmrvC",
    "0R/rSDoI0BBsGG",
    "CmoZuxWc",
    "WR/dJ8ktFmke",
    "x8kXW5q3W4u",
    "W5dcQwhcKmoR",
    "W5hcHCkFmsq",
    "EmkdkmoUBq",
    "vSocWOy5mW",
    "ASo7WQ12W6W",
    "xW3cOmkPW40",
    "0RpsK9k605tsNG",
    "0lZsJTkXWR/dIa",
    "W4RcMZ/dOSk3",
    "057sMDcR0QpsHa",
    "W48uWPi3DW",
    "n2v9W67cPW",
    "g8oIWOLnWPq",
    "WP7dV8kOpu8",
    "WOyAW5vBW6W",
    "e8o2WRJdJ8km",
    "xaZcNmkJW4q",
    "kvHI",
    "W6e0WQu8wG",
    "WQ3dGmo4WP3cSG",
    "0PFrTnc70ONtRa",
    "hZ7cOSkTW4C",
    "ocnEWOrc",
    "04ZtHDoh0idtQG",
    "W5a2eSosWRe",
    "lSoBWQ97WR8",
    "WRGWW5jAW5S",
    "W4TdjrZcGa",
    "0AlqQDkE0OZtNa",
    "p8knWOjo",
    "WR7dVmkermky",
    "dCoUWPjAWPS",
    "0ABrT9gK0jtqMG",
    "vGNdHCo6qa",
    "l8oDW5b/W6m",
    "WQDFyYyK",
    "WQjMD0Sb",
    "gSkMW54SW5i",
    "W6ZdKCoVWRRcIa",
    "WQpdOmkAwmkc",
    "qSkDt8kNaG",
    "pfbGWQC",
    "pe/cM8oMW54",
    "W4VcQqhdTSk0",
    "xKBcJuddRLDQphVdQcxcIW",
    "AbaMWQ3dRmogWO3cIeDcW7K7WQPF",
    "A8ofwN4j",
    "0Bnd0RZsG9oQ",
    "zSotWPddTmkA",
    "WOL3yCoYWRS",
    "cmk6WQqXW4q",
    "WO5Yrmoz",
    "WOjQWOlcR2e",
    "WROMW6jh",
    "w8oXELuP",
    "0B3rVsTZ0ka",
    "05RrHDcq0iVrHW",
    "WPBcU8oYsSkZ",
    "W49Ngt/cOa",
    "vLfdW6D3",
    "W5mHd8ohWRe",
    "W6yeW67cN8k0",
    "AbBcGrS6",
    "p8ooWRHDWO8",
    "oSoBW4bK",
    "gCo/WOjdWP8",
    "s8kgwmkMba",
    "WQdcNSo+WOtdUW",
    "ASotWOFdJSkg",
    "0BpqJTge0jhrVW",
    "WP3dQwpdMfC",
    "l0nRjW",
    "0AVcMToI0lBtRG",
    "kLdcMmo6W6C",
    "W4xcOCk2h0e",
    "httcJ8k7W5W",
    "vSkQW4SXW4m",
    "WRVdMLldV2a",
    "BXZcNY0M",
    "W6yTWRekwG",
    "jcnttGe",
    "W7NcRSkbdXu",
    "W5ubW4W1WPS",
    "WQhcS8oiCmke",
    "WQFcKCoGWPJdQW",
    "d3NcV8okW7a",
    "WQZqVnge0AVtUq",
    "qXBcNmkHW40",
    "cg/cU8ol",
    "sSogWRTFW5e",
    "kCoxW5vP",
    "kqraWP5N",
    "W7m9W4SJWRK",
    "WOSsW7X6W5K",
    "ocPpWOLS",
    "lJbXzgG",
    "WOPctxW3",
    "WO3dTxu",
    "0Pb1067rSDkJ",
    "x8kNW6CS",
    "pCkdWOqxW6i",
    "WQXtwSoMWOW",
    "WPFcMmocWOxdUG",
    "W63cThxcKCou",
    "W5fOBwhdGa",
    "tCoaWQJdHSkV",
    "vLjMW6rA",
    "WRhdVCkVrCkP",
    "zSooWQNdLSks",
    "zCoxWOFdOSk3",
    "W7ZcPY/dRCkw",
    "W7/dH8ozcCof",
    "W7Gmb8oiWPW",
    "07hsVDkA0AZtJG",
    "WPaxW4xcICkJ",
    "WRS6z2u5",
    "0khtSDg70k1a",
    "WRVtSDo+0lHp",
    "fCoWWR7dNG",
    "e8ouWR85",
    "xHNdR8o7xa",
    "WQr1zKWw",
    "WQtdR8kermks",
    "W5BcJKpcSCo+",
    "0k/rOnoh07psHq",
    "0yJqRTkw0ONtKa",
    "dSkUWRKXW4q",
    "pgNcQSor",
    "W7JdLSoVWP0",
    "CCkarCkwgq",
    "WO/dG8kEDa",
    "ECkif8o8EW",
    "WOjerseC",
    "jeFcOSoeW6y",
    "W75RnsnwactcJMdcHLBdUCoN",
    "WOVdRNpdHey",
    "gTo30P3qL8kx",
    "uCoqWPHaW5e",
    "W4NcU3m",
    "WRpdHSk0qSk5",
    "WRijW7NcN8ke",
    "0RqT053tTncg",
    "W6hcVmoOgCohW6VdQu15BmoSgr4",
    "0B/qNDkB0QxtLq",
    "k01KW7hcTq",
    "0PZqSngA0yBsVG",
    "zCkEnSoQzW",
    "bCo7WQ/dICkh",
    "rSkvWPXbW4W",
    "WRigW4pcHmk/",
    "W7lcLCkRccy",
    "W5/qJ9oR0BBsIa",
    "W7ZcVxBcGSod",
    "WQWGW4bqW7G",
    "aXT1WRH/",
    "W77dKmoPWOZcUa",
    "WOvPzIul",
    "WOVcISoSzSkt",
    "vCkTW7KZW5i",
    "zmoeWOZdVSkA",
    "0B3qInc30Amr",
    "uqdcI8kRW54",
    "W53cTx/cQ8oy",
    "W5ahW7mFWQ8",
    "vaBdG8o0rW",
    "ySkgCmkaaa",
    "W4iEW5W",
    "WQr1tSo9WQS",
    "uerZW7W",
    "W6ZcONBcH8oY",
    "WRZcTCojyCkq",
    "W6LzhY/cSq",
    "aSorW5r5W7G",
    "0k/rOmoD07tsJq",
    "BrFcKbm4",
    "zbFcUCkpW6C",
    "WQzFs8oYWOO",
    "0yprUTgN0j4b",
    "W6xcThC",
    "FvbPW6j/",
    "W45SvNZdIq",
    "pb1dWOKn",
    "W4C2hmoCW7K",
    "WOJdP8kYnMm",
    "W6ZcPhdcGmou",
    "0zNsGbNqPDgx",
    "v8oYWQbMW7y",
    "W6ZcUhZcJCoU",
    "WPFdRCkVdCkv",
    "ySoDWPFdV8kp",
    "mfTDW7pcVq",
    "pqH6W7JcOW",
    "WQpdVCk4tSkt",
    "04dtGTof0iVdUW",
    "WQS6W69CW6O",
    "W4D7FMa",
    "u8omWRrBW5q",
    "wCoJFeiT",
    "w8onWOeEW4C",
    "nCozmfVcUG",
    "WOv4WOlcSLu",
    "yxDFW4zw",
    "WQZtQno30l/tTG",
    "W4qHdG",
    "0yBrJmog0y3rQG",
    "q0RdH8oGqq",
    "WOW7WRrfWQe",
    "WQ8sW5RcHmk1",
    "05BrLcxsKTkj",
    "jCkHWPGvW6q",
    "0BNsHnklmnkO",
    "vqtcLSkXW5W",
    "W6DnxehdKW",
    "0ixrNToh07FcHG",
    "0P/sLDocW4/tRq",
    "kSkhWOqXW7G",
    "iCo/WOWPla",
    "W6TVhc4",
    "WPGqW7X4W5G",
    "rrJdICoN",
    "04vV06pqITkc",
    "W4T9FG",
    "FSozs24y",
    "x8kAwSkIeG",
    "06FqLDkw0i7sPq",
    "W6HhdYpcRq",
    "WQtcMmotWP7dUG",
    "WRLDWQxcJ3C",
    "W73dVCoDWRBcKa",
    "cN1eW5ZcLG",
    "WO91dsua",
    "W5lcIHldMSkq",
    "0BptLTop0yZtIW",
    "W6a0WQ0pAq",
    "WRFdRCkVEmkf",
    "zCksz8k6pW",
    "kSoFpftcIq",
    "bdzex1q",
    "WQFdVwtdM0K",
    "bmkPWQmYW5m",
    "WOO8WR5f",
    "W7hcPCk0mXu",
    "WPn1WPdcQeq",
    "WRfiWR/cINm",
    "zCkxW7iuW6G",
    "W4uaWO8GFa",
    "W7yMWQqr",
    "WOhcNmo8",
    "zmkplmoTAW",
    "WR9zv8oSWO4",
    "WOpdGCkuy8kP",
    "oLhcVSoP",
    "0ANsIToG0lBtQa",
    "WOzmu1i2",
    "hrDKWQ55",
    "WQBcVSoxWQ1v",
    "W5dcIWRdSCkB",
    "0QFrJDki0jRtIW",
    "W4ZcMfZcRCoU",
    "05trJ9cv0BhrIa",
    "W5aCkSoOWPK",
    "cSkNWQ8/W48",
    "WRZcQSoiWOhdUG",
    "WO7dUSk1gwW",
    "uSoJWQ7dKmkQ",
    "W6xcICkspqi",
    "WOtdH8kjBmkX",
    "0OpqV9ka0AJtJa",
    "lmorW4z+W7i",
    "xSkvwmk6hW",
    "W4z+W6OcW7CdWORdLSkgW5JdOmo+",
    "W5hcNwRcTSoB",
    "hmoOc1lcOW",
    "WPFcISojWPa",
    "bmogWOOOcq",
    "W6NdMCoeeSoe",
    "W5JdVMpdHuO",
    "EbpdPmoDBW",
    "m8okWPtdOSk2",
    "w8kWW5imW5a",
    "W63cPwFcISoJ",
    "b2RcKmoZW4a",
    "q35yW69g",
    "WRJcLSocWOZdSW",
    "W6PNeZVcOa",
    "xCk0cSoowG",
    "0P/rQ9kr0ipsOa",
    "jmkrWRmbW68",
    "WOW7WRPdWRu",
    "04dsTTkC0jqs",
    "F8kinCoTiG",
    "W4pdGCk6W5qPrCoCDaBcNmkmW4u3eW",
    "WP4SWQ9EWRy",
    "WR7dVCkEwSk4",
    "aGxdJHRcQW",
    "CbhcGWal",
    "FCkgW7KtW7i",
    "0zpsI9kb0kxtLG",
    "WRBtN9o+0yxqOq",
    "W6ZcTgC",
    "W7/dGSoze8oP",
    "valdLmo6wa",
    "ySoOq2u5",
    "WRKgWOycW7y",
    "0zxqMSoD0OJsHq",
    "omoBWRrKWR8",
    "pJPEWOHd",
    "WPHIsZix",
    "0iJqO9ob07dsMa",
    "0P7rT9gdWPhtQW",
    "j8osmCowwJpcMwS",
    "WRdcUmouWPNdTW",
    "uCo5WQ3dHq",
    "WOFcJCotWOtdVa",
    "BSkzW6ekW5a",
    "vmkWW483W5K",
    "W64dW5CRWPC",
    "WP/dVMxdU0q",
    "WRvIChWh",
    "qHNdG8oN",
    "pSkkWRebW74",
    "0QxrHDo30A7tHG",
    "eGtdMqC",
  ];
  _0x2590 = function () {
    return _0x5e2cca;
  };
  return _0x2590();
}
function _0x3cbd83(_0x280f02, _0x597144, _0x110e76, _0x502b40) {
  return _0x5513(_0x110e76 + 0x3c7, _0x597144);
}
_0x134412[
  _0x5513(987, "RI4V") + _0x5513(883, "#iFj") + _0x5513(914, "oFDc") + "L"
] = API_URLS[_0x5513(1089, "n1JM") + _0x5513(1207, "d5^N") + "XY"];
_0x134412[_0x5513(989, "6pu2") + _0x5513(957, ")PT1") + "NON_K" + "EY"] =
  API_CONFIG[_0x5513(1092, "%3u(") + _0x5513(1120, "6pu2") + "NON_K" + "EY"];
_0x134412[_0x5513(1094, "@xNa") + _0x5513(761, "d]1P") + "Y"] =
  STORAGE_KEYS[_0x5513(555, "o9pq")];
_0x134412[_0x5513(1431, "d5^N") + "TG_ID" + _0x5513(496, "!Jvz")] =
  STORAGE_KEYS[_0x5513(730, "kYGt") + _0x5513(659, "u1Y&")];
_0x134412["EXTENSION_" + _0x5513(442, "waan") + _0x5513(1199, "%3u(") + "E"] =
  STORAGE_KEYS[
    _0x5513(772, "ryGL") + _0x5513(1105, "sL*0") + _0x5513(667, "kYGt")
  ];
_0x134412[_0x5513(886, "hw%z") + _0x5513(724, "ryGL") + "SION"] = "1.0";
_0x134412[_0x5513(814, ")PT1") + _0x5513(1204, "WvZj") + "MS"] = 36000000;
_0x134412[
  _0x5513(1406, "#(MG") +
    _0x5513(541, "oFDc") +
    "INTER" +
    _0x5513(556, "sP^Z") +
    "S"
] = 86400000;
const authDebug = (..._0x465794) => {};
class ThreadsAIAuth {
  constructor() {
    this[_0x5513(1006, "n1JM")] = null;
    this[_0x5513(1181, "0fBG") + "tiali" + _0x5513(1322, "1I&$")] = false;
    this[_0x5513(1110, "cADv") + _0x5513(1386, "ryGL") + "ge"] = null;
  }
  async [_0x5513(1117, ")PT1")]() {
    const _0x1c75dc = {
      [_0x5513(552, "NmL9")]:
        _0x5513(1210, "sP^Z") +
        _0x5513(691, "RBpE") +
        _0x5513(1152, "XZRL") +
        "r:",
      [_0x5513(547, "ZFK(")]:
        _0x5513(1214, "hw%z") +
        _0x5513(620, "NmL9") +
        "e err" +
        _0x5513(1429, "hw%z"),
      [_0x5513(1042, "vQ74")]:
        _0x5513(948, "PAmu") +
        _0x5513(573, "hw%z") +
        _0x5513(631, "sL*0") +
        _0x5513(432, "#t^*") +
        "r:",
      UmnCT: function (_0x3d657f, _0x58af30) {
        return _0x3d657f === _0x58af30;
      },
      [_0x5513(999, "hw%z")]: _0x5513(592, "!PqM"),
      oXhzS: function (_0x3d1a5a, _0x11b08b) {
        return _0x3d1a5a > _0x11b08b;
      },
      GSjIS: function (_0x575301, _0x22fa92) {
        return _0x575301 > _0x22fa92;
      },
      [_0x5513(1138, "#(MG")]: _0x5513(528, "sP^Z"),
      [_0x5513(1282, "#iFj")]: _0x5513(1293, "#iFj"),
      [_0x5513(526, "N]sh")]: function (_0x3fe03e, _0x1f7328) {
        return _0x3fe03e !== _0x1f7328;
      },
      [_0x5513(935, "XZRL")]: _0x5513(414, "#(MG"),
    };
    try {
      if (_0x5513(443, ")PT1") === _0x1c75dc[_0x5513(633, "N]sh")]) {
        const _0x38b45e =
          this["getCa" + _0x5513(468, "CiLY") + _0x5513(1357, "X(&D")]();
        if (
          _0x38b45e &&
          _0x38b45e[_0x5513(1174, "BDHH")] &&
          _0x38b45e[_0x5513(839, "n1JM") + _0x5513(813, "JGn%")] >
            Date[_0x5513(632, "@uPj")]()
        ) {
          this[_0x5513(727, "goM[")] = _0x38b45e.user;
          this[
            _0x5513(725, "C!R2") + _0x5513(641, "@xNa") + _0x5513(938, "#iFj")
          ] = true;
          if (
            _0x1c75dc[_0x5513(1367, "XZRL")](
              Date.now() -
                _0x38b45e[_0x5513(643, "@uPj") + _0x5513(811, "goM[")],
              _0x134412[
                _0x5513(936, "goM[") +
                  "HECK_" +
                  _0x5513(764, "(1w!") +
                  _0x5513(466, "XZRL") +
                  "S"
              ],
            )
          ) {
            this[_0x5513(433, "RI4V") + "shAut" + _0x5513(1022, "@xNa") + "nt"](
              _0x38b45e[_0x5513(1422, "PAmu")][_0x5513(827, "@xNa")],
            );
          }
          return true;
        }
        this[_0x5513(888, "KI9*")] = null;
        try {
          if (_0x1c75dc.Stval === _0x1c75dc[_0x5513(688, "1I&$")]) {
            _0x2bca14[_0x5513(1318, "(1w!")](
              _0x1c75dc[_0x5513(1255, "!PqM")],
              _0x133a3c,
            );
          } else {
            const _0x9f0390 = await chrome[
              _0x5513(1276, ")PT1") + "ge"
            ].local.get([
              _0x134412[_0x5513(1157, "RI4V") + _0x5513(1084, "X(&D") + "Y"],
            ]);
            if (
              _0x38b45e ||
              _0x9f0390?.[
                _0x134412[_0x5513(544, "dIZY") + _0x5513(1056, "u1Y&") + "Y"]
              ]
            ) {
              this["clear" + _0x5513(862, "@xNa") + "dAuth"]();
            }
          }
        } catch (_0x1f5eb1) {
          if (_0x38b45e) {
            if (
              _0x1c75dc[_0x5513(1320, "CiLY")](
                _0x5513(956, "(1w!"),
                _0x1c75dc[_0x5513(437, "CiLY")],
              )
            ) {
              this[_0x5513(1287, "hw%z") + _0x5513(1111, "0fBG") + "dAuth"]();
            } else {
              _0xe91af0[_0x5513(1318, "(1w!")](
                _0x1c75dc[_0x5513(674, "#t^*")],
                _0x1d727f,
              );
            }
          }
        }
        this[
          _0x5513(950, "6pu2") + _0x5513(1264, "kYGt") + _0x5513(1395, "sP^Z")
        ] = true;
        return false;
      } else {
        try {
          const _0x96b725 = _0xf49f28[_0x5513(1253, "WvZj") + "em"](
            _0x2663e0["STORA" + _0x5513(1021, "hw%z") + "Y"],
          );
          if (!_0x96b725) {
            return null;
          }
          const _0x3558db = _0x288f35.parse(_0x96b725);
          if (
            !_0x3558db ||
            !_0x3558db[_0x5513(1000, "waan")] ||
            !_0x3558db[_0x5513(1324, "!PqM") + _0x5513(1165, "XZRL")]
          ) {
            return null;
          }
          return _0x3558db;
        } catch (_0x2b6b09) {
          _0x35ef29.error(_0x1c75dc.aHDaU, _0x2b6b09);
          return null;
        }
      }
    } catch (_0x44abb7) {
      console.error(
        "Auth " + _0x5513(1050, "sP^Z") + _0x5513(479, "d]1P") + ":",
        _0x44abb7,
      );
      this[_0x5513(499, "d]1P") + _0x5513(1159, "RI4V") + "zed"] = true;
      return false;
    }
  }
  async [_0x5513(822, "!PqM")](_0x256a37) {
    const _0x40c9db = {
      DGlGr: "dPzTm",
    };
    _0x40c9db[_0x5513(522, "goM[")] = function (_0x55af32, _0x401a6b) {
      return _0x55af32 !== _0x401a6b;
    };
    _0x40c9db.NPMfm = "IgOIT";
    _0x40c9db[_0x5513(758, "PAmu")] =
      _0x5513(932, "kYGt") + _0x5513(436, "BDHH") + "r:";
    try {
      if ("dPzTm" !== _0x40c9db[_0x5513(744, "!F%$")]) {
        this[
          _0x5513(746, "Xvzc") +
            _0x5513(799, "PAmu") +
            _0x5513(1421, "dIZY") +
            "nt"
        ](_0x309c1e[_0x5513(449, "d]1P")].tg_id);
      } else {
        const _0x45f781 = parseInt(_0x256a37, 10);
        if (
          !_0x45f781 ||
          _0x45f781 <= 0 ||
          !Number[_0x5513(1392, "N]sh") + _0x5513(981, "BDHH")](_0x45f781)
        ) {
          if (_0x40c9db[_0x5513(1286, "ryGL")]("IgOIT", _0x40c9db.NPMfm)) {
            _0x4f9dba.error(
              _0x5513(1202, "shSO") +
                " cach" +
                _0x5513(1371, "Xvzc") +
                _0x5513(990, "@uPj") +
                _0x5513(789, "hw%z"),
              _0x209cf7,
            );
            return null;
          } else {
            const _0x1702e3 = {
              [_0x5513(944, "#iFj") + "ss"]: false,
              [_0x5513(663, "!F%$")]:
                _0x5513(692, "sL*0") +
                _0x5513(420, "d]1P") +
                _0x5513(678, "@uPj"),
            };
            return _0x1702e3;
          }
        }
        this[_0x5513(471, "vQ74") + _0x5513(1223, "JGn%") + "Id"](_0x45f781);
        const _0x5c3fb7 = {
          bindOnMiss: true,
        };
        const _0x21a0d7 = await this[
          _0x5513(628, "N]sh") + _0x5513(1023, "dIZY") + "I"
        ](_0x45f781, _0x5c3fb7);
        if (!_0x21a0d7[_0x5513(915, "KI9*") + "ss"]) {
          return _0x21a0d7;
        }
        this[_0x5513(1082, "cADv")] = _0x21a0d7.user;
        this["cache" + _0x5513(887, "0fBG")](_0x21a0d7[_0x5513(530, "1I&$")]);
        if (this[_0x5513(1247, "6pu2") + _0x5513(729, "2FCz") + "ge"]) {
          this["onAut" + _0x5513(580, "RBpE") + "ge"](
            true,
            this[_0x5513(1381, "ZFK(")],
          );
        }
        const _0x5199c9 = {
          success: true,
          [_0x5513(529, "N]sh")]: this[_0x5513(1112, "WvZj")],
        };
        return _0x5199c9;
      }
    } catch (_0x354554) {
      console[_0x5513(1170, "BDHH")](_0x40c9db.oGHQr, _0x354554);
      const _0x7e904d = {
        [_0x5513(717, "sL*0") + "ss"]: false,
        [_0x5513(1170, "BDHH")]:
          _0x5513(762, "sP^Z") + _0x5513(1228, "waan") + "ror",
      };
      return _0x7e904d;
    }
  }
  [_0x5513(550, "(1w!") + "t"]() {
    this[_0x5513(458, "#iFj")] = null;
    this[_0x5513(924, "%3u(") + "Cache" + _0x5513(985, "o9pq")]();
    if (this[_0x5513(425, "!F%$") + _0x5513(757, ")PT1") + "ge"]) {
      this[_0x5513(841, "d]1P") + _0x5513(1259, "u1Y&") + "ge"](false, null);
    }
  }
  ["isAuthenticated"]() {
    return !!this[_0x5513(1289, "JGn%")] && this[_0x5513(1079, "%3u(")].active;
  }
  [_0x5513(994, "PAmu") + "er"]() {
    return this.user;
  }
  ["isBlo" +
    _0x5513(949, "WvZj") +
    _0x5513(518, "n1JM") +
    _0x5513(928, "vQ74")](_0x5b1e58) {
    const _0x5e27d6 = {
      BYROB: "not_r" + _0x5513(421, "X(&D") + _0x5513(955, "BDHH"),
      SPcau:
        _0x5513(1390, "ZFK(") +
        _0x5513(707, "Bvbd") +
        _0x5513(828, "WvZj") +
        "ot_bo" +
        _0x5513(1407, "d]1P"),
      nqxgb:
        "inval" +
        _0x5513(738, "!F%$") +
        _0x5513(645, "NmL9") +
        _0x5513(765, "XZRL") +
        "y",
      koaDq:
        _0x5513(722, "@uPj") +
        _0x5513(662, "#t^*") +
        _0x5513(1336, ")PT1") +
        "equir" +
        "ed",
      NLyUj: _0x5513(735, "1I&$") + "ripti" + "on_ex" + "pired",
      uenEM: _0x5513(793, "%3u(") + "nt_in" + "activ" + "e",
      HHKhT: function (_0x46917a, _0x531376) {
        return _0x46917a(_0x531376);
      },
      aMssf: function (_0x56e856, _0x2c7c24) {
        return _0x56e856 || _0x2c7c24;
      },
    };
    return [
      _0x5e27d6[_0x5513(754, "6pu2")],
      _0x5513(907, "d5^N") +
        _0x5513(1140, "u1Y&") +
        _0x5513(1028, "kYGt") +
        _0x5513(1103, "goM[") +
        _0x5513(900, "Bvbd") +
        "devic" +
        "e",
      _0x5513(615, "sP^Z") +
        _0x5513(1405, "kYGt") +
        _0x5513(1123, "#iFj") +
        _0x5513(1345, "@uPj"),
      _0x5e27d6.SPcau,
      _0x5e27d6.nqxgb,
      _0x5e27d6[_0x5513(733, "oFDc")],
      _0x5e27d6[_0x5513(1031, "#iFj")],
      _0x5e27d6.uenEM,
    ]["inclu" + _0x5513(963, "shSO")](
      _0x5e27d6[_0x5513(1041, "CiLY")](
        String,
        _0x5e27d6[_0x5513(1423, "Zm69")](_0x5b1e58, ""),
      )[_0x5513(954, "JGn%") + _0x5513(833, "CiLY") + "e"](),
    );
  }
  async [_0x5513(1067, "@uPj") + _0x5513(844, "@xNa") + "hStri" + "ct"](
    _0x102efb,
  ) {
    const _0x5cf1e6 = {
      DwOLU: function (_0x40e6cb, _0x4e32c6) {
        return _0x40e6cb(_0x4e32c6);
      },
      AKLpH:
        _0x5513(834, "d]1P") +
        _0x5513(1309, "!F%$") +
        _0x5513(1180, "#(MG") +
        _0x5513(1382, "@xNa") +
        "r:",
      vtkBs: function (_0x123082, _0x220df5, _0x207860) {
        return _0x123082(_0x220df5, _0x207860);
      },
      ypkXH:
        _0x5513(660, "n1JM") +
        _0x5513(965, "%3u(") +
        _0x5513(755, "#t^*") +
        "alida" +
        _0x5513(607, "n1JM"),
      JZVmk: _0x5513(1372, "waan") + _0x5513(1065, "ryGL") + "d",
      WAEFJ: _0x5513(1047, "hw%z"),
      XFuWr:
        _0x5513(1073, "@xNa") +
        _0x5513(566, "o9pq") +
        _0x5513(511, "@xNa") +
        _0x5513(1425, "hw%z") +
        ":",
      eAOYd:
        _0x5513(1195, "X(&D") + _0x5513(781, "sL*0") + _0x5513(422, "Xvzc"),
    };
    try {
      const _0x15d008 = {
        [_0x5513(1339, "(1w!") + _0x5513(1365, "cADv")]: false,
      };
      const _0x40051f = await this[_0x5513(993, "n1JM") + "uthAP" + "I"](
        _0x102efb,
        _0x15d008,
      );
      if (_0x40051f[_0x5513(775, "d5^N") + "ss"]) {
        this[_0x5513(1402, "@uPj")] = _0x40051f[_0x5513(671, "ryGL")];
        this[_0x5513(796, "4^QT") + "Auth"](_0x40051f.user);
        if (this[_0x5513(1377, "u1Y&") + _0x5513(1355, "C!R2") + "ge"]) {
          this[_0x5513(639, "(1w!") + _0x5513(634, "d]1P") + "ge"](
            true,
            this[_0x5513(1368, "6pu2")],
          );
        }
        const _0x4f87b2 = {
          [_0x5513(534, "N]sh") + "ss"]: true,
          user: this[_0x5513(1402, "@uPj")],
        };
        return _0x4f87b2;
      }
      if (
        this[
          _0x5513(715, "Zm69") +
            _0x5513(465, "#iFj") +
            _0x5513(1109, "Zm69") +
            _0x5513(979, "%3u(")
        ](_0x40051f[_0x5513(1054, "cADv")])
      ) {
        _0x5cf1e6[_0x5513(554, "#(MG")](
          authDebug,
          _0x5cf1e6[_0x5513(917, "NmL9")],
          _0x40051f[_0x5513(1389, "sP^Z")],
        );
        this.logout();
      }
      const _0x55f1c0 = {
        [_0x5513(1411, "!Jvz") + "ss"]: false,
        [_0x5513(564, "NmL9")]:
          _0x40051f[_0x5513(621, "ryGL")] || _0x5cf1e6[_0x5513(1376, "Zm69")],
      };
      return _0x55f1c0;
    } catch (_0x1b7de4) {
      if (
        _0x5cf1e6[_0x5513(1198, "hw%z")] !== _0x5cf1e6[_0x5513(476, "BDHH")]
      ) {
        try {
          _0xd79283.setItem(
            _0x3e9cdc[
              _0x5513(1113, "RI4V") +
                _0x5513(853, "JGn%") +
                _0x5513(890, "PAmu")
            ],
            _0x5acc83(_0x1c13fe),
          );
        } catch (_0x58d38c) {
          _0xbcb9e4[_0x5513(1141, "0fBG")](
            _0x5cf1e6[_0x5513(1280, "CiLY")],
            _0x58d38c,
          );
        }
      } else {
        console[_0x5513(1292, "RI4V")](
          _0x5cf1e6[_0x5513(1252, "CiLY")],
          _0x1b7de4,
        );
        const _0x58b20b = {
          [_0x5513(847, "XZRL") + "ss"]: false,
          [_0x5513(826, "2FCz")]: _0x5cf1e6.eAOYd,
        };
        return _0x58b20b;
      }
    }
  }
  async [_0x5513(1303, "%3u(") + "shAut" + _0x5513(1434, "6pu2") + "nt"](
    _0x3a6cbf,
  ) {
    const _0x2deb2b = {
      cuwtI: _0x5513(774, "JGn%"),
      cdzyz: _0x5513(460, "C!R2"),
      HeKzH: function (_0x252f82, _0x5ce578) {
        return _0x252f82 !== _0x5ce578;
      },
      KRVWX: "SUgpZ",
      idiYL: _0x5513(731, "shSO"),
      RCJmy: function (_0x3d264d, _0xe83d96, _0x29d0a6) {
        return _0x3d264d(_0xe83d96, _0x29d0a6);
      },
    };
    try {
      const _0x1d9bd5 = {
        [_0x5513(472, "PAmu") + _0x5513(771, "6pu2")]: false,
      };
      const _0x30e4d4 = await this[_0x5513(637, "RI4V") + "uthAP" + "I"](
        _0x3a6cbf,
        _0x1d9bd5,
      );
      if (_0x30e4d4[_0x5513(753, "o9pq") + "ss"]) {
        if (_0x5513(1183, "Bvbd") === _0x2deb2b[_0x5513(1208, "1I&$")]) {
          this[_0x5513(584, "!Jvz") + _0x5513(1386, "ryGL") + "ge"](
            true,
            this[_0x5513(1174, "BDHH")],
          );
        } else {
          this.user = _0x30e4d4[_0x5513(1151, "kYGt")];
          this[_0x5513(504, "!F%$") + "Auth"](_0x30e4d4.user);
          if (this[_0x5513(1263, "Zm69") + _0x5513(1186, "4^QT") + "ge"]) {
            if (_0x5513(721, "XZRL") === _0x2deb2b.cdzyz) {
              this[_0x5513(425, "!F%$") + _0x5513(1098, "goM[") + "ge"](
                true,
                this[_0x5513(565, "shSO")],
              );
            } else {
              this.user = null;
              this[
                _0x5513(912, "#iFj") +
                  _0x5513(818, "o9pq") +
                  _0x5513(817, "NmL9")
              ]();
              if (this[_0x5513(1242, "!PqM") + _0x5513(1098, "goM[") + "ge"]) {
                this[_0x5513(636, "dIZY") + _0x5513(969, "hw%z") + "ge"](
                  false,
                  null,
                );
              }
            }
          }
        }
      } else if (
        this[
          _0x5513(849, "(1w!") +
            _0x5513(1175, "(1w!") +
            "AuthE" +
            _0x5513(979, "%3u(")
        ](_0x30e4d4.error)
      ) {
        if (
          _0x2deb2b[_0x5513(1045, "sP^Z")] !== _0x2deb2b[_0x5513(1118, ")PT1")]
        ) {
          _0x2deb2b[_0x5513(1169, "RBpE")](
            authDebug,
            _0x5513(500, "2FCz") +
              _0x5513(934, "!PqM") +
              _0x5513(1016, "X(&D") +
              "d:",
            _0x30e4d4[_0x5513(524, "XZRL")],
          );
          this.logout();
        } else {
          this.onAuthChange(false, null);
        }
      }
    } catch (_0x2bf35a) {
      console[_0x5513(881, "4^QT")](
        "Silen" +
          _0x5513(1400, "sP^Z") +
          _0x5513(1383, "1I&$") +
          _0x5513(1177, "X(&D") +
          ":",
        _0x2bf35a,
      );
    }
  }
  async [_0x5513(637, "RI4V") + "uthAP" + "I"](_0x130f28, _0x2840aa = {}) {
    const _0x42497b = {
      jTqPt:
        "exten" +
        _0x5513(959, "!Jvz") +
        "bound" +
        _0x5513(889, "2FCz") +
        _0x5513(875, "Xvzc") +
        _0x5513(1391, "Xvzc") +
        "e",
      OcKPb:
        _0x5513(1304, "shSO") + _0x5513(1360, "@uPj") + _0x5513(1231, "sL*0"),
      VvYdx:
        _0x5513(1182, "#iFj") +
        _0x5513(540, "1I&$") +
        "key_n" +
        _0x5513(1131, "!Jvz") +
        "und",
      rttiR:
        _0x5513(1114, "#t^*") +
        _0x5513(743, "o9pq") +
        _0x5513(581, "o9pq") +
        _0x5513(918, "u1Y&") +
        "y",
      jSome:
        _0x5513(1441, "KI9*") +
        _0x5513(1427, "WvZj") +
        _0x5513(893, "CiLY") +
        "equir" +
        "ed",
      Dkqyk:
        _0x5513(895, "C!R2") +
        _0x5513(1424, "4^QT") +
        _0x5513(424, "Zm69") +
        "pired",
      CjMlG: _0x5513(657, "#iFj") + _0x5513(1379, "CiLY") + "activ" + "e",
      LomHA: function (_0x3d6e10, _0x1db78a) {
        return _0x3d6e10(_0x1db78a);
      },
      oJayB: function (_0x351003, _0x823c16) {
        return _0x351003(_0x823c16);
      },
      jnhiX:
        "[AUTH] Generated new extension" +
        _0x5513(1271, "PAmu") +
        _0x5513(583, "waan") +
        "lStor" +
        _0x5513(665, "ZFK(") +
        _0x5513(1277, "RI4V") +
        _0x5513(647, "6pu2"),
      tMduE: function (_0x26a741, _0x49ebb9) {
        return _0x26a741 > _0x49ebb9;
      },
      TZGRg: function (_0x185d5a, _0x52b5cf) {
        return _0x185d5a - _0x52b5cf;
      },
      hXowz: function (_0x5e715c, _0x170785) {
        return _0x5e715c !== _0x170785;
      },
      LvVWG: function (_0x4ba624, _0x2b0189) {
        return _0x4ba624 === _0x2b0189;
      },
      yOkAD: _0x5513(1380, "!F%$") + "y",
      jtpsh: _0x5513(1090, "RBpE") + "rizat" + _0x5513(482, "hw%z"),
      gektz: function (_0x314f43, _0x4d7c4c, _0x5e995f) {
        return _0x314f43(_0x4d7c4c, _0x5e995f);
      },
      CxbBz: function (_0xfc698c, _0x2a6be0) {
        return _0xfc698c === _0x2a6be0;
      },
      ahzHJ: function (_0x3561be, _0x136ac7, _0x2c2a01) {
        return _0x3561be(_0x136ac7, _0x2c2a01);
      },
      EtfFJ: _0x5513(1188, "#iFj"),
      gYGAR: function (_0xc6877e, _0x153f70) {
        return _0xc6877e(_0x153f70);
      },
      QWwUG: function (_0x120879, _0x49dfc6) {
        return _0x120879 !== _0x49dfc6;
      },
      mQMBo: "iVTUM",
      wGjVs: _0x5513(750, "n1JM"),
      EHDhh: function (_0x1d2469, _0x488c46) {
        return _0x1d2469 !== _0x488c46;
      },
      ugopA: _0x5513(906, "sP^Z"),
      NddPF: _0x5513(872, "shSO"),
      OxrsZ: _0x5513(1125, "0fBG") + "r_err" + "or",
      NDbNw: _0x5513(582, "hw%z") + _0x5513(644, "sP^Z") + "se",
      qTwqH: function (_0xbda844, _0x201400) {
        return _0xbda844 === _0x201400;
      },
      Fhjdh: function (_0x13019c, _0x4393da) {
        return _0x13019c === _0x4393da;
      },
      jyuMp: _0x5513(1398, "BDHH"),
      GLidO: _0x5513(1394, "JGn%") + _0x5513(1078, "4^QT") + "lient",
      mBuBG: function (_0x78633b, _0x3de9c1) {
        return _0x78633b === _0x3de9c1;
      },
      GKGqR: function (_0x5c288f, _0x18d22c) {
        return _0x5c288f === _0x18d22c;
      },
      hRXFW: function (_0x385b53, _0x3380d1) {
        return _0x385b53 === _0x3380d1;
      },
      FemyH: "exten" + _0x5513(947, "#iFj") + "slots" + _0x5513(439, "hw%z"),
      mNpRv: function (_0x2a04c4, _0x264314) {
        return _0x2a04c4 === _0x264314;
      },
      daVUZ: _0x5513(1272, "waan"),
      cDrLz: "HZmvi",
      VpdlM: function (_0x20a2a2, _0x456f99) {
        return _0x20a2a2 === _0x456f99;
      },
      szodV:
        _0x5513(1364, "goM[") +
        "limit" +
        _0x5513(1437, "!F%$") +
        _0x5513(576, "u1Y&"),
      XqEIC: _0x5513(1296, "#t^*"),
      EdUCh: "CxEit",
      nJszO: _0x5513(1354, "N]sh"),
      FHoAV: function (_0x4aeb49, _0x46a635) {
        return _0x4aeb49 === _0x46a635;
      },
      rRKin: _0x5513(451, "sP^Z"),
      VXjmh: "YYpba",
      YJyNJ: function (_0x1bf12a, _0x3acfd8) {
        return _0x1bf12a(_0x3acfd8);
      },
      llRgS: function (_0x4f5c33, _0x554675) {
        return _0x4f5c33 === _0x554675;
      },
      JRTvV: _0x5513(532, "oFDc") + "r",
    };
    const _0x57f629 = _0x42497b[_0x5513(739, "CiLY")](
      _0x2840aa[_0x5513(517, "#iFj") + _0x5513(1300, "ZFK(")],
      false,
    );
    const _0x1b1960 = {
      [_0x5513(1212, "NmL9") + "nt-Ty" + "pe"]:
        _0x5513(1124, "BDHH") + _0x5513(782, "oFDc") + "n/jso" + "n",
    };
    if (
      _0x134412[
        _0x5513(1024, "WvZj") +
          _0x5513(1347, "d]1P") +
          _0x5513(930, "NmL9") +
          "EY"
      ] &&
      !_0x134412[_0x5513(520, "!PqM") + "ASE_A" + _0x5513(1243, "0fBG") + "EY"][
        _0x5513(498, "XZRL") + _0x5513(1261, "n1JM")
      ](_0x5513(642, "KI9*") + "HOLDE" + "R")
    ) {
      if (_0x42497b[_0x5513(865, "WvZj")]("VbTCB", _0x5513(669, "@uPj"))) {
        _0x5943a5(
          _0x5513(1283, "u1Y&") + _0x5513(435, "PAmu") + "idate" + "d:",
          _0x4a0ce9[_0x5513(527, "CiLY")],
        );
        this[_0x5513(740, "4^QT") + "t"]();
      } else {
        _0x1b1960[_0x42497b[_0x5513(1196, "XZRL")]] =
          _0x134412[
            _0x5513(989, "6pu2") + "ASE_A" + _0x5513(1220, "WvZj") + "EY"
          ];
        _0x1b1960[_0x42497b[_0x5513(1215, "Bvbd")]] =
          _0x5513(699, "waan") +
          "r " +
          _0x134412[
            _0x5513(520, "!PqM") +
              _0x5513(802, "0fBG") +
              _0x5513(418, "Bvbd") +
              "EY"
          ];
      }
    }
    const _0x17bab3 =
      await this["getEx" + _0x5513(605, "cADv") + _0x5513(891, "sP^Z")]();
    const _0x3bd31f = new AbortController();
    const _0x45175d = _0x42497b[_0x5513(597, "KI9*")](
      setTimeout,
      () => _0x3bd31f[_0x5513(1297, "@xNa")](),
      15000,
    );
    let _0x2f4273;
    try {
      if (_0x42497b[_0x5513(1178, "sL*0")]("dUkrG", _0x5513(910, "d]1P"))) {
        _0x2f4273 = await fetch(
          _0x134412[
            _0x5513(972, "BDHH") + _0x5513(1005, "n1JM") + "ION_U" + "RL"
          ],
          {
            method: _0x5513(1072, "WvZj"),
            headers: _0x1b1960,
            body: JSON[_0x5513(1187, "BDHH") + _0x5513(525, "6pu2")]({
              tg_id: _0x130f28,
              version:
                _0x134412[
                  _0x5513(1232, "!PqM") + "T_VER" + _0x5513(523, "2FCz")
                ],
              client_type:
                _0x5513(1061, "%3u(") +
                _0x5513(931, "o9pq") +
                _0x5513(588, "shSO") +
                "n",
              extension_key: _0x17bab3,
              bind_on_miss: _0x57f629,
            }),
            signal: _0x3bd31f.signal,
          },
        );
      } else {
        const _0x440810 = {
          [_0x5513(775, "d5^N") + "ss"]: false,
          [_0x5513(1141, "0fBG")]: _0x42497b[_0x5513(1341, "Xvzc")],
        };
        return _0x440810;
      }
    } finally {
      if (
        _0x42497b[_0x5513(1128, "oFDc")](
          _0x42497b[_0x5513(1327, "dIZY")],
          _0x5513(983, "2FCz"),
        )
      ) {
        clearTimeout(_0x45175d);
      } else {
        return [
          _0x42497b[_0x5513(927, "goM[")],
          _0x42497b[_0x5513(1227, "vQ74")],
          _0x5513(1206, "d]1P") +
            _0x5513(707, "Bvbd") +
            _0x5513(1337, "PAmu") +
            _0x5513(998, "C!R2"),
          _0x42497b[_0x5513(448, "1I&$")],
          _0x42497b[_0x5513(1040, "#iFj")],
          _0x42497b.jSome,
          _0x42497b[_0x5513(531, "#t^*")],
          _0x42497b[_0x5513(1224, "dIZY")],
        ][_0x5513(1147, "!F%$") + "des"](
          _0x42497b[_0x5513(694, "!PqM")](_0x473fdf, _0x206545 || "")[
            _0x5513(1087, "C!R2") + _0x5513(651, "#t^*") + "e"
          ](),
        );
      }
    }
    const _0x5822bd = await _0x2f4273.text();
    let _0x2521f6 = {};
    try {
      _0x2521f6 = _0x5822bd ? JSON.parse(_0x5822bd) : {};
    } catch (_0x3591dd) {
      if (_0x42497b[_0x5513(684, "Bvbd")] !== _0x42497b[_0x5513(490, "RBpE")]) {
        if (!_0x2f4273.ok) {
          if (
            _0x42497b[_0x5513(1432, "shSO")] !== _0x42497b[_0x5513(649, "kYGt")]
          ) {
            const _0x2cf0e5 = {
              success: false,
              [_0x5513(1235, "shSO")]: _0x42497b[_0x5513(760, "#iFj")],
            };
            return _0x2cf0e5;
          } else {
            this.onAuthChange(true, this.user);
          }
        }
        const _0x371a35 = {
          success: false,
          [_0x5513(524, "XZRL")]: _0x42497b[_0x5513(679, "#iFj")],
        };
        return _0x371a35;
      } else {
        _0x27a8df(_0x46bb61);
      }
    }
    if (_0x2f4273.status === 429) {
      const _0x5120ea = {
        [_0x5513(1139, "dIZY") + "ss"]: false,
        [_0x5513(759, "u1Y&")]: _0x5513(1034, "1I&$") + _0x5513(1397, "!PqM"),
      };
      return _0x5120ea;
    }
    if (_0x2f4273[_0x5513(1442, "d5^N") + "s"] === 426) {
      if (
        _0x42497b[_0x5513(574, "N]sh")](_0x5513(812, "RI4V"), _0x42497b.jyuMp)
      ) {
        const _0x30b691 = {
          success: false,
          error: _0x42497b[_0x5513(546, "NmL9")],
          [_0x5513(1369, "cADv") + _0x5513(1119, "@xNa")]:
            _0x2521f6[_0x5513(462, "%3u(") + "red"],
        };
        return _0x30b691;
      } else {
        return _0x445c94;
      }
    }
    if (
      _0x42497b[_0x5513(1315, "d5^N")](
        _0x2f4273[_0x5513(1048, "waan") + "s"],
        404,
      ) ||
      _0x2521f6.reason === "not_r" + _0x5513(1352, "oFDc") + "ered"
    ) {
      const _0x59c259 = {
        [_0x5513(1302, "#(MG") + "ss"]: false,
        [_0x5513(527, "CiLY")]: _0x42497b[_0x5513(1086, "@uPj")],
      };
      return _0x59c259;
    }
    if (
      _0x42497b[_0x5513(1435, "PAmu")](
        _0x2f4273[_0x5513(413, "XZRL") + "s"],
        403,
      ) &&
      _0x42497b[_0x5513(1013, "4^QT")](
        _0x2521f6[_0x5513(1168, "PAmu") + "n"],
        _0x5513(1066, "oFDc") +
          "sion_" +
          "bound" +
          _0x5513(1418, "NmL9") +
          _0x5513(1440, "ZFK(") +
          "devic" +
          "e",
      )
    ) {
      const _0x279b9b = {
        [_0x5513(1139, "dIZY") + "ss"]: false,
        [_0x5513(1318, "(1w!")]: _0x42497b[_0x5513(1158, "cADv")],
      };
      return _0x279b9b;
    }
    if (
      _0x2f4273[_0x5513(997, "#t^*") + "s"] === 403 &&
      _0x2521f6[_0x5513(1257, "d]1P") + "n"] === _0x42497b[_0x5513(463, "shSO")]
    ) {
      const _0x17b885 = {
        [_0x5513(1411, "!Jvz") + "ss"]: false,
        [_0x5513(621, "ryGL")]: _0x42497b.FemyH,
      };
      return _0x17b885;
    }
    if (
      _0x2f4273[_0x5513(1088, "Xvzc") + "s"] === 403 &&
      _0x2521f6[_0x5513(613, "1I&$") + "n"] === _0x42497b[_0x5513(874, "Bvbd")]
    ) {
      if (
        _0x42497b[_0x5513(578, "vQ74")](
          _0x42497b[_0x5513(700, "#t^*")],
          "HZmvi",
        )
      ) {
        this[_0x5513(1342, "#(MG") + _0x5513(1083, "kYGt") + "dAuth"]();
      } else {
        const _0x5f0fbf = {
          [_0x5513(650, "hw%z") + "ss"]: false,
          [_0x5513(663, "!F%$")]: _0x42497b[_0x5513(1197, "sL*0")],
        };
        return _0x5f0fbf;
      }
    }
    if (
      _0x2f4273[_0x5513(672, "CiLY") + "s"] === 403 &&
      _0x42497b[_0x5513(1192, "ryGL")](
        _0x2521f6[_0x5513(845, "0fBG") + "n"],
        _0x42497b.Dkqyk,
      )
    ) {
      const _0x29a847 = {
        [_0x5513(1063, "Zm69") + "ss"]: false,
        [_0x5513(1054, "cADv")]: _0x42497b[_0x5513(509, "1I&$")],
      };
      return _0x29a847;
    }
    if (
      _0x42497b[_0x5513(1226, "4^QT")](
        _0x2f4273[_0x5513(1438, "%3u(") + "s"],
        403,
      ) &&
      _0x42497b[_0x5513(568, "shSO")](
        _0x2521f6[_0x5513(1097, "ryGL") + "n"],
        _0x42497b[_0x5513(1122, "hw%z")],
      )
    ) {
      if (_0x42497b[_0x5513(870, "X(&D")](_0x42497b.XqEIC, "CxEit")) {
        const _0x2405a7 = {
          [_0x5513(913, "JGn%") + "ss"]: false,
          [_0x5513(919, "WvZj")]: _0x42497b[_0x5513(1433, "N]sh")],
        };
        return _0x2405a7;
      } else {
        _0x1c6645 =
          _0x5513(1387, "d]1P") +
          this[_0x5513(652, "JGn%") + _0x5513(798, "KI9*") + "ID"]();
        _0x9dcf77[_0x5513(452, "goM[") + "em"](
          _0x483c94[
            "EXTEN" +
              _0x5513(1010, "PAmu") +
              "KEY_S" +
              _0x5513(1009, "goM[") +
              "E"
          ],
          _0x24076c,
        );
        _0x42497b[_0x5513(1279, "cADv")](
          _0x1f7536,
          _0x42497b[_0x5513(1093, "N]sh")],
        );
      }
    }
    if (
      _0x2f4273[_0x5513(586, "2FCz") + "s"] === 403 &&
      _0x2521f6[_0x5513(537, "cADv") + "n"] === _0x42497b[_0x5513(1358, "#iFj")]
    ) {
      if ("XvUfM" === _0x42497b[_0x5513(852, "RBpE")]) {
        const _0x3a5240 = {
          [_0x5513(913, "JGn%") + "ss"]: false,
          error:
            _0x5513(793, "%3u(") +
            _0x5513(790, "PAmu") +
            _0x5513(1052, "waan") +
            "e",
        };
        return _0x3a5240;
      } else {
        const _0x416b30 = {
          success: false,
          [_0x5513(1054, "cADv")]:
            _0x5513(714, "XZRL") +
            _0x5513(1140, "u1Y&") +
            _0x5513(871, "#(MG") +
            _0x5513(710, "CiLY"),
        };
        return _0x416b30;
      }
    }
    if (_0x2f4273[_0x5513(1444, "vQ74") + "s"] === 400) {
      if (
        _0x42497b[_0x5513(1370, "vQ74")] === _0x42497b[_0x5513(486, "Xvzc")]
      ) {
        const _0x4fe4b8 = {
          success: false,
          [_0x5513(830, "C!R2")]:
            _0x2521f6[_0x5513(897, "(1w!") + "n"] ||
            _0x5513(545, "waan") + _0x5513(773, "dIZY") + "t",
        };
        return _0x4fe4b8;
      } else {
        this.user = _0x314550[_0x5513(716, "@xNa")];
        this[_0x5513(880, "%3u(") + _0x5513(1260, "BDHH") + "zed"] = true;
        if (
          _0x42497b[_0x5513(1135, "kYGt")](
            _0x42497b[_0x5513(1074, "u1Y&")](
              _0x4f8958.now(),
              _0x2073bb[_0x5513(1190, "JGn%") + _0x5513(1307, "dIZY")],
            ),
            _0x2c6822["MIN_CHECK_" + _0x5513(1193, "@uPj") + "VAL_M" + "S"],
          )
        ) {
          this[_0x5513(863, "#iFj") + _0x5513(1080, "hw%z") + "hSile" + "nt"](
            _0x4e4184.user[_0x5513(882, "PAmu")],
          );
        }
        return true;
      }
    }
    if (!_0x2f4273.ok) {
      if ("YYpba" === _0x42497b[_0x5513(1101, "4^QT")]) {
        const _0x4703f1 = {
          success: false,
          [_0x5513(1425, "hw%z")]:
            _0x2521f6[_0x5513(1409, "d5^N") + "n"] ||
            _0x42497b[_0x5513(1142, "PAmu")],
        };
        return _0x4703f1;
      } else {
        const _0x16a41e = {
          [_0x5513(806, ")PT1") + "ss"]: false,
          [_0x5513(1035, "#(MG")]:
            _0x5513(1266, "X(&D") +
            _0x5513(1060, "#(MG") +
            _0x5513(682, "JGn%") +
            "ot_bo" +
            _0x5513(653, "oFDc"),
        };
        return _0x16a41e;
      }
    }
    const _0x37860d = Number(
      _0x2521f6?.[_0x5513(869, "WvZj") + _0x5513(474, "KI9*")],
    );
    const _0x1efe40 = Number[_0x5513(967, "Bvbd") + _0x5513(752, "#iFj")](
      _0x37860d,
    )
      ? _0x37860d
      : null;
    return {
      success: true,
      user: {
        tg_id: _0x2521f6[_0x5513(819, "vQ74")],
        plan: _0x2521f6.plan,
        active: _0x2521f6[_0x5513(1184, "@uPj") + "e"],
        days_left: _0x1efe40,
        comments_left:
          _0x2521f6[
            _0x5513(599, "PAmu") + _0x5513(1205, ")PT1") + _0x5513(898, "ZFK(")
          ] || 0,
        parsing_left: _0x42497b[_0x5513(1340, "vQ74")](
          typeof _0x2521f6[_0x5513(521, ")PT1") + "ng_le" + "ft"],
          _0x42497b[_0x5513(510, "BDHH")],
        )
          ? _0x2521f6[_0x5513(835, "sL*0") + _0x5513(1200, "!Jvz") + "ft"]
          : parseInt(
              _0x2521f6[_0x5513(1029, "2FCz") + _0x5513(1200, "!Jvz") + "ft"],
              10,
            ) || 0,
        username:
          _0x2521f6[_0x5513(450, "JGn%") + _0x5513(475, "ZFK(")] || null,
        first_name:
          _0x2521f6[_0x5513(982, ")PT1") + _0x5513(623, "Bvbd")] || null,
        last_name:
          _0x2521f6[_0x5513(718, "u1Y&") + _0x5513(616, "%3u(")] || null,
        display_name:
          _0x2521f6[_0x5513(444, "u1Y&") + _0x5513(600, "WvZj") + "me"] ||
          _0x5513(741, "(1w!") + _0x2521f6.tg_id,
      },
    };
  }
  [_0x5513(1146, "dIZY") + _0x5513(577, "shSO")](_0x3b75dd) {
    const _0x3e6532 = {
      [_0x5513(706, "o9pq")]: function (_0x531327, _0x1e7696) {
        return _0x531327 === _0x1e7696;
      },
      [_0x5513(1236, "vQ74")]: _0x5513(922, "#iFj"),
      [_0x5513(704, "kYGt")]: _0x5513(1221, "goM["),
      dsRCZ: function (_0x1bbd4e, _0x25d41d) {
        return _0x1bbd4e + _0x25d41d;
      },
      [_0x5513(868, "WvZj")]: _0x5513(795, "@uPj"),
      daBEE: "Cache" + _0x5513(539, "vQ74") + " erro" + "r:",
    };
    try {
      if (_0x3e6532[_0x5513(686, "C!R2")](_0x3e6532.QTJXU, _0x3e6532.ACpAH)) {
        return this[_0x5513(848, "0fBG")];
      } else {
        const _0x5c76a2 = {
          user: _0x3b75dd,
          checkedAt: Date.now(),
          expiresAt: Date.now() + _0x134412.CACHE_TTL_MS,
        };
        localStorage[_0x5513(1301, "!Jvz") + "em"](
          _0x134412[_0x5513(681, "o9pq") + _0x5513(787, "o9pq") + "Y"],
          JSON.stringify(_0x5c76a2),
        );
        const _0x1f2ed2 = {
          [_0x134412.STORAGE_KEY]: _0x3b75dd,
        };
        chrome[_0x5513(638, "!F%$") + "ge"][_0x5513(776, "XZRL")][
          _0x5513(1007, "N]sh")
        ](_0x1f2ed2);
      }
    } catch (_0x359770) {
      if (_0x5513(664, "cADv") !== _0x3e6532[_0x5513(675, "ryGL")]) {
        console[_0x5513(1389, "sP^Z")](
          _0x3e6532[_0x5513(536, "RBpE")],
          _0x359770,
        );
      } else {
        const _0x5c53a8 = _0x42de14[_0x5513(1001, "d]1P") + "em"](
          _0x17b51f[_0x5513(1219, "hw%z") + _0x5513(825, "ryGL") + "Y"],
        );
        if (!_0x5c53a8) {
          return null;
        }
        const _0x220a0c = _0x1cbd61[_0x5513(986, "@xNa")](_0x5c53a8);
        if (
          !_0x220a0c ||
          !_0x220a0c[_0x5513(848, "0fBG")] ||
          !_0x220a0c[_0x5513(477, "!Jvz") + _0x5513(1033, "N]sh")]
        ) {
          return null;
        }
        return _0x220a0c;
      }
    }
  }
  [_0x5513(860, "hw%z") + "Cache" + "dUser"](_0x5c6068 = {}) {
    const _0x394798 = {
      XcyWJ: function (_0x88fa51, _0x3b5fe0) {
        return _0x88fa51 === _0x3b5fe0;
      },
      gaPrW: _0x5513(1218, "RI4V") + "t",
      dOJje: function (_0x20fa96, _0x22dd71) {
        return _0x20fa96 !== _0x22dd71;
      },
      WuLhq: function (_0x2a28d1, _0xbfd00d) {
        return _0x2a28d1(_0xbfd00d);
      },
      qglyE: function (_0x4a1029, _0x2a8a71) {
        return _0x4a1029(_0x2a8a71);
      },
      yRTWs: function (_0x316582, _0x42379e) {
        return _0x316582 + _0x42379e;
      },
      tdzjI: function (_0x2bd53b, _0x1d774c) {
        return _0x2bd53b !== _0x1d774c;
      },
      PmqIa: _0x5513(590, "JGn%"),
    };
    try {
      const _0x3f0458 =
        this[_0x5513(1334, "NmL9")] &&
        _0x394798[_0x5513(1281, "sP^Z")](
          typeof this[_0x5513(1368, "6pu2")],
          _0x394798.gaPrW,
        )
          ? this[_0x5513(1151, "kYGt")]
          : null;
      const _0x45a3ea =
        this["getCa" + _0x5513(1265, "N]sh") + _0x5513(1357, "X(&D")]();
      const _0x30b3a7 = _0x3f0458 || _0x45a3ea?.[_0x5513(1351, "o9pq")];
      if (
        !_0x30b3a7 ||
        _0x394798[_0x5513(484, "vQ74")](
          typeof _0x30b3a7,
          _0x394798[_0x5513(548, "hw%z")],
        )
      ) {
        return null;
      }
      const _0x46ec34 = {
        ..._0x30b3a7,
        ..._0x5c6068,
      };
      this[_0x5513(1422, "PAmu")] = _0x46ec34;
      const _0x506338 =
        _0x394798[_0x5513(1245, "ZFK(")](
          Number,
          _0x45a3ea?.[_0x5513(480, "4^QT") + _0x5513(859, "u1Y&")],
        ) || Date.now();
      const _0x3523e8 =
        _0x394798[_0x5513(464, "JGn%")](
          Number,
          _0x45a3ea?.[_0x5513(1108, "Bvbd") + "esAt"],
        ) ||
        Date[_0x5513(1319, "sL*0")]() +
          _0x134412[_0x5513(837, "C!R2") + _0x5513(1004, "u1Y&") + "MS"];
      const _0x251403 = {
        [_0x5513(1099, "C!R2")]: _0x46ec34,
        [_0x5513(1234, "N]sh") + _0x5513(712, "%3u(")]: _0x506338,
        [_0x5513(1002, "RI4V") + _0x5513(1171, "RBpE")]: _0x3523e8,
      };
      localStorage[_0x5513(629, "XZRL") + "em"](
        _0x134412[_0x5513(791, "ryGL") + _0x5513(978, "JGn%") + "Y"],
        JSON[_0x5513(1414, "waan") + _0x5513(850, "kYGt")](_0x251403),
      );
      const _0x5f5305 = {
        [_0x134412.STORAGE_KEY]: _0x46ec34,
      };
      chrome[_0x5513(446, "!PqM") + "ge"][_0x5513(736, "JGn%")]
        [_0x5513(1167, "X(&D")](_0x5f5305)
        [_0x5513(438, "waan")](() => {});
      return _0x46ec34;
    } catch (_0x101774) {
      return _0x394798[_0x5513(866, "vQ74")](
        _0x5513(1273, "shSO"),
        _0x394798[_0x5513(542, "d]1P")],
      )
        ? (console[_0x5513(527, "CiLY")](
            _0x5513(1267, "C!R2") +
              _0x5513(1298, "%3u(") +
              _0x5513(1256, "KI9*") +
              _0x5513(455, "d]1P") +
              _0x5513(1160, "NmL9"),
            _0x101774,
          ),
          null)
        : _0x1ebb2b["rando" + _0x5513(609, "u1Y&")]();
    }
  }
  [_0x5513(428, "#t^*") + _0x5513(854, "oFDc") + _0x5513(751, "goM[")]() {
    const _0x413fd = {
      [_0x5513(502, "Bvbd")]:
        "accou" + _0x5513(1173, "ZFK(") + _0x5513(1150, "6pu2") + "e",
      tOAis: _0x5513(1100, "d]1P"),
      [_0x5513(514, "Bvbd")]:
        _0x5513(1299, "cADv") +
        _0x5513(1213, "@xNa") +
        _0x5513(666, "(1w!") +
        _0x5513(821, "Bvbd") +
        "r:",
    };
    try {
      if (_0x413fd.tOAis !== _0x413fd[_0x5513(457, "hw%z")]) {
        const _0x1ddb4a = {
          [_0x5513(806, ")PT1") + "ss"]: false,
          [_0x5513(677, "sL*0")]: _0x413fd[_0x5513(1104, "(1w!")],
        };
        return _0x1ddb4a;
      } else {
        const _0x5c414e = localStorage.getItem(
          _0x134412["STORA" + _0x5513(1284, "#(MG") + "Y"],
        );
        if (!_0x5c414e) {
          return null;
        }
        const _0xcfb9d5 = JSON[_0x5513(785, "ryGL")](_0x5c414e);
        if (
          !_0xcfb9d5 ||
          !_0xcfb9d5[_0x5513(459, "dIZY")] ||
          !_0xcfb9d5[_0x5513(1154, "u1Y&") + _0x5513(879, "1I&$")]
        ) {
          return null;
        }
        return _0xcfb9d5;
      }
    } catch (_0x155aa2) {
      console[_0x5513(1285, "dIZY")](
        _0x413fd[_0x5513(1288, "NmL9")],
        _0x155aa2,
      );
      return null;
    }
  }
  [_0x5513(640, "2FCz") + _0x5513(1176, "#t^*") + _0x5513(1071, "@xNa")]() {
    const _0xae259d = {
      [_0x5513(1062, ")PT1")]: function (_0x42e2e1, _0x5350c7) {
        return _0x42e2e1 === _0x5350c7;
      },
      [_0x5513(899, "PAmu")]: "YiKdU",
      [_0x5513(492, "n1JM")]:
        _0x5513(469, "@xNa") + _0x5513(661, "X(&D") + "nt",
      DMilv: _0x5513(784, "shSO") + _0x5513(929, "#iFj") + _0x5513(831, "!F%$"),
      [_0x5513(803, "X(&D")]:
        _0x5513(572, "u1Y&") + _0x5513(593, "%3u(") + "nt",
    };
    try {
      if (
        _0xae259d.zXzxU(
          _0xae259d[_0x5513(1416, "JGn%")],
          _0xae259d[_0x5513(1270, "o9pq")],
        )
      ) {
        localStorage.removeItem(
          _0x134412["STORA" + _0x5513(861, "goM[") + "Y"],
        );
        if (chrome?.[_0x5513(434, "BDHH") + "ge"]?.[_0x5513(1230, "#t^*")]) {
          chrome[_0x5513(1076, "RBpE") + "ge"][_0x5513(1043, "@xNa")][
            _0x5513(1401, "NmL9") + "e"
          ]([
            _0x134412[_0x5513(1404, "N]sh") + _0x5513(538, "6pu2") + "Y"],
            _0x5513(690, "!Jvz") + _0x5513(676, "dIZY"),
            _0xae259d[_0x5513(940, "BDHH")],
            _0xae259d[_0x5513(453, "N]sh")],
            _0xae259d[_0x5513(851, "oFDc")],
          ]);
        }
      } else {
        const _0x5bcf93 = {
          [_0x5513(952, "PAmu") + "ss"]: false,
          [_0x5513(759, "u1Y&")]:
            _0x5513(512, "Zm69") + _0x5513(419, "!F%$") + _0x5513(926, "RBpE"),
        };
        return _0x5bcf93;
      }
    } catch (_0x234b39) {
      console[_0x5513(1145, "!Jvz")](
        _0x5513(1393, "XZRL") +
          " cach" +
          _0x5513(908, "(1w!") +
          _0x5513(1129, "oFDc"),
        _0x234b39,
      );
    }
  }
  [_0x5513(864, "BDHH") + _0x5513(1039, "u1Y&") + "Id"](_0x47f0a6) {
    const _0x57bafb = {
      [_0x5513(1032, "!Jvz")]:
        _0x5513(778, "n1JM") + _0x5513(656, "WvZj") + "se",
      ovmEi: function (_0x1ac24a, _0x19112e) {
        return _0x1ac24a !== _0x19112e;
      },
      [_0x5513(1209, "#t^*")]: _0x5513(1115, "1I&$"),
      [_0x5513(946, "(1w!")]: function (_0x53a2cf, _0x524b6a) {
        return _0x53a2cf === _0x524b6a;
      },
      [_0x5513(988, "KI9*")]: _0x5513(488, "0fBG"),
      TMAHm:
        _0x5513(840, "#t^*") +
        "last " +
        _0x5513(909, "Bvbd") +
        _0x5513(779, "KI9*") +
        "r:",
    };
    try {
      if ("mHyeD" !== _0x57bafb[_0x5513(1132, "4^QT")]) {
        if (!_0x35751c.ok) {
          const _0x5e1720 = {
            [_0x5513(1311, "Bvbd") + "ss"]: false,
            error: _0x5513(820, "shSO") + _0x5513(503, "#t^*") + "or",
          };
          return _0x5e1720;
        }
        const _0xcff38a = {
          [_0x5513(1162, "RBpE") + "ss"]: false,
          [_0x5513(1361, "1I&$")]: _0x57bafb[_0x5513(1388, "#t^*")],
        };
        return _0xcff38a;
      } else {
        localStorage.setItem(
          _0x134412[
            _0x5513(1113, "RI4V") + _0x5513(589, "sP^Z") + _0x5513(1353, "WvZj")
          ],
          String(_0x47f0a6),
        );
      }
    } catch (_0x194bea) {
      if (
        _0x57bafb[_0x5513(1216, ")PT1")](
          _0x57bafb[_0x5513(1020, "shSO")],
          "QiBcg",
        )
      ) {
        _0x518a28[_0x5513(447, "N]sh")](
          _0x5513(1095, "#(MG") +
            "ached" +
            _0x5513(560, "ZFK(") +
            _0x5513(1036, "C!R2") +
            "r:",
          _0x57a7ac,
        );
        return null;
      } else {
        console.error(_0x57bafb[_0x5513(703, "d5^N")], _0x194bea);
      }
    }
  }
  [_0x5513(1077, "C!R2") + _0x5513(768, "X(&D") + "d"]() {
    const _0x5aad80 = {
      QAxFI:
        _0x5513(711, "oFDc") +
        _0x5513(440, "kYGt") +
        _0x5513(1290, "goM[") +
        "error" +
        ":",
    };
    try {
      return localStorage.getItem(
        _0x134412[
          _0x5513(1153, "goM[") + _0x5513(737, "ryGL") + _0x5513(481, "oFDc")
        ],
      );
    } catch (_0x40d220) {
      console[_0x5513(1425, "hw%z")](
        _0x5aad80[_0x5513(1331, "goM[")],
        _0x40d220,
      );
      return null;
    }
  }
  [_0x5513(808, "WvZj") + _0x5513(823, "ryGL") + "ID"]() {
    const _0x471dcb = {
      [_0x5513(1085, "n1JM")]:
        _0x5513(658, "#iFj") + _0x5513(1412, "dIZY") + "or",
      [_0x5513(1102, "o9pq")]: function (_0x57f0c4, _0x1c531a) {
        return _0x57f0c4 | _0x1c531a;
      },
      [_0x5513(745, "PAmu")]: function (_0x5d1e8d, _0x886c54) {
        return _0x5d1e8d * _0x886c54;
      },
    };
    _0x471dcb[_0x5513(430, "RBpE")] = function (_0x16177d, _0x56f46c) {
      return _0x16177d === _0x56f46c;
    };
    _0x471dcb[_0x5513(493, "C!R2")] = function (_0x35e54b, _0x1c75b6) {
      return _0x35e54b | _0x1c75b6;
    };
    _0x471dcb[_0x5513(1323, "CiLY")] = function (_0xd6fac1, _0x4c596c) {
      return _0xd6fac1 & _0x4c596c;
    };
    _0x471dcb[_0x5513(842, "RBpE")] = function (_0x3cd294, _0x1250af) {
      return _0x3cd294 !== _0x1250af;
    };
    _0x471dcb[_0x5513(1144, "!PqM")] = _0x5513(747, "RI4V");
    _0x471dcb[_0x5513(923, "RBpE")] =
      _0x5513(1249, "Zm69") +
      _0x5513(505, "cADv") +
      "xxx-4" +
      _0x5513(958, "(1w!") +
      _0x5513(1363, "@xNa") +
      _0x5513(495, "RBpE") +
      _0x5513(507, "BDHH") +
      "x";
    if (crypto[_0x5513(749, "NmL9") + _0x5513(1428, "vQ74")]) {
      if (
        _0x471dcb.Hvtlm(_0x5513(1317, "!PqM"), _0x471dcb[_0x5513(427, "dIZY")])
      ) {
        const _0x14b9fe = {
          success: false,
          error:
            _0xba4f5b[_0x5513(445, "dIZY") + "n"] ||
            _0x471dcb[_0x5513(429, "6pu2")],
        };
        return _0x14b9fe;
      } else {
        return crypto[_0x5513(1316, ")PT1") + _0x5513(598, "4^QT")]();
      }
    }
    return _0x471dcb.MpKFY[_0x5513(904, "6pu2") + "ce"](
      /[xy]/g,
      function (_0x5d4aea) {
        const _0x4a1b81 = _0x471dcb.hIykT(
          _0x471dcb.UVjkW(Math[_0x5513(557, "RI4V") + "m"](), 16),
          0,
        );
        const _0x4c93a5 = _0x471dcb.EMqMn(_0x5d4aea, "x")
          ? _0x4a1b81
          : _0x471dcb.AcXcj(_0x471dcb[_0x5513(1130, "KI9*")](_0x4a1b81, 3), 8);
        return _0x4c93a5[_0x5513(1237, "0fBG") + _0x5513(777, "!F%$")](16);
      },
    );
  }
  async [_0x5513(1163, "C!R2") +
    _0x5513(1194, "%3u(") +
    _0x5513(916, "@uPj")]() {
    const _0x1e80fb = {
      leqgq: function (_0x3849c4, _0x23f0b8) {
        return _0x3849c4 + _0x23f0b8;
      },
      OyBHZ:
        _0x5513(1375, "0fBG") +
        _0x5513(431, "CiLY") +
        _0x5513(941, "oFDc") +
        _0x5513(697, "n1JM") +
        ":",
      sIRGc: function (_0x559723, _0x4db93a) {
        return _0x559723 !== _0x4db93a;
      },
      wGPZW: _0x5513(855, "#t^*"),
      NjbKz: _0x5513(1306, "CiLY"),
      PWIZe: function (_0x3bbf8f, _0x2b773f) {
        return _0x3bbf8f(_0x2b773f);
      },
      yWOGv: function (_0x164b53, _0x497e77) {
        return _0x164b53 === _0x497e77;
      },
      MVGkL: _0x5513(1241, "%3u("),
      DxxXb:
        "[AUTH" +
        _0x5513(1420, "BDHH") +
        _0x5513(1116, "vQ74") +
        "torag" +
        "e.loc" +
        "al er" +
        _0x5513(506, "shSO"),
      LrZIv: function (_0x39fdaa, _0x560a06) {
        return _0x39fdaa(_0x560a06);
      },
      SwrEB: _0x5513(508, ")PT1"),
      zrBoY: "apgdY",
      DsvGR: function (_0x3d7a86, _0x28db1d) {
        return _0x3d7a86(_0x28db1d);
      },
      YciOq:
        _0x5513(683, "2FCz") +
        "] Gen" +
        "erate" +
        "d new" +
        _0x5513(763, "1I&$") +
        _0x5513(723, ")PT1") +
        _0x5513(454, "(1w!") +
        _0x5513(494, "JGn%") +
        _0x5513(1417, "6pu2") +
        "age f" +
        _0x5513(562, "N]sh") +
        "ck)",
    };
    const _0x4f26e8 = (_0x500abe) =>
      typeof _0x500abe === "string" &&
      /^ext:[a-z0-9-]{16,}$/i[_0x5513(824, "kYGt")](_0x500abe);
    try {
      if (
        _0x1e80fb[_0x5513(1025, "d]1P")](
          _0x1e80fb[_0x5513(1155, "#(MG")],
          "YrTOI",
        )
      ) {
        const _0x1a965a = {
          user: _0x3659bf,
          checkedAt: _0x38fe54[_0x5513(575, "0fBG")](),
          expiresAt: _0x1e80fb[_0x5513(585, "RBpE")](
            _0x4b2246.now(),
            _0x50775d[_0x5513(961, "vQ74") + "_TTL_" + "MS"],
          ),
        };
        _0x1e40c3[_0x5513(1325, "BDHH") + "em"](
          _0x20dfbb["STORA" + _0x5513(1003, "RI4V") + "Y"],
          _0x2cb358["strin" + _0x5513(977, "o9pq")](_0x1a965a),
        );
        const _0x21a835 = {
          [_0x4b6a9b["STORA" + _0x5513(423, "1I&$") + "Y"]]: _0x25010f,
        };
        _0xda8ab1[_0x5513(612, "RI4V") + "ge"][_0x5513(996, "!Jvz")][
          _0x5513(1059, "#iFj")
        ](_0x21a835);
      } else {
        if (chrome?.["storage"]?.[_0x5513(551, "N]sh")]) {
          if (_0x5513(1313, "#t^*") !== _0x1e80fb[_0x5513(1359, "X(&D")]) {
            const _0x2784b8 = await chrome[_0x5513(966, "waan") + "ge"][
              _0x5513(1269, "X(&D")
            ][_0x5513(1133, "@xNa")]([
              _0x134412[
                "EXTEN" +
                  _0x5513(843, "NmL9") +
                  _0x5513(1246, "0fBG") +
                  "TORAG" +
                  "E"
              ],
            ]);
            const _0x59fa8c =
              _0x2784b8[
                _0x134412[
                  _0x5513(810, "hw%z") + "SION_" + "KEY_S" + "TORAG" + "E"
                ]
              ];
            if (
              typeof _0x59fa8c === "string" &&
              /^ext:[a-z0-9-]{16,}$/i[_0x5513(824, "kYGt")](_0x59fa8c)
            ) {
              return _0x1e80fb[_0x5513(416, "6pu2")](
                _0x1e80fb.MVGkL,
                _0x1e80fb.MVGkL,
              )
                ? _0x59fa8c
                : !!this.user &&
                    this[_0x5513(878, "d5^N")][_0x5513(921, "XZRL") + "e"];
            }
            const _0x5e1a74 = "ext:" + this.generateUUID();
            const _0x13fb35 = {
              [_0x134412[
                _0x5513(426, "u1Y&") +
                  _0x5513(1018, "#iFj") +
                  _0x5513(856, "4^QT") +
                  _0x5513(1399, "N]sh") +
                  "E"
              ]]: _0x5e1a74,
            };
            await chrome.storage.local[_0x5513(1203, "#t^*")](_0x13fb35);
            authDebug(
              "[AUTH" +
                _0x5513(1310, "XZRL") +
                _0x5513(1222, "N]sh") +
                _0x5513(951, "6pu2") +
                _0x5513(797, "u1Y&") +
                _0x5513(1075, "u1Y&") +
                _0x5513(1274, "sL*0"),
            );
            return _0x5e1a74;
          } else {
            this[_0x5513(1000, "waan")] = _0x54281e[_0x5513(1011, "CiLY")];
            this["cache" + _0x5513(606, "Xvzc")](
              _0x455987[_0x5513(888, "KI9*")],
            );
            if (this[_0x5513(1161, "ZFK(") + _0x5513(892, "@uPj") + "ge"]) {
              this[_0x5513(1242, "!PqM") + _0x5513(487, "NmL9") + "ge"](
                true,
                this[_0x5513(698, "sP^Z")],
              );
            }
          }
        }
      }
    } catch (_0x276293) {
      console[_0x5513(535, "u1Y&")](
        _0x1e80fb[_0x5513(1403, "NmL9")],
        _0x276293,
      );
    }
    let _0x38ae09 = localStorage[_0x5513(619, "sL*0") + "em"](
      _0x134412[
        _0x5513(1366, "N]sh") + "SION_" + "KEY_S" + _0x5513(1026, "PAmu") + "E"
      ],
    );
    if (!_0x1e80fb[_0x5513(925, "2FCz")](_0x4f26e8, _0x38ae09)) {
      if (_0x1e80fb[_0x5513(1268, "%3u(")] === "apgdY") {
        try {
          return _0x963be5.getItem(
            _0x2afc3f[_0x5513(770, "n1JM") + _0x5513(1015, "N]sh") + "_KEY"],
          );
        } catch (_0x4f19a9) {
          _0xe4ab81[_0x5513(1389, "sP^Z")](
            _0x1e80fb[_0x5513(1037, "%3u(")],
            _0x4f19a9,
          );
          return null;
        }
      } else {
        _0x38ae09 =
          _0x5513(801, "6pu2") +
          this[_0x5513(1332, "dIZY") + _0x5513(1346, "XZRL") + "ID"]();
        localStorage[_0x5513(1251, "Bvbd") + "em"](
          _0x134412[
            "EXTEN" +
              _0x5513(1038, "d5^N") +
              _0x5513(673, "@xNa") +
              "TORAG" +
              "E"
          ],
          _0x38ae09,
        );
        authDebug(_0x1e80fb.YciOq);
      }
    }
    return _0x38ae09;
  }
  [_0x5513(975, "hw%z") + _0x5513(519, "hw%z") + "ssage"](_0x4422d7) {
    const _0x258265 = {
      [_0x5513(1096, "#(MG")]:
        "Неверный T" +
        _0x5513(1314, "Zm69") +
        _0x5513(515, "Xvzc") +
        _0x5513(708, "WvZj") +
        _0x5513(937, "#t^*") +
        _0x5513(696, "(1w!") +
        "вой I" +
        "D.",
      RoCHK:
        _0x5513(709, "NmL9") +
        " заре" +
        _0x5513(626, "sL*0") +
        _0x5513(1068, "XZRL") +
        _0x5513(815, "!F%$") +
        _0x5513(766, "KI9*") +
        _0x5513(876, ")PT1") +
        " заре" +
        _0x5513(829, "!F%$") +
        _0x5513(1348, "vQ74") +
        _0x5513(1305, "1I&$") +
        _0x5513(567, "CiLY") +
        _0x5513(1229, "Xvzc"),
      [_0x5513(976, "1I&$")]:
        _0x5513(1156, "shSO") +
        _0x5513(885, "0fBG") +
        _0x5513(726, "@uPj") +
        _0x5513(1064, "sL*0") +
        _0x5513(769, "#iFj") +
        _0x5513(767, "WvZj") +
        _0x5513(1121, "BDHH") +
        _0x5513(1439, "Bvbd") +
        _0x5513(601, "2FCz") +
        _0x5513(973, "XZRL"),
      [_0x5513(591, "PAmu")]:
        "Ошибк" +
        _0x5513(1164, "hw%z") +
        "и. Пр" +
        _0x5513(1333, "XZRL") +
        "те по" +
        _0x5513(1294, "NmL9") +
        _0x5513(624, "N]sh") +
        _0x5513(980, "waan") +
        _0x5513(687, "waan") +
        "у.",
      [_0x5513(1179, "#t^*")]:
        _0x5513(533, "dIZY") +
        "ректн" +
        _0x5513(467, "ZFK(") +
        _0x5513(1443, "ryGL") +
        _0x5513(473, "C!R2") +
        _0x5513(1148, "RI4V") +
        _0x5513(441, "@xNa") +
        _0x5513(964, "!PqM") +
        _0x5513(670, "!Jvz") +
        ".",
      [_0x5513(489, "N]sh")]:
        _0x5513(1430, "ZFK(") +
        _0x5513(685, "RBpE") +
        _0x5513(648, "!PqM") +
        _0x5513(1189, "#iFj") +
        _0x5513(622, "NmL9") +
        _0x5513(719, "d]1P") +
        _0x5513(783, "NmL9") +
        _0x5513(478, "%3u(") +
        _0x5513(1426, "ZFK(") +
        _0x5513(470, "@xNa"),
      SdbQJ:
        _0x5513(1239, "sL*0") +
        "а сер" +
        _0x5513(1250, "d5^N") +
        _0x5513(1058, "d]1P") +
        "обуйт" +
        _0x5513(1295, "n1JM") +
        _0x5513(1127, "XZRL"),
      CIgoh: _0x5513(1057, "kYGt") + "ный з" + _0x5513(903, "CiLY") + ".",
      [_0x5513(587, "NmL9")]:
        "Слишк" +
        _0x5513(543, "0fBG") +
        _0x5513(1069, "shSO") +
        "опыто" +
        "к. По" +
        _0x5513(1136, "(1w!") +
        _0x5513(933, "sL*0") +
        _0x5513(513, "Bvbd"),
      [_0x5513(1191, "u1Y&")]:
        _0x5513(485, "PAmu") +
        _0x5513(603, "2FCz") +
        _0x5513(1396, "XZRL") +
        _0x5513(780, "shSO") +
        _0x5513(1413, "sL*0") +
        "езагр" +
        "узите" +
        _0x5513(911, "waan") +
        _0x5513(984, "JGn%") +
        "е.",
      [_0x5513(995, "2FCz")]:
        _0x5513(569, "#t^*") +
        _0x5513(1225, "!PqM") +
        "одпис" +
        _0x5513(1149, "!F%$") +
        _0x5513(884, "sL*0") +
        ". Про" +
        "длите" +
        " подп" +
        _0x5513(549, "%3u(") +
        "через" +
        " Tele" +
        _0x5513(942, "shSO") +
        _0x5513(1373, "d]1P"),
      [_0x5513(786, "JGn%")]:
        _0x5513(792, "#t^*") +
        _0x5513(816, "@uPj") +
        _0x5513(846, "o9pq") +
        _0x5513(646, "vQ74") +
        "ии за" +
        _0x5513(1137, "JGn%") +
        _0x5513(1049, "dIZY") +
        " Дожд" +
        _0x5513(695, "u1Y&") +
        _0x5513(1107, "CiLY") +
        _0x5513(945, ")PT1") +
        _0x5513(705, "oFDc") +
        _0x5513(1408, "X(&D") +
        _0x5513(1143, "RI4V"),
    };
    const _0x1fc288 = {
      [_0x5513(1185, "2FCz") + _0x5513(1415, "cADv") + "_id"]:
        _0x258265[_0x5513(1053, "PAmu")],
      [_0x5513(1362, "(1w!") + _0x5513(971, "XZRL") + _0x5513(579, "0fBG")]:
        _0x258265[_0x5513(655, "BDHH")],
      [_0x5513(668, "n1JM") + _0x5513(1329, "XZRL") + _0x5513(800, "2FCz")]:
        _0x258265.WXrdz,
      [_0x5513(1254, "d]1P") + _0x5513(558, "oFDc") + "ror"]:
        _0x258265[_0x5513(1419, "u1Y&")],
      ["bad_r" + _0x5513(415, "!Jvz") + "se"]: _0x258265[_0x5513(1244, "KI9*")],
      [_0x5513(867, "PAmu") + _0x5513(1044, "o9pq") + "d"]:
        _0x258265[_0x5513(1106, "@xNa")],
      [_0x5513(627, "n1JM") + _0x5513(561, "goM[") + "or"]: _0x258265.SdbQJ,
      [_0x5513(809, "goM[") + _0x5513(1330, "d]1P") + "t"]:
        _0x258265[_0x5513(553, "goM[")],
      [_0x5513(1335, "C!R2") + "ive"]:
        "Ваш а" +
        _0x5513(1017, "RBpE") +
        _0x5513(901, "RI4V") +
        _0x5513(1238, "waan") +
        "н. Пр" +
        _0x5513(563, "@uPj") +
        _0x5513(832, "ryGL") +
        _0x5513(1326, "RI4V") +
        " чере" +
        _0x5513(617, "RBpE") +
        ".",
      [_0x5513(1385, "6pu2") + _0x5513(836, "u1Y&")]:
        _0x258265[_0x5513(713, "ryGL")],
      [_0x5513(1441, "KI9*") +
      _0x5513(943, "dIZY") +
      _0x5513(1134, "dIZY") +
      _0x5513(1436, "o9pq") +
      _0x5513(1055, "!PqM") +
      _0x5513(720, "#t^*") +
      "e"]:
        "Этот аккау" +
        _0x5513(968, "goM[") +
        _0x5513(1081, "RBpE") +
        _0x5513(1350, "u1Y&") +
        _0x5513(1378, "N]sh") +
        _0x5513(807, "XZRL") +
        _0x5513(701, "ZFK(") +
        _0x5513(412, "!F%$") +
        "ля сб" +
        _0x5513(570, "!F%$") +
        _0x5513(689, "cADv") +
        _0x5513(970, "kYGt") +
        _0x5513(618, "Bvbd") +
        _0x5513(1166, "oFDc") +
        "в Tel" +
        "egram" +
        _0x5513(877, "d]1P"),
      [_0x5513(1356, "N]sh") +
      "sion_" +
      _0x5513(1091, "shSO") +
      _0x5513(939, "vQ74")]:
        "Дости" +
        _0x5513(516, "dIZY") +
        _0x5513(728, "JGn%") +
        _0x5513(962, "#(MG") +
        _0x5513(905, "BDHH") +
        _0x5513(896, "u1Y&") +
        "PRO (" +
        _0x5513(1262, "!F%$") +
        _0x5513(756, "waan") +
        _0x5513(732, "!Jvz") +
        "Сброс" +
        "ьте п" +
        _0x5513(604, "RI4V") +
        _0x5513(630, "!F%$") +
        _0x5513(693, "vQ74") +
        _0x5513(1308, "sL*0") +
        _0x5513(610, "#iFj") +
        "т.",
      [_0x5513(501, "#t^*") +
      _0x5513(456, "cADv") +
      _0x5513(991, "X(&D") +
      _0x5513(491, "Zm69") +
      _0x5513(857, "C!R2")]:
        _0x5513(873, "PAmu") +
        _0x5513(858, "JGn%") +
        _0x5513(483, "@xNa") +
        _0x5513(1217, "Bvbd") +
        _0x5513(635, "waan") +
        "броше" +
        "на. В" +
        "ойдит" +
        _0x5513(1291, "C!R2") +
        _0x5513(559, "Bvbd") +
        _0x5513(1410, "o9pq") +
        _0x5513(1012, "ryGL") +
        "о.",
      ["invalid_extensi" + _0x5513(1321, "kYGt") + "y"]:
        _0x5513(1027, "RBpE") +
        "а клю" +
        "ча ра" +
        "сшире" +
        _0x5513(611, "sL*0") +
        _0x5513(788, "0fBG") +
        "стано" +
        _0x5513(953, "NmL9") +
        "расши" +
        "рение" +
        ".",
      [_0x5513(1356, "N]sh") +
      _0x5513(1126, "(1w!") +
      _0x5513(838, "!PqM") +
      "equir" +
      "ed"]: _0x258265[_0x5513(748, "1I&$")],
      [_0x5513(960, "RI4V") +
      _0x5513(1008, "sP^Z") +
      _0x5513(1344, "kYGt") +
      _0x5513(1278, "!Jvz")]: _0x258265[_0x5513(571, "#(MG")],
      ["free_limit" + _0x5513(734, "n1JM") + _0x5513(1211, "!F%$")]:
        "Лимит" +
        _0x5513(1384, "u1Y&") +
        _0x5513(1248, "goM[") +
        _0x5513(595, "ryGL") +
        "мента" +
        "риев " +
        "исчер" +
        "пан. " +
        "Дожди" +
        "тесь " +
        "сброс" +
        "а или" +
        _0x5513(702, "!Jvz") +
        _0x5513(497, "N]sh") +
        "PRO п" +
        _0x5513(992, "hw%z") +
        _0x5513(417, "shSO"),
      [_0x5513(794, "kYGt") +
      _0x5513(1172, "BDHH") +
      _0x5513(1338, "N]sh") +
      "e"]:
        _0x5513(974, "KI9*") +
        _0x5513(1374, "kYGt") +
        "т деа" +
        _0x5513(1258, "CiLY") +
        _0x5513(1046, "JGn%") +
        ". Обр" +
        _0x5513(602, "2FCz") +
        "сь в " +
        _0x5513(1343, "PAmu") +
        _0x5513(614, "n1JM"),
      [_0x5513(742, "sL*0") +
      _0x5513(608, "ryGL") +
      _0x5513(680, "ryGL") +
      "t"]: _0x258265[_0x5513(461, "0fBG")],
    };
    return (
      _0x1fc288[_0x4422d7] ||
      "Произошла " +
        _0x5513(1019, "@uPj") +
        _0x5513(594, "@xNa") +
        "пробу" +
        _0x5513(654, "vQ74") +
        _0x5513(920, "!F%$")
    );
  }
}
export const auth = new ThreadsAIAuth();
export { _0x134412 as AUTH_CONFIG };

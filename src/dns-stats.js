const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {};
  domains.forEach((domain) => {
    const parts = domain.split(".").reverse();
    let currentDNS = "";

    parts.forEach((part, index) => {
      currentDNS = index === 0 ? `.${part}` : `.${currentDNS.slice(1)}.${part}`;
      res[currentDNS] = (res[currentDNS] || 0) + 1; // Count occurrences
    });
  });

  return res;
}

module.exports = {
  getDNSStats,
};

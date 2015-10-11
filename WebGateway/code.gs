/**
 * get url
 * @param  {string} url
 * @returns {response}
 */
function get(url) {
  return UrlFetchApp.fetch(url);
};

/**
 * get content body
 * @param  {string} url
 * @returns {string}
 */
function getBody(url) {
  return get(url).getContentText();
};

/**
 * post
 * @param  {string} url     - url where to post
 * @param  {string} payload - payload as string
 * @returns {response}
 */
function post(url, payload) {
  var options;
  options = {
    method: 'post',
    payload: payload
  };
  return UrlFetchApp.fetch(url, options);
};

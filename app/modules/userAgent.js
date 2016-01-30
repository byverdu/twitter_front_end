'use strict';

/**
 * whichUserAgent - Extracts a string for a later reference from the window.userAgent
 *
 * @param  {Object} navigatorObject - browser navigator Object
 * @return {String} - navigator.userAgent from user visitor's
 */
function whichUserAgent(navigatorObject) {

  let userAgent = navigatorObject.userAgent.split(' ');
  let userAgentString = ['Firefox', 'AppleWebKit', 'Trident'];
  let actualUserAgent = '';

  userAgent.map(function (outerEl, index, array) {
    userAgentString.map(function (innerEl) {

      if (outerEl.indexOf(innerEl) !== -1) {
        actualUserAgent = array[index].split('/').shift();
      }
    });
  });

  return actualUserAgent;
}

/**
 * isFirefoxAgent - Custom DOM elements selection depending userAgent,
 * checks if content is reaching the bottom
 *
 * @return {Boolean}  window height smaller or equal to body scrolled height
 */
function isFirefoxAgent() {
  let bodyScrollHeight = document.documentElement.scrollTop;
  let windowHeight = window.scrollMaxY;
  return windowHeight <= bodyScrollHeight;
}

/**
 * isWebKitAgent - Custom DOM elements selection depending userAgent,
 * checks if content is reaching the bottom
 *
 * @return {Boolean}  window height smaller or equal to body scrolled height
 */
function isWebKitAgent() {
  let bodyElement = document.body;
  let windowHeight = window.innerHeight;
  let bodyScrollHeight = bodyElement.scrollTop;
  let bodyHeight = bodyElement.clientHeight;

  return bodyHeight - windowHeight <= bodyScrollHeight;
}

/**
 * isOldInternetExplorer - Custom DOM elements selection depending userAgent,
 * checks if content is reaching the bottom
 *
 * @return {Boolean}  window height smaller or equal to body scrolled height
 */
function isOldInternetExplorer() {
  let windowHeight = window.innerHeight;
  let bodyScrollTop = document.documentElement.scrollTop;
  let bodyHeight = document.body.clientHeight;

  return bodyHeight - windowHeight <= bodyScrollTop;
}

export { whichUserAgent, isFirefoxAgent, isWebKitAgent, isOldInternetExplorer };

'use strict';

import { whichUserAgent, isFirefoxAgent, isWebKitAgent, isOldInternetExplorer } from './userAgent';
/**
 * checkHeightBody - Calls isFirefoxAgent, isWebKitAgent or isOldInternetExplorer dependig on userAgent
 *
 * @param  {Object} navigatorObject navigator Object
 * @return {Boolean} -
 */
function checkHeightBody( navigatorObject ) {

  let checkHeight;
  let actualUserAgent = whichUserAgent( navigatorObject );

  switch ( actualUserAgent ) {

    // Firefox
    case 'Firefox' :
      checkHeight = isFirefoxAgent();
      break;

    // Chrome, Safari, IE Edge
    case 'AppleWebKit' :
      checkHeight = isWebKitAgent();
      break;

    // IE old versions
    case 'Trident' :
      checkHeight = isOldInternetExplorer();
      break;
  }

  return checkHeight;
}

export { checkHeightBody };

/**
 * This Source Code is licensed under the MIT license. If a copy of the
 * MIT-license was not distributed with this file, You can obtain one at:
 * http://opensource.org/licenses/mit-license.html.
 *
 * @author: Hein Rutjes (IjzerenHein)
 * @license MIT
 * @copyright Gloey Apps, 2014
 */

/*global define*/
/*eslint no-use-before-define:0*/

/**
 * @module
 */
define(function(require, exports, module) {
    'use strict';

    // import dependencies
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');

    /**
     * @class
     * @extends TextareaSurface
     * @param {Object} [options] Configuration options
     */
    function StressTest(options) {

    }
    StressTest.prototype = Object.create(View.prototype);
    StressTest.prototype.constructor = StressTest;

    /**
     * Checks whether the scroll-height has changed and when so
     * emits an event about the preferred height.
     */
    StressTest.prototype.render = function render() {
        return this.id;
    };

    module.exports = StressTest;
});

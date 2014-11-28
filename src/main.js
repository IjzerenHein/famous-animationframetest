/**
 * This Source Code is licensed under the MIT license. If a copy of the
 * MIT-license was not distributed with this file, You can obtain one at:
 * http://opensource.org/licenses/mit-license.html.
 *
 * @author: Hein Rutjes (IjzerenHein)
 * @license MIT
 * @copyright Gloey Apps, 2014
 */

/*global define, Please, console*/
/*eslint no-console:0 no-use-before-define:0*/

define(function(require) {

    //<webpack>
    require('famous-polyfills');
    require('famous/core/famous.css');
    require('./styles.css');
    require('./index.html');
    //</webpack>

    // import dependencies
    var Engine = require('famous/core/Engine');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var Lagometer = require('famous-lagometer/Lagometer');
    var InputSurface = require('famous/surfaces/InputSurface');

    // Initialize
    var mainContext = Engine.createContext();
    _createLagometer();
    _createInput();

    var loopCount = 100;
    Engine.on('prerender', function() {
        for (var i = 0 ; i < loopCount; i++) {
            var a = Math.cos(1);
            var b = Math.sin(a);
        }
    });

    //
    // Show text input
    //
    function _createInput() {
        var mod = new Modifier({
            size: [undefined, 50],
            align: [0, 1],
            origin: [0, 1]
        });
        var input = new InputSurface({
            placeholder: 'Enter workload: 1..1000000',
            properties: {
                fontSize: '16px',
                textIndent: '10px'
            }
        });
        input.on('change', function(event) {
            var value = parseInt(event.currentTarget.value);
            loopCount = value * 100;
        });
        mainContext.add(mod).add(input);
    }

    //
    // Shows the lagometer
    //
    function _createLagometer() {
        var lagometerMod = new Modifier({
            size: [200, 200],
            align: [1.0, 0.0],
            origin: [1.0, 0.0],
            transform: Transform.translate(-10, 10, 1000)
        });
        var lagometer = new Lagometer({
            size: lagometerMod.getSize()
        });
        mainContext.add(lagometerMod).add(lagometer);
    }
});

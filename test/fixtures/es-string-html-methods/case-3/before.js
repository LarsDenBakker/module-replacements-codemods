require('es-string-html-methods/anchor/auto');
require('es-string-html-methods/big/auto');
require('es-string-html-methods/blink/auto');
require('es-string-html-methods/bold/auto');
require('es-string-html-methods/fixed/auto');
require('es-string-html-methods/fontcolor/auto');
require('es-string-html-methods/fontsize/auto');
require('es-string-html-methods/italics/auto');
require('es-string-html-methods/link/auto');
require('es-string-html-methods/small/auto');
require('es-string-html-methods/strike/auto');
require('es-string-html-methods/sub/auto');
require('es-string-html-methods/sup/auto');
var assert = require('assert');

assert.equal('a'.anchor('b'), '<a name="b">a</a>');
assert.equal('a'.big(), '<big>a</big>');
assert.equal('a'.blink(), '<blink>a</blink>');
assert.equal('a'.bold(), '<b>a</b>');
assert.equal('a'.fixed(), '<tt>a</tt>');
assert.equal('a'.fontcolor('b'), '<font color="b">a</font>');
assert.equal('a'.fontsize('b'), '<font size="b">a</font>');
assert.equal('a'.italics(), '<i>a</i>');
assert.equal('a'.link('b'), '<a href="b">a</a>');
assert.equal('a'.small(), '<small>a</small>');
assert.equal('a'.strike(), '<strike>a</strike>');
assert.equal('a'.sub(), '<sub>a</sub>');
assert.equal('a'.sup(), '<sup>a</sup>');
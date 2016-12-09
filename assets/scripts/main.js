/*
 * Asset Builder has a quirk that allows custom scripts 
 * to load before Bower scripts during concatenation. 
 * To get around this, use one of the following methods.
 *
 * IIFE
 * (function(){ /* code */ }());
 *
 * Self-executing anonymous function
 * var foo = function() { /* code */ };
 *
 * document.ready (jQuery)
 * $(document).ready(function() { /* code */ });
 * $(function() { /* code */ });
 *
 * window.onload (Javascript)
 * window.onload = function() { /* code */ };
 *
 *
 *
 */

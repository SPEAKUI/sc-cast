var cast = require( ".." ),
  should = require( "should" ),
  dummy = require( "./dummy" );

describe( "sc-cast", function () {

  dummy.tests.forEach( function ( test ) {

    var types = Array.isArray( test[ "type" ] ) ? test.type : [ test.type ];

    types.forEach( function ( type ) {

      test.values.forEach( function ( value, i ) {

        it( "should cast **" + value + "** to a **" + type + "**", function () {

          
          var defaultValue = Array.isArray( test[ "defaults" ] ) ? test.defaults[ i ] === "*" ? undefined : test.defaults[ i ] : undefined;

          should( test.expected[ i ] ).eql( cast( value, type, defaultValue ) );

        } );

      } );

    } );

  } );

} );
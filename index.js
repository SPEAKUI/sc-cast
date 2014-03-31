var contains = require( "sc-contains" ),
  is = require( "sc-is" );

var cast = function ( _value, _castType, _default, _values, _additionalProperties ) {

  var parsedValue,
    castType = _castType.toLowerCase(),
    value,
    values = is.an.array( _values ) ? _values : [],
    alreadyCorrectlyTyped;

  switch ( true ) {
  case ( /float|integer/.test( castType ) ):
    castType = "number";
    break;
  }

  if ( is.a.hasOwnProperty( castType ) ) {
    alreadyCorrectlyTyped = is.a[ castType ]( _value );
  } else if ( castType === '*' ) {
    alreadyCorrectlyTyped = true;
  }

  if ( alreadyCorrectlyTyped ) {

    value = _value;

  } else {

    switch ( true ) {

    case castType === "array":

      try {
        if ( is.a.string( _value ) ) {
          value = JSON.parse( _value );
        }
        if ( is.not.an.array( value ) ) {
          throw "";
        }
      } catch ( e ) {
        if ( is.not.nullOrUndefined( _value ) ) {
          value = [ _value ];
        }
      }
      break;

    case castType === "boolean":

      try {
        value = /^(true|1|y|yes)$/i.test( _value.toString() ) ? true : undefined;
      } catch ( e ) {}

      if ( is.not.a.boolean( value ) ) {

        try {
          value = /^(false|-1|0|n|no)$/i.test( _value.toString() ) ? false : undefined;
        } catch ( e ) {}

      }

      value = is.a.boolean( value ) ? value : undefined;

      break;

    case castType === "date":

      try {

        value = new Date( _value );

        value = isNaN( value.getTime() ) ? undefined : value;
      } catch ( e ) {}

      break;

    case castType === "string":
      if (is.a.string( _value )) {
        value = _value
      }

      if ( is.a.boolean( _value ) || is.a.number( _value ) ) {
        value = _value.toString();
      }

      break;

    case castType === "number":

      try {

        if( is.a.array( _value ) || is.a.guid( _value ) ) {
          throw "wrong number"; 
        }

        value = parseFloat( _value );

        if ( is.not.a.number( value ) || isNaN( value ) ) {
          value = undefined;
        }
      } catch ( e ) {
        value = undefined
      }

      if ( value !== undefined ) {
        switch ( true ) {
        case _castType === "integer":
          value = parseInt( value, 10 );
          break;
        }
      }

      break;

    default:

      try {
        value = cast( JSON.parse( _value ), castType )
      } catch ( e ) {}

      break;

    }

  }

  if ( values.length > 0 && !contains( values, value ) ) {
    value = values[ 0 ];
  }

  return is.not.undefined( value ) ? value : is.not.undefined( _default ) ? _default : null;

};

module.exports = cast;
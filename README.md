# TOC
   - [sc-cast](#sc-cast)
<a name=""></a>
 
<a name="sc-cast"></a>
# sc-cast
Cast values to specific types.

```js
cast( "[1,2,3]", "array" ).should.eql( [ 1, 2, 3 ] );
cast( "false", "boolean" ).should.eql( false );
cast( "29 aug 1997", "date" ).should.eql( new Date( 1997, 7, 29 ) );
cast( "-42", "number" ).should.eql( -42 );
cast( true, "string" ).should.eql( "true" );
```


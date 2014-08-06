exports.tests = [ {
  type: "array",
  values: [
    [], 0, "chicken", "[]", "[ 1,  2,3 ]"
  ],
  defaults: [],
  expected: [
    [],
    [ 0 ],
    [ "chicken" ],
    [],
    [ 1, 2, 3 ]
  ]
}, {
  type: "boolean",
  values: [
    true, "true", 1, "y", "yes",
    false, "false", 0, -1, "chicken", "", null, undefined
  ],
  defaults: [ null, null, null, null, null, null, null, null, null, false, null, null, null ],
  expected: [
    true, true, true, true, true,
    false, false, false, false, false, null, null, null
  ]
}, {
  type: "date",
  values: [
    new Date( 1997, 7, 29 ), "29 aug 1997", "1997-08-29T14:00:00.000Z", 872776800000, 0, false, null,
    "872776800000", "", undefined
  ],
  expected: [
    new Date( 1997, 7, 29 ), new Date( 1997, 7, 29 ), new Date( "1997-08-29T14:00:00.000Z" ), new Date( 872776800000 ), new Date( 0 ), new Date( false ), new Date( null ),
    null, null, null
  ]
}, {
  type: "float",
  values: [
    0, 0.1, 1.1, "0", ".1", "1.1", -1.1, "-1.1", "1.1e6", "chicken",
    false, true
  ],
  expected: [
    0, 0.1, 1.1, 0, 0.1, 1.1, -1.1, -1.1, 1100000,
    null, null
  ]
}, {
  type: "integer",
  values: [
    0, -10, "0", "00", "10", "10.1", "-10", "10e6",
    "cheese", false, null, true, "wat"
  ],
  expected: [
    0, -10, 0, 0, 10, 10, -10, 10000000,
    null, null, null, null, null
  ]
}, {
  type: "string",
  values: [
    "chicken", true, false, 5, [], {},
    null
  ],
  expected: [
    "chicken", "true", "false", "5", null, null, null
  ]
}, {
  type: "*",
  values: [
    [ 1, 2 ],
    [], {}, {
      a: 'a',
      b: 'b'
    },
    true, false, new Date( 1997, 7, 29 ), 0, 1, -1, 0.1, -1.1, 11000000, '', 'chicken', null, undefined
  ],
  defaults: [ 1 ],
  expected: [
    [ 1, 2 ],
    [], {}, {
      a: 'a',
      b: 'b'
    },
    true, false, new Date( 1997, 7, 29 ), 0, 1, -1, 0.1, -1.1, 11000000, '', 'chicken', null, undefined
  ]
} ];
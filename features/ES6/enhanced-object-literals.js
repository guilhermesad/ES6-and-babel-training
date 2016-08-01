var obj = {

  // __proto__
  __proto__: theProtoObj,

  // Does not set internal prototype
  '__proto__': somethingElse,

  // Shorthand for ‘handler: handler’
  handler,

  // Methods
  toString() {
    // Super calls
    return "d " + super.toString();
  },

  // Computed (dynamic) property names
  [ "prop_" + (() => 42)() ]: 42
};

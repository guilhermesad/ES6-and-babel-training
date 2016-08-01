['a', 'b', 'c'].includes('c');
// <- true

[{}, {}].includes({}); // strictly a reference comparison
// <- false

var a = {};
[{}, a].includes(a);
// <- true

// Using fromIndex param
['a', 'b', 'c', 'd'].includes('b', 2);
// <- false

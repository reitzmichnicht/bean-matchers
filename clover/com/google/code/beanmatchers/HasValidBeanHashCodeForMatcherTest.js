var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":111,"id":1117,"methods":[{"el":41,"sc":5,"sl":35},{"el":54,"sc":5,"sl":43},{"el":67,"sc":5,"sl":56},{"el":83,"sc":5,"sl":69},{"el":96,"sc":5,"sl":85},{"el":110,"sc":5,"sl":98}],"name":"HasValidBeanHashCodeForMatcherTest","sl":19}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_139":{"methods":[{"sl":69}],"name":"beanWithPropertyNotInfluencingHashCodeShouldBeDiagnosed","pass":true,"statements":[{"sl":72},{"sl":73},{"sl":76},{"sl":79},{"sl":80},{"sl":81},{"sl":82}]},"test_147":{"methods":[{"sl":56}],"name":"beanWithPropertyNotInfluencingHashCodeShouldNotMatch","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":63},{"sl":66}]},"test_4":{"methods":[{"sl":98}],"name":"shouldDescribeExpectationForExcludedProperties","pass":true,"statements":[{"sl":101},{"sl":104},{"sl":107},{"sl":108},{"sl":109}]},"test_74":{"methods":[{"sl":43}],"name":"beanWithValidHashCodeShouldMatch","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":50},{"sl":53}]},"test_87":{"methods":[{"sl":85}],"name":"beanWithPropertyNotInfluencingHashCodeShouldMatchIfBadPropertyIsNotIncluded","pass":true,"statements":[{"sl":88},{"sl":89},{"sl":92},{"sl":95}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [74], [], [], [74], [74], [], [], [74], [], [], [74], [], [], [147], [], [], [147], [147], [], [], [147], [], [], [147], [], [], [139], [], [], [139], [139], [], [], [139], [], [], [139], [139], [139], [139], [], [], [87], [], [], [87], [87], [], [], [87], [], [], [87], [], [], [4], [], [], [4], [], [], [4], [], [], [4], [4], [4], [], []]

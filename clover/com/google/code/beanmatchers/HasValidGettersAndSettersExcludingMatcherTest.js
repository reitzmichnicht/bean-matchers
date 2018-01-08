var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":157,"id":1155,"methods":[{"el":37,"sc":3,"sl":31},{"el":50,"sc":3,"sl":39},{"el":63,"sc":3,"sl":52},{"el":79,"sc":3,"sl":65},{"el":92,"sc":3,"sl":81},{"el":105,"sc":3,"sl":94},{"el":118,"sc":3,"sl":107},{"el":131,"sc":3,"sl":120},{"el":143,"sc":3,"sl":133},{"el":156,"sc":3,"sl":145}],"name":"HasValidGettersAndSettersExcludingMatcherTest","sl":18}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_126":{"methods":[{"sl":39}],"name":"beanWithValidGettersAndSettersShouldMatch","pass":true,"statements":[{"sl":42},{"sl":43},{"sl":46},{"sl":49}]},"test_134":{"methods":[{"sl":94}],"name":"beanWithInvalidSetterShouldNotMatch","pass":true,"statements":[{"sl":97},{"sl":98},{"sl":101},{"sl":104}]},"test_148":{"methods":[{"sl":120}],"name":"beanWithInvalidSetterShouldMatchIfBadPropertyIsExcluded","pass":true,"statements":[{"sl":123},{"sl":124},{"sl":127},{"sl":130}]},"test_162":{"methods":[{"sl":52}],"name":"beanWithInvalidGetterShouldNotMatch","pass":true,"statements":[{"sl":55},{"sl":56},{"sl":59},{"sl":62}]},"test_30":{"methods":[{"sl":107}],"name":"beanWithMissingSetterShouldNotMatch","pass":true,"statements":[{"sl":110},{"sl":111},{"sl":114},{"sl":117}]},"test_55":{"methods":[{"sl":133}],"name":"shouldDescribeExpectation","pass":true,"statements":[{"sl":136},{"sl":139},{"sl":142}]},"test_82":{"methods":[{"sl":65}],"name":"beanWithInvalidGetterShouldBeDiagnosed","pass":true,"statements":[{"sl":68},{"sl":69},{"sl":72},{"sl":75},{"sl":76},{"sl":77},{"sl":78}]},"test_95":{"methods":[{"sl":145}],"name":"shouldDescribeExpectationForExcludedProperties","pass":true,"statements":[{"sl":148},{"sl":151},{"sl":154},{"sl":155}]},"test_99":{"methods":[{"sl":81}],"name":"beanWithMissingGetterShouldNotMatch","pass":true,"statements":[{"sl":84},{"sl":85},{"sl":88},{"sl":91}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [126], [], [], [126], [126], [], [], [126], [], [], [126], [], [], [162], [], [], [162], [162], [], [], [162], [], [], [162], [], [], [82], [], [], [82], [82], [], [], [82], [], [], [82], [82], [82], [82], [], [], [99], [], [], [99], [99], [], [], [99], [], [], [99], [], [], [134], [], [], [134], [134], [], [], [134], [], [], [134], [], [], [30], [], [], [30], [30], [], [], [30], [], [], [30], [], [], [148], [], [], [148], [148], [], [], [148], [], [], [148], [], [], [55], [], [], [55], [], [], [55], [], [], [55], [], [], [95], [], [], [95], [], [], [95], [], [], [95], [95], [], []]

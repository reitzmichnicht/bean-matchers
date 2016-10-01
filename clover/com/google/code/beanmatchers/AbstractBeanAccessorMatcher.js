var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":40,"id":0,"methods":[{"el":13,"sc":5,"sl":11},{"el":27,"sc":5,"sl":15},{"el":39,"sc":5,"sl":29}],"name":"AbstractBeanAccessorMatcher","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_111":{"methods":[{"sl":11},{"sl":15},{"sl":29}],"name":"beanWithInvalidSetterShouldNotMatch","pass":true,"statements":[{"sl":12},{"sl":16},{"sl":17},{"sl":18},{"sl":23},{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35}]},"test_116":{"methods":[{"sl":11},{"sl":15},{"sl":29}],"name":"testHasValidGettersAndSettersExcluding","pass":true,"statements":[{"sl":12},{"sl":16},{"sl":17},{"sl":26},{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35}]},"test_12":{"methods":[{"sl":11},{"sl":15},{"sl":29}],"name":"testBeanHasValidGettersAndSetters","pass":true,"statements":[{"sl":12},{"sl":16},{"sl":17},{"sl":26},{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35}]},"test_135":{"methods":[{"sl":11},{"sl":15},{"sl":29}],"name":"beanWithInvalidSetterShouldNotMatch","pass":true,"statements":[{"sl":12},{"sl":16},{"sl":17},{"sl":18},{"sl":23},{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35}]},"test_141":{"methods":[{"sl":11},{"sl":15},{"sl":29}],"name":"shouldThrowExceptionOnBeanWithPropertyNeedingCustomValueGenerator","pass":true,"statements":[{"sl":12},{"sl":16},{"sl":17},{"sl":30},{"sl":31},{"sl":32}]},"test_153":{"methods":[{"sl":11}],"name":"shouldDescribeExpectation","pass":true,"statements":[{"sl":12}]},"test_156":{"methods":[{"sl":11},{"sl":15},{"sl":29}],"name":"beanWithInvalidGetterShouldBeDiagnosed","pass":true,"statements":[{"sl":12},{"sl":16},{"sl":17},{"sl":18},{"sl":23},{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35}]},"test_157":{"methods":[{"sl":11},{"sl":15},{"sl":29}],"name":"testHasValidGettersAndSetters","pass":true,"statements":[{"sl":12},{"sl":16},{"sl":17},{"sl":26},{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35}]},"test_158":{"methods":[{"sl":11},{"sl":15},{"sl":29}],"name":"beanWithInvalidSetterShouldMatchIfBadPropertyIsExcluded","pass":true,"statements":[{"sl":12},{"sl":16},{"sl":17},{"sl":26},{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35}]},"test_2":{"methods":[{"sl":11},{"sl":15},{"sl":29}],"name":"beanWithValidGettersAndSettersShouldMatch","pass":true,"statements":[{"sl":12},{"sl":16},{"sl":17},{"sl":26},{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35}]},"test_32":{"methods":[{"sl":11},{"sl":15},{"sl":29}],"name":"beanWithValidGettersAndSettersShouldMatch","pass":true,"statements":[{"sl":12},{"sl":16},{"sl":17},{"sl":26},{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35}]},"test_37":{"methods":[{"sl":11},{"sl":15},{"sl":29}],"name":"beanWithInvalidGetterShouldBeDiagnosed","pass":true,"statements":[{"sl":12},{"sl":16},{"sl":17},{"sl":18},{"sl":23},{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35}]},"test_40":{"methods":[{"sl":11},{"sl":15},{"sl":29}],"name":"beanWithMissingSetterShouldNotMatch","pass":true,"statements":[{"sl":12},{"sl":16},{"sl":17},{"sl":18},{"sl":23},{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":37}]},"test_43":{"methods":[{"sl":11}],"name":"shouldDescribeExpectationForExcludedProperties","pass":true,"statements":[{"sl":12}]},"test_56":{"methods":[{"sl":11},{"sl":15},{"sl":29}],"name":"beanWithInvalidGetterShouldNotMatch","pass":true,"statements":[{"sl":12},{"sl":16},{"sl":17},{"sl":18},{"sl":23},{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35}]},"test_58":{"methods":[{"sl":11},{"sl":15},{"sl":29}],"name":"testHasValidGettersAndSettersFor","pass":true,"statements":[{"sl":12},{"sl":16},{"sl":17},{"sl":26},{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35}]},"test_67":{"methods":[{"sl":11},{"sl":15},{"sl":29}],"name":"beanWithMissingGetterShouldNotMatch","pass":true,"statements":[{"sl":12},{"sl":16},{"sl":17},{"sl":18},{"sl":23},{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":37}]},"test_77":{"methods":[{"sl":11},{"sl":15},{"sl":29}],"name":"canRegisterCustomValueGenerator","pass":true,"statements":[{"sl":12},{"sl":16},{"sl":17},{"sl":26},{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35}]},"test_79":{"methods":[{"sl":11},{"sl":15},{"sl":29}],"name":"beanWithInvalidGetterShouldNotMatch","pass":true,"statements":[{"sl":12},{"sl":16},{"sl":17},{"sl":18},{"sl":23},{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35}]},"test_82":{"methods":[{"sl":11},{"sl":15},{"sl":29}],"name":"testBeanHasValidGettersAndSettersFor","pass":true,"statements":[{"sl":12},{"sl":16},{"sl":17},{"sl":26},{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35}]},"test_84":{"methods":[{"sl":11},{"sl":15},{"sl":29}],"name":"testBeanHasValidGettersAndSettersExcluding","pass":true,"statements":[{"sl":12},{"sl":16},{"sl":17},{"sl":26},{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35}]},"test_92":{"methods":[{"sl":11}],"name":"shouldDescribeExpectation","pass":true,"statements":[{"sl":12}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [77, 37, 82, 156, 84, 92, 43, 153, 111, 79, 116, 135, 56, 32, 141, 67, 158, 58, 40, 157, 12, 2], [77, 37, 82, 156, 84, 92, 43, 153, 111, 79, 116, 135, 56, 32, 141, 67, 158, 58, 40, 157, 12, 2], [], [], [77, 37, 82, 156, 84, 111, 79, 116, 135, 56, 32, 141, 67, 158, 58, 40, 157, 12, 2], [77, 37, 82, 156, 84, 111, 79, 116, 135, 56, 32, 141, 67, 158, 58, 40, 157, 12, 2], [77, 37, 82, 156, 84, 111, 79, 116, 135, 56, 32, 141, 67, 158, 58, 40, 157, 12, 2], [37, 156, 111, 79, 135, 56, 67, 40], [], [], [], [], [37, 156, 111, 79, 135, 56, 67, 40], [], [], [77, 82, 84, 116, 32, 158, 58, 157, 12, 2], [], [], [77, 37, 82, 156, 84, 111, 79, 116, 135, 56, 32, 141, 67, 158, 58, 40, 157, 12, 2], [77, 37, 82, 156, 84, 111, 79, 116, 135, 56, 32, 141, 67, 158, 58, 40, 157, 12, 2], [77, 37, 82, 156, 84, 111, 79, 116, 135, 56, 32, 141, 67, 158, 58, 40, 157, 12, 2], [77, 37, 82, 156, 84, 111, 79, 116, 135, 56, 32, 141, 67, 158, 58, 40, 157, 12, 2], [77, 37, 82, 156, 84, 111, 79, 116, 135, 56, 32, 67, 158, 58, 40, 157, 12, 2], [77, 37, 82, 156, 84, 111, 79, 116, 135, 56, 32, 67, 158, 58, 157, 12, 2], [77, 37, 82, 156, 84, 111, 79, 116, 135, 56, 32, 158, 58, 157, 12, 2], [], [67, 40], [], [], []]

var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":16,"id":210,"methods":[{"el":7,"sc":3,"sl":5},{"el":11,"sc":3,"sl":9},{"el":15,"sc":3,"sl":13}],"name":"BeanMatchersException","sl":3}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_127":{"methods":[{"sl":5}],"name":"shouldThrowExceptionGivenCannotGenerateTwoDistinctValuesAfterXAttempts","pass":true,"statements":[{"sl":6}]},"test_14":{"methods":[{"sl":5}],"name":"shouldThrowExceptionOnBeanWithPropertyNeedingCustomValueGenerator","pass":true,"statements":[{"sl":6}]},"test_142":{"methods":[{"sl":5}],"name":"shouldThrowExceptionIfGetterIsMissing","pass":true,"statements":[{"sl":6}]},"test_144":{"methods":[{"sl":5}],"name":"propertyTypeShouldThrowExceptionGivenPropertyDoesNotExistOnBean","pass":true,"statements":[{"sl":6}]},"test_154":{"methods":[{"sl":5}],"name":"getPropertyShouldThrowExceptionGivenPropertyDoesNotExistOnBean","pass":true,"statements":[{"sl":6}]},"test_160":{"methods":[{"sl":9}],"name":"beanWithInvalidGetterShouldBeDiagnosed","pass":true,"statements":[{"sl":10}]},"test_23":{"methods":[{"sl":9}],"name":"beanWithoutNoArgsConstructorShouldNotMatch","pass":true,"statements":[{"sl":10}]},"test_30":{"methods":[{"sl":5}],"name":"beanWithMissingSetterShouldNotMatch","pass":true,"statements":[{"sl":6}]},"test_39":{"methods":[{"sl":13}],"name":"canCreateExceptionWithCause","pass":true,"statements":[{"sl":14}]},"test_41":{"methods":[{"sl":5}],"name":"shouldThrowExceptionWhenNoGeneratorRegisteredForTypeAndTypeIsFinal","pass":true,"statements":[{"sl":6}]},"test_66":{"methods":[{"sl":9}],"name":"canCreateExceptionWithMessageAndCause","pass":true,"statements":[{"sl":10}]},"test_79":{"methods":[{"sl":5}],"name":"canCreateExceptionWithMessage","pass":true,"statements":[{"sl":6}]},"test_8":{"methods":[{"sl":5}],"name":"shouldThrowExceptionIfSetterIsMissing","pass":true,"statements":[{"sl":6}]},"test_9":{"methods":[{"sl":5}],"name":"setPropertyShouldThrowExceptionGivenPropertyDoesNotExistOnBean","pass":true,"statements":[{"sl":6}]},"test_99":{"methods":[{"sl":5}],"name":"beanWithMissingGetterShouldNotMatch","pass":true,"statements":[{"sl":6}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [127, 8, 154, 41, 30, 99, 9, 144, 142, 14, 79], [127, 8, 154, 41, 30, 99, 9, 144, 142, 14, 79], [], [], [23, 66, 160], [23, 66, 160], [], [], [39], [39], [], []]

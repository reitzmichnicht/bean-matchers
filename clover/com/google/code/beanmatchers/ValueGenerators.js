var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":21,"id":493,"methods":[{"el":6,"sc":5,"sl":5},{"el":20,"sc":5,"sl":8}],"name":"ValueGenerators","sl":3}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_105":{"methods":[{"sl":8}],"name":"beanWithValidEqualsShouldMatch","pass":true,"statements":[{"sl":9},{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":16},{"sl":17},{"sl":19}]},"test_107":{"methods":[{"sl":8}],"name":"beanWithValidEqualsShouldMatch","pass":true,"statements":[{"sl":9},{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":16},{"sl":17},{"sl":19}]},"test_108":{"methods":[{"sl":8}],"name":"canGenerateTwoValues","pass":true,"statements":[{"sl":9},{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":16},{"sl":17},{"sl":19}]},"test_11":{"methods":[{"sl":8}],"name":"beanWithEqualsNotHandlingThatNullPropertyShouldNotMatch","pass":true,"statements":[{"sl":9},{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":16},{"sl":17},{"sl":19}]},"test_115":{"methods":[{"sl":8}],"name":"beanWithPropertyNotInfluencingHashCodeShouldBeDiagnosed","pass":true,"statements":[{"sl":9},{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":16},{"sl":17},{"sl":19}]},"test_119":{"methods":[{"sl":8}],"name":"shouldThrowExceptionGivenCannotGenerateTwoDistinctValuesAfterXAttempts","pass":true,"statements":[{"sl":9},{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":14},{"sl":16},{"sl":17},{"sl":18}]},"test_122":{"methods":[{"sl":8}],"name":"beanWithValidHashCodeShouldMatch","pass":true,"statements":[{"sl":9},{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":16},{"sl":17},{"sl":19}]},"test_123":{"methods":[{"sl":8}],"name":"testHasValidBeanEqualsOnNonReflectedEquals","pass":true,"statements":[{"sl":9},{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":16},{"sl":17},{"sl":19}]},"test_136":{"methods":[{"sl":8}],"name":"beanWithPropertyNotInfluencingHashCodeShouldNotMatch","pass":true,"statements":[{"sl":9},{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":16},{"sl":17},{"sl":19}]},"test_138":{"methods":[{"sl":8}],"name":"testHasValidBeanHashCode","pass":true,"statements":[{"sl":9},{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":16},{"sl":17},{"sl":18},{"sl":19}]},"test_139":{"methods":[{"sl":8}],"name":"beanWithPropertyNotInfluencingHashCodeShouldBeDiagnosed","pass":true,"statements":[{"sl":9},{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":16},{"sl":17},{"sl":19}]},"test_147":{"methods":[{"sl":8}],"name":"beanWithPropertyNotInfluencingHashCodeShouldNotMatch","pass":true,"statements":[{"sl":9},{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":16},{"sl":17},{"sl":19}]},"test_151":{"methods":[{"sl":8}],"name":"beanWithPropertyNotInfluencingEqualsShouldMatchIfBadPropertyIsExcluded","pass":true,"statements":[{"sl":9},{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":16},{"sl":17},{"sl":19}]},"test_152":{"methods":[{"sl":8}],"name":"beanWithEqualsNotHandlingThisNullPropertyShouldNotMatch","pass":true,"statements":[{"sl":9},{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":16},{"sl":17},{"sl":19}]},"test_159":{"methods":[{"sl":8}],"name":"beanWithPropertyNotInfluencingEqualsShouldBeDiagnosed","pass":true,"statements":[{"sl":9},{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":16},{"sl":17},{"sl":19}]},"test_21":{"methods":[{"sl":8}],"name":"testHasValidBeanEquals","pass":true,"statements":[{"sl":9},{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":16},{"sl":17},{"sl":18},{"sl":19}]},"test_23":{"methods":[{"sl":8}],"name":"beanWithEqualsNotHandlingThatNullPropertyShouldNotMatch","pass":true,"statements":[{"sl":9},{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":16},{"sl":17},{"sl":19}]},"test_27":{"methods":[{"sl":8}],"name":"beanWithEqualsNotHandlingNullPropertyShouldBeDiagnosed","pass":true,"statements":[{"sl":9},{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":16},{"sl":17},{"sl":19}]},"test_3":{"methods":[{"sl":8}],"name":"beanWithEqualsNotHandlingSamePropertyValuesShouldNotMatch","pass":true,"statements":[{"sl":9},{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":16},{"sl":17},{"sl":19}]},"test_48":{"methods":[{"sl":8}],"name":"beanWithEqualsNotHandlingThisNullPropertyShouldNotMatch","pass":true,"statements":[{"sl":9},{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":16},{"sl":17},{"sl":19}]},"test_50":{"methods":[{"sl":8}],"name":"beanWithEqualsNotHandlingSamePropertyValuesShouldNotMatch","pass":true,"statements":[{"sl":9},{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":16},{"sl":17},{"sl":19}]},"test_62":{"methods":[{"sl":8}],"name":"beanWithPropertyNotInfluencingEqualsShouldNotMatch","pass":true,"statements":[{"sl":9},{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":16},{"sl":17},{"sl":19}]},"test_63":{"methods":[{"sl":8}],"name":"beanWithPropertyNotInfluencingEqualsShouldMatchIfBadPropertyIsNotIncluded","pass":true,"statements":[{"sl":9},{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":16},{"sl":17},{"sl":19}]},"test_7":{"methods":[{"sl":8}],"name":"testHasValidBeanEqualsFor","pass":true,"statements":[{"sl":9},{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":16},{"sl":17},{"sl":19}]},"test_74":{"methods":[{"sl":8}],"name":"beanWithValidHashCodeShouldMatch","pass":true,"statements":[{"sl":9},{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":16},{"sl":17},{"sl":19}]},"test_80":{"methods":[{"sl":8}],"name":"testHasValidBeanEqualsExcluding","pass":true,"statements":[{"sl":9},{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":16},{"sl":17},{"sl":19}]},"test_81":{"methods":[{"sl":8}],"name":"beanWithPropertyNotInfluencingEqualsShouldNotMatch","pass":true,"statements":[{"sl":9},{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":16},{"sl":17},{"sl":19}]},"test_89":{"methods":[{"sl":8}],"name":"beanWithPropertyNotInfluencingEqualsShouldBeDiagnosed","pass":true,"statements":[{"sl":9},{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":16},{"sl":17},{"sl":19}]},"test_91":{"methods":[{"sl":8}],"name":"shouldGenerateTwoDistinctValues","pass":true,"statements":[{"sl":9},{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":16},{"sl":17},{"sl":18},{"sl":19}]},"test_95":{"methods":[{"sl":8}],"name":"beanWithEqualsNotHandlingNullPropertyShouldBeDiagnosed","pass":true,"statements":[{"sl":9},{"sl":10},{"sl":11},{"sl":12},{"sl":13},{"sl":16},{"sl":17},{"sl":19}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [3, 81, 95, 27, 50, 139, 23, 147, 48, 122, 80, 123, 115, 21, 108, 136, 105, 11, 159, 7, 74, 89, 152, 119, 91, 107, 63, 151, 62, 138], [3, 81, 95, 27, 50, 139, 23, 147, 48, 122, 80, 123, 115, 21, 108, 136, 105, 11, 159, 7, 74, 89, 152, 119, 91, 107, 63, 151, 62, 138], [3, 81, 95, 27, 50, 139, 23, 147, 48, 122, 80, 123, 115, 21, 108, 136, 105, 11, 159, 7, 74, 89, 152, 119, 91, 107, 63, 151, 62, 138], [3, 81, 95, 27, 50, 139, 23, 147, 48, 122, 80, 123, 115, 21, 108, 136, 105, 11, 159, 7, 74, 89, 152, 119, 91, 107, 63, 151, 62, 138], [3, 81, 95, 27, 50, 139, 23, 147, 48, 122, 80, 123, 115, 21, 108, 136, 105, 11, 159, 7, 74, 89, 152, 119, 91, 107, 63, 151, 62, 138], [3, 81, 95, 27, 50, 139, 23, 147, 48, 122, 80, 123, 115, 21, 108, 136, 105, 11, 159, 7, 74, 89, 152, 119, 91, 107, 63, 151, 62, 138], [119], [], [3, 81, 95, 27, 50, 139, 23, 147, 48, 122, 80, 123, 115, 21, 108, 136, 105, 11, 159, 7, 74, 89, 152, 119, 91, 107, 63, 151, 62, 138], [3, 81, 95, 27, 50, 139, 23, 147, 48, 122, 80, 123, 115, 21, 108, 136, 105, 11, 159, 7, 74, 89, 152, 119, 91, 107, 63, 151, 62, 138], [21, 119, 91, 138], [3, 81, 95, 27, 50, 139, 23, 147, 48, 122, 80, 123, 115, 21, 108, 136, 105, 11, 159, 7, 74, 89, 152, 91, 107, 63, 151, 62, 138], [], []]

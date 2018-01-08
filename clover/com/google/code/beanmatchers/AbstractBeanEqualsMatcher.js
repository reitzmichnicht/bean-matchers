var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":115,"id":18,"methods":[{"el":14,"sc":3,"sl":12},{"el":46,"sc":3,"sl":16},{"el":50,"sc":3,"sl":48},{"el":58,"sc":3,"sl":52},{"el":62,"sc":3,"sl":60},{"el":67,"sc":3,"sl":64},{"el":76,"sc":3,"sl":69},{"el":81,"sc":3,"sl":78},{"el":94,"sc":3,"sl":83},{"el":111,"sc":3,"sl":96}],"name":"AbstractBeanEqualsMatcher","sl":9},{"el":114,"id":89,"methods":[],"name":"AbstractBeanEqualsMatcher.TestType","sl":113}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_0":{"methods":[{"sl":12},{"sl":16},{"sl":48},{"sl":60},{"sl":64}],"name":"beanWithEqualsNotHandlingSameInstanceShouldNotMatch","pass":true,"statements":[{"sl":13},{"sl":18},{"sl":19},{"sl":21},{"sl":49},{"sl":61},{"sl":65},{"sl":66}]},"test_1":{"methods":[{"sl":12},{"sl":16},{"sl":64},{"sl":69},{"sl":78},{"sl":83},{"sl":96}],"name":"testHasValidBeanEqualsExcluding","pass":true,"statements":[{"sl":13},{"sl":18},{"sl":23},{"sl":28},{"sl":33},{"sl":34},{"sl":39},{"sl":45},{"sl":65},{"sl":66},{"sl":70},{"sl":71},{"sl":72},{"sl":79},{"sl":80},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":97},{"sl":98},{"sl":99},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":107}]},"test_100":{"methods":[{"sl":12},{"sl":16},{"sl":52},{"sl":60},{"sl":64},{"sl":69},{"sl":78},{"sl":83}],"name":"beanWithPropertyNotInfluencingEqualsShouldNotMatch","pass":true,"statements":[{"sl":13},{"sl":18},{"sl":23},{"sl":28},{"sl":33},{"sl":34},{"sl":35},{"sl":37},{"sl":54},{"sl":61},{"sl":65},{"sl":66},{"sl":70},{"sl":71},{"sl":72},{"sl":79},{"sl":80},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92}]},"test_11":{"methods":[{"sl":12},{"sl":16},{"sl":52},{"sl":60},{"sl":64},{"sl":69},{"sl":78},{"sl":83},{"sl":96}],"name":"beanWithEqualsNotHandlingThisNullPropertyShouldNotMatch","pass":true,"statements":[{"sl":13},{"sl":18},{"sl":23},{"sl":28},{"sl":33},{"sl":34},{"sl":39},{"sl":40},{"sl":42},{"sl":54},{"sl":61},{"sl":65},{"sl":66},{"sl":70},{"sl":71},{"sl":72},{"sl":79},{"sl":80},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":97},{"sl":98},{"sl":99},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":107},{"sl":109}]},"test_113":{"methods":[{"sl":12},{"sl":16},{"sl":48},{"sl":60},{"sl":64},{"sl":69},{"sl":78}],"name":"beanWithEqualsNotHandlingDifferingTypeShouldBeDiagnosed","pass":true,"statements":[{"sl":13},{"sl":18},{"sl":23},{"sl":28},{"sl":29},{"sl":31},{"sl":49},{"sl":61},{"sl":65},{"sl":66},{"sl":70},{"sl":71},{"sl":72},{"sl":79},{"sl":80}]},"test_116":{"methods":[{"sl":12},{"sl":16},{"sl":52},{"sl":60},{"sl":64},{"sl":69},{"sl":78},{"sl":83},{"sl":96}],"name":"beanWithEqualsNotHandlingThisNullPropertyShouldNotMatch","pass":true,"statements":[{"sl":13},{"sl":18},{"sl":23},{"sl":28},{"sl":33},{"sl":34},{"sl":39},{"sl":40},{"sl":42},{"sl":54},{"sl":61},{"sl":65},{"sl":66},{"sl":70},{"sl":71},{"sl":72},{"sl":79},{"sl":80},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":97},{"sl":98},{"sl":99},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":107},{"sl":109}]},"test_121":{"methods":[{"sl":12},{"sl":16},{"sl":48},{"sl":60},{"sl":64},{"sl":69}],"name":"beanWithEqualsNotAccountingNullValueShouldNotMatch","pass":true,"statements":[{"sl":13},{"sl":18},{"sl":23},{"sl":24},{"sl":26},{"sl":49},{"sl":61},{"sl":65},{"sl":66},{"sl":70},{"sl":71},{"sl":72},{"sl":74}]},"test_13":{"methods":[{"sl":12},{"sl":16},{"sl":48},{"sl":60},{"sl":64},{"sl":69}],"name":"beanWithEqualsNotHandlingNullValueShouldNotMatch","pass":true,"statements":[{"sl":13},{"sl":18},{"sl":23},{"sl":24},{"sl":26},{"sl":49},{"sl":61},{"sl":65},{"sl":66},{"sl":70},{"sl":71},{"sl":72}]},"test_131":{"methods":[{"sl":12},{"sl":16},{"sl":48},{"sl":60},{"sl":64},{"sl":69},{"sl":78}],"name":"beanWithEqualsNotHandlingDifferingTypeShouldNotMatch","pass":true,"statements":[{"sl":13},{"sl":18},{"sl":23},{"sl":28},{"sl":29},{"sl":31},{"sl":49},{"sl":61},{"sl":65},{"sl":66},{"sl":70},{"sl":71},{"sl":72},{"sl":79},{"sl":80}]},"test_135":{"methods":[{"sl":12}],"name":"shouldDescribeExpectationForExcludedProperties","pass":true,"statements":[{"sl":13}]},"test_136":{"methods":[{"sl":12},{"sl":16},{"sl":48},{"sl":60},{"sl":64}],"name":"beanWithEqualsNotHandlingSameInstanceShouldBeDiagnosed","pass":true,"statements":[{"sl":13},{"sl":18},{"sl":19},{"sl":21},{"sl":49},{"sl":61},{"sl":65},{"sl":66}]},"test_138":{"methods":[{"sl":12},{"sl":16},{"sl":48},{"sl":60},{"sl":64},{"sl":69}],"name":"beanWithEqualsNotHandlingNullValueShouldNotMatch","pass":true,"statements":[{"sl":13},{"sl":18},{"sl":23},{"sl":24},{"sl":26},{"sl":49},{"sl":61},{"sl":65},{"sl":66},{"sl":70},{"sl":71},{"sl":72}]},"test_140":{"methods":[{"sl":12},{"sl":16},{"sl":64},{"sl":69},{"sl":78},{"sl":83},{"sl":96}],"name":"testHasValidBeanEqualsFor","pass":true,"statements":[{"sl":13},{"sl":18},{"sl":23},{"sl":28},{"sl":33},{"sl":34},{"sl":39},{"sl":45},{"sl":65},{"sl":66},{"sl":70},{"sl":71},{"sl":72},{"sl":79},{"sl":80},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":97},{"sl":98},{"sl":99},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":107}]},"test_141":{"methods":[{"sl":12},{"sl":16},{"sl":52},{"sl":60},{"sl":64},{"sl":69},{"sl":78},{"sl":83},{"sl":96}],"name":"beanWithPropertyNotInfluencingEqualsShouldNotMatch","pass":true,"statements":[{"sl":13},{"sl":18},{"sl":23},{"sl":28},{"sl":33},{"sl":34},{"sl":35},{"sl":37},{"sl":39},{"sl":54},{"sl":61},{"sl":65},{"sl":66},{"sl":70},{"sl":71},{"sl":72},{"sl":79},{"sl":80},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":97},{"sl":98},{"sl":99},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":107}]},"test_147":{"methods":[{"sl":12},{"sl":16},{"sl":48},{"sl":60},{"sl":64},{"sl":69},{"sl":78}],"name":"beanWithEqualsNotHandlingDifferingTypeShouldBeDiagnosed","pass":true,"statements":[{"sl":13},{"sl":18},{"sl":23},{"sl":28},{"sl":29},{"sl":31},{"sl":49},{"sl":61},{"sl":65},{"sl":66},{"sl":70},{"sl":71},{"sl":72},{"sl":79},{"sl":80}]},"test_149":{"methods":[{"sl":12},{"sl":16},{"sl":64},{"sl":69},{"sl":78},{"sl":83},{"sl":96}],"name":"beanWithPropertyNotInfluencingEqualsShouldMatchIfBadPropertyIsNotIncluded","pass":true,"statements":[{"sl":13},{"sl":18},{"sl":23},{"sl":28},{"sl":33},{"sl":34},{"sl":39},{"sl":45},{"sl":65},{"sl":66},{"sl":70},{"sl":71},{"sl":72},{"sl":79},{"sl":80},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":97},{"sl":98},{"sl":99},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":107}]},"test_153":{"methods":[{"sl":12},{"sl":16},{"sl":52},{"sl":60},{"sl":64},{"sl":69},{"sl":78},{"sl":83},{"sl":96}],"name":"beanWithEqualsNotHandlingThatNullPropertyShouldNotMatch","pass":true,"statements":[{"sl":13},{"sl":18},{"sl":23},{"sl":28},{"sl":33},{"sl":34},{"sl":39},{"sl":40},{"sl":42},{"sl":54},{"sl":61},{"sl":65},{"sl":66},{"sl":70},{"sl":71},{"sl":72},{"sl":79},{"sl":80},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":97},{"sl":98},{"sl":99},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":107},{"sl":109}]},"test_20":{"methods":[{"sl":12},{"sl":16},{"sl":52},{"sl":60},{"sl":64},{"sl":69},{"sl":78},{"sl":83},{"sl":96}],"name":"beanWithEqualsNotHandlingNullPropertyShouldBeDiagnosed","pass":true,"statements":[{"sl":13},{"sl":18},{"sl":23},{"sl":28},{"sl":33},{"sl":34},{"sl":39},{"sl":40},{"sl":42},{"sl":54},{"sl":61},{"sl":65},{"sl":66},{"sl":70},{"sl":71},{"sl":72},{"sl":79},{"sl":80},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":97},{"sl":98},{"sl":99},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":107},{"sl":109}]},"test_31":{"methods":[{"sl":12},{"sl":16},{"sl":48},{"sl":60},{"sl":64},{"sl":69}],"name":"beanWithEqualsNotHandlingNullValueShouldBeDiagnosed","pass":true,"statements":[{"sl":13},{"sl":18},{"sl":23},{"sl":24},{"sl":26},{"sl":49},{"sl":61},{"sl":65},{"sl":66},{"sl":70},{"sl":71},{"sl":72}]},"test_37":{"methods":[{"sl":12},{"sl":16},{"sl":52},{"sl":60},{"sl":64},{"sl":69},{"sl":78},{"sl":83}],"name":"beanWithEqualsNotHandlingSamePropertyValuesShouldNotMatch","pass":true,"statements":[{"sl":13},{"sl":18},{"sl":23},{"sl":28},{"sl":33},{"sl":34},{"sl":35},{"sl":37},{"sl":54},{"sl":61},{"sl":65},{"sl":66},{"sl":70},{"sl":71},{"sl":72},{"sl":79},{"sl":80},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92}]},"test_4":{"methods":[{"sl":12},{"sl":16},{"sl":48},{"sl":60},{"sl":64},{"sl":69},{"sl":78}],"name":"beanWithEqualsNotHandlingDifferingTypeShouldNotMatch","pass":true,"statements":[{"sl":13},{"sl":18},{"sl":23},{"sl":28},{"sl":29},{"sl":31},{"sl":49},{"sl":61},{"sl":65},{"sl":66},{"sl":70},{"sl":71},{"sl":72},{"sl":79},{"sl":80}]},"test_43":{"methods":[{"sl":12}],"name":"shouldDescribeExpectation","pass":true,"statements":[{"sl":13}]},"test_45":{"methods":[{"sl":12},{"sl":16},{"sl":64},{"sl":69},{"sl":78},{"sl":83},{"sl":96}],"name":"beanWithValidEqualsShouldMatch","pass":true,"statements":[{"sl":13},{"sl":18},{"sl":23},{"sl":28},{"sl":33},{"sl":34},{"sl":39},{"sl":45},{"sl":65},{"sl":66},{"sl":70},{"sl":71},{"sl":72},{"sl":79},{"sl":80},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":97},{"sl":98},{"sl":99},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":107}]},"test_48":{"methods":[{"sl":12},{"sl":16},{"sl":52},{"sl":60},{"sl":64},{"sl":69},{"sl":78},{"sl":83}],"name":"beanWithEqualsNotHandlingSamePropertyValuesShouldNotMatch","pass":true,"statements":[{"sl":13},{"sl":18},{"sl":23},{"sl":28},{"sl":33},{"sl":34},{"sl":35},{"sl":37},{"sl":54},{"sl":61},{"sl":65},{"sl":66},{"sl":70},{"sl":71},{"sl":72},{"sl":79},{"sl":80},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92}]},"test_56":{"methods":[{"sl":12}],"name":"shouldDescribeExpectationForExcludedProperties","pass":true,"statements":[{"sl":13}]},"test_57":{"methods":[{"sl":12},{"sl":16},{"sl":64},{"sl":69},{"sl":78},{"sl":83},{"sl":96}],"name":"beanWithPropertyNotInfluencingEqualsShouldMatchIfBadPropertyIsExcluded","pass":true,"statements":[{"sl":13},{"sl":18},{"sl":23},{"sl":28},{"sl":33},{"sl":34},{"sl":39},{"sl":45},{"sl":65},{"sl":66},{"sl":70},{"sl":71},{"sl":72},{"sl":79},{"sl":80},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":97},{"sl":98},{"sl":99},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":107}]},"test_62":{"methods":[{"sl":12},{"sl":16},{"sl":48},{"sl":60},{"sl":64},{"sl":69}],"name":"beanWithEqualsNotAccountingNullValueShouldNotMatch","pass":true,"statements":[{"sl":13},{"sl":18},{"sl":23},{"sl":24},{"sl":26},{"sl":49},{"sl":61},{"sl":65},{"sl":66},{"sl":70},{"sl":71},{"sl":72},{"sl":74}]},"test_63":{"methods":[{"sl":12},{"sl":16},{"sl":48},{"sl":60},{"sl":64}],"name":"beanWithEqualsNotHandlingSameInstanceShouldBeDiagnosed","pass":true,"statements":[{"sl":13},{"sl":18},{"sl":19},{"sl":21},{"sl":49},{"sl":61},{"sl":65},{"sl":66}]},"test_65":{"methods":[{"sl":12},{"sl":16},{"sl":52},{"sl":60},{"sl":64},{"sl":69},{"sl":78},{"sl":83},{"sl":96}],"name":"beanWithEqualsNotHandlingThatNullPropertyShouldNotMatch","pass":true,"statements":[{"sl":13},{"sl":18},{"sl":23},{"sl":28},{"sl":33},{"sl":34},{"sl":39},{"sl":40},{"sl":42},{"sl":54},{"sl":61},{"sl":65},{"sl":66},{"sl":70},{"sl":71},{"sl":72},{"sl":79},{"sl":80},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":97},{"sl":98},{"sl":99},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":107},{"sl":109}]},"test_68":{"methods":[{"sl":12},{"sl":16},{"sl":48},{"sl":60},{"sl":64}],"name":"beanWithEqualsNotHandlingSameInstanceShouldNotMatch","pass":true,"statements":[{"sl":13},{"sl":18},{"sl":19},{"sl":21},{"sl":49},{"sl":61},{"sl":65},{"sl":66}]},"test_7":{"methods":[{"sl":12},{"sl":16},{"sl":48},{"sl":60},{"sl":64},{"sl":69}],"name":"beanWithEqualsNotHandlingNullValueShouldBeDiagnosed","pass":true,"statements":[{"sl":13},{"sl":18},{"sl":23},{"sl":24},{"sl":26},{"sl":49},{"sl":61},{"sl":65},{"sl":66},{"sl":70},{"sl":71},{"sl":72}]},"test_74":{"methods":[{"sl":12},{"sl":16},{"sl":52},{"sl":60},{"sl":64},{"sl":69},{"sl":78},{"sl":83},{"sl":96}],"name":"beanWithEqualsNotHandlingNullPropertyShouldBeDiagnosed","pass":true,"statements":[{"sl":13},{"sl":18},{"sl":23},{"sl":28},{"sl":33},{"sl":34},{"sl":39},{"sl":40},{"sl":42},{"sl":54},{"sl":61},{"sl":65},{"sl":66},{"sl":70},{"sl":71},{"sl":72},{"sl":79},{"sl":80},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":97},{"sl":98},{"sl":99},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":107},{"sl":109}]},"test_78":{"methods":[{"sl":12},{"sl":16},{"sl":52},{"sl":60},{"sl":64},{"sl":69},{"sl":78},{"sl":83}],"name":"beanWithPropertyNotInfluencingEqualsShouldBeDiagnosed","pass":true,"statements":[{"sl":13},{"sl":18},{"sl":23},{"sl":28},{"sl":33},{"sl":34},{"sl":35},{"sl":37},{"sl":54},{"sl":61},{"sl":65},{"sl":66},{"sl":70},{"sl":71},{"sl":72},{"sl":79},{"sl":80},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92}]},"test_83":{"methods":[{"sl":12},{"sl":16},{"sl":64},{"sl":69},{"sl":78},{"sl":83},{"sl":96}],"name":"beanWithValidEqualsShouldMatch","pass":true,"statements":[{"sl":13},{"sl":18},{"sl":23},{"sl":28},{"sl":33},{"sl":34},{"sl":39},{"sl":45},{"sl":65},{"sl":66},{"sl":70},{"sl":71},{"sl":72},{"sl":79},{"sl":80},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":97},{"sl":98},{"sl":99},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":107}]},"test_85":{"methods":[{"sl":12},{"sl":16},{"sl":64},{"sl":69},{"sl":78},{"sl":83},{"sl":96}],"name":"testHasValidBeanEquals","pass":true,"statements":[{"sl":13},{"sl":18},{"sl":23},{"sl":28},{"sl":33},{"sl":34},{"sl":39},{"sl":45},{"sl":65},{"sl":66},{"sl":70},{"sl":71},{"sl":72},{"sl":79},{"sl":80},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":97},{"sl":98},{"sl":99},{"sl":100},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":107}]},"test_90":{"methods":[{"sl":12},{"sl":16},{"sl":64},{"sl":69},{"sl":78},{"sl":83},{"sl":96}],"name":"testHasValidBeanEqualsOnNonReflectedEquals","pass":true,"statements":[{"sl":13},{"sl":18},{"sl":23},{"sl":28},{"sl":33},{"sl":34},{"sl":39},{"sl":45},{"sl":65},{"sl":66},{"sl":70},{"sl":71},{"sl":72},{"sl":79},{"sl":80},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":97},{"sl":98},{"sl":99},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":107}]},"test_92":{"methods":[{"sl":12},{"sl":16},{"sl":52},{"sl":60},{"sl":64},{"sl":69},{"sl":78},{"sl":83},{"sl":96}],"name":"beanWithPropertyNotInfluencingEqualsShouldBeDiagnosed","pass":true,"statements":[{"sl":13},{"sl":18},{"sl":23},{"sl":28},{"sl":33},{"sl":34},{"sl":35},{"sl":37},{"sl":39},{"sl":54},{"sl":61},{"sl":65},{"sl":66},{"sl":70},{"sl":71},{"sl":72},{"sl":79},{"sl":80},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":97},{"sl":98},{"sl":99},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":107}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [68, 141, 37, 63, 13, 78, 62, 149, 138, 56, 131, 140, 153, 11, 116, 136, 121, 85, 65, 48, 0, 113, 74, 57, 92, 1, 43, 135, 83, 147, 45, 7, 100, 20, 31, 90, 4], [68, 141, 37, 63, 13, 78, 62, 149, 138, 56, 131, 140, 153, 11, 116, 136, 121, 85, 65, 48, 0, 113, 74, 57, 92, 1, 43, 135, 83, 147, 45, 7, 100, 20, 31, 90, 4], [], [], [68, 141, 37, 63, 13, 78, 62, 149, 138, 131, 140, 153, 11, 116, 136, 121, 85, 65, 48, 0, 113, 74, 57, 92, 1, 83, 147, 45, 7, 100, 20, 31, 90, 4], [], [68, 141, 37, 63, 13, 78, 62, 149, 138, 131, 140, 153, 11, 116, 136, 121, 85, 65, 48, 0, 113, 74, 57, 92, 1, 83, 147, 45, 7, 100, 20, 31, 90, 4], [68, 63, 136, 0], [], [68, 63, 136, 0], [], [141, 37, 13, 78, 62, 149, 138, 131, 140, 153, 11, 116, 121, 85, 65, 48, 113, 74, 57, 92, 1, 83, 147, 45, 7, 100, 20, 31, 90, 4], [13, 62, 138, 121, 7, 31], [], [13, 62, 138, 121, 7, 31], [], [141, 37, 78, 149, 131, 140, 153, 11, 116, 85, 65, 48, 113, 74, 57, 92, 1, 83, 147, 45, 100, 20, 90, 4], [131, 113, 147, 4], [], [131, 113, 147, 4], [], [141, 37, 78, 149, 140, 153, 11, 116, 85, 65, 48, 74, 57, 92, 1, 83, 45, 100, 20, 90], [141, 37, 78, 149, 140, 153, 11, 116, 85, 65, 48, 74, 57, 92, 1, 83, 45, 100, 20, 90], [141, 37, 78, 48, 92, 100], [], [141, 37, 78, 48, 92, 100], [], [141, 149, 140, 153, 11, 116, 85, 65, 74, 57, 92, 1, 83, 45, 20, 90], [153, 11, 116, 65, 74, 20], [], [153, 11, 116, 65, 74, 20], [], [], [149, 140, 85, 57, 1, 83, 45, 90], [], [], [68, 63, 13, 62, 138, 131, 136, 121, 0, 113, 147, 7, 31, 4], [68, 63, 13, 62, 138, 131, 136, 121, 0, 113, 147, 7, 31, 4], [], [], [141, 37, 78, 153, 11, 116, 65, 48, 74, 92, 100, 20], [], [141, 37, 78, 153, 11, 116, 65, 48, 74, 92, 100, 20], [], [], [], [], [], [68, 141, 37, 63, 13, 78, 62, 138, 131, 153, 11, 116, 136, 121, 65, 48, 0, 113, 74, 92, 147, 7, 100, 20, 31, 4], [68, 141, 37, 63, 13, 78, 62, 138, 131, 153, 11, 116, 136, 121, 65, 48, 0, 113, 74, 92, 147, 7, 100, 20, 31, 4], [], [], [68, 141, 37, 63, 13, 78, 62, 149, 138, 131, 140, 153, 11, 116, 136, 121, 85, 65, 48, 0, 113, 74, 57, 92, 1, 83, 147, 45, 7, 100, 20, 31, 90, 4], [68, 141, 37, 63, 13, 78, 62, 149, 138, 131, 140, 153, 11, 116, 136, 121, 85, 65, 48, 0, 113, 74, 57, 92, 1, 83, 147, 45, 7, 100, 20, 31, 90, 4], [68, 141, 37, 63, 13, 78, 62, 149, 138, 131, 140, 153, 11, 116, 136, 121, 85, 65, 48, 0, 113, 74, 57, 92, 1, 83, 147, 45, 7, 100, 20, 31, 90, 4], [], [], [141, 37, 13, 78, 62, 149, 138, 131, 140, 153, 11, 116, 121, 85, 65, 48, 113, 74, 57, 92, 1, 83, 147, 45, 7, 100, 20, 31, 90, 4], [141, 37, 13, 78, 62, 149, 138, 131, 140, 153, 11, 116, 121, 85, 65, 48, 113, 74, 57, 92, 1, 83, 147, 45, 7, 100, 20, 31, 90, 4], [141, 37, 13, 78, 62, 149, 138, 131, 140, 153, 11, 116, 121, 85, 65, 48, 113, 74, 57, 92, 1, 83, 147, 45, 7, 100, 20, 31, 90, 4], [141, 37, 13, 78, 62, 149, 138, 131, 140, 153, 11, 116, 121, 85, 65, 48, 113, 74, 57, 92, 1, 83, 147, 45, 7, 100, 20, 31, 90, 4], [], [62, 121], [], [], [], [141, 37, 78, 149, 131, 140, 153, 11, 116, 85, 65, 48, 113, 74, 57, 92, 1, 83, 147, 45, 100, 20, 90, 4], [141, 37, 78, 149, 131, 140, 153, 11, 116, 85, 65, 48, 113, 74, 57, 92, 1, 83, 147, 45, 100, 20, 90, 4], [141, 37, 78, 149, 131, 140, 153, 11, 116, 85, 65, 48, 113, 74, 57, 92, 1, 83, 147, 45, 100, 20, 90, 4], [], [], [141, 37, 78, 149, 140, 153, 11, 116, 85, 65, 48, 74, 57, 92, 1, 83, 45, 100, 20, 90], [141, 37, 78, 149, 140, 153, 11, 116, 85, 65, 48, 74, 57, 92, 1, 83, 45, 100, 20, 90], [141, 37, 78, 149, 140, 153, 11, 116, 85, 65, 48, 74, 57, 92, 1, 83, 45, 100, 20, 90], [141, 37, 78, 149, 140, 153, 11, 116, 85, 65, 48, 74, 57, 92, 1, 83, 45, 100, 20, 90], [141, 37, 78, 149, 140, 153, 11, 116, 85, 65, 48, 74, 57, 92, 1, 83, 45, 100, 20, 90], [141, 37, 78, 149, 140, 153, 11, 116, 85, 65, 48, 74, 57, 92, 1, 83, 45, 100, 20, 90], [141, 37, 78, 149, 140, 153, 11, 116, 85, 65, 48, 74, 57, 92, 1, 83, 45, 100, 20, 90], [141, 37, 78, 149, 140, 153, 11, 116, 85, 65, 48, 74, 57, 92, 1, 83, 45, 100, 20, 90], [141, 37, 78, 149, 140, 153, 11, 116, 85, 65, 48, 74, 57, 92, 1, 83, 45, 100, 20, 90], [141, 37, 78, 149, 140, 153, 11, 116, 85, 65, 48, 74, 57, 92, 1, 83, 45, 100, 20, 90], [], [], [], [141, 149, 140, 153, 11, 116, 85, 65, 74, 57, 92, 1, 83, 45, 20, 90], [141, 149, 140, 153, 11, 116, 85, 65, 74, 57, 92, 1, 83, 45, 20, 90], [141, 149, 140, 153, 11, 116, 85, 65, 74, 57, 92, 1, 83, 45, 20, 90], [141, 149, 140, 153, 11, 116, 85, 65, 74, 57, 92, 1, 83, 45, 20, 90], [85], [], [141, 149, 140, 153, 11, 116, 85, 65, 74, 57, 92, 1, 83, 45, 20, 90], [141, 149, 140, 153, 11, 116, 85, 65, 74, 57, 92, 1, 83, 45, 20, 90], [141, 149, 140, 153, 11, 116, 85, 65, 74, 57, 92, 1, 83, 45, 20, 90], [141, 149, 140, 153, 11, 116, 85, 65, 74, 57, 92, 1, 83, 45, 20, 90], [141, 149, 140, 153, 11, 116, 85, 65, 74, 57, 92, 1, 83, 45, 20, 90], [141, 149, 140, 153, 11, 116, 85, 65, 74, 57, 92, 1, 83, 45, 20, 90], [], [153, 11, 116, 65, 74, 20], [], [], [], [], [], []]

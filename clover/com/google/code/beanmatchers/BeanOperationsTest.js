var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":116,"id":573,"methods":[{"el":24,"sc":5,"sl":17},{"el":33,"sc":5,"sl":26},{"el":42,"sc":5,"sl":35},{"el":54,"sc":5,"sl":44},{"el":69,"sc":5,"sl":56},{"el":81,"sc":5,"sl":71},{"el":95,"sc":5,"sl":83},{"el":106,"sc":5,"sl":97},{"el":115,"sc":5,"sl":108}],"name":"BeanOperationsTest","sl":15}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_106":{"methods":[{"sl":97},{"sl":108}],"name":"shouldThrowExceptionIfSetterIsMissing","pass":true,"statements":[{"sl":100},{"sl":101},{"sl":102},{"sl":105},{"sl":109},{"sl":110},{"sl":111}]},"test_126":{"methods":[{"sl":35}],"name":"canObtainNoArgsConstructor","pass":true,"statements":[{"sl":38},{"sl":41}]},"test_39":{"methods":[{"sl":26}],"name":"canInstantiateClassUsingPrivateNoArgsConstructor","pass":true,"statements":[{"sl":29},{"sl":32}]},"test_44":{"methods":[{"sl":56},{"sl":108}],"name":"canUseGetterToObtainPropertyValue","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":65},{"sl":68},{"sl":109},{"sl":110},{"sl":111}]},"test_57":{"methods":[{"sl":17}],"name":"canInstantiateClassUsingNoArgsConstructor","pass":true,"statements":[{"sl":20},{"sl":23}]},"test_6":{"methods":[{"sl":71},{"sl":108}],"name":"shouldThrowExceptionIfGetterIsMissing","pass":true,"statements":[{"sl":74},{"sl":75},{"sl":76},{"sl":77},{"sl":80},{"sl":109},{"sl":110},{"sl":111}]},"test_68":{"methods":[{"sl":83},{"sl":108}],"name":"canUseSetterToSetPropertyValue","pass":true,"statements":[{"sl":86},{"sl":87},{"sl":88},{"sl":91},{"sl":94},{"sl":109},{"sl":110},{"sl":111}]},"test_93":{"methods":[{"sl":44}],"name":"canObtainPropertyDescriptorOfDefinedProperty","pass":true,"statements":[{"sl":47},{"sl":50},{"sl":53}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [57], [], [], [57], [], [], [57], [], [], [39], [], [], [39], [], [], [39], [], [], [126], [], [], [126], [], [], [126], [], [], [93], [], [], [93], [], [], [93], [], [], [93], [], [], [44], [], [], [44], [44], [44], [44], [], [], [44], [], [], [44], [], [], [6], [], [], [6], [6], [6], [6], [], [], [6], [], [], [68], [], [], [68], [68], [68], [], [], [68], [], [], [68], [], [], [106], [], [], [106], [106], [106], [], [], [106], [], [], [68, 106, 44, 6], [68, 106, 44, 6], [68, 106, 44, 6], [68, 106, 44, 6], [], [], [], [], []]

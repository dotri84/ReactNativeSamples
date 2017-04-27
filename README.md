# React Native Samples
All samples already tested and run on both iOS + Android. If you have any issues when learning React Native, please contact me at dotri84@yahoo.com. I will share my experiences to deal with errors.

![react](https://cloud.githubusercontent.com/assets/3272792/25311386/a15a2ebe-2829-11e7-9cb0-4fd5aa3e50fa.png)

Issues you maybe encounter:

Rename folder or move to subfolders
A) error: PCH was compiled with module cache path '/Users/gantman/Documents/Projects/rn/MyAwesomeProject/ios/build/ModuleCache/3UB7MQ6FP2IXG', but the path is currently '/Users/gantman/Documents/Projects/rn/PlanA/MyAwesomeProject/ios/build/ModuleCache/3UB7MQ6FP2IXG'

SOLUTION:
1. rm -rf ios/build/ModuleCache/*
2. RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"XXXXXXXXXXX"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];

Remember to rename moduleName

B) Bundle Command for Android
react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/


Learn Once Write Anywhere

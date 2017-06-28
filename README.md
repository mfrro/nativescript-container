## Setup

Run with webpack:
```bash
npm install
npm run start-android-bundle
npm run start-ios-bundle
```

Run without webpack:
```bash
tns run android
tns run ios
```

Differences:
Relative paths in a routes ModuleLoader work only with webpack. Without webpack, absolute paths have to be used. Absolute paths however don't work with webpack. 
example relative path: "../news-detail/news-detail.module#NewsDetailModule"
example absolute path: "/components/news-detail/news-detail.module#NewsDetailModule"
Possible solutions to support both ways: 
https://github.com/shlomiassaf/ng-router-loader
https://github.com/angular/angular-cli/issues/2302#issuecomment-249360187, http://stackoverflow.com/questions/36103641/dynamic-system-import-with-webpack
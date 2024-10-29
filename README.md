# Mastering Angular Test-Driven Development

<a href="https://www.packtpub.com/en-us/product/mastering-angular-test-driven-development-9781805127932"><img src="https://content.packt.com/B21146/cover_image_small.jpg" alt="" height="256px" align="right"></a>

This is the code repository for [Mastering Angular Test-Driven Development](https://www.packtpub.com/en-us/product/mastering-angular-test-driven-development-9781805127932), published by Packt.

**Build high-quality Angular apps with step-by-step instructions and practical examples**

## What is this book about?
Do you want to learn how to build robust, reliable, and impressive Angular applications? If yes, then Angular test-driven development is for you!
	
This book covers the following exciting features:
* Explore the fundamentals of TDD in Angular
* Set up your development environment with Jasmine and Karma for effective unit testing
* Discover advanced techniques for mocking and stubbing dependencies to isolate and test code units
* Test Angular pipes, forms, and reactive programming for data validation and asynchronous operations
* Understand end-to-end testing using Protractor, Cypress, and Playwright to validate application behavior
* Get up to speed with best practices for automating tests and achieving faster feedback loops

If you feel this book is for you, get your [copy](https://www.amazon.com/dp/1805126083) today!

<a href="https://www.packtpub.com/?utm_source=github&utm_medium=banner&utm_campaign=GitHubBanner"><img src="https://raw.githubusercontent.com/PacktPublishing/GitHub/master/GitHub.png" 
alt="https://www.packtpub.com/" border="5" /></a>


## Instructions and Navigations
All of the code is organized into folders. For example, Chapter 2.

The code will look like the following:
```
import { PercentPipe } from './percent.pipe';
describe('PercentPipe', () => {
  it('create an instance', () => {
    const pipe = new PercentPipe();
    expect(pipe).toBeTruthy();
  });
});
```

**Following is what you need for this book:**

This book is for both experienced Angular developers and junior developers. Tech leads and architects who are responsible for code quality and scalability will also benefit from this book, as well as software development students looking to learn TDD concepts. Whether you're an experienced developer, a junior programmer, or a student, this book will equip you with the necessary knowledge to implement TDD in Angular projects.

With the following software and hardware list you can run all code files present in the book (Chapter 1-11).

## Software and Hardware List

| Chapter  | Software required                                       | OS required                      |
| -------- | --------------------------------------------------------| ---------------------------------|
| 1-11     | Angular 17 or later LTS                                 | Windows, macOS, or Linux         |
| 1-11     | TypeScript 5.1                                          | Windows, macOS, or Linux         |
| 1-11     | Node.js 18 or later LTS                                 | Windows, macOS, or Linux         |
  
## Related products <Other books you may enjoy>
* Angular Design Patterns and Best Practices [[Packt]](https://www.packtpub.com/en-us/product/angular-design-patterns-and-best-practices-9781837631100) [[Amazon]](https://www.amazon.com/dp/1837631972)

* Reactive Patterns with RxJS and Angular Signals - Second Edition [[Packt]](https://www.packtpub.com/en-us/product/reactive-patterns-with-rxjs-and-angular-signals-9781835083185) [[Amazon]](https://www.amazon.com/dp/1835087701)

## Get to Know the Author
**Ezéchiel Amen AGBLA** is passionate about web and mobile development, with expertise in Angular
and Ionic. A certifi ed Ionic and Angular expert developer, he shares his knowledge through courses,
articles, webinars, and training. He uses his free time to help beginners and spread knowledge by writing articles, including via Openclassrooms, the leading online university in the French-speaking world. He also helps fellow developers on a part-time basis with code reviews, technical choices, and bug fixes. His dedication to continuous learning and experience sharing contributes to his growth as a developer
and mentor.

## Key information
### Chapter 1
Related to Chapter 1, In Chapter 1, you'll notice that I mentioned two files:  `karma.conf.js` and `test.ts`

In new versions of Angular, the two files don't exist and you have to create them manually.

In fact, Karma configurations are already an integral part of the core of an Angular project.

In the root of your Angular project, you can create your `karma.conf.js` with this content :

    // Karma configuration file, see link for more information
    // https://karma-runner.github.io/1.0/config/configuration-file.html
    
    module.exports = function (config) {
      config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
          require('karma-jasmine'),
          require('karma-chrome-launcher'),
          require('karma-jasmine-html-reporter'),
          require('karma-coverage'),
          require('@angular-devkit/build-angular/plugins/karma')
        ],
        client: {
          jasmine: {
            // you can add configuration options for Jasmine here
            // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
            // for example, you can disable the random execution with `random: false`
            // or set a specific seed with `seed: 4321`
          },
          clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        jasmineHtmlReporter: {
          suppressAll: true // removes the duplicated traces
        },
        coverageReporter: {
          dir: require('path').join(__dirname, './coverage/ngv'),
          subdir: '.',
          reporters: [
            { type: 'html' },
            { type: 'text-summary' }
          ]
        },
        reporters: ['progress', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        restartOnFileChange: true
      });
    };`
    
And then, in your `src` folder, you can create `test.ts` file with this content :

    // This file is required by karma.conf.js and loads recursively all the .spec and framework files 
    import 'zone.js/testing';
    import { getTestBed } from '@angular/core/testing';
    import {
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting
    } from '@angular/platform-browser-dynamic/testing';
    
    declare const require: {
      context(path: string, deep?: boolean, filter?: RegExp): {
        keys(): string[];
        <T>(id: string): T;
      };
    };
    
    // First, initialize the Angular testing environment.
    getTestBed().initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting(), {
        teardown: { destroyAfterEach: false }
    }
    );
    // Then we find all the tests.
    const context = require.context('./', true, /\.spec\.ts$/);
    // And load the modules.
    context.keys().map(context);

Finally, you'll update your `angular.json` file about the test section like that to configure the usage of Karma's custom configuration file:

    "test": {
              ...
              "options": {
                "main": "src/test.ts",
                ...
                **"karmaConfig": "karma.conf.js"**,
                ...
              },
      	...
      }

<!-- # NgxRabe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page. -->

# NgxRabeStar

NgxRabeStar is an Angular library that provides a customizable star rating component for your Angular applications. It allows users to rate items using a visual star-based interface, making it easy to implement and integrate rating functionality into your projects.

Key features:
  - Easy to use star rating component
  - Accessibility-friendly
  - Customizable styles to match your application's theme
  - Cancelable rate


## Installation

To install NgxRabeStar, run the following command in your Angular project:

"npm install ngx-rabe-star"

### Usage

Import the RabeStars component in your import.

Then, you can use the star rating component in your templates:


<ngx-rabe-star formControlName="rating" (ratingChange)="onRatingChange($event)"></ngx-rabe-star>

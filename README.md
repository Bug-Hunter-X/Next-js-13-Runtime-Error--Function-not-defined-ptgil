# Next.js 13 Runtime Error: Function not defined

This repository demonstrates a common runtime error in Next.js 13 applications where a function is used before it's defined within the scope of a component.  This can lead to unexpected behavior and errors during runtime.

## Bug Description
The `About` component attempts to use the `calculate` function before the function is defined, resulting in a runtime error because the function is not within its scope.  The solution requires refactoring the code to ensure that the function is defined within the scope of the component or before it is called.

## How to reproduce
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the Next.js development server.
4. Navigate to `/about`.  You will encounter the runtime error.

## Solution
The solution involves either moving the `calculate` function definition to be before the `About` component, or defining the function within the `About` component.
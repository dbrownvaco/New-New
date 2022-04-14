/**
 * Welcome to Cookie Monster, the flexible quick app builder.
 * 
 * This project uses the Binary Cookie Monster Library:
 * 1YDLaHVAVbAjP3Jdkoi8xVOiqT_MKJQhe6jSbt8UL2N1mmWNoF29EvUqf
 * 
 * You'll need to define the format of the data, and you'll define
 * functions that provide input Tuples and/or receive updates to the
 * data. You can also define CSS to customize the look of the app.
 * Everything else is handled by the app builder.
 * 
 * This project contains boilerplate code, which you can hopefully
 * easily adjust to your needs.
 * 
 * TERMINOLOGY
 * A few notes before we begin. The web app internally deals with
 * Tuples, Quints, and Changes.
 * A Tuple is a simple un-nested and mutable Javascript Object; a map of
 * field names to primitive values (and Date Objects in some cases). So,
 * this is a valid Tuple:
 * const tuple = {name: 'Matt Cone', age: 54};
 * A Quint is a simple Javascript Object containing several versions of
 * the same Tuple. This may be as simple as a 'previous' version, and a
 * 'next' version, but may also include 'current' version, and 'default
 * values' version.
 * A Change is an Array containing exactly two versions of a Tuple:
 * 'previous' and 'next' (or 'diff') (elements 0 and 1). This allows us to
 * update a data source by finding the row/entry matching the 'previous'
 * Tuple, and updating it to match the 'next' Tuple.
 * Typically when a user loads a Cookie Monster app, they will be creating
 * new Tuples, and/or proposing changes to existing Tuples. It will be up to
 * you to receive these Changes and to process them. The format matches the
 * 'changes' Array handled by `coe.updateTuplesInRange`.
 * 
 * On the whole, you should be able to treat the monster library as a black
 * box.
 * 
 * SETTING UP A NEW APP
 * Step 1:
 * Each app must be a separate Google Apps Script Project.
 * 
 * Step 2:
 * Define a form specification object.
 * This is a Array of simple Javascript objects (See QUESTION TYPES below).
 * 
 * Step 3:
 * Publish this project as a web app.
 * You should now see your form live in the app. Use the dev preview version to
 * iteratively improve/tweak your form specification as needed.
 * 
 * Step 4:
 * Handle return data and other serverside behavior.
 * Notice that the app doesn't show a Submit button, doesn't pre-load any Tuples
 * you can edit, and doesn't have a Process button in the form. You'll need to
 * define functions to enable these. All of these are defined in this project,
 * but are commented out. Which functions you need depends on your goals.
 * Defining a function will also automatically add the matching interface elements
 * to your app. For example, defining the 'submit' function will show the 'Submit'
 * button in your app.
 * See the description for each stub function in this project to learn more. Look
 * for stubs in `server/*.gs` files, and in `client/script.js`.
 * 
 * 
 * ELEMENT TYPES
 * Below are tested and reliable question types. If you use other question types,
 * you may see unexpected behaviour.
 * 
 * { // A single checkbox. Returns a boolean, always.
 *   type: 'checkbox',
 *   label: 'Question text',
 *   fieldName: 'something',
 *   defaultValue: true, // optional
 *   required: true, // optional
 *   persistent: true, // optional
 *   summaryField: true, // optional
 * }
 * 
 * { // Returns a date-string in the format YYYY-MM-DD
 *   type: 'date',
 *   label: 'Question text',
 *   fieldName: 'something',
 *   required: true, // optional
 *   persistent: true, // optional
 *   summaryField: true, // optional
 *   defaultValue: '2021-04-04', // optional. Use the special string 'TODAY' to set the default value to today's date.
 *   summaryField: true, // optional
 *   min: '2021-01-01', // optional
 *   max: '2022-01-01', // optional
 * }
 * 
 * { // Returns an email address string
 *   // Use type 'email', or one of the following more restrictive types:
 *   // * 'google-email',
 *   // * 'netflixcontractors-email',
 *   // * 'vaco-email',
 *   type: 'email',
 *   label: 'Question text',
 *   fieldName: 'something',
 *   required: true, // optional
 *   persistent: true, // optional
 *   summaryField: true, // optional
 *   defaultValue: 'example@example.com', // optional
 *   summaryField: true, // optional
 * }
 * 
 * { // A hidden field. Useful for maintaining a reference to state,
 *   // for example. Hidden field values will appear on return Tuples.
 *   type: 'hidden',
 *   fieldName: 'something',
 *   defaultValue: 'Two', // optional
 *   required: true, // optional
 *   persistent: true, // optional
 * }
 * 
 * { // Returns a multi-line text string.
 *   type: 'multi-line',
 *   label: 'Question text',
 *   fieldName: 'something',
 *   required: true, // optional
 *   persistent: true, // optional
 *   summaryField: true, // optional
 *   defaultValue: 'Example', // optional
 *   pattern: '^[A-Z]{5}$', // optional (this may have quirks)
 *   minLength: 0, // optional
 *   maxLength: 20, // optional
 * }
 * 
 * { // Returns a number
 *   type: 'number',
 *   label: 'Question text',
 *   fieldName: 'something',
 *   required: true, // optional
 *   persistent: true, // optional
 *   summaryField: true, // optional
 *   defaultValue: 5, // optional
 *   min: 0, // optional
 *   max: 20, // optional
 *   step: 'any' // optional (use 'any' to allow floating numbers)
 * }
 * 
 * { // Returns a number in the range.
 *   type: 'range',
 *   fieldName: 'example',
 *   min: 0,
 *   max: 5,
 *   step: 1, // optional
 *   defaultValue: 'Two', // optional
 *   required: true, // optional
 *   persistent: true, // optional
 *   summaryField: true, // optional
 * }
 * 
 * { // A set of radio buttons. Returns a number or a string
 *   // depending on the specified options.
 *   type: 'radio-buttons',
 *   label: 'Question text',
 *   fieldName: 'something',
 *   options: ['One', 'Two', 'Three', 'Four'],
 *   options: {uno: One', dos: 'Two', tres: 'Three'},
 *   defaultValue: 'Two', // optional
 *   required: true, // optional
 *   persistent: true, // optional
 *   summaryField: true, // optional
 * }
 * 
 * { // A drop-down select menu. Returns a number or a string
 *   // depending on the specified options.
 *   type: 'select',
 *   label: 'Question text',
 *   fieldName: 'something',
 *   options: ['One', 'Two', 'Three', 'Four'],
 *   options: {uno: One', dos: 'Two', tres: 'Three'},
 *   defaultValue: 'Two', // optional
 *   required: true, // optional
 *   persistent: true, // optional
 *   summaryField: true, // optional
 * }
 * 
 * { // Returns a text string. You can provide suggested options,
 *   // but users will be free to enter different values.
 *   type: 'text',
 *   label: 'Question text',
 *   fieldName: 'something',
 *   options: ['One', 'Two', 'Three', 'Four'], // optional
 *   required: true, // optional
 *   persistent: true, // optional
 *   summaryField: true, // optional
 *   defaultValue: 'Example', // optional
 *   pattern: '^[A-Z]{5}$', // optional (this may have quirks)
 *   minLength: 0, // optional
 *   maxLength: 20, // optional
 * }
 * 
 * Note that the `summaryField` property is currently unsupported. This is a @todo.
 * This property is meant to mark Tuple properties that should be displayed in a
 * table view, which does not exist yet.
 * 
 * FORMULAS
 * A few element properties can be set dynamically, dependent on other
 * values in the current Tuple.
 * Specifically, you can define the following fields:
 * - formulaDisabled
 * - formulaHidden
 * - formulaMax
 * - formulaMaxLength
 * - formulaMin
 * - formulaMinLength
 * - formulaRequired
 * 
 * Let's imagine that the current Tuple value is:
 * const tuple = {name: 'Alex', age: 34};
 * 
 * Each of these properties takes a formula string, in which you can use
 * the following syntax:
 * `@name === {Alex}` // => true
 * `@name !== {Beth}` // => true
 * `@name in ({Beth}, {Alex})` // => true
 * `@name === {Beth} || @age < {45}` // => true
 * `@name === {Beth} && @age < {45}` // => false
 * `(@name === {Alex} && @age === 34) || (@name === {Beth} && @age == {23})` // => true
 * `!!@age` // => true
 * `!@age` // => false
 * `@age` // => 34
 * 
 * @todo: Support for ternary / if-statements.
 * 
 * MARKDOWN
 * Markdown is a 'simple and easy-to-use markup language you can use to
 * format virtually any document.' See https://www.markdownguide.org/.
 * 
 * By default, leading spaces will be stripped to the indentation level of the
 * first line. So this will render well: `
 *     # Example
 *     Text`
 * 
 * It is not possible to define buttons in markdown, however, our CSS
 * styling will display a link as a button if you use the following
 * markdown syntax:
 * # [Link Text](http://example.com)
 * (Specifically, an H1 element containing a link will render a 'button').
 * 
 * It is not possible to define colors in markdown, however, we support
 * the following unofficial syntax: <color: [color]>text</color>
 * I.e. <color: grey>This is grey text</color>
 * (Specifically, this will render as <span style="color: grey">This is grey text</span>)
 */
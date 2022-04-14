/**
 * By default, the app does not load any data. Users will be able to create
 * new Tuples, but cannot edit existing Tuples.
 * If 'getTuples' is defined, it will be called on app-load, and after the
 * user submits the app to refresh the data. It should return an Array of
 * Tuples matching the form specification. Users will then be able to navigate
 * through the loaded Tuples within the app, and propose changes.
 * 
 * Note: Only Tuples with primitive values can be passed to the web app.
 * This excludes Date Objects. If this function returns unsupported data,
 * the app will receive 'null'.
 * If you're using getTuplesFromRange, you can use the 'webAppSafe' flag to
 * ensure that all dates are strings. (The app will 're-hydrate' these dates
 * for you to correct for timezone issues).
 * You can always wrap your return data in JSON.parse(JSON.stringify(data)).
 */
// function getTuples() {
//   return coe.getTuplesFromRange(
//     range,
//     columnsSpecification,
//     {webAppSafe: true},
//   );
// }
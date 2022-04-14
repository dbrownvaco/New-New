/**
 * By default, the app does not render a Submit button. If 'submit' is defined,
 * it will be called when the user hits the 'Submit' button, and it will
 * receive the complete Array of Changes from the app.
 * Currently, the return value is ignored. Instead, after Submit returns,
 * the app soft reloads, running 'getTuples' (if it is defined) to load fresh
 * Tuples.
 * Additionally, since the server often takes quite long to return, the webapp
 * will assume everything is going to be fine unless this function throws an
 * error in the first 5 seconds.
 * 
 * @param {Tuple[][]} changes
 */
// function submit(changes) {
//   return coe.updateTuplesInRange(range, columnsSpecification, changes, {});
// }
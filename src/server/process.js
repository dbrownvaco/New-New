/**
 * By default, the app does not render a 'Process' button in the form. If
 * 'process' is defined, it will be called when the user hits the 'Process'
 * button, and will receive the a single Tuple, representing the 'next'
 * value of the currently selected Tuple/Quint.
 * 
 * The web app can function as a calculator, for example, by calculating
 * something based on this Tuple, and returning the result.
 * Note that a 'process' function can be defined here to run on the server (when
 * access to back-end data is required), but can also be defined in the local 
 * client_script.js.html file (which will be passed into webAppBuilder as
 * customJs).
 * If 'process' is defined in customJs, it will take precedence over the server-
 * side 'process' function.
 * 
 * Should return an Object containing any of the following keys:
 * - markdown - This markdown encoded text will be rendered on the page.
 *     See https://www.markdownguide.org/ and the MARKDOWN section in the README.
 * - textToCopy - A 'COPY' button will be rendered that allows users
 *     to copy this text, raw.
 * - markdownToCopy - This text will be rendered as markdown, and a
 *     'COPY' button will be rendered that allows users to copy this
 *     text. 
 * 
 * @param {Object} context
 * @param {Quint} context.quint
 * @param {number} context.index
 * @param {Quint[]} context.quints
 * @param {boolean} readyToSubmit
 * @return {Object}
 */
// function process(context) {
//   if (!context.quint.next) {
//     return {markdown: `You haven't edited the entry yet.`};
//   }
//   if (!context.readyToSubmit) {
//     return {markdown: `Please complete the form first.`};
//   }
//   return {markdown: `# Feedback, defined in Markdown`};
// }
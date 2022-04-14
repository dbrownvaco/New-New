/**
 * Form Specification defines the format of the questions in the form.
 * It should be an Array of elements.
 * Change this to suit your needs. See the QUESTION TYPES section in
 * the README.
 * 3/30 #1
 */
const formSpecification = [
  {
    type: 'markdown',
    markdown: '# Example markdown section',
  },
  {
    fieldName: 'fieldName',
    type: 'text',
    label: 'This is the label for this question.',
    maxLength: 20, // This field is optional
  },
  {
    type: 'checkbox',
    fieldName: 'check',
    label: 'Check this box for a surprise',
  },
  {
    type: 'select',
    fieldName: 'radio',
    options: {uno: 'One', dos: 'Two'},
    label: 'Example',
    formulaHidden: '!!@check',
  },
  {
    type: 'section',
    label: 'A Section',
    formulaHidden: `!@check`,
    elements: [
      {
        fieldName: 'example',
        type: 'range',
        label: 'Select from a range',
        min: 0, 
        max: 10,
        step: 2,
      }
    ],
  },
];

/**
 * The webAppBuilder function returns an object containing a doGet function.
 * Boilerplate.
 * 
 * You can set the following options:
 * {boolean=} options.allowMultipleNewEntries - Should the user be able to create
 * several new Tuples? By default, the app only allows creation of a single new Tuple.
 * Setting this to true enables the 'Duplicate' button in the form.
 * {string=} options.appName - The 'title' of the web app.
 * {string=} options.customCss - Either raw css, or a css wrapped in <style>. As you
 * can see, here we are passing the local custom_style.css.html file as a string.
 * {Object} formSpecification - The only required field.
 * {boolean=} processOnChange - Should the process function be automatically run
 * whenever the form data changes? 
 */
const {doGet} = monster.webAppBuilder({
  allowMultipleNewEntries: false,
  appName: 'Nom',
  customCss: coe.getHtmlFromTemplate('client/style.css', {}),
  customJs: coe.getHtmlFromTemplate('client/script.js', {}),
  formSpecification,
  processOnChange: false,
  templateData: {},
});
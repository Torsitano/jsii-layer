const { cdk } = require('projen');
const project = new cdk.JsiiProject({
  author: 'Shawn Torsitano',
  authorAddress: 'shawn.torsitano@gmail.com',
  defaultReleaseBranch: 'main',
  name: 'jsii-layer',
  repositoryUrl: 'https://github.com/Torsitano/jsii-layer.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
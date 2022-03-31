const { cdk } = require('projen');
const project = new cdk.JsiiProject({
  author: 'Shawn Torsitano',
  authorAddress: 'shawn.torsitano@gmail.com',
  defaultReleaseBranch: 'main',
  name: 'jsii-layer',
  repositoryUrl: 'https://github.com/Torsitano/jsii-layer.git',
  eslint: false,
  prettier: true,
  prettierOptions: {
      settings: {
          useTabs: false,
          tabWidth: 4,
          printWidth: 120,
      },
  },
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: [
    jsii,
    jsii-pacmak
  ],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.setScript('format', 'prettier -w "src/**/*.ts"');
project.synth();
/* eslint-disable global-require */
const rules = {
  'no-resourceversion': require('./rules/no-resourceversion.js').default,

  // no-duplicate-env
  'no-duplicate-env': require('./rules/no-duplicate-env.js').default,

  // no-duplicate-param
  'no-duplicate-param': require('./rules/no-duplicate-param.js').default,

  // no-duplicate-resource
  'no-duplicate-resource': require('./rules/no-duplicate-resource.js').default,

  // no-extra-param
  'no-extra-param': require('./rules/no-extra-param.js').default,

  // no-invalid-dag
  'no-pipeline-task-cycle': require('./rules/no-pipeline-task-cycle.js').default,

  // no-invalid-name
  'no-invalid-name': require('./rules/no-invalid-name.js').default,

  // no-invalid-param-type
  'no-binding-missing-params': require('./rules/no-binding-missing-params.js').default,
  'no-wrong-param-type': require('./rules/no-wrong-param-type.js').default,
  'no-pipeline-task-missing-params': require('./rules/no-pipeline-task-missing-params.js').default,

  // no-latest-image
  'no-latest-image': require('./rules/no-latest-image.js').default,

  // no-missing-param
  'no-missing-param': require('./rules/no-missing-param.js').default,

  // no-missing-resource
  'no-missing-resource': require('./rules/no-missing-resource.js').default,
  'no-pipeline-missing-task': require('./rules/no-pipeline-missing-task.js').default, // TODO: split -> no-invalid-dag

  // no-missing-workspace
  'no-missing-workspace': require('./rules/no-missing-workspace.js').default,

  // no-undefined-param
  'no-undefined-param': require('./rules/no-undefined-param.js').default,

  // no-undefined-result
  'no-undefined-result': require('./rules/no-undefined-result.js').default,

  // no-undefined-volume
  'no-undefined-volume': require('./rules/no-undefined-volume.js').default,

  // no-unused-param
  'no-unused-param': require('./rules/no-unused-param.js').default,

  // prefer-beta
  'prefer-beta': require('./rules/prefer-beta.js').default,

  // prefer-kebab-case
  'prefer-kebab-case': require('./rules/prefer-kebab-case.js').default,

  // prefer-when-expression
  'prefer-when-expression': require('./rules/prefer-when-expression.js').default,
};

export default rules;

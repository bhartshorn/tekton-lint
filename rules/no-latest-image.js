module.exports = (docs, tekton, report) => {
  for (const task of Object.values(tekton.tasks)) {
    if (task.spec.stepTemplate && task.spec.stepTemplate.image) {
      const steptemplate = task.spec.stepTemplate;
      if (/:latest$/.test(steptemplate.image) || /^[^:$]*$/.test(steptemplate.image)) {
        report(`Invalid image: '${steptemplate.image}' for stepTemplate in Task '${task.metadata.name}'. Specify the image tag instead of using ':latest'`, steptemplate, 'image');
      }
    }
    for (const step of Object.values(task.spec.steps)) {
      if (step.image && (/:latest$/.test(step.image) || /^[^:$]*$/.test(step.image))) {
        report(`Invalid image: '${step.image}' for step '${step.name}' in Task '${task.metadata.name}'. Specify the image tag instead of using ':latest'`, step, 'image');
      }
    }
  }
};

module.exports = function context (asset) {
  return function form (name, opts) {
    if (typeof name !== 'string') {
      opts = name
      name = undefined
    }

    if (!opts) {
      opts = {}
    }

    if (!opts.name) {
      opts.name = name
    }

    return asset('page_custom_form', opts, [
      asset('form_email', {
        link: 'type_2',
        name: 'Form Contents',
        dependant: '1',
        exclusive: '1'
      }, [
        asset('folder', {
          link: { 'type_2': 'submissions_folder' },
          name: 'Submissions',
          dependant: '1',
          exclusive: '1'
        })
      ])
    ])
  }
}

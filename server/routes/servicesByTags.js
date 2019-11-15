const getServicesByTags = require( '../request/getServicesByTags' );

const action = async( context, params ) => {
  const {
    lang,
    project
  } = params;

  const tags = context.query.tags;
  const tours = await getServicesByTags( project, lang, tags );

  return tours;
};

module.exports = action;

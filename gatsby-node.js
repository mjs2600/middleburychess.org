exports.createSchemaCustomization = ({actions, schema}) => {
  const {createTypes} = actions

  // Type definitions can be provided in SDL
  const typeDefs = `
  type LocationsJson implements Node {
    directions: String!
    name: String!
  }
  type MeetingsJson implements Node {
    location: LocationsJson! @link(by: "slug")
    startTime: Date!
    endTime: Date!
  }
  `
  createTypes(typeDefs)
}


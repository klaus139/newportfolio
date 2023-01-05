import testimonials from "./testimonials";

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([testimonials])
})
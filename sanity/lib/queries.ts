import {defineQuery} from "groq";

export const STARTUPS_QUERY =
    defineQuery('*[_type == "startup" && defined(slug.current)] | order(_createdAt desc) {\n' +
        '    _id, \n' +
        '    title, \n' +
        '    slug, \n' +
        '    _createdAt, \n' +
        '    author -> {\n' +
        '      _id, name, image, bio\n' +
        '    },\n' +
        '    views, \n' +
        '    description, \n' +
        '    category, \n' +
        '    image\n' +
        '}')
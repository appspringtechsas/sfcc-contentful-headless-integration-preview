const categoryContentType = {
    name: "Category",
    displayField: "name",
    fields: [
        {
            id: "name",
            name: "Name",
            type: "Symbol",
            localized: false,
            required: false,
            validations: [],
            disabled: false,
            omitted: false
        },
        {
            id: "description",
            name: "Description",
            type: "Text",
            localized: false,
            required: false,
            validations: [],
            disabled: false,
            omitted: false
        }
    ]
}

module.exports = { categoryContentType }
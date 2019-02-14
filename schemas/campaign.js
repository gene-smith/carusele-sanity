export default {
    name : 'campaign',
    title : 'Campaign',
    type : 'document',
    fields : [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            required: true
        }, {
            name: 'link',
            title: 'Link',
            type: 'url'
        }, {
            name: 'contentType',
            title: 'Content Type',
            type: 'array',
            required: true,
            of: [
                {
                    type: 'reference',
                    to: {
                        type: 'contentType'
                    }
                }
            ]
        }, {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            required: true,
            options: {
                hotspot: true
            }
        }, {
            name: 'campaignID',
            title: 'Campaign ID',
            type: 'array',
            required: true,
            of: [
                {
                    type: 'reference',
                    to: {
                        type: 'campaignID'
                    }
                }
            ]
        }
    ],

    preview : {
        select: {
            title: 'title',
            media: 'mainImage',
            campaign: 'campaignID.title'
        }
    }
}

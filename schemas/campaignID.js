export default {
    name : 'campaignID',
    title : 'Campaign ID',
    type : 'document',
    fields : [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        }
    ],
    preview : {
        select: {
            title: 'name'
        }
    }
}

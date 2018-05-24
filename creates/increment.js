// increment a particular timer by id
const increment = (z, bundle) =>{
    const responsePromise = z.request({
        method: 'POST',
        url: process.env.BASE_URL + '/cmd/recordUsage',
        body: JSON.stringify({
            timerId: bundle.inputData.timerId,
            amount: 1,
            timestamp: 84756
        })
    });
    return responsePromise.then(response => z.JSON.parse(response.content));
};

module.exports = {
    key: 'increment',
    noun: 'Increment',

    display: {
        label: 'Increment Counter',
        description: 'Increment a Counter.'
    },

    operation: {
        inputFields: [
            {key: 'timerId', required: true}
        ],

        perform: increment,

        sample: {
            id: 1,
            name: 'Test'
        },

        outputFields: [
            {key: 'id', label: 'ID'},
            {key: 'name', label: 'Name'}
        ]
    }
};

// create a particular stoptimer by name
const stopTimer = (z, bundle) => {
    const responsePromise = z.request({
        method: 'POST',
        url: process.env.BASE_URL + '/cmd/stopTimer',
        body: JSON.stringify({
            timerId: bundle.inputData.timerId
        })
    });
    return responsePromise.then(response => z.JSON.parse(response.content));
};

module.exports = {
    key: 'stop_timer',
    noun: 'Stop Timer',

    display: {
        label: 'Stop Timer',
        description: 'Stops a timer.'
    },

    operation: {
        inputFields: [
            { key: 'timerId', required: true }
        ],

        perform: stopTimer,

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

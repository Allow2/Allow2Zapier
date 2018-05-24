// start a particular timer by id
const startTimer = (z, bundle) => {
    const responsePromise = z.request({
        method: 'POST',
        url: process.env.BASE_URL + '/cmd/startTimer',
        body: JSON.stringify({
            timerId: bundle.inputData.timerId
        })
    });
    return responsePromise.then(response => z.JSON.parse(response.content));
};

module.exports = {
    key: 'start_timer',
    noun: 'Start Timer',

    display: {
        label: 'Start Timer',
        description: 'Starts a timer.'
    },

    operation: {
        inputFields: [
            { key: 'timerId', required: true }
        ],

        perform: startTimer,

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

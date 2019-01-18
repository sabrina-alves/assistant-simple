module.exports = { 
    identifyIntent: identifyIntent = (intent) => {
        console.log(intent)
    },
    actionIntent: actionIntent = (intent, context) => {
        switch(intent) {
            case 'consultRequest':
            consultRequest(context);
            break;
            case 'cancelRequest':
            cancelRequest(context);
            break;
        }
    },
    consultRequest: consultRequest = () => {
        console.log('Calling consult request')
    },
    cancelRequest: cancelRequest = () => {
        console.log('Calling cancel request')
    }
}
module.exports = { 
    identifyIntent: identifyIntent = (intent) => {
        console.log(intent)
    },
    consultRequest: consultRequest = () => {
        console.log('Calling consult request')
    },
    cancelRequest: cancelRequest = () => {
        console.log('Calling cancel request')
    }
}
const sendNotice=require('./notice')
const sendAppointment=require('./appointment-adm')
const sendClassAttendance=require('./classAttendance-adm')
const sendLeaveApplications=require('./leaveApplications-adm')
const sendFeeStatus=require('./feeStatus-adm')
const {WebhookClient}=require('dialogflow-fulfillment')


const adminFulfill = (req,res)=>{
    const agent= new WebhookClient({request: req, response: res})
    
    let intentMap= new Map();
    intentMap.set('Notice',sendNotice)
    intentMap.set('appointment',sendAppointment)
    intentMap.set('School Attendance',sendClassAttendance)
    intentMap.set('leave applications',sendLeaveApplications)
    intentMap.set('Fee Status',sendFeeStatus)



    agent.handleRequest(intentMap)
}
module.exports=adminFulfill
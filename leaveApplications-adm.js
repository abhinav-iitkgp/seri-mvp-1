const fetch = require("node-fetch");

const { Card, Suggestion } = require('dialogflow-fulfillment');
async function  sendLeaveApplications (agent){
    try{
        let full="Priyadarshi, following staff members have applied for leaves.\n\n\n"
        const {appointments}=await fetch('https://serri.co.in/api/Admin/Admin_leave?phone=9010101010',{
            method:'get',
        }).then(response =>response.json())
        let c=1
        let status
        appointments.forEach((app)=>{
            status=(app.status==0) ? 'Pending':'Approved'
            full=full+ `${(c++)} ${app.teacher_name} from ${app.date_from} to ${app.date_to} for ${app.reasons} ( ${status} ) \n\n`
        })
        full=full+"\nFor details, feel free to visit your SerriClass dashboard,\nhttps://serri.co.in/teacher/exams\n\nI hope it helps:\n\nNothing more, nothing less. Just Serri.\n\nShall I help you with anything else? Priyadarshi\n"
        console.log(full)
        
        
        agent.add(full)
    }
    catch(e){console.log(e)}
}
module.exports =sendLeaveApplications
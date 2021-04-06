const fetch = require("node-fetch");

const { Card, Suggestion } = require('dialogflow-fulfillment');
async function  sendFeeStatus (agent){
    try{
        // let full="@name, following staff members have applied for leaves.\n\n\n"
        // const leaves=await fetch('https://serri.co.in/api/Admin/Admin_leave',{
        //     method:'get',
        //     headers:{
                
        //         'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdGF0dXMiOjIwMCwibWVzc2FnZSI6IkxvZ2dlZGluIFN1Y2Nlc3NmdWxseSIsInVzZXJfaWQiOjIsInVzZXJfbmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkBzZXJyaS5jb20iLCJwcm9maWxlX2ltYWdlIjoiMTYxNTUzNzc0OF9hZG1pbi1hZG1pbmlzdHJhdGlvbi1iaW5kZXItb2ZmaWNlLWJ1c2luZXNzLWNvbmNlcHQtYWRtaW4tYWRtaW5pc3RyYXRpb24tYmluZGVyLW9mZmljZS1idXNpbmVzcy1jb25jZXB0LTE5OTk1NTE2MC5qcGciLCJ1c2VyX3R5cGUiOiJhZG1pbiIsInNjaG9vbF9pZCI6MSwiYWRtaW5fbG9naW4iOnRydWUsInZhbGlkaXR5Ijp0cnVlLCJzY2hvb2xfbmFtZSI6IlNlcnJpIEhpZ2ggU2Nob29sIiwiaWF0IjoxNjE2NzY2MzE2LCJleHAiOjE2MTY3ODQzMTZ9.ofYnYjmVzTVO_B2P5Ci7wTueUy5QmDPT71Wit9suCA0'
                
        //     }

        // }).then(response =>response.json())
        // let c=1
        // let status
        // leaves.appointments.forEach((app)=>{
        //     status=(app.status==0) ? 'Pending':'Approved'
        //     full=full+ `${(c++)} ${app.teacher_name} from ${app.date_from} to ${app.date_to} for ${app.reasons} ( ${status} ) \n\n`
        // })
        // fullA=full+"\nFor details, feel free to visit your SerriClass dashboard,\nhttps://serri.co.in/teacher/exams\n\nI hope it helps:\n\nNothing more, nothing less. Just Serri.\n\nShall I help you with anything else? @name"

        

        full=`@name, Here's the ${agent.parameters.fee.original} collection status.\n\n$ 1020 Fee Collected for this term.\n$ 203 Fee due for this term\n\nDon't worry @name, Serri sends automated reminders to concerned parents to ensure timely fee cllection.\nFor details, feel free to visit your SerriClass dashboard.\nhttps://serri.co.in/teacher/exams\nI hope it helps:)\nNothing more, nothing less. Just Serri.\n\nShall I help you with anything else? @name\n`
        console.log(full)
        
        agent.add(full)
    }
    catch(e){console.log(e)}
}
module.exports =sendFeeStatus
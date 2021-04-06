const fetch = require("node-fetch");
async function  sendAppointment (agent){
    try{
        let full="Rupak, here are your appoitnment details:\n\n\n"
        const {appointment1}=await fetch(`https://serri.co.in/api/Admin/Admin_appointments?phone=${agent.parameters.mobNum}`,{
            method:'get',
            

        }).then(response =>response.json())
        let c=1
        let status
        if(!appointments1){
            full="Rupak, We could not find you as a registered user\n"
        }
        else{
            appointments1.forEach((app)=>{
                status=(app.status==0) ? 'Pending':'Approved'
                full=full+ `${(c++)}. With ${app.name} on ${app.date} at ${app.time} for ${app.reasons} ( ${status} ) \n\n`
            })
        }
        full=full+"\nFor details, feel free to visit your SerriClass dashboard,\nhttps://serri.co.in/admin/appointments\n\nI hope it helps:\n\nNothing more, nothing less. Just Serri.\n\nShall I help you with anything else? Rupak"
        console.log(full)
        agent.add(full)
    }
    catch(e){console.log(e)}
}


    

module.exports =sendAppointment
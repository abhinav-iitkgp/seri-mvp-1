const fetch = require("node-fetch");
async function  sendTimetable (agent){
    try{
        let date=agent.parameters.date.split('T')[0]
        let full=`Saad, Here's your schedule for ${date};\n\n\n`
        const {routines}=await fetch(`https://serri.co.in/api/Admin/routineByDayStudent?date=${date}&phone=9010101010`,{
            method:'get',
        }).then(response =>response.json())
        let c=1
        if(routines==null){
            
            agent.add(`Saad, There is a holiday on ${date};\n\n\n\nFor details, feel free to visit your SerriClass dashboard,\nhttps://serri.co.in/teacher/exams\n\nI hope it helps:\n\nNothing more, nothing less. Just Serri.\n\nShall I help you with anything else? @name\n`)
            return
        }
        routines.forEach((rout)=>{
            full=full+`${(c++)}. ${rout.starting_hour}-${rout.ending_hour} ${rout.subject_name} by ${rout.teacher_name}\n\n`
        })
        full=full+"\nFor details, feel free to visit your SerriClass dashboard,\nhttps://serri.co.in/student/timetable\n\nI hope it helps:\n\nNothing more, nothing less. Just Serri.\n\nShall I help you with anything else? Saad\n"
        console.log(full)
        agent.add(full)
        
    }
    catch(e){console.log(e)}
}
module.exports =sendTimetable
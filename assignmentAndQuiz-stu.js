const fetch = require("node-fetch");
async function  sendAssignmentAndQuiz (agent){
    try{
        
        const AssAndQuiz=await fetch(`https://serri.co.in/api/Admin/PendingAssignmentsQuizForStudent?phone=9010101010`,{
            method:'get',
            

        }).then(response =>response.json())
        let full=`Saad, you've ${AssAndQuiz.pendingAssignmentCount} assignments pending & ${AssAndQuiz.pendingQuizCount} tests coming up\n\n`

        if(AssAndQuiz.pendingAssignmentCount){
            full=full+"Assignments\n\n"
            let c=1
            AssAndQuiz.pendingAssignment.forEach((ass)=>{
                full=full+`${(c++)}. ${ass.subject}:${ass.title} for ${ass.marks} marks to be submitted by ${ass.date}\n\n`
            })
        }
        if(AssAndQuiz.pendingQuizCount){
            full=full+"Tests\n\n"
            c=1
            AssAndQuiz.pendingQuiz.forEach((q)=>{
                full=full+`${(c++)}. ${q.subject}:${q.title} for ${q.marks} marks to be held on ${q.date}\n\n`
            })
        }   
        full=full+"\nFor details, feel free to visit your SerriClass dashboard,\nhttps://serri.co.in/student/exams\n\nI hope it helps:\n\nNothing more, nothing less. Just Serri.\n\nShall I help you with anything else? Saad\n"
        
        
        console.log(full)
        agent.add(full)
        
    }
    catch(e){console.log(e)}
}
module.exports =sendAssignmentAndQuiz
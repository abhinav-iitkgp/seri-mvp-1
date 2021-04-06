const fetch = require("node-fetch");
async function  sendHomework (agent){
    try{
        
        
        const {howe_work}=await fetch(`https://serri.co.in/api/Admin/HomeworkForStudent?phone=9010101010`,{
            method:'get',
            

        }).then(response =>response.json())
        let c=1
        let full=`Saad, you've Homework in ${howe_work.length} subjects;\n\n\n`
        howe_work.forEach((work)=>{
            full=full+`${(c++)}. ${work.subject}:${work.title} to be done by ${work.date}\n\n`
        })
        full=full+"\nFor details, feel free to visit your SerriClass dashboard,\nhttps://serri.co.in/student/homework\n\nI hope it helps:\n\nNothing more, nothing less. Just Serri.\n\nShall I help you with anything else? Saad\n"
        console.log(full)
        agent.add(full)
        
    }
    catch(e){console.log(e)}
}
module.exports =sendHomework
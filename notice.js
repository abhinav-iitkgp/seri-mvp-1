const fetch = require("node-fetch");
async function  sendNotice (agent){
    try{
        // console.log(agent.parameters)
        //easy bug what if 0 notice 
        let full="Rupak, Here's the latest notice:\n\n\n"
        const {notice}=await fetch('https://serri.co.in/api/Admin/noticeAdminStudnet?phone=9010101010',{
            method:'get',
        }).then(response =>response.json())
        
        notice.forEach((not)=>{
            full=full+`**.Title: ${not.notice_title}\n${not.notice} \nDated: ${+not.date} \n\n\n`
        })
        full=full+"\nFor details, feel free to visit your SerriClass dashboard,\nhttps://serri.co.in/student/notice\n\nI hope it helps:\n\nNothing more, nothing less. Just Serri.\n\nShall I help you with anything else? Rupak\n"
        console.log(full)
        agent.add(full)
    }
    catch(e){console.log(e)}
}
module.exports =sendNotice

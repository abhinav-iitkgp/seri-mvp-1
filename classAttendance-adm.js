const fetch=require('node-fetch')
async function sendClassAttendance(agent){
    try{
        // // let fullClassAttendance="@name, here's Summary of today's attendance"
        // const app=await fetch('https://serri.co.in/api/Admin/attendanceByDate?date=2021-03-09',{
        //     method: 'get',
        //     headers:{
        //         'token':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdGF0dXMiOjIwMCwibWVzc2FnZSI6IkxvZ2dlZGluIFN1Y2Nlc3NmdWxseSIsInVzZXJfaWQiOjIsInVzZXJfbmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkBzZXJyaS5jb20iLCJwcm9maWxlX2ltYWdlIjoiMTYxNTUzNzc0OF9hZG1pbi1hZG1pbmlzdHJhdGlvbi1iaW5kZXItb2ZmaWNlLWJ1c2luZXNzLWNvbmNlcHQtYWRtaW4tYWRtaW5pc3RyYXRpb24tYmluZGVyLW9mZmljZS1idXNpbmVzcy1jb25jZXB0LTE5OTk1NTE2MC5qcGciLCJ1c2VyX3R5cGUiOiJhZG1pbiIsInNjaG9vbF9pZCI6MSwiYWRtaW5fbG9naW4iOnRydWUsInZhbGlkaXR5Ijp0cnVlLCJzY2hvb2xfbmFtZSI6IlNlcnJpIEhpZ2ggU2Nob29sIiwiaWF0IjoxNjE2NzY2MzE2LCJleHAiOjE2MTY3ODQzMTZ9.ofYnYjmVzTVO_B2P5Ci7wTueUy5QmDPT71Wit9suCA0'
        //     }
        // }).then(response=>response.json())
        // console.log(app.appointments)



        // agent.add('Class Attendance is not here :) Neelesh bhai API please')
    }
    catch(e){console.log(e)}
}

module.exports=sendClassAttendance

const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Inserts data
    proffyValue = {
        name: "Diego Fernandes",
        avatar: "https://avatars1.githubusercontent.com/u/1625474?s=460&u=4a1339a2190eb38310706faea9b135aa98b33657&v=4",
        whatsapp: 99445566,
        bio: "Biografia do professor"
    }

    classValue = {
        subject: 1,
        cost: "20",
    }

    classScheduleValues = [
        {
            weekday: 2,
            time_from: 720,
            time_to: 1020
        },
        {
            weekday: 4,
            time_from: 920,
            time_to: 1220
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Retrieves data
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.* 
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    console.log(selectClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.* 
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "820"
        AND class_schedule.time_to > "820"
    `)
    console.log(selectClassesSchedules)

})
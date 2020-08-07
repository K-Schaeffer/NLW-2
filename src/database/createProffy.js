module.exports = async (database, { proffyValue, classValue, classScheduleValues }) => {
    // Proffys table INSERT
    const insertedProffy = await database.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `);

    const proffy_id = insertedProffy.lastID;

    // Classes table INSERT
    const insertedClass = await database.run(`
            INSERT INTO classes (
                subject,
                cost,
                proffy_id
            ) VALUES (
                "${classValue.subject}",
                "${classValue.cost}",
                "${proffy_id}"
            );
    `);

    const class_id = insertedClass.lastID;

    // ClassSchedule table INSERT
    const insertedClassesSchedule = classScheduleValues.map((classScheduleValue) => {
        return database.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"
            );
       `);
    });

    await Promise.all(insertedClassesSchedule);

};
















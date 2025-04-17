let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// for знаю ще з java, не думав що вони будуть однаковими:),
// спочатку хотів через імпорт зробити що б масив не переносити, 
// але зрозумів що імпорт експорт в js взагалі не існує в такому вигляді як в джаві
// то зрозумів що мені поки рановато лізти туди

for (let i = 0; i < coursesAndDurationArray.length; i++) {
    if (coursesAndDurationArray[i].monthDuration >= 5) {
        console.log(coursesAndDurationArray[i].title)
        console.log('Супер')
    }
    else if (coursesAndDurationArray[i].monthDuration <= 5) {
        console.log(coursesAndDurationArray[i].title)
        console.log('Не супер:)')
    }
}
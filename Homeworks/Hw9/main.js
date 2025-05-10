
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (const course of coursesArray) {
    let courseDiv = document.createElement("div");
    courseDiv.className = 'course';
    
    let titleDiv = document.createElement("div");
    titleDiv.innerText = `Title: ${course.title}`;
    courseDiv.appendChild(titleDiv);
    
    let monthDurDiv = document.createElement("div");
    monthDurDiv.innerText = `Duration in month: ${course.monthDuration}`;
    courseDiv.appendChild(monthDurDiv);
    
    let hourDurDiv = document.createElement("div");
    hourDurDiv.innerText = `Duration in hours: ${course.hourDuration}`;
    courseDiv.appendChild(hourDurDiv);
    
    let modulesDiv = document.createElement("div");
    let modulesList = document.createElement("ul");
    for (const module of course.modules) {
        let moduleItem = document.createElement("li");
        moduleItem.innerText = module;
        modulesList.appendChild(moduleItem);
    }
    modulesDiv.appendChild(modulesList);
    courseDiv.appendChild(modulesDiv);
    
    document.body.appendChild(courseDiv);
}
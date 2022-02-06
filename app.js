const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function program() {
    rl.question('What date do you want to know the week of? (mm/dd/yyyy) ', (answer) => {
        if(["exit", "none", "quit", "stop"].includes(answer.toLowerCase())) return rl.close();
        let date = answer.split('/');
        let dateObj = new Date(date[2], date[0] - 1, date[1]);
        let day = dateObj.getDay();
        let dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][day];
        let month = dateObj.getMonth();
        let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][month];
        let week = dateObj.getWeek();
        console.log(`Year: ${dateObj.getFullYear()}\nMonth: ${monthName} (${date[0]})\nWeek: ${week}\nDay: ${dayName} (${date[1]})`);
        program();
    });
}

program();

Date.prototype.getWeek = function () {
    var date = new Date(this.getTime());
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    var week1 = new Date(date.getFullYear(), 0, 4);
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
};
var dayOfTheWeek = function(day, month, year) {
    switch(new Date(year,month-1,day).getDay()){
        case 0:
            return "Sunday"
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
    }
};
console.log(dayOfTheWeek(3,8,2019))
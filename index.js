const createEmployeeRecord = function (employee){
    let newRecord = {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return newRecord
};

const createEmployeeRecords = function (employeeArray){
    return employeeArray.map((array)=> createEmployeeRecord(array))
};

const createTimeInEvent = function (dateStamp){
    let [date, hour] = dateStamp.split(' ')
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date,
    })
    return this
};

const createTimeOutEvent = function (dateStamp){
    let [date, hour] = dateStamp.split(' ')
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour, 10),
        date,
    })
    return this;
};

const hoursWorkedOnDate = function (dateStamp){
    let timeIn = this.timeInEvents.find((e)=> e.date === dateStamp)
    let timeOut = this.timeOutEvents.find((e)=> e.date === dateStamp)
    return (timeOut.hour - timeIn.hour)/ 100
};

const wagesEarnedOnDate = function (date){
    let wage = hoursWorkedOnDate.call(this,date) * this.payPerHour
    return wage
};

const findEmployeeByFirstName = function (collection, firstName){
    return collection.find((e)=>e.firstName===firstName)
};

const calculatePayroll = function (array){
    return array.reduce((e,r) => e + allWagesFor.call(r), 0)
};

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
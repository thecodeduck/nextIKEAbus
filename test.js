const to_Furuset = [
  10.00,
  11.00,
  12.00,
  13.00,
  14.00,
  15.00,
  16.00,
  17.00,
  18.00,
  19.00,
  20.00,
  21.00,
  22.00
]
const from_Furuset = [
  10.40,
  11.40,
  12.40,
  13.40,
  14.40,
  15.40,
  16.40,
  17.40,
  18.40,
  19.40,
  20.40,
  21.40,
  22.40,
  23.40
]
const sat_to_Furuset = [
  09.00,
  10.00,
  11.00,
  12.00,
  13.00,
  14.00,
  15.00,
  16.00,
  17.00,
  18.00,
  19.00,
  20.00
]
const sat_from_Furuset = [
  09.40,
  10.40,
  11.40,
  12.15,
  12.45,
  13.15,
  13.45,
  14.15,
  14.45,
  15.15,
  15.45,
  16.15,
  16.45,
  17.15,
  17.45,
  18.40,
  19.40,
  20.40,
  21.40
]
const to_Slependen = [
  10.30,
  11.30,
  12.30,
  13.30,
  14.30,
  15.30,
  16.30,
  17.30,
  18.30,
  19.30,
  20.30
]
const from_Slependen = [
  11.10,
  12.10,
  13.10,
  14.10,
  15.10,
  16.10,
  17.10,
  18.10,
  19.10,
  20.10,
  21.10,
  22.10,
  22.45
]
const sat_to_Slependen = [
  09.30,
  10.30,
  11.30,
  12.30,
  13.30,
  14.30,
  15.30,
  16.30,
  17.30,
  18.30,
  19.30
]
const sat_from_Slependen = [
  10.10,
  11.10,
  12.10,
  13.10,
  14.10,
  15.10,
  16.10,
  17.10,
  18.10,
  19.10,
  20.10,
  21.10,
  21.45
]
let today = new Date();
let weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednseday', 'Thursday', 'Friday', 'Saturday')
let dayofWeek = weekday[today.getDay()];
// let dayofWeek = 'Sunday';
let hour = today.getHours();
// let minute = today.getMinutes();
let minute = cleanMinutes();
let currentTime = String(hour + "." + minute)

function cleanMinutes() {
  let minute = today.getMinutes();
  if (minute < 10) {
    return String('0' + minute);
  } else {
    return minute;
  }
}

function getNextBus(schedule) {
  let upcoming;
  for (let i = 0; i < schedule.length; i++) {
    if (Number(currentTime) < schedule[i]) {
      upcoming = schedule[i];
      break
    }
  }
  return upcoming.toFixed(2);
}

function app() {
  if (dayofWeek === 'Sunday') {
    return 'No meatball for you!';
  }
  else if (dayofWeek === 'Saturday') {
    return [getNextBus(sat_to_Furuset), getNextBus(sat_to_Slependen), getNextBus(sat_from_Furuset), getNextBus(sat_from_Slependen)];
  }
  else {
    return [getNextBus(to_Furuset), getNextBus(to_Slependen), getNextBus(from_Furuset), getNextBus(from_Slependen)];
  }
}

function test() {
  console.log(dayofWeek);
  console.log(app()[2]);
}

test();

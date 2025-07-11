import {EventEmitter} from 'events';
const  booking = new EventEmitter();
// addlistners or . on both are correct to connect a listner
// callback function are anonymous function
booking.on('booked', (user,seat) => {
    console.log(`Booking confirmed for ${user} .seat type given below \n${seat}\n`);
});
booking.on(`cancel_tkt`, function(user) {
    console.log(`Booking canceled for ${user}`);
});
booking.emit('booked','rishabh','premium');
booking.emit('cancel_tkt','lakhan');

booking.emit('booked','lakhan','basic');
booking.emit('cancel_tkt','rihsabh');




const  calc = new EventEmitter();
calc.on('CGPA',(m1,m2,m3,m4,m5)=>{
    const total = m1 + m2 + m3 + m4+ m5;
    const cgpa = total / 50*10;
    console.log(`Your CGPA is ${cgpa}`);
});
calc.emit('CGPA', 8, 7, 9, 6, 8); // Example call to calculate CGPA

// register a event to calc for student

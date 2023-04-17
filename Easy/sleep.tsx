//Given a positive integer millis, write an asyncronous function that sleeps for millis milliseconds. It can resolve any value.

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

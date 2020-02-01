var topic = "Javascript";

if (topic) {
    let topic = "React";
    console.log('block', topic); // React
}

console.log('global', topic); // Javascript

// The value of topic is not reset outside of the block.
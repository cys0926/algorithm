const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
];

words.filter((word) => {
    return word.length > 7;
});

console.log(words);
// expected output: Array ["exuberant", "destruction", "present"]

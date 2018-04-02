import EventEmitter from '../Flux/eventEmitter';

// const answerData = {
//     "1": {
//         body: "Isn't that about time travel?",
//         correct: false
//     },
//     "2": {
//         body: "React and Flux are a tool and methodologies for building the front end of web applications",
//         correct: true,
//     },
//     "3": {
//         body: "React is a synonym for 'respond'",
//         correct: false,
//     },
// };
const answerData = [
    {
        body: "Isn't that about time travel?",
        correct: false
    },
    {
        body: "React and Flux are a tool and methodologies for building the front end of web applications",
        correct: true,
    },
    {
        body: "React is a synonym for 'respond'",
        correct: false,
    },
];

const ForumStore = new EventEmitter();

// mock api call
ForumStore.getAnswers = () => {
    return answerData;
}

// export default {answerData, ForumStore};
// export default answerData;
export default ForumStore;
import EventEmitter from '../Flux/eventEmitter';
import ForumDispatcher from '../Flux/ForumDispatcher';

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

// Add answer
ForumStore.addAnswer = (newAnswer) => {
	answerData[Object.keys(answerData).length] = {
		body: newAnswer,
		correct: false
	}
}

// reset and mark 1 as correct
ForumStore.markAsCorrect = (id) => {
	
	for (let key in answerData) {
		answerData[key].correct = false;
	}
	console.log(id)
	answerData[id].correct = true;

}

// register dispatcher here
ForumDispatcher.register((action) => {

	switch (action.actionType) {
		case 'FORUM_ANSWER_MARKED_CORRECT': {
			ForumStore.markAsCorrect(action.id);
			break;
		}
		case 'FORUM_ANSWER_ADDED': {
			ForumStore.addAnswer(action.newAnswer);
			break;
		}

	}
});


export default ForumStore;
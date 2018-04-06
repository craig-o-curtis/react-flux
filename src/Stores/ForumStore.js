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

// 
ForumStore.emitChange = () => {
	// this keyword doesn't work
	ForumStore.emit('change');
}

//
// ForumStore.addChangeListener = (listener) => {
// 	this.on('change', listener);
// }
ForumStore.addChangeListener = (listener) => {
	// this keyword adds extra layer -- {a: EventEmitter}
		// gives error : Uncaught TypeError: _this.on is not a function
	// using ForumStore itself solves problem
	ForumStore.on('change', listener);
}

// Add answer
ForumStore.addAnswer = (newAnswer) => {
	answerData[Object.keys(answerData).length] = {
		body: newAnswer,
		correct: false
	}
	// Forum.js listens for these changes with _onChange
	// React itself worries about DOM diffing
	// this keyword deoesn't work
	ForumStore.emitChange();
}


// reset and mark 1 as correct
ForumStore.markAsCorrect = (id) => {
	for (let key in answerData) {
		answerData[key].correct = false;
	}

	answerData[id].correct = true;
	// Forum.js listens for these changes with _onChange
	// React itself worries about DOM diffing
	ForumStore.emitChange();
}

// register dispatcher here - listener for actions
// method would be better named as a 'responder'
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
import ForumDispatcher from '../Flux/ForumDispatcher';
import ForumConstants from '../constants/ForumConstants';

const ForumActions = {
    markAnswerCorrect : (id) => {
        ForumDispatcher.dispatch({
            actionType: ForumConstants.FORUM_ANSWER_MARKED_CORRECT,
            id: id,
        });
    },

    addNewAnswer : (answerText) => {
        ForumDispatcher.dispatch({
            actionType: ForumConstants.FORUM_ANSWER_ADDED,
            newAnswer: answerText,
        });
    }
}

export default ForumActions;
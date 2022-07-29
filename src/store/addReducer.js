import * as consts from '../components/actions.js';

const defaultState = {
    tasks: [],
};

export function reducer(state = defaultState, action) {
    switch (action.type) {
        case consts.ADD_TASK:
            return { ...state, tasks: [...state.tasks, action.task]};

        case consts.REMOVE_TASK:
            return { ...state, tasks: state.tasks.filter(task=>task.id!==action.task) };

        case consts.REMAIN_TASK:
         const indexTask = state.tasks.findIndex(task=>task.id===action.task);
         const foundndRemainTask = [...state.tasks.slice(0,indexTask),{...state.tasks[indexTask], isChecked:!action.checked}, ...state.tasks.slice(indexTask+1)];
         return { ...state, tasks: foundndRemainTask};  

        default:
            return state
    }

}


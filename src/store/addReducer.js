const defaultState = {
    tasks: [],
};

export function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'ADD TASK':
            return { ...state, tasks: [...state.tasks, action.task]};

        case 'REMOVE TASK':
            return { ...state, tasks: state.tasks.filter(task=>task.id!==action.task) };

        case 'REMAIN TASK':
         const indexTask = state.tasks.findIndex(task=>task.id===action.task);
         return { ...state, tasks: [...state.tasks.slice(0,indexTask),{...state.tasks[indexTask], isChecked:!action.checked}, ...state.tasks.slice(indexTask+1)]};  

        default:
            return state
    }

}


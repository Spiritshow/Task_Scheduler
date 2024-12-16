import {create} from 'zustand'

export const useUser = create((set, get) => ({
    data: {name: "",image: ""},
    addData: (prop) => {
        set({data: prop});
    }
}));

export const useCrutch = create((set, get) => ({
    data: 1,
    togleCrutch: () => {
        set({data: get().data === 2 ? 1 : 2});
    }
}));

export const useCrutch2 = create((set, get) => ({
    data: 1,
    togleCrutch: () => {
        set({data: get().data === 2 ? 1 : 2});
    }
}));

export const useData = create((set, get) => ({
    data: [{
        nameProject: "Укроп",
        dayCreateProject: new Date(2024, 5, 26),
        deadlineProject: new Date(2024, 5, 30),
        statusProject: "green",
        CountTask: 1,
        Tasks: [{
            nameTask: "Зелень",
            dayCreateTask: new Date(2024, 5, 26),
            deadlineTask: new Date(2024, 5, 30),
            dayTargetTask: new Date(2024, 5, 29),
            statusTask: "green",
            Subtasks: [{
                nameSubtask: "Нарезать",
                statusSubtask: true
            }]
        }]
    },{
        nameProject: "Редис",
        dayCreateProject: new Date(2024, 4, 20),
        deadlineProject: new Date(2024, 5, 1),
        statusProject: "yellow",
        CountTask: 1,
        Tasks: [{
            nameTask: "Корнеплод",
            dayCreateTask: new Date(2024, 4, 20),
            deadlineTask: new Date(2024, 5, 1),
            dayTargetTask: new Date(2024, 5, 13),
            statusTask: "yellow",
            Subtasks: [{
                nameSubtask: "Посадить",
                statusSubtask: false
            }]
        }]
    }],
    addData: (prop) => {
        set({data: {prop}});
    }
}));
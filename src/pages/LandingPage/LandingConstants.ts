

export type taskItem = {
    title: string,
    isFinished: boolean
}

export type taskItemList = {
    tasks: taskItem[]
}

export const taskInitState: taskItemList = {
    tasks: []
}


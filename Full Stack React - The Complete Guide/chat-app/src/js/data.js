import uuid from "uuid";

export const initialState = {
    activeThreadId: '1-fca2',
    threads: [
        {
            id: '1-fca2',
            title: 'Buzz Aldrin',
            messages: [
                {
                    text: 'Twelve minutes to ignition',
                    timestamp: Date.now(),
                    id: uuid.v4()
                }
            ]
        },
        {
            id: '2-be91',
            title: 'Michael Collins',
            messages: []
        }
    ]
};
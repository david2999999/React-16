export function deleteMessage(id) {
    return {
        type: 'DELETE_MESSAGE',
        id: id
    }
}

export function addMessage(text, threadId) {
    return {
        type: 'ADD_MESSAGE',
        text: text,
        threadId: threadId
    }
}
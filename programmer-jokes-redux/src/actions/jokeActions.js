export const favorite = (id) => ({type: "FAVORITE", payload: id});
export const add = (joke) => ({type: "ADD", payload: joke});
export const upvote = (id) => ({type: "UPVOTE", payload: id});
export const downvote = (id) => ({type: "DOWNVOTE", payload: id})

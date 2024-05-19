const TODO_ADD = "TODO_ADD";
const TODO_DELETE = "TODO_DELETE";
const TODO_TOGGLE = "TODO_TOGGLE";

export const todoAdd = (payload) => {
  return { type: TODO_ADD, payload: payload };
};

export const todoDelete = (payload) => {
  console.log("Debug:", payload);
  return { type: TODO_DELETE, payload: payload };
};
export const todoToggle = (payload) => {
  return { type: TODO_TOGGLE, payload: payload };
};

const initialState = [
  {
    id: 1, // id는 모두 고유값이어야 합니다.
    title: "리액트 강의보기",
    body: "챕터 1부터 챕터 12까지 학습",
    isDone: false,
  },
  {
    id: 2, // id는 모두 고유값이어야 합니다.
    title: "점심 먹기",
    body: "점심 뭐먹지..?",
    isDone: false,
  },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return [
        ...state,
        {
          id: action.payload.id, // id는 모두 고유값이어야 합니다.
          title: action.payload.title,
          body: action.payload.body,
          isDone: false,
        },
      ];
    case TODO_DELETE:
      return state.filter((item) => item.id !== action.payload.id);
    case TODO_TOGGLE:
      return state.map((item) => {
        if (item.id === action.payload.id)
          return { ...item, isDone: !item.isDone };
        else return item;
      });
    default:
      return state;
  }
};

export default todos;

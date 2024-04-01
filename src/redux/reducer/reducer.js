// reducer을 폴더로 만드는 이유 -> 나중에 여러 리듀서 파일들이 생긴다.
// reducer는 항상 action의 행동지침서를 가지고 있다.
let initialState = {
  contactList: [],
  keyword: "",
};

// reducer는 항상 return값도 있어야 함.
function reducer(state = initialState, action) {
  const {type, payload} = action // type과 payload는 싹 다 action에서 뽑아내겠다.
  // 행동지침서
  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            name: payload.name,
            phoneNumber: payload.phoneNumber,
          },
        ],
      };
    case "SEARCH_BY_USERNAME":
        return { ...state, keyword: payload.keyword };
    default:
        return {...state};
  }
}

export default reducer;

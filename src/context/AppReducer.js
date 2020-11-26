export default (state, action) => {
  switch (action.type) {
    case "DELETE_PLAYER":
      return {
        ...state,
        players: state.players.filter(
          (player) => player.id !== action.payload
        ),
      };
    case "ADD_PLAYER":
      return {
        ...state,
        players: [action.payload, ...state.players],
      };
    case "FILL_TEAM_1":
      return {
        team1: [action.payload, ...state.team1],
      };
    case "FILL_TEAM_2":
      return {
        team2: [action.payload, ...state.team2],
      };
    default:
      return state;
  }
};

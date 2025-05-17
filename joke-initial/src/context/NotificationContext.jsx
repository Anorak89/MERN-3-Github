import { createContext, useReducer } from "react";

const NotificationContext = createContext();

const notificationReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_NOTIFICATION":
      return {
        ...state,
        notification: action.payload,
      };
    case "HIDE_NOTIFICATION":
      return {
        ...state,
        notification: null,
      };
    default:
      return state;
  }
};

export const NotificationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notificationReducer, {
    notification: null,
  });

  const notificationStyle = {
    position: "fixed",
    top: "20px",
    right: "20px",
    padding: "15px",
    borderRadius: "5px",
    color: "white",
    backgroundColor:
      state.notification?.type === "good" ? "#4CAF50" : "#f44336",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    minWidth: "250px",
    transform: state.notification ? "translateX(0)" : "translateX(100%)",
    transition: "transform 0.3s ease-in-out",
  };

  const closeButtonStyle = {
    marginLeft: "10px",
    background: "transparent",
    border: "none",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  };
  // Hi Mr. Sen, just wanted to let you know that the css was not written by me, it was wrriten by AI, as I did not think that it is very beneficial to the main purpose of this lab. I hope this is okay. :)

  return (
    <NotificationContext.Provider value={dispatch}>
      {children}
      {state.notification && (
        <div style={notificationStyle}>
          <span>{state.notification.message}</span>
          <button
            style={closeButtonStyle}
            onClick={() => dispatch({ type: "HIDE_NOTIFICATION" })}
          >
            &times;
          </button>
        </div>
      )}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
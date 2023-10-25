import React, { createContext, useReducer } from "react";

// Creamos un contexto global que contendrá el estado compartido.
export const GlobalContext = createContext();

const initialState = {
  users: [],
  user: false,
  isDark: false,
  favs: JSON.parse(localStorage.getItem("favs")) || [],
};

// Esta función elimina un favorito según su ID.
const removefav = (id, state) => {
  const newArr = state.favs.filter((fav) => fav.id !== id);
  localStorage.setItem("favs", JSON.stringify(newArr));
  return newArr;
};

// El reductor global maneja las acciones en el estado global.
const globalReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload };
    case "GET_USER":
      return { ...state, user: action.payload };
    case "HANDLE_FAVORITE":
      const isInFavorite = state.favs.some(
        (fav) => fav.id === action.payload.id
      );

      // Optimizamos el código para eliminar duplicados.
      let updatedFavs = [...state.favs];
      if (isInFavorite) {
        updatedFavs = removefav(action.payload.id, state);
      } else {
        updatedFavs = [...state.favs, action.payload];
        localStorage.setItem("favs", JSON.stringify(updatedFavs));
      }

      return { ...state, favs: updatedFavs };
    case "SWITCH_MODE":
      return { ...state, isDark: !state.isDark };
    default:
      return state; // Se agrega un retorno por defecto para evitar errores.
  }
};

// El componente GlobalContextProvider envuelve la aplicación y proporciona el contexto global.
const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

import React from "react";
import { changeNickname } from "../routes/userRoutes";

export const ModalUsername = () => {
  
  return (
          <form className="form-edit-username">
              <div className="form-edit-element">
                  <label htmlFor="username">Nowa nazwa użytkownika: </label>
                  <input type="text" id="username" name="username" />
              </div>
              <button type="button" className="form-edit-button btn" onClick={async ()=>{await changeNickname();window.location.reload(true)}}>Zapisz</button> 
          </form>
  )
};
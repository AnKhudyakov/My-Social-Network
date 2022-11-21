import React from "react";
import Dialog from "./Dialog/Dialog";
import cl from "./Dialogs.module.css";

const Dialogs = (props) => {
  const sendMessage = () => {
    props.addNewMessage();
  };
  const updateText = (e) => {
    let text = e.target.value;
    props.updateMessageText(text);
  };

  return (
    <div className={cl.dialogs}>
      <div className={cl.dialogItems}>
        <div>
          <h3>Dialogs:</h3>
        </div>
        {props.users.map((user) => (
          <Dialog name={user.name} id={user.id} key={user.id} />
        ))}
      </div>
      <div className={cl.messages}>
        {props.messages.map((m) => (
          <div className={cl.message} key={m.id}>
            {m.message}
          </div>
        ))}

        <div>
          <div className={cl.textarea}>
            <textarea
              value={props.newMessageText}
              onChange={updateText}
              placeholder={"Enter new message..."}
            ></textarea>
          </div>
          <div>
            <button onClick={sendMessage}>Send message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

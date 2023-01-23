import React from "react";
export default function Form() {
  return (
    <form>
      <label htmlFor="name">
        Full name
        <input type="text" id="name" />
      </label>
      <label htmlFor="email">
        Email
        <input type="email" id="email" />
      </label>
      <label htmlFor="characterName">
        Marvel Character Name
        <input type="text" id="characterName"></input>
      </label>
    </form>
  );
}

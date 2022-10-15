import React from "react";

function CreateLink(props) {
  return (
    <form className="flex flex-columm mt3">
      <input
        name="description"
        placeholder=" A description for your link"
        autoComplete="off"
      />
      <input name="url" placeholder="the Url for the link" autoComplete="off" />
      <button className="button" type="submit">
        submit
      </button>
    </form>
  );
}

export default CreateLink;

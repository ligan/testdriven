import React from 'react';

const AddUser = (props) => {
  return (
    <form onSubmit={(event) => props.addUser(event)}>
      <div className="field">
        <input
          name="username"
          className="input is-large"
          type="text"
          required
          value={props.username}
          placeholder="Enter a username required"
          onChange={props.handleChange}
        />
        <div className="field">
          <input
            name="email"
            className="input is-large"
            type="text"
            placeholder="Enter a username required"
            required
            value={props.email}
            onChange={props.handleChange}
          />
          <input
            type="submit"
            className="button is-primary is-large is-fullwidth"
            value="Submit"
          />
        </div>
      </div>
    </form>
  );
};

export default AddUser;

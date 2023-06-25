import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthorForm = (props) => {
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setAuthor(props.initialName);
  }, [props.initialName]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.formAction(author);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
      <button className="btn btn-danger" onClick={() => navigate('/')}>
        Cancel
      </button>
    </form>
  );
};

export default AuthorForm;

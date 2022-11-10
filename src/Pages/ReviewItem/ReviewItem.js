import { data } from "autoprefixer";
import React, { useContext, useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const ReviewItem = ({ details }) => {
  console.log(details);
  const { service_id } = details;
  const { user, setLoading } = useContext(AuthContext);
  const [userdata, setUser] = useState({});
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews`)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  const handleReview = (event) => {
    event.preventDefault();
    console.log(userdata);
    setLoading(true);
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userdata),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          event.target.reset();
        }
      });
  };

  const handleBlur = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    const newUser = { ...userdata };
    newUser[field] = value;
    setUser(newUser);
  };
  return (
    <div className="m-7 p-5 border-4 border-pink-200">
      <h1 className="text-center font-bold">Review</h1>
      <form onSubmit={handleReview}>
        <input
          onBlur={handleBlur}
          type="text"
          className="input input-bordered input-md w-full max-w-xs"
          name="name"
          placeholder="name"
          required
        />
        <br />
        <input
          onBlur={handleBlur}
          type="text"
          name="text"
          className="input input-bordered input-md w-full max-w-xs"
          placeholder="text"
          required
        />
        <br />
        <input
          onBlur={handleBlur}
          type="text"
          name="imageURL"
          defaultValue={user?.photoURL}
          className="input input-bordered input-md w-full max-w-xs"
          placeholder="imageURL"
          required
        />
        <br />
        <input
          onBlur={handleBlur}
          type="text"
          name="rating"
          className="input input-bordered input-md w-full max-w-xs"
          placeholder="rating"
          required
        />
        <br />
        <input
          onBlur={handleBlur}
          type="text"
          name="service_id"
          defaultValue={service_id}
          className="input input-bordered input-md w-full max-w-xs"
          required
        />
        <br />
        <input
          onBlur={handleBlur}
          type="text"
          name="email"
          defaultValue={user?.email}
          className="input input-bordered input-md w-full max-w-xs"
          required
        />
        <br />
        <button type="submit" className="btn btn-secondary">
          Add review
        </button>
      </form>

      <div>
        <h1 className="text-center font-bold ">All Review</h1>
        {review.map((r) => (
          <div
            className="m-5 border-4 rounded-md border-pink-500 p-2"
            key={r._id}
          >
            <p>name:{r.name}</p>
            <img src={r.imageURL ? r.imageURL : <FaUser></FaUser>} alt="" />
            <p>text:{r.text}</p>
            <p>rating:{r.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewItem;
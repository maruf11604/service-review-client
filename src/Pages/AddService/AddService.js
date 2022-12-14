import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const AddService = () => {
  const { user, setLoading } = useContext(AuthContext);
  const [userdata, setUser] = useState({});

  const handleReview = (event) => {
    event.preventDefault();
    console.log(userdata);

    fetch(
      "https://service-review-assignment-server-mocha.vercel.app/allservices",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userdata),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        event.target.reset();
        toast.success("service added");
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
    <div className="py-6">
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
        <button type="submit" className="btn bg-gradient-to-r from-indigo-500">
          Add service
        </button>
      </form>
    </div>
  );
};

export default AddService;

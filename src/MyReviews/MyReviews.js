import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import ReviewData from "./ReviewData";
const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews`)
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, [user]);

  const handleDelete = (id) => {
    const proceed = window.confirm("are you sure to delete review");
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = review.filter((odr) => odr._id !== id);
            setReview(remaining);
          }
        });
    }
  };

  const handleStatusUpdate = (id) => {
    fetch(`http://localhost:5000/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = review.filter((odr) => odr._id !== id);
          const approving = review.find((odr) => odr._id === id);
          approving.status = "Approved";
          const newOrders = [...remaining, approving];
          setReview(newOrders);
        }
      });
  };

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>reviews</th>
              <th>Delete </th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {review.map((rev) => (
              <ReviewData
                key={rev._id}
                handleDelete={handleDelete}
                handleStatusUpdate={handleStatusUpdate}
                rev={rev}
              ></ReviewData>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;

import React from "react";

const ReviewData = ({ rev, handleDelete, handleStatusUpdate }) => {
  console.log(rev);
  const { _id, imageURL, name, rating, text, status } = rev;

  return (
    <tr>
      <th>
        <label>
          <div className="font-bold">{name}</div>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12"></div>
          </div>
          <div>
            <div className="text-sm opacity-50">{text}</div>
          </div>
        </div>
      </td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-ghost btn-xs"
        >
          Delete
        </button>
        <br />
      </td>
      <td>
        <button
          onClick={() => handleStatusUpdate(_id)}
          className="btn btn-ghost btn-xs"
        >
          {status ? status : "pending"}
        </button>
      </td>
      <th></th>
    </tr>
  );
};

export default ReviewData;

import React from "react";

const Blog = () => {
  return (
    <div className="grid   lg:grid-cols-2 sm:grid-cols-1  py-5 gap-5">
      <div className="card w-full bg-pink-400 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            Difference between SQL <br /> and NoSQL?
          </h2>
          <p>
            SQL databases use structured query language and have a predefined
            schema.
          </p>
          <p>
            NoSQL databases have dynamic schemas for unstructured data. SQL
            databases are vertically scalable, while NoSQL databases are
            horizontally scalable.
          </p>
          <p>
            SQL databases are relational, NoSQL databases are non-relational.
          </p>
        </div>
      </div>
      <div className="card w-full bg-pink-400 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">What is JWT, and how does it work?</h2>
          <p>
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued. JWTs differ from other
            web tokens in that they contain a set of claims. Claims are used to
            transmit information between two parties. What these claims are
            depends on the use case at hand. For example, a claim may assert who
            issued the token, how long it is valid for, or what permissions the
            client has been granted.
          </p>
        </div>
      </div>
      <div className="card w-full bg-pink-400 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            What is the difference between javascript and NodeJS?
          </h2>
          <p>
            JavaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. Node.js, on
            the other hand, is an interpreter or execution environment for the
            JavaScript programming language.
          </p>
        </div>
      </div>
      <div className="card w-full bg-pink-400 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            How does NodeJS handle multiple requests at the same time?
          </h2>
          <p>
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;

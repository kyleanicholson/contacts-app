import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ contact }) => {
  return (
    <li className="m-1 p-2 bg-white rounded shadow">
      <div className="flex flex-col space-y-2">
        <div className="text-lg font-bold">{contact.name}</div>
        <div className="space-y-1">
          <div className="text-sm text-gray-600">{contact.email}</div>
          <div className="text-sm text-gray-600">{contact.phone}</div>
          <div className="text-sm text-gray-600">{contact.service_area}</div>
        </div>
      </div>
      <div className="">
      <Link
        to={`/${contact.id}`}
        className="m-1 inline-block bg-blue-500 text-white rounded px-2 py-1 text-sm"
      >
        Edit
      </Link>
      <Link
        to={`/${contact.id}`}
        className="m-1 inline-block bg-red-500 text-white rounded px-2 py-1 text-sm"
      >
        Delete
        </Link>
        </div>
    </li>
  );
};

export default ListItem;

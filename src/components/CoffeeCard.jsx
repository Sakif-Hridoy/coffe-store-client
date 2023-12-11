import React from "react";

const Coffeecard = ({ coffee }) => {
  const {_id, name, quantity, supplier, taste, category, details, photo } = coffee;

  const handleDelete = (_id)=>{
    console.log(_id)
  }
  return (
    <div>
      <div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img src={coffee.photo} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{coffee.name}</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-error">View</button>
              <button className="btn btn-success">Edit</button>
              <button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffeecard;

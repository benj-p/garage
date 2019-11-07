import { displayCar } from './cars';

const addCar = (body) => {
  fetch("https://wagon-garage-api.herokuapp.com/nigelsgarage/cars", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then((data) => {
      displayCar(data);
    });
};

const createCar = (event) => {
  event.preventDefault();
  const brand = document.querySelector("#brand").value;
  const model = document.querySelector("#model").value;
  const plate = document.querySelector("#plate").value;
  const owner = document.querySelector("#owner").value;

  // const body = {
  //   brand: brand,
  //   model: model,
  //   owner: owner,
  //   plate: plate
  // };

  // Below is a shorter way of creating this object with ES6

  const body = { brand, model, owner, plate };
  addCar(body);
};

export { createCar };

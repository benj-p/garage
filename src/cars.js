const carList = document.querySelector(".cars-list");

const displayCar = (data) => {
  const content = `<div class="car">
                      <div class="car-image">
                        <img src="http://loremflickr.com/280/280/${data.brand} ${data.model}" />
                      </div>
                      <div class="car-info">
                        <h4>${data.brand} ${data.model}</h4>
                        <p><strong>Owner:</strong> ${data.owner}</p>
                        <p><strong>Plate:</strong> ${data.plate}</p>
                      </div>
                    </div>`;
  carList.insertAdjacentHTML("beforeend", content);
};

const getCars = () => {
  fetch("https://wagon-garage-api.herokuapp.com/nigelsgarage/cars")
    .then(response => response.json())
    .then((data) => {
      data.forEach(displayCar);
    });
};

export { displayCar, getCars };

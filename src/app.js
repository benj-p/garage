import { getCars } from './cars';
import { createCar } from './form';

getCars();

const form = document.querySelector("#new-car");

form.addEventListener("submit", createCar);

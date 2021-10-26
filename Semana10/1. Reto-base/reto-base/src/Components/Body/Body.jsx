import React from "react";
import "./Body.scss";

const Body = () => {
  const [values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    adress: "",
    adress2: "",
    country: "",
    state: "",
    zip: "",
  });
  let enviar = true;
  function verificar() {
    if (
      values.firstName.length === 0 |
      (values.firstName.length < 5 && values.firstName.length > 20)
    ) {
      alert("Ingrese un nombre correcto");
      enviar = false;
    }
    if (values.lastName.length === 0 && values.lastName.length > 20) {
      alert("Ingrese un apellido correcto");
      enviar = false;
    }
    if (values.username.length === 0 && values.username.length > 20) {
      alert("Ingrese un usuario correcto");
      enviar = false;
    }
    if (values.email.length >= 1 && values.email.length > 20) {
      alert("Ingrese un email valido");
      enviar = false;
    }
    if (
      (values.adress.length === 0) |
      (values.adress.length < 5 && values.adress.length > 20)
    ) {
      alert("Ingrese una direccion valida");
      enviar = false;
    }
    if (values.adress2.length >= 1 && values.adress2.length > 20) {
      alert("Ingrese un email valido");
      enviar = false;
    }
    if (!(values.zip.length === 4)) {
      alert("Ingrese un codigo de ciudad valido");
      enviar = false;
    }
  }
  function handleChange(evt) {
    const { target } = evt;
    const { name, value } = target;
    const newValues = {
      ...values,
      [name]: value,
    };
    setValues(newValues);
  }
  function enviando(evt) {
    evt.preventDefault();
    verificar();
    if (enviar) {
      console.log("formulario enviado");
    } else {
      evt.preventDefault();
    }
  }
  return (
    <div className="form">
      <form>
        <div className="form__titulo">Billing address</div>
        <div className="form__container">
          <div className="form__container__cont">
            <div className="form__container__cont__label">
              <p>First name</p>
            </div>
            <div className="form__container__cont__input">
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={values.firstName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form__container__cont">
            <div className="form__container__cont__label">
              <p>Last name</p>
            </div>
            <div className="form__container__cont__input">
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={values.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="form__container">
          <div className="form__container__cont">
            <div className="form__container__cont__label">
              <p>Username</p>
            </div>
            <div className="form__container__cont__input">
              <input
                id="username"
                name="username"
                type="text"
                value={values.username}
                placeholder="Username"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="form__container">
          <div className="form__container__cont">
            <div className="form__container__cont__label">
              <p>Email</p> <p className="opcional">(Optional)</p>
            </div>
            <div className="form__container__cont__input">
              <input
                id="email"
                name="email"
                type="text"
                value={values.email}
                placeholder="you@example.com"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="form__container">
          <div className="form__container__cont">
            <div className="form__container__cont__label">
              <p>Adress</p>
            </div>
            <div className="form__container__cont__input">
              <input
                id="adress"
                name="adress"
                type="text"
                value={values.adress}
                placeholder="1234 Main St"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="form__container">
          <div className="form__container__cont">
            <div className="form__container__cont__label">
              <p>Adress 2</p> <p className="opcional">(Optional)</p>
            </div>
            <div className="form__container__cont__input">
              <input
                id="adress2"
                name="adress2"
                type="text"
                value={values.adress2}
                placeholder="Apartment or suite"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="form__container">
          <div className="form__container__cont">
            <div className="form__container__cont__label">
              <p>Country</p>
            </div>
            <div className="form__container__cont__input">
              <select id="country" name="select__country">
                <option value="0">Peru</option>
                <option value="1">Argentina</option>
                <option value="2">Brasil</option>
              </select>
            </div>
          </div>
          <div className="form__container__cont">
            <div className="form__container__cont__label">
              <p>State</p>
            </div>
            <div className="form__container__cont__input">
              <select id="state" name="select__state">
                <option value="0">Arequipa</option>
                <option value="1">Lima</option>
                <option value="2">Cuzco</option>
              </select>
            </div>
          </div>
          <div className="form__container__cont">
            <div className="form__container__cont__label">
              <p>Zip</p>
            </div>
            <div className="form__container__cont__input">
              <input
                id="zip"
                name="zip"
                type="text"
                value={values.zip}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="form__container">
          <div className="form__container__cont">
            <div className="form__container__cont__input">
              <button onClick={enviando}>ENVIAR</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Body;

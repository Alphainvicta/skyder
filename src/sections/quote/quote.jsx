import React, { useState } from "react";
import "./quote.css";

import { ReactComponent as Calendar } from "../../icons/Calendar.svg";
import { ReactComponent as Map } from "../../icons/Map.svg";

import Input from "../../components/input/input";
import Button from "../../components/button/button.jsx";
import Textarea from "../../components/textarea/textarea.jsx";
import Qcardlist from "../../components/quality-card/quality-card-list.jsx";

export const Quote = () => {
  const [formData, setFormData] = useState({
    nameData: "",
    emailData: "",
    messageData: "",
  });

  const [visible, setVisible] = useState(false);

  // Update form data on input change
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission with API call
  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submit behavior

    try {
      const response = await fetch("https://api.axolotelabs.com/email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(), // Format data as URL-encoded
      });

      if (response.status === 200) {
        alert("enviado exitosamente");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="quote-cont">
      <form onSubmit={handleFormSubmit}>
        <div className="step-one">
          <div className="select-service-cont">
            <div className="title">Select services</div>
            <div className="services">
              <Input
                id="service1"
                name="services"
                value="service1"
                type="checkbox"
                label="Service 1"
              />
              <Input
                id="service2"
                name="services"
                value="service2"
                type="checkbox"
                label="Service 2"
              />
              <Input
                id="service3"
                name="services"
                value="service3"
                type="checkbox"
                label="Service 3"
              />
              <div className="input-cont">
                <input
                  onClick={() => setVisible(!visible)}
                  id="service4"
                  name="services"
                  value="service4"
                  type="checkbox"
                />
                <label>Service 4</label>
              </div>
              <Input
                id="service5"
                name="services"
                value="service5"
                type="checkbox"
                label="Service 5"
              />
              <Input
                id="service6"
                name="services"
                value="service6"
                type="checkbox"
                label="Service 6"
              />
              <Input
                id="service7"
                name="services"
                value="service7"
                type="checkbox"
                label="Service 7"
              />
            </div>
          </div>
          <div className="details-cont">
            <div className="details">Extra details</div>
            <Textarea
              id="service-detail"
              name="service-detail"
              value="services details"
            />
          </div>
        </div>
        <hr />
        {visible && (
          <>
            <div className="step-two">
              <div className="quality-cont">
                <div className="title">Output Quality</div>
                <div className="cards-cont">
                  <Qcardlist />
                </div>
              </div>
            </div>
            <hr />
          </>
        )}
        <div className="step-three">
          <div className="title">Operation Details</div>
          <div className="details-cont">
            <div className="date-cont">
              <Calendar />
              <div className="date-title">Date</div>
              <Textarea id="date" name="date" value="date of recording" />
            </div>
            <div className="location-cont">
              <Map />
              <div className="in-zone">within metro area?</div>
              <div className="location-options">
                <Input
                  id="yes"
                  name="location"
                  value="yes"
                  type="radio"
                  label="Yes"
                />
                <Input
                  id="no"
                  name="location"
                  value="no"
                  type="radio"
                  label="No"
                />
              </div>
              <div className="location-details">Extra details</div>
              <Textarea
                id="locationdetails"
                name="locationdetails"
                value="location details"
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="step-four">
          <div className="title">Contacto</div>
          <div className="contact-cont">
            <div className="number">
              <div className="number-text">Celular</div>
              <Input
                id="number"
                name="nameData"
                value="Celular"
                type="text"
                onChange={handleInputChange}
              />
            </div>
            <div className="email">
              <div className="email-text">Email</div>
              <Input
                id="email"
                name="emailData"
                value="Email"
                type="email"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="send-cont">
            <div className="send-text">Contactar a un ejecutivo</div>
            <Button text="Enviar" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Quote;

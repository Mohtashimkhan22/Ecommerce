import React, { useState } from "react";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Model = () => {
  const [openModal, setOpenModal] = useState(false);
  const [OrderDetails, setOrderDetails] = useState({
    fullName: "",
    mobile: "",
    address: "",
    pin: "",
  });

  const handleChange = (e) => {
    setOrderDetails({ ...OrderDetails, [e.target.name]: e.target.value });
  };

  const handleOrder = (e) => {
    e.preventDefault();
    if (
      !OrderDetails.fullName ||
      !OrderDetails.mobile ||
      !OrderDetails.address ||
      !OrderDetails.pin
    ) {
      return toast.error("All fields are required");
    } else if(OrderDetails.mobile.length!=10 ){
      return toast.error("Mobile number must of 10 digit");
      }  else if(OrderDetails.pin.length!=6 ){
        return toast.error("Pin Code must of 6 digit");
      }
     else {
      toast.success("Order Successfully!");
      onCloseModal();
    }
  };

  function onCloseModal() {
    setOpenModal(false);
    setOrderDetails({
      fullName: "",
      mobile: "",
      address: "",
      pin: "",
    });
  }

  return (
    <>
      <Button
        className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-1 text-sm text-white uppercase w-full"
        onClick={() => setOpenModal(true)}
      >
        Checkout
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign in to our platform
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="fullName" value="Your Full Name" />
              </div>
              <TextInput
                id="fullName"
                placeholder="name...."
                value={OrderDetails.fullName}
                name="fullName"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="mobile" value="Your mobile no." />
              </div>
              <TextInput
                id="mobile"
                placeholder="97875XXXXX"
                value={OrderDetails.mobile}
                name="mobile"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="address" value="Your address" />
              </div>
              <TextInput
                id="address"
                placeholder="29-Dehli,India"
                value={OrderDetails.address}
                name="address"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="pin" value="Your pin" />
              </div>
              <TextInput
                id="pin"
                type="text"
                placeholder="000000"
                name="pin"
                value={OrderDetails.pin}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full">
              <Button
                className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-1 text-sm text-white uppercase w-[150px]"
                onClick={handleOrder}
              >
                Order
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Model;

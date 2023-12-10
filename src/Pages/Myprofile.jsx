import { Card, Button, Modal } from "antd";
import React, { useState } from "react";

const Myprofile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formdata, setformdata] = useState({ name: "Saksham Mishra", email: "Alan@gmail.com"})

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const formChangeHandler = (ev) => {
    const { name, value } = ev.target;
    setformdata((prev)=>{
     return {
          ...prev,
          [name]:value
      }
    })
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center ml-40">
        <Card
          className="mt-5 bg-slate-100"
          title="Profile"
          bordered={false}
          style={{
            width: 500,
          }}
        >
          <img
            className="rounded-full w-28"
            src="https://i.pinimg.com/736x/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg"
            alt=""
          />
          <h1>Name:- {formdata.name}</h1>
          <h1>Mail:- {formdata.email}</h1>
        </Card>

        <Button
          type=""
          className="bg-blue-600 text-white mt-12"
          onClick={showModal}
        >
          Change Profile
        </Button>
        <Modal
          title="Profile Detail"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <form className="flex flex-col items-center justify-center">
            <input
              className="mb-2"
              type="text"
              placeholder="Name"
              onChange={formChangeHandler}
              name="name"
              value={formdata.name}
            />
            <input
              className="mb-2"
              type="text"
              placeholder="Email"
              onChange={formChangeHandler}
              name="email"
              value={formdata.email}
            />
            <Button>Submit</Button>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default Myprofile;

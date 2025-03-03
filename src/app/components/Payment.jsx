import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const Payment = () => {
  const [address, setAddress] = useState({
    street: "",
    subDistrict: "",
    district: "",
    province: "",
    postalCode: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEditAddress = () => {
    setIsEditing(true);
  };

  const handleSaveAddress = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto space-y-4">
      <div className="flex justify-start items-start space-y-2 flex-col">
        <h1 className="text-[#333] text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
          My Ticket
        </h1>
        <p className="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">
          21st March 2021 at 10:34 PM
        </p>
      </div>

      <div className="flex flex-col xl:flex-row justify-between items-start w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        {/* Left Side (Customer's Info, Address, Payment Methods, and Pickup Methods) */}
        <div className="flex flex-col justify-start items-start w-full xl:w-2/3 space-y-4 md:space-y-6 xl:space-y-8">
          {/* Customer's Info */}
          <div className="flex flex-col justify-start items-start bg-white dark:bg-gray-800 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full shadow-lg rounded-lg">
            <h3 className="font-semibold text-xl">ข้อมูลสมาชิก</h3>
            <br />
            <div className="flex items-center space-x-4">
              <FaUserCircle className="text-5xl text-gray-800 dark:text-white" />
              <div>
                <h3 className="font-semibold text-xl dark:text-white">
                  อิสรา พิชัยรัตน์
                </h3>
                <p className="text-lg dark:text-gray-300">
                  issarapichairat@gmail.com
                </p>
              </div>
            </div>
            <hr />

            {/* Customer's Address */}
            <div className="mt-6 w-full">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-xl">ที่อยู่</h3>
                <button
                  onClick={handleEditAddress}
                  className="text-blue-500 hover:text-blue-600"
                >
                  แก้ไขที่อยู่
                </button>
              </div>
              {isEditing ? (
                <form onSubmit={handleSaveAddress} className="mt-4 space-y-2">
                  <input
                    type="text"
                    value={address.street}
                    onChange={(e) =>
                      setAddress({ ...address, street: e.target.value })
                    }
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                    placeholder="ถนน"
                  />
                  <input
                    type="text"
                    value={address.subDistrict}
                    onChange={(e) =>
                      setAddress({ ...address, subDistrict: e.target.value })
                    }
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                    placeholder="แขวง"
                  />
                  <input
                    type="text"
                    value={address.district}
                    onChange={(e) =>
                      setAddress({ ...address, district: e.target.value })
                    }
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                    placeholder="เขต"
                  />
                  <input
                    type="text"
                    value={address.province}
                    onChange={(e) =>
                      setAddress({ ...address, province: e.target.value })
                    }
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                    placeholder="จังหวัด"
                  />
                  <input
                    type="text"
                    value={address.postalCode}
                    onChange={(e) =>
                      setAddress({ ...address, postalCode: e.target.value })
                    }
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                    placeholder="รหัสไปรษณีย์"
                  />
                  <div className="flex space-x-2">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      บันทึก
                    </button>
                    <button
                      type="button"
                      onClick={handleCancelEdit}
                      className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    >
                      ยกเลิก
                    </button>
                  </div>
                </form>
              ) : (
                <div className="mt-4 space-y-2">
                  <p className="text-lg dark:text-gray-300">{address.street}</p>
                  <p className="text-lg dark:text-gray-300">
                    {address.subDistrict}
                  </p>
                  <p className="text-lg dark:text-gray-300">
                    {address.district}
                  </p>
                  <p className="text-lg dark:text-gray-300">
                    {address.province}
                  </p>
                  <p className="text-lg dark:text-gray-300">
                    {address.postalCode}
                  </p>
                </div>
              )}
            </div>
            <hr />

            {/* Payment Methods */}
            <div className="mt-6 w-full">
              <h3 className="font-semibold text-xl">วิธีการชำระเงิน</h3>
              <ul className="space-y-4 mt-4">
                <li className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex justify-center items-center">
                    <span className="text-white">Credit</span>
                  </div>
                  <p className="text-lg">ชำระเงินด้วยบัตรเครดิต / เดบิต</p>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex justify-center items-center">
                    <span className="text-white">iBank</span>
                  </div>
                  <p className="text-lg">ชำระเงินผ่านบัญชีธนาคาร</p>
                </li>
              </ul>
            </div>

            {/* Pickup Methods */}
            <div className="mt-6 w-full">
              <h3 className="font-semibold text-xl py-[17px]">
                วิธีการรับบัตร
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-violet-600 rounded-full flex justify-center items-center">
                    <span className="text-white">Self</span>
                  </div>
                  <p className="text-lg">รับบัตรด้วยตัวเอง</p>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex justify-center items-center">
                    <span className="text-white">Post</span>
                  </div>
                  <p className="text-lg">ส่งทางไปรษณีย์</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side (Payment Summary and Booking Details) */}
        <div className="flex flex-col justify-start items-start w-full xl:w-1/3 space-y-4 md:space-y-6 xl:space-y-8">
          <div className="text-[#333] bg-white p-6 shadow-lg rounded-lg w-full">
            <h3 className="font-semibold text-xl">รายละเอียดการจอง</h3>
            <div>
              <p className="mt-3 text-lg">
                2025 JISOO ASIA TOUR: LIGHTS, LOVE, ACTION! IN BANGKOK
              </p>
              <p className="text-gray-500 text-lg">
                @ Exhibition Hall 1-2, Queen Sirikit National Convention Center
              </p>
            </div>

            <br />

            <h3 className="font-semibold text-xl">รอบการแสดง</h3>
            <div className="flex justify-between font-bold text-xl mt-2">
              <span className="text-red-500">Sat 15 Mar 2025 18:00</span>
            </div>

            {/* Booking Details */}
            <div className="mt-6">
              <p className="text-lg">ประเภท: VIP</p>
              <p className="text-lg">โซนที่นั่ง: A15</p>
              <p className="text-lg">จำนวน: 1 ที่นั่ง</p>
              <p className="text-lg">ราคาบัตร: 6,500.00</p>
              <p className="text-lg">ค่าบริการในการจัดส่ง: 30.00</p>
              <p className="text-lg">วิธีการรับบัตร: -</p>
              <p className="text-lg">วิธีการชำระเงิน: -</p>
            </div>

            <br />

            <h3 className="font-semibold text-xl">จำนวนเงินที่ต้องชำระ</h3>
            <div className="flex justify-between font-bold text-xl mt-2">
              <span className="text-red-500">6,530.00</span>
            </div>
            <button className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">
              ชำระเงิน
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

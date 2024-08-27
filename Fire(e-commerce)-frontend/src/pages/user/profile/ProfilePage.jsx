// ProfilePage.js
import React,{useState} from "react";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import RoundedButton from "../../../components/common/ReusableButton/Button";
import { useLogoutMutation } from "../../../slices/auth/authApiSlice";
import Modal from "../../../components/common/Modals/Modal";
import { toast } from "react-toastify";
const ProfilePage = () => {
  //model setup

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  //navigate
  const navigate = useNavigate();

  // Assuming user details are stored in the Redux store's auth slice
  const { user } = useSelector((state) => state.auth?.authInfo);

  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      const response = await logout().unwrap();

      // Display success message and navigate to the OTP page
      closeModal();
      navigate("/");
      toast.success(response.message);
    } catch (error) {
      // Display error message in case of failure
      toast.error(error?.data?.message || error.error);
    } 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Confirm Logout"
        footer={
          <>
            <Button variant="outlined" onClick={closeModal}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={handleLogout}>
              Confirm
            </Button>
          </>
        }
      >
        <p>Are you sure you want to log out?</p>
      </Modal>
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Profile</h2>
        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-600">First Name</label>
            <input
              type="text"
              value={user?.firstName}
              disabled
              className="px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600">Last Name</label>
            <input
              type="text"
              value={user?.lastName}
              disabled
              className="px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600">Email</label>
            <input
              type="email"
              value={user?.email}
              disabled
              className="px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600">Mobile Number</label>
            <input
              type="text"
              value={user?.mobile_no}
              disabled
              className="px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <RoundedButton
            className="w-full mt-4 bg-red-600 hover:bg-red-800 text-white"
            onClick={openModal}
          >
            Logout
          </RoundedButton>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

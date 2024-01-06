import Modal from "react-modal";
import { useForm } from "react-hook-form";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { useContext } from "react";
import { FoodContext } from "../../../Provider/FoodProvider";
import { ImCross } from "react-icons/im";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    background: "#EEEFF0",
  },
};
Modal.setAppElement("#root");
const AddFoodForm = ({ modalFunctions }) => {
  const { modalIsOpen, openModal, closeModal } = modalFunctions;
  const {totalFood,setTotalFood} = useContext(FoodContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, image, isPopular, isRecommended } = data;
   const toastId = toast.loading("loading...")
   
   try{
    const result = await axios.post(
        `https://api.imgbb.com/1/upload?key=bb2268c0e82d269ae0139798d1d2580f`,
        { image: image[0] },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const newFood = {
        Id: uuidv4(),
        Name: name,
        ImageUrl: result.data.data.display_url,
        IsPopular: parseInt(isPopular),
        IsRecommended: parseInt(isRecommended)
      }
      setTotalFood([...totalFood, newFood])
      Swal.fire({
        icon:"success",
        title:"Successfully Added",
        confirmButtonColor: "#F97418"
      })
      closeModal()
      toast.remove(toastId)
   
   }catch(error){
    Swal.fire({
      icon:"error",
      title: error.message,
      confirmButtonColor: "#F97418"
    })
    toast.remove(toastId)
   }
   
  };
  

  return (
    <div className="bg-[#EEEFF0] shadow-2xl">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}><ImCross className="text-[#202E3C]" /></button>

        <div className="card shrink-0 bg-transparent w-full ">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#202E3C] font-semibold">Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered bg-white focus:outline-none"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#202E3C] font-semibold">Image</span>
              </label>
              <input
                type="file"
                placeholder="Image"
                className="input input-bordered bg-white focus:outline-none"
                {...register("image", { required: true })}
              />
              {errors.image && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="flex gap-2">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text text-[#202E3C] font-semibold">Popular</span>
                </label>
                <select
                  className="select select-bordered bg-white focus:outline-none"
                  {...register("isPopular")}
                >
                  <option disabled selected>
                    IsPopular
                  </option>
                  <option value={1}>True</option>
                  <option value={0}>False</option>
                </select>
                {errors.image && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#202E3C] font-semibold">Recommended</span>
                </label>
                <select
                  className="select select-bordered bg-white focus:outline-none"
                  {...register("isRecommended")}
                >
                  <option disabled selected>
                    IsRecommended
                  </option>
                  <option value={1}>True</option>
                  <option value={0}>False</option>
                </select>
                {errors.image && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-orange-500 hover:bg-orange-500 border-none text-white ">
                Add Food
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddFoodForm;

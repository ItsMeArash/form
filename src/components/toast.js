import { toast } from "react-toastify";
export const notify = (type, text) => {
  if (type === "success") {
    toast.success(text, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } else {
    toast.error(text, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
};

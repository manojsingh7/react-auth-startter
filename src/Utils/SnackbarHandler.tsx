import { toast } from "react-toastify";

class SnackbarHandler {
  errorToast = (text: string) => {
    toast(text, { position: "bottom-center", type: "error" });
  };

  successToast = (text: string) => {
    toast(text, { position: "bottom-center", type: "success" });
  };

  normalToast = (text: string) => {
    toast(text, { position: "bottom-center", type: "default" });
  };
}

export default new SnackbarHandler();

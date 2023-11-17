import { collection, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "./firebase";

export const handleCopy = async (content) => {
  try {
    await navigator.clipboard.writeText(content);
    toast.success("Copied to Clipboard!");
  } catch (error) {
    console.error("Error copying to clipboard:", error);
    toast.error("Copy failed. Please try again.");
  }
};

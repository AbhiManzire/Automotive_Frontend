import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// internal imports
import { SidebarContext } from "@/context/SidebarContext";
import BannerServices from "@/services/BannerServices";
import { notifyError, notifySuccess } from "@/utils/toast";
const useBannerSubmit = (id, data) => {
  const { isDrawerOpen, closeDrawer, setIsUpdate } = useContext(SidebarContext);
  const [imageUrl, setImageUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [published, setPublished] = useState(true);
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm();
  // 🧾 Submit Handler
  const onSubmit = async ({ title, description, link }) => {
    try {
      setIsSubmitting(true);
      const bannerData = {
        title,
        description,
        link,
        imageUrl,
        status: published ? "show" : "hide"
      };
      if (id) {
        const res = await BannerServices.updateBanner(id, bannerData);
        notifySuccess(res.message || "Banner updated successfully!");
      } else {
        const res = await BannerServices.addBanner(bannerData);
        notifySuccess(res.message || "Banner created successfully!");
      }
      setIsUpdate(true);
      setIsSubmitting(false);
      closeDrawer();
      reset();
    } catch (err) {
      setIsSubmitting(false);
      notifyError(err?.response?.data?.message || err.message);
    }
  };
  // 🧪 Load Banner for Edit
  useEffect(() => {
    if (!isDrawerOpen) {
      reset();
      clearErrors();
      setImageUrl("");
      setPublished(true);
      return;
    }
    if (id) {
      (async () => {
        try {
          const res = await BannerServices.getBannerById(id);
          if (res) {
            setValue("title", res.title);
            setValue("description", res.description);
            setValue("link", res.link);
            setImageUrl(res.imageUrl);
            setPublished(res.status === "show");
          }
        } catch (err) {
          notifyError(err?.response?.data?.message || err.message);
        }
      })();
    }
  }, [id, isDrawerOpen, reset, setValue, clearErrors]);
  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    imageUrl,
    setImageUrl,
    isSubmitting,
    published,
    setPublished
  };
};
export default useBannerSubmit;

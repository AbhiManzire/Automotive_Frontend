import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
// internal imports
import { SidebarContext } from "@/context/SidebarContext";
import UsedSparePartsServices from "@/services/UsedSparesServices";
import { notifyError, notifySuccess } from "@/utils/toast";
const useUsedSparePartSubmit = (id) => {
  const { isDrawerOpen, closeDrawer, setIsUpdate } = useContext(SidebarContext);
  const [imageUrl, setImageUrl] = useState("");
  const [published, setPublished] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resData, setResData] = useState({});
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      const usedPartData = {
        title: data.title,
        category: data.category,
        vehicleType: data.vehicleType,
        grade: data.grade,
        condition: data.condition,
        price: data.price,
        image: imageUrl,
        description: data.description,
        stock: data.stock,
        status: published ? "show" : "hide",
      };
      if (id) {
        const res = await UsedSparePartsServices.updateUsedPart(id, usedPartData);
        setIsUpdate(true);
        notifySuccess(res.message || "Used spare part updated successfully");
        closeDrawer();
      } else {
        const res = await UsedSparePartsServices.createUsedPart(usedPartData);
        setIsUpdate(true);
        notifySuccess(res.message || "Used spare part added successfully");
        closeDrawer();
      }
    } catch (err) {
      notifyError(err?.response?.data?.message || err?.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  useEffect(() => {
    if (!isDrawerOpen) {
      setResData({});
      setValue("title");
      setValue("category");
      setValue("vehicleType");
      setValue("grade");
      setValue("condition");
      setValue("price");
      setValue("description");
      setValue("stock");
      setImageUrl("");
      clearErrors();
      setPublished(false);
      return;
    }
    if (id) {
      (async () => {
        try {
          const res = await UsedSparePartsServices.getUsedPartById(id);
          if (res) {
            setResData(res);
            setValue("title", res.title);
            setValue("category", res.category);
            setValue("vehicleType", res.vehicleType);
            setValue("grade", res.grade);
            setValue("condition", res.condition);
            setValue("price", res.price);
            setValue("description", res.description);
            setValue("stock", res.stock);
            setPublished(res.status === "show" ? true : false);
            setImageUrl(res.image);
          }
        } catch (err) {
          notifyError(err?.response?.data?.message || err?.message);
        }
      })();
    }
  }, [id, setValue, isDrawerOpen, clearErrors]);
  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    imageUrl,
    setImageUrl,
    published,
    setPublished,
    isSubmitting,
  };
};
export default useUsedSparePartSubmit;

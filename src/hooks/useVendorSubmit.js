import dayjs from "dayjs";
import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router";
// internal imports
import AdminServices from "@/services/AdminServices";
import { AdminContext } from "@/context/AdminContext";
import { SidebarContext } from "@/context/SidebarContext";
import { notifyError, notifySuccess } from "@/utils/toast";
import useTranslationValue from "./useTranslationValue";

const useVendorSubmit = (id) => {
  const { state, dispatch } = useContext(AdminContext);
  const { adminInfo } = state;
  const { isDrawerOpen, closeDrawer, setIsUpdate, lang } =
    useContext(SidebarContext);

  const [imageUrl, setImageUrl] = useState("");
  const [selectedDate, setSelectedDate] = useState(
    dayjs(new Date()).format("YYYY-MM-DD")
  );
  const [language, setLanguage] = useState("en");
  const [resData, setResData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const location = useLocation();
  const { handlerTextTranslateHandler } = useTranslationValue();

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();

  const handleRemoveEmptyKey = (obj) => {
    for (const key in obj) {
      if (obj[key]?.trim() === "") delete obj[key];
    }
    return obj;
  };

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);

      const nameTranslates = await handlerTextTranslateHandler(
        data.name,
        language,
        resData?.name
      );

      const vendorData = {
        name: {
          ...nameTranslates,
          [language]: data.name,
        },
        email: data.email,
        mobile: data.mobile,
        password: data.password,
        status: data.status || "pending",
        profileImage: imageUrl,
        isOnline: data.isOnline || false,
      };

      if (id) {
        // Update vendor
        const res = await AdminServices.updateVendor(id, vendorData);
        setIsUpdate(true);
        setIsSubmitting(false);
        notifySuccess("Vendor Updated Successfully!");
        closeDrawer();
      } else {
        // Add new vendor
        const res = await AdminServices.addVendor(vendorData);
        setIsUpdate(true);
        setIsSubmitting(false);
        notifySuccess(res.message || "Vendor Added Successfully!");
        closeDrawer();
      }
    } catch (err) {
      notifyError(err?.response?.data?.message || err?.message);
      setIsSubmitting(false);
      closeDrawer();
    }
  };

  const getVendorData = async () => {
    try {
      const res = await AdminServices.getVendorById(id);
      if (res) {
        setResData(res);
        setValue("name", res.name[language || "en"]);
        setValue("email", res.email);
        setValue("mobile", res.mobile);
        setValue("password", ""); // leave empty for security
        setValue("status", res.status);
        setValue("isOnline", res.isOnline);
        setSelectedDate(dayjs(res.createdAt).format("YYYY-MM-DD"));
        setImageUrl(res.profileImage);
      }
    } catch (err) {
      notifyError(err?.response?.data?.message || err?.message);
    }
  };

  const handleSelectLanguage = (lang) => {
    setLanguage(lang);
    if (Object.keys(resData).length > 0) {
      setValue("name", resData.name[lang || "en"]);
    }
  };

  useEffect(() => {
    if (!isDrawerOpen) {
      setResData({});
      setValue("name", "");
      setValue("email", "");
      setValue("mobile", "");
      setValue("password", "");
      setValue("status", "");
      setValue("isOnline", false);
      setImageUrl("");
      setLanguage(lang);
      clearErrors();
      return;
    }
    if (id) {
      getVendorData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, isDrawerOpen]);

  useEffect(() => {
    if (location.pathname === "/edit-vendor" && Cookies.get("adminInfo")) {
      getVendorData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return {
    register,
    handleSubmit,
    onSubmit,
    language,
    errors,
    setImageUrl,
    imageUrl,
    selectedDate,
    setSelectedDate,
    isSubmitting,
    handleSelectLanguage,
  };
};

export default useVendorSubmit;

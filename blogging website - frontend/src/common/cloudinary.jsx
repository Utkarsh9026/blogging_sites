export const uploadImage = async (image) => {
  try {
    const formData = new FormData();
    formData.append("image", image);
    const res = await fetch(
      `${import.meta.env.VITE_SERVER_DOMAIN}/get-upload-url`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    return data.uploadUrl;
  } catch (err) {
    return err;
  }
};

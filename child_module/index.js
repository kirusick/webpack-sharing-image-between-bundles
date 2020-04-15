import meSrc from "./me.jpeg";

export default () => {
  const img = document.createElement("img");
  img.src = meSrc;
  return img;
};

import { FC } from "react";

export const Section: FC<{
  title: string;
  text: string;
  image: string;
  reverse?: boolean;
}> = ({ title, text, image, reverse = false }) => {
  if (reverse) {
    return (
      <div className="row row-cols-2 my-5">
        <div
          className="col h-100 text-center my-auto"
          style={{ height: "20ex" }}
        >
          <img src={image} alt="Picture" />
        </div>
        <div className="col h-100">
          <div className="fs-2">{title}</div>
          <div>{text}</div>
        </div>
      </div>
    );
  }
  return (
    <div className="row row-cols-2 my-5">
      <div className="col h-100">
        <div className="fs-2">{title}</div>
        <div>{text}</div>
      </div>
      <div className="col h-100 text-center my-auto" style={{ height: "20ex" }}>
        <img src={image} alt="Picture" />
      </div>
    </div>
  );
};

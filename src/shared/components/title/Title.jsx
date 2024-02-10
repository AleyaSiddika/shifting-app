import React from "react";

const Title = ({ title, description }) => {
  return (
    <div className="flex flex-col justify-center items-center font-Inter py-5 ">
      <h2 className="text-center text-2xl md:leading-10 lg:text-[40px] xl:text-[50px] font-normal uppercase text-[#292D32]">
        {title}
      </h2>
      {description ? (
        <p className="text-[#747474] text-xs md:text-base pt-5 font-Inter font-normal">
          {description}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Title;

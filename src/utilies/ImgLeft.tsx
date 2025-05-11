export const ImgLeft = () => {
    return {
      hidden: {
        opacity: 0,
        x: 200
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
         type : "spring",
         stiffness: 100,
          delay: 0.4,
         
        }
      }
    };
  };
  
import { Box, Grid, Typography, styled } from "@mui/material";

export const ParentBox = styled(Box)(() => ({
  // background: "F8F9FD",
}));

export const HeaderBox = styled(Box)(() => ({
  height: "50px",
}));
export const PostionBox = styled(Box)(() => ({
  position: "absolute",
  right: "0",
  padding: "0 68px",
}));
export const ChildGrid = styled(Grid)(() => ({
  display: "grid",
  justifyContent: "space-around",
  marginTop: "8px",
}));

export const ParentGrid = styled(Grid)(() => ({}));

export const SaleBox = styled(Box)(() => ({
  background: "F8F9FD",
}));
export const BoxIcon = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "12px",
}));
export const IconTypography = styled(Typography)(({ isCanceled }) => ({
  color: isCanceled ? "#FF3C00" : "",
  alignItems: "center",
}));
export const NumberBox = styled(Box)(() => ({
  marginTop: "20px",
}));
export const ButtonBox = styled(Typography)(() => ({
  display: "flex",
  textAligna: "center",
  justifyContent: "space-between",
  margin: "25px 0",
  color: "#FF3C00",
  cursor: "pointer",
}));
export const BoxGrid = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "space-evenly",
  marginTop: "8px",
  border: "1px solid gray",
}));
export const BoxesGrid = styled(Grid)(() => ({}));
export const BorderBox = styled(Box)(
  ({ isBorder1, isBorder2, isBorder3, isBorder4, isBorder5 }) => ({
    borderTop: isBorder1
      ? "2px solid #8369F1"
      : isBorder2
      ? "2px solid #FB7269"
      : isBorder3
      ? "2px solid #FACC25"
      : isBorder4
      ? "2px solid #74C951"
      : isBorder5
      ? "2px solid #AFE31F"
      : "",
  })
);

{
  /* ********************Top selling********************* */
}

export const GridContainer = styled(Grid)(() => ({
    marginTop:"15px"
}));

export const GridSeling = styled(Grid)(() => ({
//   border: "2px solid gray",
}));


export const SellingGridBox = styled(Box)(() => ({
    padding: "6px 60px"
  }));
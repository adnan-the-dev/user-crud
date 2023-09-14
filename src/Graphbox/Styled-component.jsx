import { Box, Grid, Typography, styled } from "@mui/material";





export const ParentBox = styled(Box)(() => ({
    background: "F8F9FD",
}))

export const HeaderBox = styled(Box)(() => ({
    height: "50px",
}))
export const PostionBox = styled(Box)(() => ({
    position: "absolute",
    right: "0",
    padding: "0 68px"
}))
export const ChildGrid = styled(Grid)(() => ({
    display:"grid",
    justifyContent:"space-around",
    marginTop:"12px",
}))

export const ParentGrid = styled(Grid)(() => ({

}))

export const SaleBox = styled(Box)(() => ({
    background: "F8F9FD",
}))
export const BoxIcon = styled(Box)(() => ({
    display:"flex",
    alignItems:"center",
    gap:"12px"
}))
export const IconTypography = styled(Typography)(({isCanceled}) => ({

    color: isCanceled ? "#FF3C00" :  "",
    alignItems:"center"
}))
export const NumberBox = styled(Box)(() => ({
    marginTop:"20px"
}))
export const ButtonBox = styled(Typography)(() => ({
    display:"flex",
    alignItems:"center",
    textAligna:"center",
    justifyContent:"space-between"
}))


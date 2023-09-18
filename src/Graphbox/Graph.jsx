import React from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import dayjs from "dayjs";
import { Box, Divider, Grid, Typography } from "@mui/material";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import LineStyleOutlinedIcon from "@mui/icons-material/LineStyleOutlined";
import {
    BorderBox,
    BoxGrid,
    BoxIcon,
    BoxSeling,
    BoxesGrid,
    ButtonBox,
    ChildGrid,
    GridContainer,
    GridSeling,
    HeaderBox,
    IconTypography,
    NumberBox,
    ParentBox,
    ParentGrid,
    PostionBox,
    SaleBox,
    SellingGridBox,
} from "./Styled-component";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

function Graph() {
    const today = dayjs();
    const tomorrow = dayjs().add(1, "day");

    const outSale = [
        { name: "shadow 1", sale: "1499", grow: 3 },
        { name: "shadow 1", sale: "1499", grow: 3 },
        { name: "shadow 1", sale: "1499", grow: 3 },
        { name: "shadow 1", sale: "1499", grow: 3 },
        { name: "shadow 1", sale: "1499", grow: 3 },
        { name: "shadow 1", sale: "1499", grow: 3 },
        { name: "shadow 1", sale: "1499", grow: 3 },
    ];

    //   const TotalSales = [
    //     {
    //       icon: "",
    //       name: "",
    //       sale: "",
    //     },
    //   ];
    const TopSellingItem = [
        {
            img: "https://cdn.eateasily.com/restaurants/profile/app/400X300/16424.jpg",
            img1: "https://images.deliveryhero.io/image/fd-pk/LH/u4bl-hero.jpg",
            name: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            price: "15487",
        },
        {
            img: "https://images.deliveryhero.io/image/fd-pk/Products/6097580.jpg?width=%s",
            img1: "https://images.deliveryhero.io/image/fd-pk/Products/25349319.jpg?width=%s",
            name: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            price: "15487",
        },
        {
            img: "https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638123115351830900?width=172&amp;height=172",
            img1: "https://images.deliveryhero.io/image/fd-pk/Products/1965254.jpg?width=%s",
            name: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            price: "15487",
        },

    ]
    return (
        <ParentBox>
            <HeaderBox>
                <PostionBox>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer
                            components={["DatePicker", "DatePicker", "DatePicker"]}
                        >
                            <DatePicker
                                label=""
                                slotProps={{ textField: { size: "small" } }}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </PostionBox>
            </HeaderBox>

            {/* *********************Create Box*************************** */}
            {/* <ParentGrid container>
                <ChildGrid item xl={3} lg={3} md={6} sm={12} xs={12}>
                    <SaleBox>
                        <Box
                            sx={{
                                bgcolor: "background.paper",
                                boxShadow: 1,
                                borderRadius: 3,
                                p: 2,
                                // minWidth: 300,
                                width: 180,
                                height: 180,
                            }}
                        >
                            <BoxIcon>
                                <IconTypography>
                                    <StickyNote2OutlinedIcon />
                                </IconTypography>
                                <Box sx={{ color: "text.secondary" }}>Total orders</Box>
                            </BoxIcon>

                            <NumberBox>
                                <Box
                                    sx={{
                                        color: "text.primary",
                                        fontSize: 34,
                                        fontWeight: "medium",
                                    }}
                                >
                                    342
                                </Box>
                            </NumberBox>

                            <NumberBox>
                                <Box
                                    component={TrendingUpIcon}
                                    sx={{
                                        color: "success.dark",
                                        fontSize: 16,
                                        verticalAlign: "sub",
                                    }}
                                />
                                <Box
                                    sx={{
                                        color: "success.dark",
                                        display: "inline",
                                        fontWeight: "medium",
                                        mx: 0.5,
                                    }}
                                >
                                    18.77%
                                </Box>
                                <Box
                                    sx={{
                                        color: "text.secondary",
                                        display: "inline",
                                        fontSize: 12,
                                    }}
                                >
                                    vs. last week
                                </Box>
                                <ButtonBox>
                                    <Typography>View detail</Typography>

                                    <Typography>
                                        <KeyboardArrowRightOutlinedIcon />
                                    </Typography>
                                </ButtonBox>
                            </NumberBox>
                        </Box>
                    </SaleBox>
                </ChildGrid>
            </ParentGrid> */}
            {/* ********************************Graph Box************************** */}

            {/* <BoxesGrid container>
                <BoxGrid item xl={8} lg={8} md={6} sm={12} xs={12}>
                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                        }}
                    >
                        {outSale.map((out, i) => (
                            <Box
                                key={i}
                                sx={{
                                    boxShadow: 3,
                                    // width: '8rem',
                                    // height: '5rem',

                                    bgcolor: (theme) =>
                                        theme.palette.mode === "dark" ? "#101010" : "#fff",
                                    color: (theme) =>
                                        theme.palette.mode === "dark" ? "grey.300" : "grey.800",
                                    p: 1,
                                    m: 1,
                                    borderRadius: 2,
                                    textAlign: "center",
                                    fontSize: "0.875rem",
                                    fontWeight: "700",
                                }}
                            >
                                <Typography>{out.name}</Typography>
                                <Box display="flex" alignItems="center" gap="5px">
                                    <Typography>{out.sale}</Typography>
                                    <Typography sx={{ fontSize: "12px", color: "#73CB50" }}>
                                        {out.grow > 0 ? `+${out.grow}%` : `${out.grow}%`}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </BoxGrid>
                <BoxGrid item xl={4} lg={4} md={6} sm={12} xs={12}>
                    <h2>hello</h2>
                </BoxGrid>
            </BoxesGrid> */}















            {/* ********************Top selling Box********************* */}
            <GridContainer container>
                <GridSeling item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <SellingGridBox>
                        <Box>
                            <Typography sx={{
                                fontSize: "16px",
                                fontWeight: "bold"
                            }}>Top selling items</Typography>
                        </Box>


                        {TopSellingItem.map((item, i) => (
                            <Box sx={[
                                {
                                    '&:hover': {
                                        color: '#19191C',
                                        transform: "scale3d(1.05, 1.05, 1)",
                                        transition: "transform 0.2s ease-in-out",
                                        fontSize: "1.1rem",


                                    },
                                },]}>

                                <List
                                    sx={{
                                        width: "100%",
                                        bgcolor: "background.paper",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        boxShadow: "3",
                                        // borderBottom: "1px solid black",
                                        marginTop: "15px",




                                    }}
                                >
                                    <ListItem
                                        sx={{
                                            width: "70%",
                                            gap: "12px",


                                        }}
                                    >
                                        <ListItemAvatar>
                                            <Avatar
                                                sx={{ width: 80, height: 80 }}
                                                alt="Remy Sharp"
                                                src={item.img}
                                            />
                                        </ListItemAvatar>
                                        <Typography>
                                            {item.name}
                                        </Typography>
                                    </ListItem>
                                    <Box sx={{ width: "25%" }}>Rs.{item.price}</Box>
                                </List>
                            </Box>
                        ))}
                    </SellingGridBox >
                    {/* <Divider sx={{border:"1px solid black"}}/> */}
                </GridSeling>
                {/* ****************************Top Grossing Box********************* */}
                <GridSeling item xl={4} lg={6} md={6} sm={12} xs={12}>
                    <SellingGridBox>
                        <Box>
                            <Typography sx={{
                                fontSize: "16px",
                                fontWeight: "bold"
                            }}>Top grossing items</Typography>
                        </Box>
                        {TopSellingItem.map((item, i) => (
                            <Box sx={[
                                {
                                    '&:hover': {
                                        color: '#19191C',
                                        transform: "scale3d(1.05, 1.05, 1)",
                                        transition: "transform 0.2s ease-in-out",
                                        fontSize: "1.1rem",
                                    },
                                },]}>
                                <List
                                    sx={{
                                        width: "100%",
                                        bgcolor: "background.paper",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        boxShadow: "3",
                                        // borderBottom: "1px solid black",
                                        marginTop: "15px"

                                    }}
                                >
                                    <ListItem
                                        sx={{
                                            width: "70%",
                                            gap: "12px"

                                        }}
                                    >
                                        <ListItemAvatar>
                                            <Avatar
                                                sx={{ width: 80, height: 80 }}
                                                alt="Remy Sharp"
                                                src={item.img1}
                                            />
                                        </ListItemAvatar>
                                        <Typography>
                                            {item.name}
                                        </Typography>
                                    </ListItem>
                                    <Box sx={{ width: "25%" }}>Rs.{item.price}</Box>
                                </List>
                            </Box>
                        ))}
                    </SellingGridBox>
                </GridSeling>
            </GridContainer>
        </ParentBox >
    );
}

export default Graph;

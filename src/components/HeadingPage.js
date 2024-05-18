import React from "react";
import styles from './Heading.module.css'
import { Box, Typography } from "@mui/material";

const HeadingPage = ({ title }) => {

    return (
        <Box className={styles.heading}>
            <Typography
                variant="h6"
                component="h6">
                {title}
            </Typography>
        </Box>
    )
}
export default HeadingPage
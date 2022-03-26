import { Box, Slider } from "@mui/material";

const MultiRangeSlider = (props) => {

    const handleChange = (even, newValue) => {
        props.setValue(newValue)
    }

    return (
        <Box>
            <Slider
                className="multirange-slider"
                getAriaLabel={() => 'height range'}
                value={props.value}
                onChange={handleChange}
                valueLabelDisplay="auto"
            />
        </Box>
    )
}

export default MultiRangeSlider
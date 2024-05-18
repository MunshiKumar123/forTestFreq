import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
const SubmitDetails = () => {
    const { deviceData } = useSelector((state) => state.deviceSlice);
    const { countryData } = useSelector((state) => state.regionsSlice);
    const { specificationsList } = useSelector((state) => state.specificationsSlice);
    const { filterData } = useSelector((state) => state.filterOptionSlice);
    const projectInformationSlice = useSelector((state) => state.projectInformationSlice);

    const [combinedData, setCombinedData] = React.useState([])

    const submitSection = () => {
        const data = {
            projectInformation: projectInformationSlice,
            devices: deviceData,
            filter: filterData,
            regions: countryData,
            specifications: specificationsList
        }
        setCombinedData([...combinedData, data])
        alert("you can view the JSON data in the console.log")
    }
    React.useEffect(() => {
        console.log('combinedData', combinedData);
    }, [combinedData])
    return (
        <Box sx={{ '& button': { m: 1 } }}>
            <div>
                <Button
                    variant="contained"
                    size="small"
                    onClick={submitSection}
                >
                    Save
                </Button>
            </div>
        </Box>
    )
}
export default SubmitDetails
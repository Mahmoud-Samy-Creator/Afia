import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

function DoctorRate() {
  return (
    <Box sx={{ '& > legend': { mt: 2 } }}>
      <Rating name="read-only" value={3} readOnly />
    </Box>
  );
}

export default DoctorRate;
'use client';

import React, { useState } from 'react';
import { format, addDays, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';
import { Box, Button, Grid, Typography, TextField } from '@mui/material';
import { styled } from '@mui/system';

const CalendarButton = styled(Button)(({ theme }) => ({
  minWidth: '40px',
  margin: '2px',
}));

const Reservation: React.FC = () => {
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null);

  const handleDateClick = (date: Date) => {
    if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
      setSelectedStartDate(date);
      setSelectedEndDate(null);
    } else if (selectedStartDate && !selectedEndDate && date > selectedStartDate) {
      setSelectedEndDate(date);
    } else {
      setSelectedStartDate(date);
      setSelectedEndDate(null);
    }
  };

  const handleConfirm = () => {
    if (selectedStartDate && selectedEndDate) {
      alert(`Reservation from ${format(selectedStartDate, 'yyyy-MM-dd')} to ${format(selectedEndDate, 'yyyy-MM-dd')} confirmed!`);
    }
  };

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(new Date(2034, 3)),
    end: endOfMonth(new Date(2034, 3)),
  });

  return (
    <Box sx={{ padding: '20px', maxWidth: '500px', margin: 'auto', backgroundColor: '#e0f7fa', borderRadius: '10px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Date
      </Typography>
      <Grid container spacing={1} justifyContent="center">
        {daysInMonth.map((date) => (
          <Grid item key={date.toISOString()}>
            <CalendarButton
              variant="contained"
              color={
                selectedStartDate && selectedEndDate && date >= selectedStartDate && date <= selectedEndDate
                  ? 'secondary'
                  : selectedStartDate && date.getTime() === selectedStartDate.getTime()
                  ? 'primary'
                  : 'inherit'
              }
              onClick={() => handleDateClick(date)}
              onMouseEnter={() => setHoveredDate(date)}
              onMouseLeave={() => setHoveredDate(null)}
              sx={{
                backgroundColor:
                  selectedStartDate && selectedEndDate && date >= selectedStartDate && date <= selectedEndDate
                    ? '#4caf50'
                    : selectedStartDate && date.getTime() === selectedStartDate.getTime()
                    ? '#1976d2'
                    : hoveredDate && date.getTime() === hoveredDate.getTime()
                    ? '#e3f2fd'
                    : 'inherit',
              }}
            >
              {format(date, 'd')}
            </CalendarButton>
          </Grid>
        ))}
      </Grid>
      <Box mt={2}>
        <TextField
          fullWidth
          label="Reservation Start"
          value={selectedStartDate ? format(selectedStartDate, 'yyyy-MM-dd') : ''}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Reservation End"
          value={selectedEndDate ? format(selectedEndDate, 'yyyy-MM-dd') : ''}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
          margin="normal"
        />
      </Box>
      <Box display="flex" justifyContent="space-between" mt={2}>
        <Button variant="contained" color="secondary">
          &larr; Return
        </Button>
        <Button variant="contained" color="primary" onClick={handleConfirm}>
          Confirm
        </Button>
      </Box>
    </Box>
  );
};

export default Reservation;

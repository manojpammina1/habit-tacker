import React, {useState} from 'react'
import {Box, Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {AppDispatch} from "../store/store.ts";
import {useDispatch} from "react-redux";
import {addHabit} from "../store/habit-slice.ts";

const AddHabitForm = () => {

    const [name, setName] = useState<string>("");
    const [frequency, setFrequency] = useState<"daily" | "weekly">("daily");

    // @ts-expect-error
    const dispatch = useDispatch()<AppDispatch>;

    const handelSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(name.trim()) {
            dispatch(addHabit({name, frequency}));
        }
        setName("");
    }

    return (
        <form onSubmit={handelSubmit}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2
            }}>
                <TextField label="Habit Name"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                           placeholder="Enter habit name"
                           fullWidth
                />
                <FormControl>
                    <InputLabel>Frequency</InputLabel>
                    <Select value={frequency} onChange={(e) => setFrequency(e.target.value as "daily" | "weekly")}>
                        <MenuItem value="daily">Daily</MenuItem>
                        <MenuItem value="weekly">Weekly</MenuItem>
                    </Select>
                </FormControl>
                <Button type="submit" variant="contained" color="primary">Add Habit </Button>
            </Box>
        </form>
    )
}
export default AddHabitForm

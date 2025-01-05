import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store.ts";
import {Box, Button, Grid, LinearProgress, Paper, Typography} from "@mui/material";
import {Check,  Delete} from "@mui/icons-material";
import {Habit, removeHabit, toggleHabit} from "../store/habit-slice.ts";

const HabitList = () => {


    const {habits} = useSelector((state: RootState) => state.habits)
    const today = new Date().toISOString().split("T")[0];

    // @ts-expect-error
    const dispatch = useDispatch()<AppDispatch>;

    const getStreak = (habit: Habit) => {
        let streak =0;
        const currentDate = new Date();
        while(true){
            const dateString = currentDate.toISOString().split("T")[0];
            if(habit.completedDates.includes(dateString)){
                streak++;
                currentDate.setDate(currentDate.getDate() - 1);
            } else {
                break;
            }
        }
        return streak;
    }


    return (
        <Box sx={{display: "flex", flexDirection: "column", gap:2, mt: 4}}>
            {habits.map((habit) => {
                return (
                    <Paper key={habit.id} elevation = {2} sx={{p: 2}}>
                        <Grid container alignItems="center">
                            <Grid xs={12} sm={6}>
                                <Typography variant="h6" sx={{textTransform:"capitalize"}}>{habit.name}</Typography>
                                <Typography variant="body2" color="text.secondary" sx={{textTransform:"capitalize"}}>{habit.frequency}</Typography>
                            </Grid>
                            <Grid xs={12} sm={6}>
                                <Box sx={{display: "flex", justifyContent: "flex-end", gap:1}}>
                                    <Button variant="outlined"
                                            color={habit.completedDates.includes(today)? "success": "primary"}
                                            startIcon={<Check Circle />}
                                            onClick={() => {
                                                dispatch(toggleHabit({habitId: habit.id, date: today}));
                                            }}>
                                        {habit.completedDates.includes(today)? "Completed": "Mark Complete"}</Button>
                                    <Button variant="outlined"
                                            color="error"
                                            startIcon={<Delete />}
                                            onClick={() => {
                                               dispatch(removeHabit({habitId: habit.id}));
                                            }}>
                                        Remove</Button>
                                </Box>
                            </Grid>
                        </Grid>
                        <Box sx={{mt:2}}>
                            <Typography variant="body2">
                                Current Streak: {getStreak(habit)} days
                            </Typography>
                            <LinearProgress
                                variant={"determinate"}
                                value={(getStreak(habit)/30) * 100}
                                sx={{mt: 1}}
                            />
                        </Box>
                    </Paper>)
            })}
        </Box>
    )
}
export default HabitList

const WorkoutDetails = ({workout}) => { // destructure from the props, the props that is passed through the workout
    return  (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Reps:  </strong>{workout.reps}</p>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p>{workout.createdAt}</p>
        </div>
    )
}

export default WorkoutDetails
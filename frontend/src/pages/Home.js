import {useEffect, useState} from 'react'


// components
import WorkoutDetails from '../components/WorkoutDetails'


const Home = () => {
    const [workouts, setWorkouts] = useState(null) // update workouts using setWorkouts

    // shouldnt make this async () => {} 
    useEffect( () => { // fire when component is rendered
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            // pass json from this response object for something to work with
            const json = await response.json() // array of objects

            if(response.ok) {
                setWorkouts(json) // update local states
            }

        } // fetch the workouts from the api on the backend

        fetchWorkouts()
    }, [])   // fire it once when it's rendered, not fetch it multiple times every time the component is rendered
            // empty array  - this is the dependency array & with it being empty, it will only ever fire once the component is rendered

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => ( // if theres a value for workouts, then map through workouts
                    //<p key={workout._id}>{workout.title}</p>
                    <WorkoutDetails key={workout._id} workout={workout}/> // pass in as a prop the actual workout
                ))} {/*normal parentheses not curly braces because returning template*/}
            </div>
        </div>
    )
}

export default Home
import {useState} from 'react' 
const WorkoutForm = () => {
     // create state for each of the different properties of the new workout that a user is going to type in the form
     // when user creates a form, it's gonna update the useState
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault() // prevents refreshing after submitting

        // dummy workout object that's gonna be sent as the body of the request
        const workout = {title, load, reps}

        // fetch request to post the new data 
        const response = await fetch('/api/workouts/', {
            // object with options
            method: 'POST',
            body: JSON.stringify(workout), // changes to a json string & sends that as the body
            headers: {
                'Content-Type': 'application/json'
            }
        })
            // when post request is sent, return json
            const json = await response.json()

            if(!response.ok) {
                setError(json.error)
            }
            if(response.ok) {
                setTitle('')
                setLoad('')
                setReps('')
                setError(null)
                console.log('new workout added', json)
            }
        }
    

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new Workout</h3>

            <label>Exercise Title:</label>
            <input 
            type="text" 
            onChange={(e) => setTitle(e.target.value)} // event object + event target (input field)
            value ={title} // two way data binding, it title changes from outside of the form, e.g reset the form and change back to an empty string, gonna be reflected in this input 
            />

            <label>Load (in kg):</label>
            <input 
            type="number" 
            onChange={(e) => setLoad(e.target.value)}
            value ={load} 
            />

        <label>Reps:</label>
            <input 
            type="number" 
            onChange={(e) => setReps(e.target.value)}
            value ={reps} 
            />

            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
 
    )
}

export default WorkoutForm
import React from 'react';

const Form = (props) => {
    const onChange = evt => {
        console.log(evt.target.name)
    }

    return (
        <div>
            <h3>Edit Form</h3>
            <form>
                <input type="text" name="bio" />
                <input type="text" name="username" />
                <button>Edit Profile</button>
                <button onClick={props.editProfile}>Cancel</button>
                <button>Reset</button>
            </form>
        </div>
    )
}

export default Form;
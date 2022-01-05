import { connect } from "react-redux";

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function Login (props) {

    return (
        <Select
            labelId="login-select-label"
            label="Select User"
            id="login-select"
            name="userSelect"
            
        >
            {props.users.map(user => (
                <MenuItem
                    key={user.id}
                    value={user.id}
                >
                    {user.name}
                </MenuItem>    
            ))}
        </Select>
    )
}

export default connect((state) => state.users)(Login);
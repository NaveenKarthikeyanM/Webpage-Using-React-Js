import React from 'react'
import './Content.css'
function Table(){
    return(
        <div class='content'>
            <h2>Student Information</h2>
            <table>
                <tr>
                    <th>S.NO</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Register No</th>
                    <th>Department</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Naveen Karthikeyan</td>
                    <td>M</td>
                    <td>720721110098</td>
                    <td>B.Tech IT</td>
                </tr>
            </table>
        </div>
    )
}

function Form(){
    return(
        <div class='form1'>
            <h2>Login page</h2>
            <form>
                <label class="e1">Email:<input type='email' id="email" placeholder='email' required></input></label><br></br>
                <label class="p1">Password:<input type='password' id="password" placeholder='' required></input></label>
            </form>
            <button class="btn">submit</button>
        </div>
    )
}
function Content(){
    return(
        <div>
            <Table/>
            <Form/>
        </div>
    )
}

export default Content;

import "./table.css"
// import "../index.css"
export function Table(){
    return (
        <table  className="table">
         <Thead></Thead>
         <Tbody/>
        <Tbody2></Tbody2>
        <Tbody3/>
        <Tbody4/>
            
        </table>
    )
}

export function Thead (){
    return(
        <tr>
            <th className="th" >Name</th>
            <th  >
                Age
            </th>
            <th className="th">Gender</th>
        </tr>
    )
}

export function Tbody (){
    return(
        <tr>
            <td className="td">Amruth</td>
            <td className="td">22</td>
            <td className="td">Male</td>
        </tr>
    )
}

export function Tbody2 (){
    return(
        <tr>
            <td className="td">Kiran</td>
            <td className="td">21</td>
            <td className="td">Male</td>
        </tr>
    )
}

export function Tbody3 (){
    return(
        <tr>
            <td className="td">Likku</td>
            <td className="td">23</td>
            <td className="td">Female</td>
        </tr>
    )
}
export function Tbody4 (){
    return(
        <tr>
            <td className="td">Anand</td>
            <td className="td">20</td>
            <td className="td">Male</td>
        </tr>
    )
}

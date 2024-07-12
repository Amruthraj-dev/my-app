export function Forms(){
    return (
        <form>
            <Items></Items>
        </form>
    )
}

export function Input(){
    return(
        <input type="text" ></input>
    )
}

export function Pswd(){
    return(
        <input type="password" minLength={4} maxLength={8} size={10}></input>
    )
}

export function Age(){
    return(
        <input type="number" ></input>
    )
}

export function Email(){
    return(
        <input type="email" ></input>
    )
}

export function Number(){
    return(
        <input type="tel" 
        pattern="[0-9]"
        required
     
      ></input>
    )
}

export function Submit(){
    return(
       <input type="submit" ></input>
    )
}

export function Upload(){
    return(
       <input type="file" accept=".jpeg" ></input>
    )
}

export function Items(){
    return(
        <ul>
            <li> Enter your name : <Input/></li>
            <li> Enter password : <Pswd/></li>
            <li> Enter your Age : <Age/></li>
            <li> Enter email : <Email/></li>
            <li> Enter number: <Number/></li>
            <li> <Submit/></li>

            <li><Upload></Upload></li>
            
        </ul>
    )
}


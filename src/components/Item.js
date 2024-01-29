import { useState } from "react";

export default function Item({ item: i }) {

    const [ item, setItem ] = useState(i)

    return (
        <tr>
            <td><input type="checkbox" checked={item.status === "done" ? true : false}/></td>
            <td>{item.task}</td>
            <td>{item.due}</td>
            <td></td>
        </tr>
    )
}
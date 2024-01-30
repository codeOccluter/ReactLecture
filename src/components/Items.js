import { useState, useEffect } from "react";
import Item from "./Item"

export default function Items({ endpoint = "" }) {

    const [data, setData] = useState([])

    useEffect(() => {
      fetch(`http://localhost:3001/items${endpoint}`)
          .then((res) => {
              return res.json()
          })
          .then((json_response) => {
              setData(json_response)
          })
    });

    return (
        <table>
            <tr>
                <td></td>
                <td>task</td>
                <td>due</td>
                <td></td>
            </tr>
            {data.map(
                (item) => {
                    return <Item item={item} />
                }
            )}
        </table>
    )
}
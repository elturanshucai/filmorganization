import React from "react"
import ListPage from "../pages/ListPage/ListPage"
import {
    Switch,
    Route
} from "react-router-dom"
import { Link } from "react-router-dom"
function List(){
    return (
        <nav>
            <Link to='/list' target='_blank'>Siyahıya keç</Link>
            <Switch>
                <Route path="/list"> <ListPage/> </Route>
            </Switch>
        </nav>
    )
}
export default List;
import CreateMovie from "./CreateMovie";
import View from "./View";
import classes from './Movie.module.css';
import {json,redirect} from 'react-router-dom'

const Movie=()=>{
    return <div className={classes.Movie}>
        <CreateMovie/>
        <View/>
        </div>
}
export default Movie;

export const movieCreateAction=({request,params})=>{
    const formData=request.formData();
    if(formData.get('data')){
        return redirect('/admin')
    }
    else{
        return json({message:formData.message},{status:500})
    }
}

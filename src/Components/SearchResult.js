
import React, { useContext, useEffect } from "react";
import RecipeContext from "../Context/RecipeContext";
import { useParams } from 'react-router-dom'
export default function SearchResult(props) {
  const context = useContext(RecipeContext)
  const {recipe,NameRecipe,Recipename} = context
  
  useEffect(()=>{
   
  },[])
  const name=useParams();
  console.log(name.name)
  return (
    <div>

    </div>
  )
}

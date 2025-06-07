import React, { useState, useEffect } from "react"
import cls from "./HomePage.module.css";
import {QuestionCard} from "../../components/QuestionCard";
import { API_URL } from "../../constants";




export const HomePage = () => {

  const [questions, setQuestions] = useState([]);

  const getQuestions =  async () => {
    try {
        const response = await fetch (`${API_URL}/react`);
        const questions = await response.json();

        setQuestions(questions);

        console.log("questions", questions)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

   return (
    <>
  
      {questions.map((card, index) => {
        return    <QuestionCard card={card} key={index} />

        
    })}


    </>
   )

}
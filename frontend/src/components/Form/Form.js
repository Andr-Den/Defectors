import React from "react";
import { useForm } from "react-hook-form";

export  default function Form({addCompany}) {
  const [name, setName] = React.useState('')
  const [website, setWebsite] = React.useState('')
  const [date, setDate] = React.useState('')
  const { register } = useForm();

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleWebsiteChange(e) {
    setWebsite(e.target.value);
  }

  function handleDateChange(e) {
    setDate(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    addCompany({
      name,
      website,
      date
    });
  } 
   
  return (
    <form onSubmit={handleSubmit}>
      <input {...register("name")} placeholder="Имя" value={name || ''} onChange={handleNameChange}/>
      <input {...register("website")} placeholder="Ссылка" value={website || ''} onChange={handleWebsiteChange}/>
      <input {...register("date")} placeholder="Дата" value={date || ''} onChange={handleDateChange}/>
      <input type="submit" value="Добавить"/>
    </form>
  );
}

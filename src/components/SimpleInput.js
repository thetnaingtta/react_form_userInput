import { useEffect, useState } from "react";
import useInput  from "../hooks/use-input";

const SimpleInput = (props) => {
  const { value: enteredName, 
          isValid: enteredNameIsValid,
          hasError: nameInputHasError, 
          valueChangeHandler: nameChangedHandler, 
          inputBlurHandler: nameBlurHandler,
          reset: resetNameInput
        } = useInput(value => value.trim() !== '');

  // const [enteredName, setEnteredName] = useState("");  
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // // const [formIsValid, setFormIsValid] = useState(false);

  // const enteredNameIsValid = enteredName.trim() !== '';
  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid = enteredNameIsValid;

  // useEffect(() => {
  //   if (enteredNameIsValid){
  //     setFormIsValid(true);
  //   } else {
  //     setFormIsValid(false);
  //   }
  // }, [enteredNameIsValid]);

  // const nameInputChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  // };

  // const nameInputBlurHandler = event => {
  //   setEnteredNameTouched(true);
  // }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    // setEnteredNameTouched(true);

    if (!enteredNameIsValid) {      
      return;
    }    


    resetNameInput();
    console.log(enteredName);
    // setEnteredName('');
    // setEnteredNameTouched(false);
  };


  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input  type="text" id="name" 
        onChange={nameChangedHandler} 
        onBlur={nameBlurHandler}
        value={enteredName} />
        {nameInputHasError && <p className="error-text">Name must not be empty</p> }
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

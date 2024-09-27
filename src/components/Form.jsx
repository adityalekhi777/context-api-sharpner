import React,{useState} from 'react'
import './Form.css'
import { useContextHelper } from "../context/votes"


export default function Form() {
  const [isOpen, setIsOpen] = useState(false);

  const { list, dispatch } = useContextHelper(); // Access the state and dispatch function from context
  const [studentName, setStudentName] = useState('');
  const [selectedContender, setSelectedContender] = useState('');

  // Function to handle form submission (voting)
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Dispatch the VOTE action
    dispatch({
      type: 'VOTE',
      payload: {
        contenderName: selectedContender,
        voterName: studentName,
      },
    });

    // Clear the form and close modal (optional)
    setStudentName('');
    setSelectedContender('');
  };

  // Function to handle opening the modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <button onClick={openModal}>Add new Vote</button>
      
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Form Title</h2>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
          <label htmlFor="studentName">Student Name:</label>
          <input 
            type="text" 
            id="studentName" 
            value={studentName} 
            onChange={(e) => setStudentName(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="members">Choose a Contender:</label>
          <select 
            id="members" 
            value={selectedContender} 
            onChange={(e) => setSelectedContender(e.target.value)} 
            required
          >
            <option value="" disabled>Select a contender</option>
            {list.map((contender) => (
              <option key={contender.contenderName} value={contender.contenderName}>
                {contender.contenderName}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Vote</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

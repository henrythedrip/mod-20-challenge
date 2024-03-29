import React from 'react';
import {useState} from 'react';

const ContactPage = () => {
  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isMessageEmpty, setIsMessageEmpty] = useState(false);
  return (
    <div>
        <form action="submit" className='contact-form'>
            <input onBlur={e=>{
                if (e.target.value === '') {
                    console.log('name is empty')
                    setIsNameEmpty(true);
                } else {
                    setIsNameEmpty(false);
                }
            }} type="text" placeholder="Name" className={
                isNameEmpty ? 'empty-field' : ''
            } />
            <input onBlur={e=>{
                if (e.target.value === '' || !(/.*@.*/.test(e.target.value))) {
                    console.log('email is mandatory and must be a valid email address')
                    setIsEmailEmpty(true);
                } else {
                    setIsEmailEmpty(false);
                }
            }}
            type="text" placeholder="Email" className={isEmailEmpty ? 'empty-field' : "" }/>
            <input type="text" placeholder="Subject" />
            <textarea onBlur={e=>{
                if (e.target.value === '') {
                    console.log('name is empty')
                    setIsMessageEmpty(true);
                } else {
                    setIsMessageEmpty(false);
                }
            }} type="text" placeholder="Message" className={
                isMessageEmpty ? 'empty-field' : ''
            }></textarea>
            <input type="submit" value="Submit" />
        </form>
        <div className='contact-list'>
        <ul>henrythedrip's contact info</ul>
        <li>801-944-0080</li>
        <li>henrythomas123@gmail.com</li>
        <li>https://github.com/henrythedrip/</li>
        <li>https://www.linkedin.com/in/henrythomas801/</li>
        </div>
    </div>
  )
}

export default ContactPage
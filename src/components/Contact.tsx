import "../css/contact.css"
import Modal from 'react-modal';

const Contact = ({ contactFun }: { contactFun: (value: boolean) => void }) => {
  
    return (
     <Modal
      isOpen={true}  
     className="popup-content">
<section className="contact-container">
<div className="contact-content">
  <button className="contact-close-button" onClick={() => contactFun(false)}>
    Close
  </button>
  <h2 className="contact-title">Contact Us</h2>
  <p className="contact-subtitle">
    Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
  </p>
  <form action="#" className="contact-form space-y-8">
    <div>
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
        Your email
      </label>
      <input
        type="email"
        id="email"
        className="contact-input"
        placeholder="name@flowbite.com"
        required
      />
    </div>
    <div>
      <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">
        Subject
      </label>
      <input
        type="text"
        id="subject"
        className="contact-input"
        placeholder="Let us know how we can help you"
        required
      />
    </div>
    <div className="sm:col-span-2">
      <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
        Your message
      </label>
      <textarea
        id="message"
        className="contact-textarea"
        placeholder="Leave a comment..."
      ></textarea>
      </div>
      <button type="submit" className="contact-button">
        Send message
      </button>
      </form>
      </div>
    </section>
  </Modal>
);
  
}

export default Contact
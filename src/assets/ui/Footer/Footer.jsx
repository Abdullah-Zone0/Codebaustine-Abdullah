
function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
   
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" className="w-full p-2 border border-gray-300 rounded" />
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message" className="w-full p-2 border border-gray-300 rounded" rows="5"></textarea>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
      </form>
    );
  }
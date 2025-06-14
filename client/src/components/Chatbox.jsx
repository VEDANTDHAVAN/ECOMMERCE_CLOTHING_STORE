import { useState } from 'react';
import { sendChat } from '../services/api';

const Chatbox = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [lastProducts, setLastProducts] = useState([]);

  const handleSend = async () => {
    if (!message.trim()) return;
    const userMsg = { sender: 'user', text: message };
    setMessages(prev => [...prev, userMsg]);
    setMessage('');

    const lowerMsg = message.toLowerCase();
    const greetings = ['hi', 'hello', 'hey', 'yo', 'good morning', 'good evening'];
    if (greetings.some(greet => lowerMsg.startsWith(greet))) {
        setMessages(prev => [...prev, { sender: 'bot', text: 'Hello! What would you like to buy today?' }]);
        return;
    }
    if((lowerMsg.includes('show') || lowerMsg.includes('see') || lowerMsg.includes('display') && lowerMsg.includes('details'))){
      if(lastProducts.length > 0) {
        const productDetails = lastProducts.map(p => 
            `\n -> ${p.name} | ₹${p.price} | ${p.category} - ${p.subcategory} \n`
        ).join('');
        const productImages = lastProducts.map(p => (
            `<img src="${p.images?.[0] || ''}" alt="${p.name}" class="w-full rounded mt-1" />`
          )).join('');
        setMessages(prev => [...prev, 
            { sender: 'bot', text: `Here are the product details:${productDetails}`},
            ...lastProducts.map(p => ({
            sender: 'bot', image: p.images?.[0] || '', name: p.name
          }))  
        ]);
      } else {
        setMessages(prev => [...prev, { sender: 'bot', text: 'No previous products found to show details.' }]);
      } 
      return;
    }

    try {
      const res = await sendChat(message);
      /*const reply = res.products?.length > 0
        ? `Found ${res.products.length} products.`
        : res.message || 'No products found.';
      setMessages(prev => [...prev, { sender: 'bot', text: reply }]);*/
      if(res.products?.length > 0){
        setLastProducts(res.products);
        setMessages(prev => [...prev, { sender: 'bot', text: `Found ${res.products.length} products. Say \"show details\" to view them.`}]);
      } else {
        setMessages(prev => [...prev, { sender: 'bot', text: res.message || 'No products found.' }]);
        setLastProducts([]);
      }
    } catch (err) {
      setMessages(prev => [...prev, { sender: 'bot', text: 'Error fetching response.' }]);
    }
  };

  return (
    <div className="fixed z-50 bottom-4 right-4">
      {!open && (
        <button onClick={() => setOpen(true)} className="p-3 text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700">
          💬 Ask Chatbot
        </button>
      )}

      {open && (
        <div className="flex flex-col bg-white shadow-lg w-80 h-96 rounded-xl">
          <div className="flex items-center justify-between p-3 m-2 text-white bg-blue-600 rounded-t-xl">
            <span className='mr-10'><p className='font-bold text-white'>🤖 Sales Chatbot</p></span>
            <button className='ml-10 bg-red-400' onClick={() => setOpen(false)}>✖</button>
          </div>

          <div className="flex-1 p-2 space-y-2 overflow-y-auto">
            {messages.map((msg, idx) => (
              <div key={idx} className={`text-sm p-2 rounded-lg max-w-xs ${msg.sender === 'user' ? 'bg-gray-200 self-end ml-0' : 'bg-blue-100 self-start mr-0'}`}>
                {msg.image ? (
                 <a href={msg.image}><img src={msg.image} alt={msg.name} className="w-8 h-8 rounded cursor-pointer" /></a> 
                ) : (
                  msg.text
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 p-2 border-t">
            <input
              type="text"
              value={message}
              onChange={e => setMessage(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="Ask something..."
              className="flex-1 p-2 border rounded"
            />
            <button onClick={handleSend} className="px-3 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;

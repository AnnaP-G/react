const Mailbox = ({ username, messages, unreadMessages }) => {
  return (
    // <>
    //   Умовний рендер - це приклад, якщо умова (зліва) true,
    //   то виконається права сторона виразу, тобто р відрендериться
      
    //   <p>Hello {username}</p>
    //   {messages.length > 0 && <p>You have {messages.length} unread messages</p>}
    // </>

      // Якщо умова приводиться до true, рендериться повідомлення після ?,
//           інакше - повідомлення після :. Тут будуть рендеритись різні повідомлення,
//           в залежності від довжини масиву
//     <div>
//       <p>Hello {username}</p>
//       <p>
//         {unreadMessages.length > 0
//           ? `You have ${unreadMessages.length} unread messages`
//           : "No unread messages"}
//       </p>
//     </div>
    //   );
      
    //     Якщо за умови треба відрендерити різну розмітку, робимо те саме, 
    //       але результатом виразу буде JSXю
    //   <div>
    //       <p>Hello {username}</p>
    //       {messages.length > 0 ? (
    //           <div>
    //               <p>You have {messages.length} unread messages</p>
    //               <MessageList messages={messages} />
    //           </div>
    //       ) : (
    //           <p>No unread messages</p>
    //       )}
    //   </div>
};

export default Mailbox;

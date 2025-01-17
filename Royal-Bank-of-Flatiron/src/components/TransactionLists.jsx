function TransactionsList({ transactions }) {
    return (
      <div className="mt-1 mx-4">
        <table className="min-w-full border border-gray-300 shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Description</th>
              <th className="py-2 px-4 border-b">Category</th>
              <th className="py-2 px-4 border-b">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{transaction.date}</td>
                <td className="py-2 px-4 border-b">{transaction.description}</td>
                <td className="py-2 px-4 border-b">{transaction.category}</td>
                <td className="py-2 px-4 border-b">{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default TransactionsList;
  

// function TransactionsList({ transactions }) {
//     return (
//       <table className=" border py-4 px-3 shadow-md mx-4">
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Description</th>
//             <th>Category</th>
//             <th>Amount</th>
//           </tr>
//         </thead>
//         <tbody>
//           {transactions.map((transaction) => (
//             <tr key={transaction.id}>
//               <td>{transaction.date}</td>
//               <td>{transaction.description}</td>
//               <td>{transaction.category}</td>
//               <td>{transaction.amount}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   }
  
//   export default TransactionsList;
  
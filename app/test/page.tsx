// "use client";

// import React, { useState, useEffect } from "react";

// export default function Page() {
//   const [delegates, setDelegates] = useState<any>(null);
//   const [duplicateDelegates, setDuplicateDelegates] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [showDuplicates, setShowDuplicates] = useState(false);

//   useEffect(() => {
//     const fetchDelegates = async () => {
//       try {
//         const response = await fetch("/api/delegates");
//         const data = await response.json();
//         setDelegates(data);
//       } catch (error) {
//         console.error("Error fetching delegates:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDelegates();
//   }, []);

//   const findDuplicates = () => {
//     if (!delegates?.data?.data) return;

//     const allDelegates = delegates.data.data;

//     const emailCount: Record<string, number> = {};
//     allDelegates.forEach((delegate: any) => {
//       emailCount[delegate.email] = (emailCount[delegate.email] || 0) + 1;
//     });

//     const duplicates = allDelegates.filter(
//       (delegate: any) => emailCount[delegate.email] > 1
//     );

//     setDuplicateDelegates(duplicates);
//     setShowDuplicates(true);
//   };

//   if (loading) {
//     return (
//       <div className="w-full h-screen flex justify-center items-center text-white">
//         Loading...
//       </div>
//     );
//   }

//   const dataToShow = showDuplicates
//     ? duplicateDelegates
//     : delegates?.data?.data || [];

//   return (
//     <div className="w-full h-screen flex flex-col justify-center items-center text-white p-4">
//       <div className="mb-4">
//         <button
//           onClick={findDuplicates}
//           className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700"
//         >
//           Show Duplicates by Email
//         </button>
//         <button
//           onClick={() => setShowDuplicates(false)}
//           className="ml-4 px-4 py-2 rounded bg-gray-600 hover:bg-gray-700"
//         >
//           Show All Delegates
//         </button>
//       </div>

//       <div className="overflow-auto max-h-[80vh] w-full">
//         <table className="min-w-full table-auto text-sm text-left">
//           <thead className="bg-gray-700">
//             <tr>
//               <th className="p-2">SL</th>
//               <th className="p-2">Name</th>
//               <th className="p-2">Email</th>
//               <th className="p-2">Company</th>
//             </tr>
//           </thead>
//           <tbody>
//             {dataToShow.length > 0 ? (
//               dataToShow.map((delegate: any, index: number) => (
//                 <tr key={index} className="border-b border-gray-600">
//                   <td className="p-2">{index + 1}</td>
//                   <td className="p-2">{delegate?.firstName}</td>
//                   <td className="p-2">{delegate?.email}</td>
//                   <td className="p-2">{delegate?.companyName}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={3} className="p-2 text-center text-gray-400">
//                   No delegates found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}

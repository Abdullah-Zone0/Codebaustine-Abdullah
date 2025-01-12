import React from 'react'

const Frame4 = () => {
    const payments = [
        {
            email: "ibtisamahmed906+basic@gmail.com",
            amount: "",
            date: "Dec 30 2024",
            type: "Basic",
            method: "N/A",
            paidBy: "Paid By Admin"
        },
        {
            email: "ibtisamahmed906+basic@gmail.com",
            amount: "$10",
            date: "May 10 2023",
            type: "Basic",
            method: "N/A",
            paidBy: "Paid By Admin"
        }
    ]

    return (
        <div className="w-full p-6">
            <div className="w-full overflow-hidden rounded-lg bg-white shadow">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-black text-left">
                                <th className="whitespace-nowrap px-6 py-3 text-sm font-medium text-white">
                                    User Email
                                </th>
                                <th className="whitespace-nowrap px-6 py-3 text-sm font-medium text-white">
                                    Amount Paid $
                                </th>
                                <th className="whitespace-nowrap px-6 py-3 text-sm font-medium text-white">
                                    Date
                                </th>
                                <th className="whitespace-nowrap px-6 py-3 text-sm font-medium text-white">
                                    Type
                                </th>
                                <th className="whitespace-nowrap px-6 py-3 text-sm font-medium text-white">
                                    Method
                                </th>
                                <th className="whitespace-nowrap px-6 py-3 text-sm font-medium text-white">
                                    Paid By
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {payments.map((payment, index) => (
                                <tr
                                    key={index}
                                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                                >
                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                                        {payment.email}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                                        {payment.amount || "-"}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                                        {payment.date}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                                        {payment.type}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                                        {payment.method}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                                        {payment.paidBy}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}



export default Frame4
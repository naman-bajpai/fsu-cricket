import React from "react";
import Banner from "@/components/ui/banner";
import CSNavbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

export default function UpcomingEvents() {
    const events = [
        { name: "FSU Premier League", date: "Nov 9, 2024", location: "TBD", description: "First interstate cricket championship" },
    ];

    return (
        <div>
            <Banner />
            <CSNavbar />
            <div className="w-full h-full py-20 pt-[250px]">
                <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-400 font-sans">
                    Upcoming Events
                </h2>

                <div className="max-w-7xl mx-auto px-4 mt-10">
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto bg-white shadow-md rounded-3xl">
                            <thead>
                                <tr className="bg-red-950 text-white ">
                                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Event Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Location</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Description</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Apply</th>
                                </tr>
                            </thead>
                            <tbody>
                                {events.map((event, index) => (
                                    <tr key={index} className="bg-gray-100 border-b hover:bg-gray-200 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{event.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.date}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.location}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.description}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <button className="bg-green-600 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded transition" ><a href="/apply">Apply</a></button> </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
import React from "react";
import "./dashboard.css";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const pieData = [
  { name: "Bookings", value: 400 },
  { name: "Orders", value: 300 },
  { name: "Products", value: 300 },
];

const barData = [
  { name: "Jan", earnings: 1000 },
  { name: "Feb", earnings: 1200 },
  { name: "Mar", earnings: 1500 },
  { name: "Apr", earnings: 1100 },
  { name: "May", earnings: 1700 },
];

const vehicleUsageData = [
  { name: "Week 1", usage: 12 },
  { name: "Week 2", usage: 18 },
  { name: "Week 3", usage: 22 },
  { name: "Week 4", usage: 15 },
];

const COLORS = ["#6366f1", "#10b981", "#f59e0b"];

const ClientFeedback = () => {
  const testimonials = [
    "TKS Quarry Management has transformed our operations.",
    "Their efficiency and transparency are unmatched.",
    "We now track vehicles and inventory in real-time with ease.",
    "Customer support is always responsive and helpful.",
    "Thanks to TKS, we've improved delivery times and reduced costs."
  ];

  return (
    <section className="feedback-section">
      <h3>What Our Clients Say</h3>
      <div className="feedback-container">
        {testimonials.map((quote, index) => (
          <div className="feedback-card" key={index}>
            <p>"{quote}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default function Dashboard() {
  return (
    <div className="dashboard">
      <main className="main">
        <div className="header">Earnings & Operations Summary</div>

        <section className="charts">
          <div className="chart">
            <h3>Resource Distribution</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="chart">
            <h3>Monthly Earnings Trend</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="earnings" fill="#6366f1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="chart">
            <h3>Vehicle Usage</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={vehicleUsageData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="usage"
                  stroke="#10b981"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        <ClientFeedback />

        <section className="stats">
          <div className="card">
            <h3>Earnings (Products)</h3>
            <p>Rs.18,450</p>
          </div>
          <div className="card">
            <h3>Order Summary</h3>
            <p>1,523 Orders</p>
          </div>
          <div className="card">
            <h3>Total Orders</h3>
            <p>3,440</p>
          </div>
          <div className="card">
            <h3>New Bookings</h3>
            <p>245</p>
          </div>
          <div className="card">
            <h3>Vehicles</h3>
            <p>38</p>
          </div>
          <div className="card">
            <h3>Drivers</h3>
            <p>17</p>
          </div>
        </section>

        <section className="progress-section">
          <h3>Live Status</h3>
          <div className="progress-item">
            <label>Order Fulfillment</label>
            <div className="progress-bar">
              <div style={{ width: "75%" }} />
            </div>
          </div>
          <div className="progress-item">
            <label>Fleet Availability</label>
            <div className="progress-bar">
              <div style={{ width: "60%" }} />
            </div>
          </div>
        </section>

        <section className="map-section">
          <h3>Vehicle Locations</h3>
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            style={{ height: "300px", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[51.505, -0.09]}>
              <Popup>Truck #12</Popup>
            </Marker>
          </MapContainer>
        </section>

        <section className="activity">
          <h2>Recent Activity</h2>
          <ul>
            <li>📦 Order #2345 placed</li>
            <li>🛠️ Vehicle #12 assigned to Route B</li>
            <li>👤 Driver Emma added</li>
            <li>🔄 Booking #889 rescheduled</li>
            <li>💰 Product sales updated</li>
          </ul>
        </section>

        <section className="table-section">
          <h3>Top Products</h3>
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Orders</th>
                <th>Earnings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Granite</td>
                <td>120</td>
                <td>$12,000</td>
              </tr>
              <tr>
                <td>Limestone</td>
                <td>80</td>
                <td>$8,000</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

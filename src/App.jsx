import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import Map from "./components/Map";
import "./App.css";
import { statesData } from "./data";

const center = [39.82834298369938, -98.57947978926096];

export default function App() {
  return (
    <div className="App">
      <Map />
    </div>
  );
}
// export default function App() {
//   return (
//     <MapContainer
//       center={center}
//       zoom={10}
//       style={{ width: "100vw", height: "100vh" }}
//     >
//       <TileLayer
//         url={`https://api.maptiler.com/maps/outdoor-v2/style.json?key=${
//           import.meta.env.VITE_APIKEY
//         }.png`}
//         attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
//       />
//       {statesData.features.map((state) => {
//         const coordinates = state.geometry.coordinates[0].map(
//           (item) => [item[1], item[0]]
//         );

//         return (
//           <Polygon
//             pathOptions={{
//               fillColor: "#FD8D3C",
//               fillOpacity: 0.7,
//               weight: 2,
//               opacity: 1,
//               dashArray: 3,
//               color: "white",
//             }}
//             positions={coordinates}
//             eventHandlers={{
//               mouseover: (e) => {
//                 const layer = e.target;
//                 layer.setStyle({
//                   dashArray: "",
//                   fillColor: "#BD0026",
//                   fillOpacity: 0.7,
//                   weight: 2,
//                   opacity: 1,
//                   color: "white",
//                 });
//               },
//               mouseout: (e) => {
//                 const layer = e.target;
//                 layer.setStyle({
//                   fillOpacity: 0.7,
//                   weight: 2,
//                   dashArray: "3",
//                   color: "white",
//                   fillColor: "#FD8D3C",
//                 });
//               },
//               click: (e) => {},
//             }}
//           />
//         );
//       })}
//     </MapContainer>
//   );
// }

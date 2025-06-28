import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

// Country values and highlight markers
const data = [
  { country: "IND", value: 2000 },
  { country: "USA", value: 1500 },
  { country: "CHN", value: 1000 },
];

const valueByCountry = Object.fromEntries(
  data.map((d) => [d.country, d.value])
);

const highlightCountries = ["IND", "USA", "CHN"];

const countryMarkers = [
  { code: "IND", name: "India", coordinates: [78.9629, 20.5937] },
  { code: "USA", name: "USA", coordinates: [-95.7129, 37.0902] },
  { code: "CHN", name: "China", coordinates: [104.1954, 35.8617] },
];

export default function WorldMapPage() {
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-3xl font-bold text-[#3E3F5B] mb-6">
        OUR GLOBAL NETWORK
      </h2>
      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          <ComposableMap
            projectionConfig={{ scale: 160 }}
            style={{ width: "100%", height: "500px" }}
          >
            {/* DRAW COUNTRIES */}
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const iso = geo.properties.ISO_A3;
                  const isHighlighted = highlightCountries.includes(iso);
                  const value = valueByCountry[iso];

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={
                        isHighlighted
                          ? "#FFD700" // gold highlight
                          : value
                          ? "#AAB396" // green
                          : "#EAEAEC" // gray
                      }
                      stroke={isHighlighted ? "#B8860B" : "#D6D6DA"}
                      style={{
                        default: {
                          outline: "none",
                          filter: isHighlighted
                            ? "drop-shadow(0 0 10px #FFD700)"
                            : "none",
                          cursor: isHighlighted ? "pointer" : "default",
                        },
                        hover: {
                          fill: isHighlighted ? "#FFD700" : "#8AB2A6",
                          outline: "none",
                          filter: isHighlighted
                            ? "drop-shadow(0 0 14px #FFD700)"
                            : "none",
                        },
                        pressed: { outline: "none" },
                      }}
                    />
                  );
                })
              }
            </Geographies>

            {/* ADD MARKERS */}
            {countryMarkers.map(({ code, name, coordinates }) => (
              <Marker key={code} coordinates={coordinates}>
                <circle r={6} fill="#FFD700" stroke="#B8860B" strokeWidth={2} />
                <text
                  textAnchor="middle"
                  y={-10}
                  style={{
                    fontFamily: "system-ui",
                    fill: "#3E3F5B",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  {name}
                </text>
              </Marker>
            ))}
          </ComposableMap>
        </div>
      </div>
    </section>
  );
}
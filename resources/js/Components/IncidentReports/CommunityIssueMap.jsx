import React, { useState } from 'react';
import { Map, Marker } from 'pigeon-maps';

export default function CommunityIssueMap() {
    
    const defaultCenter = [11.2032, 124.9976];
    const defaultZoom = 15.5;

    const [center, setCenter] = useState(defaultCenter);
    const [zoom, setZoom] = useState(defaultZoom);
    const [markerCoord, setMarkerCoord] = useState([11.2032, 124.9976]);

    const handleMapClick = ({ latLng }) => {
        setMarkerCoord(latLng);
    };

    return (
        <div className="bg-white border border-gray-200/80 p-6 shadow-xs flex flex-col justify-between h-full">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semi-bold text-gray-900">Community Issue Map</h2>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-600">
                    <span className="text-[11px] text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        Selected: {markerCoord[0].toFixed(4)}, {markerCoord[1].toFixed(4)}
                    </span>
                </div>
            </div>
            
            <div className="rounded-lg border border-gray-200 overflow-hidden relative bg-slate-100" style={{ height: '360px', width: '100%' }}>
                <Map 
                    center={center} 
                    zoom={zoom} 
                    onBoundsChanged={({ center, zoom }) => { 
                        setCenter(center); 
                        setZoom(zoom); 
                    }}
                    onClick={handleMapClick}
                >
                    <Marker width={30} anchor={markerCoord} color="#dc2626" />
                </Map>
            </div>
            <p className="text-[11px] text-gray-400 mt-2 font-medium">Click anywhere on the map to pin the exact incident location.</p>
        </div>
    );
}
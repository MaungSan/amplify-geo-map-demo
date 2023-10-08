import { MapView } from "@aws-amplify/ui-react-geo";
import "./App.css";
import { Hikes, StandardCard } from "./ui-components";
import { listHikes } from "./graphql/queries";
import { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { Marker, Popup } from "react-map-gl";
import { withAuthenticator } from "@aws-amplify/ui-react";
function MarkerWithPopup({ hike, latitude, longitude }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleMarkerClick = (e) => {
    e.originalEvent.stopPropagation();
    setShowPopup(true);
  };
  return (
    <>
      <Marker
        latitude={hike.lat}
        longitude={hike.long}
        key={hike.id}
        onClick={handleMarkerClick}
      />
      {showPopup && (
        <Popup
          latitude={latitude}
          longitude={longitude}
          offset={{ bottom: [0, -40] }}
          onClose={() => setShowPopup(false)}
          maxWidth="95%"
          closeOnMove
        >
          <StandardCard hike={hike}></StandardCard>
        </Popup>
      )}
    </>
  );
}
function App() {
  const [hikes, setHikes] = useState([]);
  const pageSize = 6;
  const variables = {
    limit: pageSize,
  };
  useEffect(() => {
    const getHikes = async () => {
      const result = (
        await API.graphql({
          query: listHikes,
          variables,
        })
      ).data.listHikes;
      setHikes(result.items);
    };
    getHikes();
  }, []);
  return (
    <>
      <MapView
        initialViewState={{
          latitude: 39.113014,
          longitude: -105.358887,
          zoom: 7,
        }}
      >
        {hikes.map((hike) => (
          <MarkerWithPopup
            latitude={hike.lat}
            longitude={hike.long}
            hike={hike}
            key={hike.id}
          />
        ))}
      </MapView>
    </>
  );
}

export default withAuthenticator(App);
